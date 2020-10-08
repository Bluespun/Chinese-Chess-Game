import { Chess } from './Chess.js'
import { isStop, config } from './status.js'

export class Pao extends Chess {
    constructor (parent, fang, size, diraction) {
        super(parent, fang, size);
        this.name = '炮';
        const zb = [{ l: [1, 2], r: [7, 2] }, { l: [1, 7], r: [7, 7] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
        this.chessName = this.name + fang + '-' + diraction;
        super.rander();
    }
    move (x, y) {
        const is_stop = this.x === x && isStop(y, this.y, x, false) > 0 || this.y === y && isStop(x, this.x, y, true) > 0;
        const is_stop_eat = this.x === x && isStop(y, this.y, x, false) === 1 || this.y === y && isStop(x, this.x, y, true) === 1;
        const notXY = this.x !== x && this.y !== y;
        if (this.isEat(x, y)) {
            if(!notXY && is_stop_eat){
                config.beEatObj.sacrifice();
                super.move(x, y);
            }
        } else {
            if (notXY || is_stop) console.log('规则不正确');
            else super.move(x, y);
        }
    }

}



