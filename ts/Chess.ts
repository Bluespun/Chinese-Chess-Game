type team = 0 | 1
type move = void | boolean

class Chess {
    width: number = 80
    height: number = 80
    radius: string = '50%'
    constructor () { }
}

class Ma extends Chess {
    name: string = '马'
    x: number = 1
    y: number = 0
    isDeath: boolean = false
    fang: team
    constructor (fang: team) {
        super();
        this.fang = fang;
    }

    move(x: number, y: number): move {
        if (Math.abs(x - this.x) > 2 || Math.abs(y - this.y) > 2 || x - this.x === y - this.y) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }

}

class Pao extends Chess {
    name: string = '炮'
    x: number = 1
    y: number = 2
    isDeath: boolean = false
    fang: team
    constructor (fang: team) {
        super();
        this.fang = fang;
    }

    move(x: number, y: number): move {
        if (this.x !== x && this.y !== y) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }
}

class Che extends Chess {
    name: string = '车'
    x: number = 0
    y: number = 0
    isDeath: boolean = false
    fang: team
    constructor (fang: team) {
        super();
        this.fang = fang
    }

    move(x: number, y: number): move {
        if (this.x !== x && this.y !== y) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }

}

class Xiang extends Chess {
    name: string = '象'
    x: number = 2
    y: number = 0
    isDeath: boolean = false
    fang: team
    constructor (fang: team) {
        super();
        this.fang = fang;
    }

    move(x: number, y: number): move {
        if (Math.abs(x - this.x) !== 2 || Math.abs(y - this.y) !== 2) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }
}

class Shi extends Chess {
    name: string = '士'
    x: number = 3
    y: number = 0
    isDeath: boolean = false
    fang: team
    constructor (fang: team) {
        super();
        this.fang = fang;
    }

    move(x: number, y: number): move {
        const { abs } = Math;
        const [disX, disY] = [abs(x - this.x), abs(y - this.y)];
        if (disX !== 1 || disY !== 1 || x < 3 || x > 5 || y > 2 && y < 7) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }
}

class Jiang extends Chess {
    name: string
    x: number = 4
    y: number = 0
    isDeath: boolean = false
    fang: team
    constructor (fang: team) {
        super();
        const arr:string[] = ['将','帅'];
        this.fang = fang;
        this.name = arr[fang];
    }

    move(x: number, y: number): move {
        if (this.x !== x && this.y !== y || Math.abs(this.x - x) !== 1 || Math.abs(this.y - y) !== 1) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }
}

class Bing extends Chess{
    name: string = '兵'
    x: number = 0
    y: number = 3
    isDeath: boolean = false
    fang: team
    constructor (fang: team) {
        super();
        this.fang = fang;
    }
}