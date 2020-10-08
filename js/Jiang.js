import { Chess } from './Chess.js'
import { arrReverse, config, isJiang, isStop } from './status.js'

export class Jiang extends Chess {
    constructor(parent, fang, size) {
        super(parent, fang, size);
        const arr = ['将', '帅'], zb = [[4, 0], [4, 9]];
        this.name = arrReverse(arr)[fang];
        this.x = zb[fang][0] * size;
        this.y = zb[fang][1] * size;
        this.chessName = this.name + fang;
        super.rander();
    }
    move(x, y) {
        const { computeXY:c } = this,
              { abs } = Math,
              [disX, disY] = [abs(x - this.x), abs(y - this.y)];

        if(isJiang(x,y) && this.x === x && isStop(y,this.y,x,false) < 1){
            config.beEatObj.sacrifice();
            super.move(x,y);
        }else if (disX > c(1) || disY > c(1) || disX === disY || (x < c(3) || x > c(5)) || y > c(2) && y < c(7)){
            console.log('规则不正确');
        }else{
            if(super.isEat(x,y)) config.beEatObj.sacrifice();
            super.move(x,y);
        }
    }
}




