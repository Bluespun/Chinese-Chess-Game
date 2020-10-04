let conf = {
    color: ['#55f', '#f00'],
    firstfang: '',  //0代表我方 1代表对方
    selectfang: '',      //我方颜色配置
    statusTitle:document.getElementsByClassName('status')[0],
}

let config = new Proxy(conf,{
    set(target,prop,val){
        if(prop === 'selectfang') toggleStatus();
        return Reflect.set(target,prop,val);
    },
    get(target,prop){
        return Reflect.get(target,prop);
    }
})

const chessObj = {}

/**
 * 判断棋子行走路线是否被其他棋子阻挡只用于马和象
 * @param {*} x 阻挡坐标x轴
 * @param {*} y 阻挡坐标y轴
 */
function ishave(x, y) {
    for (let o of Object.values(chessObj)) {
        if (!o.isDeath && o.x === x && o.y === y) return true;
    }
    return false;
}

function arrReverse(arr) {
    if (config.selectfang === 'blue') arr.push(arr.shift());
    return arr;
}

function playTitle() {
    const { firstfang, selectfang, statusTitle } = config,
          obj = { red: '红方行棋', blue: '蓝方行棋' };
    let   status = '';

    if (+firstfang) {
        toggleStatus();
    } else {
        status = obj[selectfang];
    }
    statusTitle.textContent = status;
}

function toggleStatus(){
    let { selectfang, statusTitle } = config;
    statusTitle.textContent = selectfang === 'red' ? '蓝方行棋' : '红方行棋';
}

/**
 * 判断棋子行走路线是否被其他棋子阻挡只用于车和炮
 * @param {*} point 鼠标点击的坐标(与将要行走的棋子不在同一条线的值)
 * @param {*} chess 当前要走的棋子坐标(与将要行走的棋子不在同一条线的值)
 * @param {*} linePoint 鼠标和棋子在同一条线上的坐标值
 * @param {*} isRow 鼠标和棋子在同一条线是否是横线
 */
function isStop(point, chess, linePoint, isRow) {
    const dis = point - chess, values = Object.values(chessObj);
    let num = 0;

    if (isRow) {
        if (dis > 0) {
            for (let o of values) if (o.y === linePoint && o.x > chess && o.x < point) num++;
        } else {
            for (let o of values) if (o.y === linePoint && o.x < chess && o.x > point) num++;
        }
    } else {
        if (dis > 0) {
            for (let o of values) if (o.x === linePoint && o.y > chess && o.y < point) num++;
        } else {
            for (let o of values) if (o.x === linePoint && o.y < chess && o.y > point) num++;
        }
    }

    return num;
}

export { config, chessObj, ishave, isStop, arrReverse, playTitle }

