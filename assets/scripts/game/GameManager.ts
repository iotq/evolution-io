import {
  _decorator,
  CCInteger,
  Component,
  instantiate,
  Label,
  math,
  Node,
  Prefab,
  Vec3,
} from "cc";
import { WebSocketClient } from "../core/net/WebSocketClient";
import { Room } from "../modules/multiplayer/Room";
import protos from "../protos/proto.js";

const { ccclass, property } = _decorator;

@ccclass("GameManager")
export class GameManager extends Component {
  private static _instance: GameManager;
  public currentRoom: Room | null = null;
  public playerId: string = "";
  public wsClient: WebSocketClient | null = null;

  public static get instance() {
    return this._instance;
  }

  public start() {
    GameManager._instance = this;
    this.wsClient = new WebSocketClient();
    this.wsClient.startAutoConnecting();
  }

  public onPlayerLogin(id: string) {
    this.playerId = id;
  }

  public syncRoom(serverPacket: protos.IServerPacket) {
    if (this.currentRoom == null) {
      this.currentRoom = new Room();
    }

    if (!!serverPacket.realtime) {
      this.currentRoom.syncRealtimeContent(
        (serverPacket.timestamp as number) || 0,
        serverPacket.realtime,
      );
    }
  }
}
