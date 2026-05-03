import { GameManager } from "../../game/GameManager";
import protos from "../../protos/proto.js";
import { RoomMap } from "../map/RoomMap";

export class Room {

    public playerInfo: Map<number, protos.IPlayerFullInfo> = new Map();
    public playersRealtime: Map<number, protos.IPlayerContent> = new Map();

    public syncRoomSnapshot(serverTime: number, roomSnapshot: protos.IRoomSnapshot) {
        this.playersRealtime.clear();
        this.playerInfo.clear();

        for (const player of roomSnapshot.players || []) {
            if(!player.shortId) continue;
            if(player.id === GameManager.instance.playerId){
                GameManager.instance.shortId = player.shortId;
            }
            const id = player.shortId;
            this.playerInfo.set(id, player);
            this.playersRealtime.set(id, {
                shortId: player.shortId,
                x: player.x,
                y: player.y,
                rotation: player.rotation,
                hp: player.hp,
            });
        }

        this.updatePlayers(serverTime);
    }
    
    public syncRealtimeContent(serverTime: number, realtimeContent: protos.IRealtimeContent)
    {
        if(!RoomMap.instance){
            return
        }

        for (const playerContent of realtimeContent.players || []) {
            if(!playerContent.shortId) continue;
            const id = playerContent.shortId;
            if(this.playersRealtime.has(id)){
                const existingContent = this.playersRealtime.get(id)!;
                existingContent.x = playerContent.x ?? existingContent.x;
                existingContent.y = playerContent.y ?? existingContent.y;
                existingContent.rotation = playerContent.rotation ?? existingContent.rotation;
                existingContent.hp = playerContent.hp ?? existingContent.hp;
            } else {
                this.playersRealtime.set(id, playerContent);
            }
        }
        
        this.updatePlayers(serverTime);
    }

    public updatePlayers(serverTime: number)
    {
        RoomMap.instance.syncPlayersData(serverTime, Array.from(this.playersRealtime.values()));
    }

}