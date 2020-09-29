import { Chess } from './Chess.js'

class Xiang extends Chess {
    constructor(parent, fang, size, diraction) {
        super(parent, fang, size);
        const arr = ['象','相'];
        this.name = arr[fang];
        const zb = [{ l: [2, 0], r: [6, 0] }, { l: [2, 9], r: [6, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
        this.chessName = this.name + fang + '-' + diraction;
        super.rander();
    }
    move(x, y) {
        const { computeXY:c } = this;
        if (Math.abs(x - this.x) !== c(2) || Math.abs(y - this.y) !== c(2) || this.y > c(4) && y < c(5) || this.y < c(5) && y > c(4))
            console.log('规则不正确');
        else{
            [this.x, this.y] = [x, y];
            this.chessEle.style.left = this.x + 8 + 'px';
            this.chessEle.style.top = this.y + 8 + 'px';
            this.chessEle.classList.remove('active');
        }
    }
}

export { Xiang };