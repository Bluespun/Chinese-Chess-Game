const creat = document.createElement.bind(document);
let start;
function gameConfig (call) {
    const mask = creat('div');
    mask.className = 'mask';
    start = call;
    box(mask);
    document.body.appendChild(mask);
}

function box (parent) {
    const box = creat('div');
    box.className = 'formbox';
    confirmBtn(box);
    parent.appendChild(box);
}

function confirmBtn (parent) {
    const confirmBtn = creat('button');
    confirmBtn.className = 'confirmBtn';
    confirmBtn.textContent = '确定';
    parent.appendChild(confirmBtn);
    confirmBtn.onclick = function () {
        document.body.removeChild(document.getElementsByClassName('mask')[0]);
        start();
    }
}

export { gameConfig }