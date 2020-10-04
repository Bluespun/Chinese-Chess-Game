import { arrReverse, config } from './status.js'
export class Chess {
    constructor(parent, fang, size) {
        const lunc = 50;            //棋子的宽高
        this.width = lunc;
        this.height = lunc;
        this.size = size;
        this.fang = fang;
        this.parent = parent;      //父级元素
        this.isDeath = false;       //是否死亡
    }
    rander() {
        const colors = ['#55f', '#f00'], p = 8;
        this.chessEle = document.createElement('div');
        this.chessEle.className = 'chess-ele';
        this.chessEle.style.width = this.width + 'px';
        this.chessEle.style.height = this.height + 'px';
        this.chessEle.style.left = this.x + p + 'px';
        this.chessEle.style.top = this.y + p + 'px';
        this.chessEle.style.background = arrReverse(colors)[this.fang];
        this.chessEle.textContent = this.name;
        this.chessEle.setAttribute('data-name', this.chessName);
        this.chessEle.setAttribute('data-fang', arrReverse(['blue', 'red'])[this.fang]);
        this.chessEle.onclick = this.select;
        this.parent.appendChild(this.chessEle);
    }

    select = e => {
        e.stopPropagation();
        const activeClass = this.parent.getElementsByClassName('active')[0],
        target = e.target;
        if(target.getAttribute('data-fang') === config.selectfang){
            if (!target.classList.contains('active')) {
                if (activeClass) activeClass.classList.remove('active');
                target.classList.add('active');
            }
        }

    }

    sacrifice() {
        this.isDeath = true;
        this.chessEle.style.display = 'none';
    }

    move(){
        config.selectfang = config.selectfang === 'red' ? 'blue' : 'red';
    }

    computeXY = num => this.size * num
}


