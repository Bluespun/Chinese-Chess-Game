import { Chess } from './Chess.js'
import { arrReverse, config } from './status.js'

export class Bing extends Chess {
    constructor(parent, fang, size, x) {
        super(parent, fang, size);
        const arr = ['卒', '兵'];
        this.name = arrReverse(arr)[fang];
        const zb = [3, 6];
        this.x = x * size;
        this.y = zb[fang] * size;
        this.startY = this.y;
        this.chessName = this.name + fang + '-' + (x / 2 + 1);
        super.rander();
    }
    move(x, y) {
        const { computeXY:c, startY } = this,
              { abs } = Math,
              xx = x !== this.x,
              rule1 = y > this.y || xx && this.y > c(4),
              rule2 = y < this.y || xx && this.y < c(5),
              [disX, disY] = [abs(x - this.x), abs(y - this.y)];
        if (startY > c(4) && rule1 || startY < c(5) && rule2 || disY > c(1) || disX > c(1) || disY === disX)
            console.log('姿势不正确!!!');
        else{
            if(super.isEat(x,y)) config.beEatObj.sacrifice();
            super.move(x,y);
        }
    }
}

