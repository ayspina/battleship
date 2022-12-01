let board = [null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null];


/*----- constants -----*/
const ship1 = {
    location: board[shipChoice],
    sunk: false,
};

const ship2 = {
    location: board[shipChoice],
    sunk: false,
};

const ship3 = {
    location: board[shipChoice],
    sunk: false,
};

const ship4 = {
    location: board[shipChoice],
    sunk: false,
};

/*----- cached element references -----*/

const battlefield = document.querySelector('tbody');


const $buttonEl = $('button');
const $grinchShip1 = $('#grinch1');
const $grinchShip2 = $('#grinch2');
const $grinchShip3 = $('#grinch3');
const $grinchShip4 = $('#grinch4');
const $grinchShip5 = $('#grinch5');



/*----- event listeners -----*/
battlefield.addEventListener('click', function (e) {
    const idx = (e.target.id[2] + (e.target.id[3]));
    console.log(idx);
    if (board[idx] === ship1.location) {
        console.log(`you sunk a ship at ${board[idx]}`);
    } else {
        console.log ('try again');
    }
});

$grinchShip1.on('click', function(e) {
    $grinchShip1.fadeOut();
});

$buttonEl.on('click', function(e) {
    init();
});
// $('tbody').on('click', function(e){
//     console.log(e.target.id);
// });
/*----- functions -----*/
function init() {
    // board = [null, null, null, null, null, null, null, null,
    //     null, null, null, null, null, null, null, null,
    //     null, null, null, null, null, null, null, null,
    //     null, null, null, null, null, null, null, null,
    //     null, null, null, null, null, null, null, null,
    //     null, null, null, null, null, null, null, null,
    //     null, null, null, null, null, null, null, null,
    //     null, null, null, null, null, null, null, null];
    winner = null;
    // placeShips();
    // render();
};


function randomShip(arr) {
  randomIdx = (Math.floor(Math.random() * arr.length));
  ship = arr[randomIdx];
  console.log(randomIdx);
  return ship;  
};

function shipChoice() {
    ship1.location = randomShip(board);
    console.log(ship1.location);
};


function render() {
    board.forEach(function(cell, idx) {
        const gridCell = document.getElementById('sq' + idx);
        console.log(gridCell);
    });
};

render();
// shipChoice();
// console.log(ship1);
