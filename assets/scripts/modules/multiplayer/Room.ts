import protos from "../../protos/proto.js";
import { RoomMap } from "../map/RoomMap";
import { PlayerPawn } from "../player/PlayerPawn";

export class Room {
    // public players: Map<string, PlayerPawn> = new Map();
    // public playerNodes: Map<string, Node> = new Map();

    public syncRealtimeContent(serverTime: number, realtimeContent: protos.IRealtimeContent)
    {
        // 同步玩家數據 
        if(!RoomMap.instance){
            return
        }
        RoomMap.instance.syncPlayersData(serverTime, realtimeContent.players || []);
    }

}