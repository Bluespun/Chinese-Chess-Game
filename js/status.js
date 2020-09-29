const config =  {
    color:['#55f','#f00'],
    firstStart:1,
}

const chessObj = {}

function ishave(x,y){
    for(let o of Object.values(chessObj)){
        if(!o.isDeath && o.x === x && o.y === y) return true;
    }
    return false;
}

export { config, chessObj, ishave }

