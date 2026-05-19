import {
  _decorator,
  CircleCollider2D,
  Component,
  EventKeyboard,
  EventMouse,
  Input,
  input,
  KeyCode,
  Node,
  RigidBody2D,
  UITransform,
  Vec2,
  Vec3,
} from "cc";
import { PlayerPawn } from "./PlayerPawn";
import protos from "../../protos/proto.js";
import { GameManager } from "../../game/GameManager";
import { RoomMap } from "../map/RoomMap";
const { ccclass, property } = _decorator;

@ccclass("PlayerController")
export class PlayerController extends Component {
  @property
  moveSpeed: number = 300;

  private rigidbody: RigidBody2D | null = null;

  private _mouseMoveDir: Vec3 = new Vec3(0, 0, 0);

  private _pendingInput: Vec3[] = [];
  private started: boolean = false;
  private sendPosTimer = 0.1;
  private isMouseDown = false;

  private keyPressed: Record<number, boolean> = {};

  protected start(): void {
    this.rigidbody = this.getComponent(RigidBody2D);
  }

  onEnable() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
    input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
  }

  onDisable() {
    input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
    input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
  }
  update(dt: number) {
    if (!this.started) return;
    const pos = this.node.position.clone();

    const movement: Vec3 = new Vec3();

    // 根據當前移動方向計算移動增量
    if (this.isMouseDown) {
      const dir = this._mouseMoveDir.normalize();
      movement.x = dir.x * this.moveSpeed * dt;
      movement.y = dir.y * this.moveSpeed * dt;
    } else {
      const dir = this.getKeyboardMove();
      movement.x = dir.x * this.moveSpeed * dt;
      movement.y = dir.y * this.moveSpeed * dt;
    }

    this.rigidbody!.linearVelocity = Vec2.ZERO;
    if (movement.lengthSqr() == 0) return;

    pos.x += movement.x;
    pos.y += movement.y;
    if (this.isOutOfBoundary(pos)) {
      return; // 超出邊界則不移動
    }
    this._pendingInput.push(movement);
    this.rigidbody!.linearVelocity = movement.toVec2();

    const pawn = this.getComponent(PlayerPawn)!;
    const rotation = Math.atan2(movement.y, movement.x) * (180 / Math.PI) - 90;
    pawn.node.setRotationFromEuler(0, 0, rotation);

    if (this.sendPosTimer > 0) {
      this.sendPosTimer -= dt;
    } else {
      this.sendPosTimer = 0.1;
      GameManager.instance.wsClient?.sendPlayerPos(pos, rotation);
      this._pendingInput.splice(0, this._pendingInput.length);
    }
  }

  private isOutOfBoundary(targetPos: Vec3): boolean {
    const worldPos: Vec3 = new Vec3();
    Vec3.add(worldPos, this.node.parent!.worldPosition, targetPos);
    const playerPos = new Vec3(worldPos);
    const boundary: CircleCollider2D = RoomMap.instance.mapBoundary!;
    const center = new Vec3(boundary.node.worldPosition);
    const dir = playerPos.subtract(center);
    const dist = dir.length();
    return dist > boundary.radius;
  }

  public syncFromServer(data: protos.IPlayerContent) {
    if (!this.started) {
      this.started = true;
      GameManager.instance.cameraController!.target = this.node;
    }
    const x = data.x || 0;
    const y = data.y || 0;
    const rotation = data.rotation || 0;
    const pos = new Vec3(x, y);
    const movement: Vec3 = new Vec3();
    for (const m of this._pendingInput) {
      movement.x += m.x;
      movement.y += m.y;
    }
    pos.x += movement.x;
    pos.y += movement.y;
    const pawn = this.getComponent(PlayerPawn)!;
    pawn.updatePosition(pos);
    pawn.node.setRotationFromEuler(0, 0, rotation);
  }

  onMouseDown(event: EventMouse) {
    this.isMouseDown = true;
  }

  onMouseUp(event: EventMouse) {
    this.isMouseDown = false;
  }

  onMouseMove(event: EventMouse) {
    const mouseScreenPos = event.getLocation();
    const mouseWorldPos: Vec3 = new Vec3();
    GameManager.instance.cameraController!.camera!.screenToWorld(
      new Vec3(mouseScreenPos.x, mouseScreenPos.y, 0),
      mouseWorldPos,
    );
    mouseWorldPos.z = 0;
    // 計算鼠標相對玩家方向
    Vec3.subtract(this._mouseMoveDir, mouseWorldPos, this.node.worldPosition);
  }

  onKeyDown(event: EventKeyboard) {
    this.keyPressed[event.keyCode] = true;
  }

  onKeyUp(event: EventKeyboard) {
    this.keyPressed[event.keyCode] = false;
  }

  private getKeyboardMove(): Vec2 {
    let move = new Vec2(0, 0);

    if (this.keyPressed[KeyCode.KEY_W]) move.y += 1;
    if (this.keyPressed[KeyCode.KEY_S]) move.y -= 1;
    if (this.keyPressed[KeyCode.KEY_A]) move.x -= 1;
    if (this.keyPressed[KeyCode.KEY_D]) move.x += 1;

    return move.normalize();
  }
}
