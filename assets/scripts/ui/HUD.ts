import { _decorator, Component, Label, Node } from 'cc';
import { GameManager } from '../game/GameManager';
const { ccclass, property } = _decorator;

@ccclass('HUD')
export class HUD extends Component {

    @property(Label)
    public massValueLabel: Label = null!;
    

    update(deltaTime: number) {

        const playerData = GameManager.instance.getCurrentPlayerData();
        if(!playerData || !playerData.mass) return;
        
        this.massValueLabel.string = playerData.mass.toString();
        
    }
}


