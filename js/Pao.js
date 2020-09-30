import { Chess } from './Chess.js'
import { isStop } from './status.js'

class Pao extends Chess {
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
        if (this.x !== x && this.y !== y || is_stop)
            console.log('规则不正确');
        else {
            [this.x, this.y] = [x, y];
            this.chessEle.style.left = this.x + 8 + 'px';
            this.chessEle.style.top = this.y + 8 + 'px';
            this.chessEle.classList.remove('active');
        }
    }
}

export { Pao };