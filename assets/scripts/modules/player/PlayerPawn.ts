import {
  _decorator,
  CircleCollider2D,
  Component,
  math,
  Node,
  sp,
  Sprite,
  Vec3,
} from "cc";
import protos from "../../protos/proto.js";
import { PlayerController } from "./PlayerController";
import { GameManager } from "../../game/GameManager";
import { RoomMap } from "../map/RoomMap";
const { ccclass, property } = _decorator;

type Snapshot = {
  time: number;
  pos: Vec3;
  rotation?: number;
};

const INTERPOLATION_DELAY = 0.1; // 100ms 延遲渲染

@ccclass("PlayerPawn")
export class PlayerPawn extends Component {
  public id: string = "";
  public playerName: string = "";
  public shortId: number = 0;
  public hp: number = 0;
  public mass: number = 1;
  public isDead: boolean = false;
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
      // 緩動插值, 讓角色移動更平滑
      const interpolatedPos = this.node
        .getPosition()
        .lerp(latestSnapshot.pos, 0.3);
      this.node.setPosition(interpolatedPos);
      this.node.setRotationFromEuler(0, 0, latestSnapshot.rotation || 0);
    }

    const radius = Math.sqrt(this.mass / Math.PI);
    this.node.setScale(new Vec3(radius, radius, radius));
    if(this.isDead){
      this.node.active = false;
    }
  }

  public syncPlayerContent(serverTime: number, data: protos.IPlayerContent) {
    this.mass = data.mass || 1;
    this.isDead = !!data.isDead;
    const currentPlayer = this.getComponent(PlayerController);
    if (currentPlayer) {
      currentPlayer.syncFromServer(data);
    } else {
      this.snapshotBuffer.push({
        time: serverTime,
        pos: new Vec3(data.x || 0, data.y || 0, 0),
        rotation: data.rotation || 0,
      });
      if (this.snapshotBuffer.length > 10) {
        this.snapshotBuffer.shift();
      }
    }
  }

  public updatePosition(pos: Vec3) {
    this.node.setPosition(pos);
  }

  public setTexture(index: number) {
    const imgs = GameManager.instance.config.characterImages;
    const targetImg = imgs[index % imgs.length];
    const sprite = this.node.getComponent(Sprite)!;
    if (index >= 2) {
      sprite.color = math.Color.RED;
    }
    sprite.spriteFrame = targetImg;
  }
}
