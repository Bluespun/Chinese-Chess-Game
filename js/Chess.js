import { arrReverse, config, chessObj, setTime, isOver } from './status.js'
export class Chess {
    constructor (parent, fang, size) {
        const lunc = 60;            //棋子的宽高
        this.width = lunc;
        this.height = lunc;
        this.size = size;
        this.fang = fang;
        this.parent = parent;      //父级元素
        this.isDeath = false;       //是否死亡
    }
    rander () {
        const colors = ['#55f', '#f00'], p = 8;
        this.chessEle = document.createElement('div');
        this.chessEle.className = 'chess-ele';
        this.chessEle.style.width = this.width + 'px';
        this.chessEle.style.height = this.height + 'px';
        this.chessEle.style.left = this.x + p + 'px';
        this.chessEle.style.top = this.y + p + 'px';
        this.chessEle.style.marginLeft = -this.width / 2 + 'px';
        this.chessEle.style.marginTop = -this.width / 2 + 'px';
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
        if (target.getAttribute('data-fang') === config.playing) {
            if (!target.classList.contains('active')) {
                if (activeClass) activeClass.classList.remove('active', 'zindex');
                target.classList.add('active', 'zindex');
            }
        } else {
            const dataName = target.getAttribute('data-name');
            const { x, y } = chessObj[dataName];
            if (activeClass) {
                const activeDataName = activeClass.getAttribute('data-name');
                config.beEatObj = chessObj[dataName];
                chessObj[activeDataName].move(x, y);
            }
        }

    }

    sacrifice () {
        this.isDeath = true;
        setTime(() => this.chessEle.style.display = 'none');
    }

    move (x, y) {
        config.playing = config.playing === 'red' ? 'blue' : 'red';
        [this.x, this.y] = [x, y];
        this.chessEle.style.left = this.x + 8 + 'px';
        this.chessEle.style.top = this.y + 8 + 'px';
        this.chessEle.classList.remove('active');
        setTime(() => {
            this.chessEle.classList.remove('zindex')
            if(isOver()) alert('游戏结束');
        });

    }

    computeXY = num => this.size * num

    isEat (x, y) {
        for (let v of Object.values(chessObj)) {
            if (!v.isDeath && v.x === x && v.y === y) return true;
        }
        return false;
    }

    
}




