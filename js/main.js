let board = [null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null];


/*----- constants -----*/
const randomIdx = (Math.floor(Math.random() * board.length));
console.log(randomIdx);

const ships = {
    ship1: {
        location: board[randomIdx],
        sunk: false,
    },
    
    // ship2: {
    //     location: board[shipChoice],
    //     sunk: false,
    // },
    
    // ship3: {
    //     location: board[shipChoice],
    //     sunk: false,
    // },
    
    // ship4: {
    //     location: board[shipChoice],
    //     sunk: false,
    // },

    // ship5: {
    //     location: board[shipChoice],
    //     sunk: false,
    // }
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
    if (e.target.id.length < 4) {
        idx = e.target.id[2];
    } else {
        idx = e.target.id[2] + e.target.id[3];
    };
    console.log(idx);
    if (board[idx] === ships.ship1.location) {
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


// function randomShip(board) {
//   randomIdx = (Math.floor(Math.random() * board.length));
//   ship = board[randomIdx];
//   console.log(randomIdx);
//   return ship;  
// };

// function shipChoice() {
//     ships.location = randomShip(board);
//     console.log(randomShip(board));
// };
console.log(ships.ship1.location);
// console.log(ships.ship2.location);
// console.log(ships.ship3.location);
// console.log(ships.ship4.location);
// console.log(ships.ship5.location);

// function render() {
//     board.forEach(function(cell, idx) {
//         const gridCell = document.getElementById('sq' + idx) - 1;
//         console.log(gridCell);
//     });
// };

// render();
// shipChoice();
// console.log(ship1);
