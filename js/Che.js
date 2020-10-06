import { Chess } from './Chess.js'
import { isStop, config } from './status.js'

export class Che extends Chess {
    constructor(parent, fang, size, diraction) {
        super(parent, fang, size);
        this.name = '车';
        const zb = [{ l: [0, 0], r: [8, 0] }, { l: [0, 9], r: [8, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
        this.chessName = this.name + fang + '-' + diraction;
        super.rander();
    }
    move(x, y) {
        const is_stop = this.x === x && isStop(y,this.y,x,false) > 0 || this.y === y && isStop(x,this.x,y,true) > 0;
        if (this.x !== x && this.y !== y || is_stop)
            console.log('规则不正确');
        else{
            if(super.isEat(x,y)) config.beEatObj.sacrifice();
            super.move(x,y);
        }
    }
}

