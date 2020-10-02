import { Board } from './Board.js'
import { config, playTitle } from './status.js'

const getClass = document.getElementsByClassName.bind(document),
        box = getClass('box')[0],
        startBtn = getClass('startBtn')[0],
        resetBtn = getClass('resetBtn')[0],
        confirmBtn = getClass('confirmBtn')[0],
        mask = getClass('mask')[0],
        statusTitle = getClass('status')[0],

        selectFang = document.getElementsByName('selectfang'),
        firstFang = document.getElementsByName('firstfang'),

        board = new Board(box);

box.onclick = board.coordinate;   //点击棋盘获取坐标
confirmBtn.onclick = startGame;     //开始游戏



let isStart = false;

nodesClick(selectFang);
nodesClick(firstFang);

function nodesClick(node){
    for(let i = 0;i < node.length;i++){
        node[i].onclick = function(){
            config[this.name] = this.value;
        }
        if(node[i].checked){
            const name = node[i].name;
            config[name] = node[i].value;
        }
    }

}

function startGame(){
    if(!isStart){
        board.start();
        isStart = true;
        statusTitle.textContent = playTitle();
        disabledState();
        mask.classList.add('none');
    }
}

function resetGame(){
    if(isStart){
        const is = confirm('确定重新开始吗?');
        if(is){
            board.reset();
            isStart = false;
            disabledState();
        }
    }
}

function disabledState(){
    startBtn.disabled = isStart;
    resetBtn.disabled = !isStart;
}

startBtn.onclick = () => mask.classList.remove('none');
disabledState();
resetBtn.onclick = resetGame;
