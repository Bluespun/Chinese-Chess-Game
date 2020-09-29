import { Chess } from './Chess.js'

class Bing extends Chess {
    constructor(parent, fang, size, x) {
        super(parent, fang, size);
        const arr = ['卒', '兵'];
        this.name = arr[fang];
        const zb = [3, 6];
        this.x = x * size;
        this.y = zb[fang] * size;
        this.chessName = this.name + fang + '-' + (x / 2 + 1);
        super.rander();
    }
    move(x, y) {
        const { computeXY:c } = this,
              { abs } = Math,
              [disX, disY] = [abs(x - this.x), abs(y - this.y)];
        if (this.y > c(4) && y > this.y || this.y < c(5) && y < this.y || disY > c(1) || disX > c(1) || disY === disX)
            console.log('姿势不正确!!!');
        else{
            [this.x, this.y] = [x, y];
            this.chessEle.style.left = this.x + 8 + 'px';
            this.chessEle.style.top = this.y + 8 + 'px';
            this.chessEle.classList.remove('active');
        }
    }
}

export { Bing };