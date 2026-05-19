import { GameManager } from "../../game/GameManager";
import protos from "../../protos/proto.js";
import { RoomMap } from "../map/RoomMap";

export class Room {
  public playerInfos: Map<number, protos.IPlayerFullInfo> = new Map();
  public playersRealtimes: Map<number, protos.IPlayerContent> = new Map();
  public foodInfos: Map<number, protos.IFoodContent> = new Map();

  public started: boolean = false;

  public syncRoomSnapshot(
    serverTime: number,
    roomSnapshot: protos.IRoomSnapshot,
  ) {
    this.playersRealtimes.clear();
    this.playerInfos.clear();

    for (const player of roomSnapshot.players || []) {
      if (!player.shortId) continue;
      if (player.id === GameManager.instance.playerId) {
        GameManager.instance.shortId = player.shortId;
      }
      const id = player.shortId;
      this.playerInfos.set(id, player);
      this.playersRealtimes.set(id, {
        shortId: player.shortId,
        x: player.x,
        y: player.y,
        rotation: player.rotation,
        hp: player.hp,
        mass: player.mass,
        isDead: player.isDead,
      });
    }
    this.foodInfos.clear();
    for(const food of roomSnapshot.foods || [])
    {
      if(!food.id || food.isDead) continue;
      this.foodInfos.set(food.id, food);
    }

    this.updatePlayers(serverTime);
    this.updateFoods();
    this.started = true;
  }

  public syncRealtimeContent(
    serverTime: number,
    realtimeContent: protos.IRealtimeContent,
  ) {
    if (!RoomMap.instance) {
      return;
    }

    for (const playerContent of realtimeContent.players || []) {
      if (!playerContent.shortId) continue;
      const id = playerContent.shortId;
      if (this.playersRealtimes.has(id)) {
        const existingContent = this.playersRealtimes.get(id)!;
        existingContent.x = playerContent.x ?? existingContent.x;
        existingContent.y = playerContent.y ?? existingContent.y;
        existingContent.rotation =
          playerContent.rotation ?? existingContent.rotation;
        existingContent.hp = playerContent.hp ?? existingContent.hp;
        existingContent.mass = playerContent.mass ?? existingContent.mass;
        existingContent.isDead = playerContent.isDead || existingContent.isDead;
      } else {
        this.playersRealtimes.set(id, playerContent);
      }
      this.playerInfos.set(id, {
        ...this.playerInfos.get(id),
        ...playerContent,
      });
    }

    for(const foodContent of realtimeContent.foods || [])
    {
      if(!foodContent.id) continue;
      if(!this.foodInfos.has(foodContent.id)){
        if(!foodContent.isDead)
        {
          this.foodInfos.set(foodContent.id, foodContent);
        }
      }else {
        if(foodContent.isDead){
          this.foodInfos.delete(foodContent.id);
        }
      }
    }

    this.updatePlayers(serverTime);
    this.updateFoods();
  }

  public updatePlayers(serverTime: number) {
    RoomMap.instance.syncPlayersData(
      serverTime,
      Array.from(this.playersRealtimes.values()),
    );
  }

  public updateFoods()
  {
    RoomMap.instance.syncFoodsData(Array.from(this.foodInfos.values()));
  }
}
