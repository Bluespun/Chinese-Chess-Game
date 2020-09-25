type team = 0 | 1
type move = void | boolean
type dira = 'l' | 'r'

class Chess {
    width: number = 50
    height: number = 50
    radius: string = '50%'
    constructor() { }
}

class Ma extends Chess {
    name: string = '马'
    x: number
    y: number
    isDeath: boolean = false
    fang: team
    constructor(fang: team, size: number, diraction: dira) {
        super();
        this.fang = fang;

        const zb = [{ l: [1, 0], r: [7, 0] }, { l: [1, 9], r: [7, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
    }

    move(x: number, y: number): move {
        if (Math.abs(x - this.x) > 2 || Math.abs(y - this.y) > 2 || x - this.x === y - this.y) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }

}

class Pao extends Chess {
    name: string = '炮'
    x: number
    y: number
    isDeath: boolean = false
    fang: team
    constructor(fang: team, size: number, diraction: dira) {
        super();
        this.fang = fang;
        
        const zb = [{ l: [1, 2], r: [7, 2] }, { l: [1, 7], r: [7, 7] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
    }

    move(x: number, y: number): move {
        if (this.x !== x && this.y !== y) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }
}

class Che extends Chess {
    name: string = '车'
    x: number
    y: number
    isDeath: boolean = false
    fang: team
    constructor(fang: team, size: number, diraction: dira) {
        super();
        this.fang = fang
        
        const zb = [{ l: [0, 0], r: [8, 0] }, { l: [0, 9], r: [8, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
    }

    move(x: number, y: number): move {
        if (this.x !== x && this.y !== y) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }

}

class Xiang extends Chess {
    name: string = '象'
    x: number
    y: number
    isDeath: boolean = false
    fang: team
    constructor(fang: team, size: number, diraction: dira) {
        super();
        this.fang = fang;
        
        const zb = [{ l: [2, 0], r: [6, 0] }, { l: [2, 9], r: [6, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
    }

    move(x: number, y: number): move {
        if (Math.abs(x - this.x) !== 2 || Math.abs(y - this.y) !== 2) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }
}

class Shi extends Chess {
    name: string = '士'
    x: number
    y: number
    isDeath: boolean = false
    fang: team
    constructor(fang: team, size: number, diraction: dira) {
        super();
        this.fang = fang;
        
        const zb = [{ l: [3, 0], r: [5, 0] }, { l: [3, 9], r: [5, 9] }];
        this.x = zb[fang][diraction][0] * size;
        this.y = zb[fang][diraction][1] * size;
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
    x: number
    y: number
    isDeath: boolean = false
    fang: team
    constructor(fang: team, size: number) {
        super();
        const arr: string[] = ['将', '帅'];
        this.fang = fang;
        this.name = arr[fang];
        
        const zb = [[4,0],[4,9]];
        this.x = zb[fang][0] * size;
        this.y = zb[fang][1] * size;
    }

    move(x: number, y: number): move {
        if (this.x !== x && this.y !== y || Math.abs(this.x - x) !== 1 || Math.abs(this.y - y) !== 1) console.log('规则不正确');
        else[this.x, this.y] = [x, y];
    }
}

class Bing extends Chess {
    name: string
    x: number
    y: number
    isDeath: boolean = false
    fang: team
    constructor(fang: team, size: number,x:number) {
        super();
        this.fang = fang;
        const arr: string[] = ['卒', '兵'];
        this.name = arr[fang];
        
        const zb = [3,6];
        this.x = x * size;
        this.y = zb[fang] * size;
    }

    move(x: number, y: number): move {
        if (Math.abs(this.x - x) !== 1) console.log('姿势不正确!!!');
        else this.x = x;
    }
}


export { Ma, Pao, Bing, Che, Shi, Jiang, Xiang }