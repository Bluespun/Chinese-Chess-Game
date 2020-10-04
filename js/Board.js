import { Ma } from './Ma.js'
import { Pao } from './Pao.js'
import { Bing } from './Bing.js'
import { Che } from './Che.js'
import { Shi } from './Shi.js'
import { Jiang } from './Jiang.js'
import { Xiang } from './Xiang.js'
import { chessObj } from './status.js'

export class Board {

    constructor(parent, color = '#333') {
        const cvs = document.createElement('canvas'),
            { width, height } = window.getComputedStyle(parent, null),
            [boardW, boardH] = [parseInt(width), parseInt(height)];

        this.size = boardW / 8;

        [cvs.width, cvs.height] = [boardW, boardH];

        parent.appendChild(cvs);
        this.parent = parent;

        const ctx = cvs.getContext('2d');
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.strokeRect(0, 0, boardW, boardH);
        this.ctx = ctx;
        this.init();
    }

    start() {
        const dira = ['l', 'r'];
        for (let i = 0; i < 2; i++) {
            for (let o of dira) {
                const ma = new Ma(this.parent, i, this.size, o),
                    pao = new Pao(this.parent, i, this.size, o),
                    che = new Che(this.parent, i, this.size, o),
                    xiang = new Xiang(this.parent, i, this.size, o),
                    shi = new Shi(this.parent, i, this.size, o);

                chessObj[ma.chessName] = ma;
                chessObj[pao.chessName] = pao;
                chessObj[che.chessName] = che;
                chessObj[xiang.chessName] = xiang;
                chessObj[shi.chessName] = shi;
            }
            const jiang = new Jiang(this.parent, i, this.size);
            chessObj[jiang.chessName] = jiang;
            for (let j = 0; j <= 8; j += 2) {
                const bing = new Bing(this.parent, i, this.size, j);
                chessObj[bing.chessName] = bing;
            }
        }
    }

    reset() {
        const childs = this.parent.children;
        for (let i = childs.length - 1; i > 0; i--) this.parent.removeChild(childs[i]);
    }

    coordinate = ({ offsetX: x, offsetY: y }) => {
        console.log(x,y);
        this.zuobiao(x, y);
    }

    zuobiao(x, y) {
        const activeClass = this.parent.getElementsByClassName('active')[0];
        if (activeClass) {
            const dataName = activeClass.getAttribute('data-name');
            x = Math.round(x / this.size) * this.size;
            y = Math.round(y / this.size) * this.size;
            chessObj[dataName].move(x, y);
        }
    }

    init() {
        for (let i = 1; i < 8; i++) {
            this.column(0, 4, i);
            this.column(5, 9, i);
        }

        for (let i = 1; i < 9; i++) this.rows(0, 8, i);

        this.chaLine(3, 0);
        this.chaLine(3, 7);

        this.ctx.font = `${this.size / 70 * 30}px PingFangSC-Medium`;
        this.ctx.fillText('楚河', this.size * 1.1, this.size * 4.65);
        this.ctx.fillText('汉界', this.size * 6.1, this.size * 4.65);

        const jiaoArr = [
            [1, 2],
            [7, 2],
            [1, 7],
            [7, 7]
        ];
        for (let i = 0; i < jiaoArr.length; i++) {
            this.jiaoyin(...jiaoArr[i]);
        }

        for (let i = 0; i <= 8; i += 2) {
            this.jiaoyin(i, 3);
            this.jiaoyin(i, 6);
        }
    }

    column(start, end, i) {
        this.ctx.beginPath();
        this.ctx.moveTo(i * this.size, start * this.size);
        this.ctx.lineTo(i * this.size, end * this.size);
        this.ctx.stroke();
    }

    rows(start, end, i) {
        this.ctx.beginPath();
        this.ctx.moveTo(start * this.size, i * this.size);
        this.ctx.lineTo(end * this.size, i * this.size);
        this.ctx.stroke();
    }

    chaLine(x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x * this.size, y * this.size);
        this.ctx.lineTo((x + 2) * this.size, (y + 2) * this.size);
        this.ctx.lineTo(x * this.size, (y + 2) * this.size);
        this.ctx.lineTo((x + 2) * this.size, y * this.size);
        this.ctx.stroke();
    }

    jiaoyin(x, y) {
        const [s, b] = [.1, .3];
        this.ctx.beginPath();
        this.ctx.moveTo((x - s) * this.size, (y - b) * this.size);
        this.ctx.lineTo((x - s) * this.size, (y - s) * this.size);
        this.ctx.lineTo((x - b) * this.size, (y - s) * this.size);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo((x + s) * this.size, (y - b) * this.size);
        this.ctx.lineTo((x + s) * this.size, (y - s) * this.size);
        this.ctx.lineTo((x + b) * this.size, (y - s) * this.size);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo((x - s) * this.size, (y + b) * this.size);
        this.ctx.lineTo((x - s) * this.size, (y + s) * this.size);
        this.ctx.lineTo((x - b) * this.size, (y + s) * this.size);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo((x + s) * this.size, (y + b) * this.size);
        this.ctx.lineTo((x + s) * this.size, (y + s) * this.size);
        this.ctx.lineTo((x + b) * this.size, (y + s) * this.size);
        this.ctx.stroke();
    }
}






