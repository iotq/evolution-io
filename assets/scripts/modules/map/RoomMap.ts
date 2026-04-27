import { _decorator, Component, instantiate, Node, Prefab } from "cc";
import { PlayerPawn } from "../player/PlayerPawn";
import protos from "../../protos/proto.js";
import { GameManager } from "../../game/GameManager";
const { ccclass, property } = _decorator;

@ccclass("RoomMap")
export class RoomMap extends Component {
  @property({ type: Prefab })
  public playerPawnPrefab: Prefab | null = null;
  @property({ type: Node })
  public entityLayer: Node | null = null;

  private static _instance: RoomMap;

  public static get instance() {
    return this._instance;
  }

  start() {
    RoomMap._instance = this;
  }

  update(deltaTime: number) {

  }

  public syncPlayersData(serverTime: number, playerContents: protos.IPlayerContent[]) {
    if (!this.entityLayer) return;
    const currentPlayerData = playerContents.find(
      (p) => p.id === GameManager.instance.playerId,
    );

    const playersInMap = this.entityLayer.getComponentsInChildren(
      "PlayerPawn",
    ) as PlayerPawn[];

    let hasPlayerData = false;
    // 同步現有玩家數據，刪除不存在的玩家
    for (let i = playersInMap.length - 1; i >= 0; i--) {
      const p = playersInMap[i];
      if (p.node.getComponent("PlayerController")) {
        hasPlayerData = true;
      }
      const found = playerContents.find((pc) => pc.id === p.id);
      if (found) {
        p.syncPlayerContent(serverTime, found);
      } else {
        p.node.destroy();
        playersInMap.splice(i, 1);
      }
    }

    // 如果當前玩家數據不存在但有玩家數據，則創建當前玩家
    if (!hasPlayerData && currentPlayerData) {
      const pawn = this.createPlayerPawn(serverTime, currentPlayerData);
      pawn.node.addComponent("PlayerController");
      playersInMap.push(pawn);
    }
    // 添加新玩家
    for (const pc of playerContents) {
      if (playersInMap.some((p) => p.id === pc.id)) continue;
      this.createPlayerPawn(serverTime, pc);
    }
  }

  private createPlayerPawn(serverTime: number, playerContent: protos.IPlayerContent): PlayerPawn {
    const newPlayerNode = instantiate(this.playerPawnPrefab!);
    const playerPawn = newPlayerNode.getComponent("PlayerPawn") as PlayerPawn;
    playerPawn.id = playerContent.id || "";
    playerPawn.syncPlayerContent(serverTime, playerContent);
    this.entityLayer?.addChild(newPlayerNode);
    return playerPawn;
  }
}
