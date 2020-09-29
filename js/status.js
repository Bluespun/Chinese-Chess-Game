const config = {
    color: ['#55f', '#f00'],
    firstStart: 1,
}

const chessObj = {}


function ishave(x, y) {
    for (let o of Object.values(chessObj)) {
        if (!o.isDeath && o.x === x && o.y === y) return true;
    }
    return false;
}

/**
 * 
 * @param {*} point 鼠标点击的坐标(与将要行走的棋子不在同一条线的值)
 * @param {*} chess 当前要走的棋子坐标(与将要行走的棋子不在同一条线的值)
 * @param {*} linePoint 鼠标和棋子在同一条线上的坐标值
 * @param {*} isRow 鼠标和棋子在同一条线是否是横线
 */
function isStop(point,chess,linePoint,isRow){
    const dis = point - chess, values = Object.values(chessObj);
    let num = 0;

    if(isRow){
        if(dis > 0){
            for(let o of values) if(o.y === linePoint && o.x > chess && o.x < point) num++;
        }else{
            for(let o of values) if(o.y === linePoint && o.x < chess && o.x > point) num++;
        }
    }else{
        if(dis > 0){
            for(let o of values) if(o.x === linePoint && o.y > chess && o.y < point) num++;
        }else{
            for(let o of values) if(o.x === linePoint && o.y < chess && o.y > point) num++;
        }
    }

    return num;
}

export { config, chessObj, ishave, isStop }

