
let board = [null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null];

let fire, winner, ship1, ship2, ship3, ship4, ship5

const randomShips = [];

/*----- cached element references -----*/

const battlefield = document.querySelector('tbody');
const $buttonEl = $('button');
const $grinchShip1 = $('#grinch1');
const $grinchShip2 = $('#grinch2');
const $grinchShip3 = $('#grinch3');
const $grinchShip4 = $('#grinch4');
const $grinchShip5 = $('#grinch5');



/*----- event listeners -----*/
battlefield.addEventListener('click', function(e) {
    if (e.target.id.length < 4) {
        idx = e.target.id[2];
    } else {
        idx = (e.target.id[2] + e.target.id[3]);
    };
    console.log(idx);
    // if (idx == ship1) {
    //     idx.innerHTML = '<div style="background: green"><div>';
    // } else {
    //     console.log ('try again');
    // };
    fireMissile();
    console.log(board);
    render();
});



$grinchShip1.on('click', function(e) {
    $grinchShip1.fadeOut();
});

$buttonEl.on('click', function(e) {
    init();
});


/*----- functions -----*/
function init() {
    board = [null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null];
    winner = null;
    getRandomShips();
    placeShips();
    // render();
};

function fireMissile() {
    if (idx == ship1) {
        console.log(`you sunk ship1 at ${idx}`);
        fire = 'sink';
    } else if (idx == ship2) {
        console.log(`you sunk ship2 at ${idx}`);
        fire = 'sink';
    } else if (idx == ship3) {
        console.log(`you sunk ship3 at ${idx}`);
        fire = 'sink';
    } else if (idx == ship4) {
        console.log(`you sunk ship4 at ${idx}`);
        fire = 'sink';
    } else if (idx == ship5) {
        console.log(`you sunk ship5 at ${idx}`);
        fire = 'sink';
    } else {
        console.log('try again');
        fire = 'miss';
    };
    board[idx] = fire;
};

function getRandomShips() {
    for (let i = 0; i < 5; i++) {
        randomShips.push(Math.floor(Math.random() * board.length));
    };
    console.log(randomShips);
};
getRandomShips();
// console.log(randomShips[0]);

function placeShips() {
    ship1 = randomShips[0];
    ship2 = randomShips[1];
    ship3 = randomShips[2];
    ship4 = randomShips[3];
    ship5 = randomShips[4];
};
placeShips();



function render() {
    board.forEach(function(square, idx) {
        const tdEl = document.getElementById('sq' + idx);
        if (square == 'sink') {
            tdEl.innerHTML = '<div style="background: green"><div>';
        } else {
            tdEl.innerHTML = '<div></div>';
        }
    });
};

// function sinkShips() {

// }

// render();
// shipChoice();
// console.log(ship1);
