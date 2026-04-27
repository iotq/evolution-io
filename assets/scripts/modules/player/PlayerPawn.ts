import { _decorator, Component, Node, Vec3 } from "cc";
import protos from "../../protos/proto.js";
import { PlayerController } from "./PlayerController.js";
const { ccclass, property } = _decorator;

type Snapshot = {
  time: number;
  pos: Vec3;
};

const INTERPOLATION_DELAY = 0.1; // 100ms 延遲渲染

@ccclass("PlayerPawn")
export class PlayerPawn extends Component {
  public id: string = "";
  public hp: number = 0;

  private snapshotBuffer: Snapshot[] = [];

  start() {}

  update(deltaTime: number) {
    if (!this.getComponent("PlayerController")) {
      let latestSnapshot: Snapshot | null = null;

      for (const el of this.snapshotBuffer) {
        if (!latestSnapshot) {
          latestSnapshot = el;
        } else {
          if (el.time > latestSnapshot.time) {
            latestSnapshot = el;
          }
        }
      }

      if (!latestSnapshot) return;
      const interpolatedPos = this.node.getPosition().lerp(latestSnapshot.pos, 0.3);
      this.node.setPosition(interpolatedPos);
    }
  }

  public syncPlayerContent(serverTime: number, data: protos.IPlayerContent) {
    const currentPlayer = this.getComponent(
      "PlayerController",
    ) as PlayerController;
    if (currentPlayer) {
      currentPlayer.syncFromServer(data);
    } else {
      this.snapshotBuffer.push({
        time: serverTime,
        pos: new Vec3(data.x || 0, data.y || 0, 0),
      });
      if (this.snapshotBuffer.length > 10) {
        this.snapshotBuffer.shift();
      }
    }
  }

  public updatePosition(pos: Vec3) {
    this.node.setPosition(pos);
  }
}
