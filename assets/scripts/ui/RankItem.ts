import { _decorator, Component, Label, Sprite, SpriteFrame } from "cc";
const { ccclass, property } = _decorator;

@ccclass("RankItem")
export class RankItem extends Component {
  @property(Label)
  public rankLabel: Label = null!;
  @property(Label)
  public nameLabel: Label = null!;
  @property(Label)
  public scoreLabel: Label = null!;

  set(data: { rank: number; name: string; score: number }) {
    this.rankLabel.string = data.rank.toString();
    this.nameLabel.string = data.name;
    this.scoreLabel.string = data.score.toString();

    // 根據 data.rank 換顏色
    switch (data.rank) {
      case 1:
        this.rankLabel.color.fromHEX("#ffe58f");
        break;
      case 2:
        this.rankLabel.color.fromHEX("#f0f0f0");
        break;
      case 3:
        this.rankLabel.color.fromHEX("#ad4e00");
        break;
      default:
        this.rankLabel.color.fromHEX("#fafafa");
        break;
    }
  }
}
