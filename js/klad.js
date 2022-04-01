const cell = document.querySelectorAll('.game__item'),
      difficultInput = document.querySelectorAll('.difficult__item');


let difficult, loseCount, bombsCount;



difficultInput.forEach(elem => {
        elem.addEventListener('click', (e) => {
         difficult = e.target.getAttribute('bomb-count');
          document.querySelector('.difficult').style.display = 'none';
          bombsCount = difficult;
          loseCount = (bombsCount / 2);
          createBombs();
          
     });
});

function getRandomCell() {
    return Math.round(Math.random() * 24);
}
function createKlad(){
    const item = cell[getRandomCell()];
    item.classList.add('cell-win');
    if (!item.classList.contains('cell-lose')){
        item.addEventListener('click', (e) => {
            e.target.classList.add('active__class-win');
            youWin();
        });
    }
}

function createBombs(){
    while(difficult > 0){
        const item = cell[getRandomCell()];
        if (!item.classList.contains('cell-win') && !item.classList.contains('cell-lose')){
            difficult--;
            item.classList.add('cell-lose');
            item.addEventListener('click', () =>{
                if (!item.classList.contains('active__class-lose')){
                    loseCount--;
                }
                item.classList.add('active__class-lose');
                tryCount();
                createLose();
            });
        }
        
    }
    createKlad();
    createNeutralCell();
}
function createNeutralCell(){
    cell.forEach(item =>{
        if (!item.classList.contains('cell-win') && !item.classList.contains('cell-lose')){
            item.addEventListener('click', () => {
                item.classList.add('active__class-neutral');
            });
        }
    });
}

function createLose(){
    if (loseCount <= 0) {
        document.querySelector('.lose-window').style.display = 'flex';
        document.querySelector('.game-wrapper').style.pointerEvents = 'none';
    }
}
document.querySelector('.reloadPage').addEventListener('click', () =>{
    window.location.reload();
});
function youWin(){
    document.querySelector('.lose-window').style.display = 'flex';
    document.querySelector('.lose__title').textContent = 'Вы выйгрыли';
    document.querySelector('.game-wrapper').style.pointerEvents = 'none';
}

function tryCount(){
    document.querySelector('.tryCount').textContent = `Осталось попыток ${Math.round(loseCount)}`;
}



