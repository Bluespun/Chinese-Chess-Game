import { Chess } from './Chess.js'
import { ishave } from './status.js'

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
        const { abs } = Math,{ computeXY:c } = this,
              disX = x - this.x, disY = y - this.y,
              //判断象腿是否憋住了
              isBieX = disX > 0 && disY > 0 && ishave(x - c(1), y - c(1)) || disX < 0 && disY > 0 && ishave(x + c(1), y - c(1)), 
              isBieY = disX < 0 && disY < 0 && ishave(x + c(1), y + c(1)) || disX > 0 && disY < 0 && ishave(x - c(1), y + c(1)),
              isBie = isBieX || isBieY;
        if (abs(disX) !== c(2) || abs(disY) !== c(2) || this.y > c(4) && y < c(5) || this.y < c(5) && y > c(4) || isBie)
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