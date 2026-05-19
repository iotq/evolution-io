import {
  _decorator,
  Component,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Food")
export class Food extends Component {
  public id: number = -1;

}
