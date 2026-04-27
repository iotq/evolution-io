import {
  _decorator,
  Component,
  EventKeyboard,
  EventMouse,
  Input,
  input,
  KeyCode,
  Node,
  UITransform,
  Vec3,
} from "cc";
import { PlayerPawn } from "./PlayerPawn";
import protos from "../../protos/proto.js";
import { GameManager } from "../../game/GameManager";
const { ccclass, property } = _decorator;

@ccclass("PlayerController")
export class PlayerController extends Component {
  @property
  moveSpeed: number = 200;

  private _moveDir: Vec3 = new Vec3(0, 0, 0);
  private _targetPos: Vec3 | null = null;

  private _pendingInput: Vec3[] = [];
  private started: boolean = false;
  private sendPosTimer = 0.1;
  private lastSyncTimestamp: number = 0;

  onEnable() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
  }

  onDisable() {
    input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
  }
  update(dt: number) {
    if (!this.started) return;
    const pos = this.node.position.clone();

    const movement: Vec3 = new Vec3();

    // move on keyboard
    if (this._moveDir.lengthSqr() > 0) {
      const dir = this._moveDir.normalize();
      movement.x = dir.x * this.moveSpeed * dt;
      movement.y = dir.y * this.moveSpeed * dt;
    } else if (this._targetPos) {
      // move on mouse
      const dir = this._targetPos.clone().subtract(pos);
      const dist = dir.length();

      if (dist < 5) {
        this._targetPos = null; // 到達目標
      } else {
        dir.normalize();
        movement.x = dir.x * this.moveSpeed * dt;
        movement.y = dir.y * this.moveSpeed * dt;
      }
    }
    this._pendingInput.push(movement);

    pos.x += movement.x;
    pos.y += movement.y;
    const pawn = this.getComponent("PlayerPawn") as PlayerPawn;
    pawn.updatePosition(pos);

    if (this.sendPosTimer > 0) {
      this.sendPosTimer -= dt;
    } else {
      this.sendPosTimer = 0.1;
      GameManager.instance.wsClient?.sendPlayerPos(pos);
      this._pendingInput.splice(0, this._pendingInput.length);
    }
  }

  public syncFromServer(data: protos.IPlayerContent) {
    if (!this.started) {
      this.started = true;
    }
    const x = data.x || 0;
    const y = data.y || 0;
    const pos = new Vec3(x, y);
    const movement: Vec3 = new Vec3();
    for (const m of this._pendingInput) {
      movement.x += m.x;
      movement.y += m.y;
    }
    pos.x += movement.x;
    pos.y += movement.y;
    const pawn = this.getComponent("PlayerPawn") as PlayerPawn;
    pawn.updatePosition(pos);
  }

  onMouseDown(event: EventMouse) {
    const uiPos = event.getUILocation();
    const localPos = new Vec3();
    this.node
      .parent!.getComponent(UITransform)!
      .convertToNodeSpaceAR(new Vec3(uiPos.x, uiPos.y, 0), localPos);
    this._targetPos = localPos;
  }

  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.KEY_W:
      case KeyCode.ARROW_UP:
        this._moveDir.y = 1;
        break;
      case KeyCode.KEY_S:
      case KeyCode.ARROW_DOWN:
        this._moveDir.y = -1;
        break;
      case KeyCode.KEY_A:
      case KeyCode.ARROW_LEFT:
        this._moveDir.x = -1;
        break;
      case KeyCode.KEY_D:
      case KeyCode.ARROW_RIGHT:
        this._moveDir.x = 1;
        break;
    }
  }

  onKeyUp(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.KEY_W:
      case KeyCode.ARROW_UP:
      case KeyCode.KEY_S:
      case KeyCode.ARROW_DOWN:
        this._moveDir.y = 0;
        break;
      case KeyCode.KEY_A:
      case KeyCode.ARROW_LEFT:
      case KeyCode.KEY_D:
      case KeyCode.ARROW_RIGHT:
        this._moveDir.x = 0;
        break;
    }
  }
}
