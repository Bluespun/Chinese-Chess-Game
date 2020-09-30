import { Board } from './Board.js'
import { gameConfig } from './views.js'

const box = document.getElementsByClassName('box')[0],
        startBtn = document.getElementsByClassName('startBtn')[0],
        resetBtn = document.getElementsByClassName('resetBtn')[0],

        board = new Board(box);

box.onclick = board.coordinate;

let isStart = false;

function startGame(){
    if(!isStart){
        gameConfig(board.start.bind(board));
        isStart = true;
        disabledState();
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

startBtn.onclick = startGame;
disabledState();
resetBtn.onclick = resetGame;
