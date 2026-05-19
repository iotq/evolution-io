import { Vec3 } from "cc";
import { config } from "../../config";
import { GameManager } from "../../game/GameManager";
import protos from "../../protos/proto.js";

export class WebSocketClient {
  private socket: WebSocket | null = null;
  private logTimer: number = 0;
  private readonly logInterval: number = 1;

  private readonly retryConnectTimeout: number = 2000;

  public startAutoConnecting() {
    this.connect();
    setInterval(this.connect.bind(this), this.retryConnectTimeout);
  }

  public connect() {
    if (!this.isDisconnected()) {
      return;
    }
    console.log(`try connecting to wss://${config.GAMESERVER_URL}/ws`);

    this.socket = new WebSocket(`wss://${config.GAMESERVER_URL}/ws`);
    this.socket.binaryType = "arraybuffer";
    this.socket.onmessage = this.onMessageReceived.bind(this);
    this.socket.onclose = () => {
      this.socket = null;
    }
  }

  public disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  public isDisconnected(): boolean {
    if (!this.socket) return true;
    return (
      this.socket.readyState === WebSocket.CLOSED ||
      this.socket.readyState === WebSocket.CLOSING
    );
  }
  public isReady(): boolean {
    return this.socket?.readyState === WebSocket.OPEN;
  }

  private onMessageReceived(event: MessageEvent) {
    if (!(event.data instanceof ArrayBuffer)) return;

    try {
      const uint8Array = new Uint8Array(event.data);
      const message = protos.ServerPacket.decode(uint8Array);
      this.processMessage(message);
    } catch (error) {
      console.error("處理消息時出錯:", error);
      this.disconnect();
    }
  }

  private processMessage(message: protos.ServerPacket) {
    switch (message.content) {
      case "login":
        if (message.login?.playerId) {
          GameManager.instance.onPlayerLogin(message.login.playerId);
        }
        break;
      case "enter":
        break;
      case "realtime":
        if (message.realtime) {
          GameManager.instance.syncRoom(message);
        }
        break;
      case "roomSnapshot":
        if (message.roomSnapshot) {
          GameManager.instance.syncRoomSnapshot(message);
        }
        break;
      default:
        break;
    }

    if (this.logTimer > 0) {
      this.logTimer -= 1;
    } else {
      //console.log(message);
      this.logTimer = this.logInterval;
    }
  }

  public sendPlayerPos(data: Vec3, rotation: number = 0) {
    if (!this.isReady()) return;
    const packet = protos.ClientPacket.create({
      timestamp: Date.now(),
      move: {
        x: data.x,
        y: data.y,
        rotation: rotation,
      },
    });
    const buffer = protos.ClientPacket.encode(packet).finish();
    this.socket?.send(buffer);
  }
}
