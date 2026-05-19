import { _decorator, Component, Node } from 'cc';
import { GameManager } from '../game/GameManager';
const { ccclass, property } = _decorator;

@ccclass('StartScreen')
export class StartScreen extends Component {
    onStartButtonClick() {
        this.node.active = false;
        GameManager.instance.enterGame();
    }
}


