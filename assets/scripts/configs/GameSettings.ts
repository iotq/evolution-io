import { _decorator, Component, Node, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameSettings')
export class GameSettings{
    @property([SpriteFrame])
    characterImages: SpriteFrame[] = [];
}


