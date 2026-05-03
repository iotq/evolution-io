import { _decorator, Camera, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraController')
export class CameraController extends Component {
    
    @property({ type: Camera })
    public camera: Camera | null = null;
    public target: Node | null = null;

    private _pos = new Vec3();
    
    lateUpdate() {
        if (!this.target) return;

        this.target.getPosition(this._pos);
        this.node.setPosition(this._pos);
    }
}


