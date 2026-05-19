import { _decorator, CircleCollider2D, Component, instantiate, Node, Prefab, Vec3 } from "cc";
import { PlayerPawn } from "../player/PlayerPawn";
import protos from "../../protos/proto.js";
import { GameManager } from "../../game/GameManager";
import { PlayerController } from "../player/PlayerController";
import { Food } from "./Food";
const { ccclass, property } = _decorator;

@ccclass("RoomMap")
export class RoomMap extends Component {
  @property(Prefab)
  public playerPawnPrefab: Prefab | null = null;
  @property(Prefab)
  public foodPrefab: Prefab | null = null;
  @property(Node)
  public entityLayer: Node | null = null;
  @property(CircleCollider2D)
  public mapBoundary: CircleCollider2D | null = null;

  private static _instance: RoomMap;

  public static get instance() {
    return this._instance;
  }

  start() {
    RoomMap._instance = this;
  }

  update(deltaTime: number) {}

  public syncFoodsData(foodContents: protos.IFoodContent[])
  {

    if (!this.entityLayer) return;

    const foodsInMap = this.entityLayer.getComponentsInChildren(
      "Food",
    ) as Food[];

    // 同步現有數據，刪除不存在的食物
    for (let i = foodsInMap.length - 1; i >= 0; i--) {
      const p = foodsInMap[i];
      const found = foodContents.find((pc) => pc.id === p.id);
      if (!found) {
        p.node.destroy();
        foodsInMap.splice(i, 1);
      }
    }
    // 新增新的食物
    for (const f of foodContents) {
      if (foodsInMap.some((p) => p.id === f.id)) continue;
      const newFoodNode = instantiate(this.foodPrefab!);
      const foodScript = newFoodNode.getComponent("Food") as Food;
      foodScript.id = f.id!;
      this.entityLayer?.addChild(newFoodNode);
      newFoodNode.setPosition(new Vec3(f.x || 0, f.y || 0));
    }

  }

  public syncPlayersData(
    serverTime: number,
    playerContents: protos.IPlayerContent[],
  ) {
    if (!this.entityLayer) return;
    const currentPlayerData = playerContents.find(
      (p) => p.shortId === GameManager.instance.shortId,
    );

    const playersInMap = this.entityLayer.getComponentsInChildren<PlayerPawn>(
      "PlayerPawn",
    ) as PlayerPawn[];

    let hasPlayerData = false;
    // 同步現有玩家數據，刪除不存在的玩家
    for (let i = playersInMap.length - 1; i >= 0; i--) {
      const p = playersInMap[i];
      if (p.node.getComponent(PlayerController)) {
        hasPlayerData = true;
      }
      const found = playerContents.find((pc) => pc.shortId === p.shortId);
      if (found) {
        p.syncPlayerContent(serverTime, found);
      } else {
        p.node.destroy();
        playersInMap.splice(i, 1);
      }
    }

    // 如果當前玩家數據不存在但有玩家數據，則創建當前玩家
    if (!hasPlayerData && currentPlayerData) {
      const pawn = this.createPlayerPawn(currentPlayerData);
      pawn.node.addComponent(PlayerController);
      playersInMap.push(pawn);
      pawn.syncPlayerContent(serverTime, currentPlayerData);
    }
    // 添加新玩家
    for (const pc of playerContents) {
      if (playersInMap.some((p) => p.shortId === pc.shortId)) continue;
      const pawn = this.createPlayerPawn(pc);
      pawn.syncPlayerContent(serverTime, pc);
    }
  }

  private createPlayerPawn(playerContent: protos.IPlayerContent): PlayerPawn {
    const newPlayerNode = instantiate(this.playerPawnPrefab!);
    const playerPawn = newPlayerNode.getComponent("PlayerPawn") as PlayerPawn;
    playerPawn.shortId = playerContent.shortId || 0;
    const currentRoom = GameManager.instance.currentRoom;
    const playerInfo = currentRoom?.playerInfos.get(playerPawn.shortId);
    if(playerInfo)
    {
      playerPawn.id = playerInfo.id || "";
      playerPawn.playerName = playerInfo.name || "";
      playerPawn.setTexture(playerInfo.characterId || 0);
    }

    this.entityLayer?.addChild(newPlayerNode);
    return playerPawn;
  }
}
