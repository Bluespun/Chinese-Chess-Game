class Chess {
    constructor(parent, fang, size) {
        const lunc = 50;            //棋子的宽高
        this.width = lunc;
        this.height = lunc;
        this.size = size;
        this.fang = fang;     
        this.parent = parent;      //父级元素
        this.isDeath = false;       //是否死亡
    }
    rander(){
        const colors = ['#55f','#f00'];
        this.chessEle = document.createElement('div');
        this.chessEle.className = 'chess-ele';
        const p = 8;
        this.chessEle.style.width = this.width + 'px';
        this.chessEle.style.height = this.height + 'px';
        this.chessEle.style.left = this.x + p + 'px';
        this.chessEle.style.top = this.y + p + 'px';
        this.chessEle.textContent = this.name;
        this.chessEle.style.background = colors[this.fang];
        this.chessEle.setAttribute('data-name',this.chessName);
        this.chessEle.onclick = this.select;
        this.parent.appendChild(this.chessEle);
    }

    select(e){
        e.stopPropagation();
        const activeClass = document.getElementsByClassName('active')[0];
        if(!e.target.classList.contains('active')){
            if(activeClass) activeClass.classList.remove('active');
            e.target.classList.add('active');
        }
    }

    sacrifice(){
        this.isDeath = true;
        this.chessEle.style.display = 'none';
    }

    computeXY = num => this.size * num
}

export { Chess };
