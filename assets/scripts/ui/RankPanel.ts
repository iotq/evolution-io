import {
  _decorator,
  Component,
  instantiate,
  Label,
  Layout,
  Prefab,
  Sprite,
  SpriteFrame,
} from "cc";
import { RankItem } from "./RankItem";
import { GameManager } from "../game/GameManager";
const { ccclass, property } = _decorator;

@ccclass("RankPanel")
export class RankPanel extends Component {
  @property(Prefab)
  public itemPrefab: Prefab = null!;

  @property(Layout)
  public rankItemsContainer: Layout = null!;

  private _previousRanks: Array<{
    name: string;
    score: number;
  }> = [];

  protected update(dt: number): void {
      this.updateRankings();
  }
  
  public updateRankings() {
    const playerList = GameManager.instance.currentRoom?.playerInfos?.values();
    if (!playerList) return;

    let isDirty: boolean = false;

    const ranks: Array<{
      name: string;
      score: number;
    }> = [];
    let i = 0;
    for (const p of playerList) {
      ranks.push({
        name: p.name || "no name",
        score: p.mass || 0,
      });
      if (this._previousRanks.length > i) {
        if (
          p.name !== this._previousRanks[i].name ||
          p.mass !== this._previousRanks[i].score
        ) {
          isDirty = true;
        }
      }
      i++;
    }
    if (ranks.length != this._previousRanks.length) {
      isDirty = true;
    }
    if(!isDirty) return;

    const items: RankItem[] =
      this.rankItemsContainer.node.getComponentsInChildren(RankItem);

    const diff = ranks.length - items.length;
    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        const item = instantiate(this.itemPrefab);
        this.rankItemsContainer.node.addChild(item);
        items.push(item.getComponent(RankItem)!);
      }
    } else if (diff < 0) {
      for (let i = items.length - 1; i > items.length - 1 + diff; i--) {
        items[i].node.removeFromParent();
      }
      items.splice(items.length + diff, -diff);
    }

    ranks.sort((a, b) => a.score - b.score);

    for (let i = 0; i < ranks.length; i++) {
      const r = ranks[i];
      items[i].set({
        rank: i,
        name: r.name,
        score: r.score,
      });
    }
  }
}
