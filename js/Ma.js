import { Chess } from './Chess.js'

class Ma extends Chess {
    /**
     * 
     * @param {Element} parent 需要挂载的节点
     * @param {number} fang 设定该棋子归属方(0/1)
     * @param {number} size 棋盘格子的基本单位
     * @param {string|number} diraction 属于左边还是右边(如：左边马还是右边马)
     */
    constructor(parent, fang, size, diraction) {
        super(parent, fang, size);
        this.name = '马';
        const zb = [{ l: [1, 0], r: [7, 0] }, { l: [1, 9], r: [7, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
        this.chessName = this.name + fang + '-' + diraction;
        super.rander();
    }
    move(x, y) {
        const { abs } = Math;
        const { computeXY:c } = this;
        const disX = x - this.x, disY = y - this.y;
        if (abs(disX) > c(2) || abs(disY) > c(2) || abs(disX) === abs(disY) || x === this.x || y === this.y)
            console.log('规则不正确');
        else{
            [this.x, this.y] = [x, y];
            this.chessEle.style.left = this.x + 8 + 'px';
            this.chessEle.style.top = this.y + 8 + 'px';
            this.chessEle.classList.remove('active');
        }
            
    }
}

export { Ma };