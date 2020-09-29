class Chess {
    constructor(size) {
        const lunc = 50;
        this.width = lunc;
        this.height = lunc;
        this.size = size;
    }
    rander(parent,fang){
        const colors = ['#55f','#f00'];
        this.chessEle = document.createElement('div');
        this.chessEle.className = 'chess-ele';
        const p = 8;
        this.chessEle.style.width = this.width + 'px';
        this.chessEle.style.height = this.height + 'px';
        this.chessEle.style.left = this.x + p + 'px';
        this.chessEle.style.top = this.y + p + 'px';
        this.chessEle.textContent = this.name;
        this.chessEle.style.background = colors[fang];
        this.chessEle.setAttribute('data-name',this.chessName);
        this.chessEle.onclick = this.select;
        parent.appendChild(this.chessEle);
    }

    select(e){
        e.stopPropagation();
        const activeClass = document.getElementsByClassName('active')[0];
        if(!e.target.classList.contains('active')){
            if(activeClass) activeClass.classList.remove('active');
            e.target.classList.add('active');
        }
    }

    computeXY = num => this.size * num
}
class Ma extends Chess {
    constructor(parent,fang, size, diraction) {
        super(size);
        this.name = '马';
        this.isDeath = false;
        this.fang = fang;
        const zb = [{ l: [1, 0], r: [7, 0] }, { l: [1, 9], r: [7, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
        this.chessName = this.name + fang + '-' + diraction;
        super.rander(parent,fang);
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
class Pao extends Chess {
    constructor(parent,fang, size, diraction) {
        super(size);
        this.name = '炮';
        this.isDeath = false;
        this.fang = fang;
        const zb = [{ l: [1, 2], r: [7, 2] }, { l: [1, 7], r: [7, 7] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
        this.chessName = this.name + fang + '-' + diraction;
        super.rander(parent,fang);
    }
    move(x, y) {
        if (this.x !== x && this.y !== y)
            console.log('规则不正确');
        else{
            [this.x, this.y] = [x, y];
            this.chessEle.style.left = this.x + 8 + 'px';
            this.chessEle.style.top = this.y + 8 + 'px';
            this.chessEle.classList.remove('active');
        }
    }
}
class Che extends Chess {
    constructor(parent,fang, size, diraction) {
        super(size);
        this.name = '车';
        this.isDeath = false;
        this.fang = fang;
        const zb = [{ l: [0, 0], r: [8, 0] }, { l: [0, 9], r: [8, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
        this.chessName = this.name + fang + '-' + diraction;
        super.rander(parent,fang);
    }
    move(x, y) {
        if (this.x !== x && this.y !== y)
            console.log('规则不正确');
        else{
            [this.x, this.y] = [x, y];
            this.chessEle.style.left = this.x + 8 + 'px';
            this.chessEle.style.top = this.y + 8 + 'px';
            this.chessEle.classList.remove('active');
        }
    }
}
class Xiang extends Chess {
    constructor(parent,fang, size, diraction) {
        super(size);
        const arr = ['象','相'];
        this.name = arr[fang];
        this.isDeath = false;
        this.fang = fang;
        const zb = [{ l: [2, 0], r: [6, 0] }, { l: [2, 9], r: [6, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
        this.chessName = this.name + fang + '-' + diraction;
        super.rander(parent,fang);
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
        console.log(x - this.x,y - this.y);
    }
}
class Shi extends Chess {
    constructor(parent,fang, size, diraction) {
        super(size);
        const arr = ['士','仕'];
        this.name = arr[fang];
        this.isDeath = false;
        this.fang = fang;
        const zb = [{ l: [3, 0], r: [5, 0] }, { l: [3, 9], r: [5, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
        this.chessName = this.name + fang + '-' + diraction;
        super.rander(parent,fang);
    }
    move(x, y) {
        const { abs } = Math;
        const [disX, disY] = [abs(x - this.x), abs(y - this.y)];
        const { computeXY:c } = this;
        if (disX !== c(1) || disY !== c(1) || x < c(3) || x > c(5) || y > c(2) && y < c(7))
            console.log('规则不正确');
        else{
            [this.x, this.y] = [x, y];
            this.chessEle.style.left = this.x + 8 + 'px';
            this.chessEle.style.top = this.y + 8 + 'px';
            this.chessEle.classList.remove('active');
        }
    }
}
class Jiang extends Chess {
    constructor(parent,fang, size) {
        super(size);
        this.isDeath = false;
        const arr = ['将', '帅'];
        this.fang = fang;
        this.name = arr[fang];
        const zb = [[4, 0], [4, 9]];
        this.x = zb[fang][0] * size;
        this.y = zb[fang][1] * size;
        this.chessName = this.name + fang;
        super.rander(parent,fang);
    }
    move(x, y) {
        const { computeXY:c } = this;
        if (this.x !== x && this.y !== y || Math.abs(this.x - x) !== c(1) || Math.abs(this.y - y) !== c(1))
            console.log('规则不正确');
        else{
            [this.x, this.y] = [x, y];
            this.chessEle.style.left = this.x + 8 + 'px';
            this.chessEle.style.top = this.y + 8 + 'px';
            this.chessEle.classList.remove('active');
        }
        console.log(this.x - x,c(1));
    }
}
class Bing extends Chess {
    constructor(parent,fang, size, x) {
        super(size);
        this.isDeath = false;
        this.fang = fang;
        const arr = ['卒', '兵'];
        this.name = arr[fang];
        const zb = [3, 6];
        this.x = x * size;
        this.y = zb[fang] * size;
        this.chessName = this.name + fang + '-' + (x / 2 + 1);
        super.rander(parent,fang);
    }
    move(x, y) {
        if (Math.abs(this.x - x) !== 1)
            console.log('姿势不正确!!!');
        else{
            [this.x, this.y] = [x, y];
            this.chessEle.style.left = this.x + 8 + 'px';
            this.chessEle.style.top = this.y + 8 + 'px';
            this.chessEle.classList.remove('active');
        }
    }
}
export { Ma, Pao, Bing, Che, Shi, Jiang, Xiang };
