import { Chess } from './Chess.js'
import { arrReverse, config } from './status.js'

export class Shi extends Chess {
    constructor(parent, fang, size, diraction) {
        super(parent, fang, size);
        const arr = ['士','仕'];
        this.name = arrReverse(arr)[fang];
        const zb = [{ l: [3, 0], r: [5, 0] }, { l: [3, 9], r: [5, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
        this.chessName = this.name + fang + '-' + diraction;
        super.rander();
    }
    move(x, y) {
        const { abs } = Math;
        const [disX, disY] = [abs(x - this.x), abs(y - this.y)];
        const { computeXY:c } = this;
        if (disX !== c(1) || disY !== c(1) || (x < c(3) || x > c(5)) || y > c(2) && y < c(7))
            console.log('规则不正确');
        else{
            if(super.isEat(x,y)) config.beEatObj.sacrifice();
            super.move(x,y);
        }
    }
}

