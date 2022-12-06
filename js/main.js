
let board = [null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null];

let fire, winner, countdown, ship1, ship2, ship3, ship4, ship5

let seconds = 30;

let sunkenShips = null;

const randomShips = [];

/*----- cached element references -----*/


const boardEL = document.querySelector('.game-board');
const playBtn = document.querySelector('#play');
const battlefield = document.querySelector('tbody');
const timeEl = document.querySelector('.timer');
const $startScreen = $('.start-game');
const $buttonEl = $('#restart');
const $grinchShip1 = $('#grinch1');
const $grinchShip2 = $('#grinch2');
const $grinchShip3 = $('#grinch3');
const $grinchShip4 = $('#grinch4');
const $grinchShip5 = $('#grinch5');

$('.game-board').hide();

/*----- event listeners -----*/
playBtn.addEventListener('click', function(e) {
    $startScreen.hide();
    init();
    countdown = setInterval(() => {
        seconds--;
        timeEl.innerHTML = `00:${seconds}`;
        if (seconds <= 5) {
            timeEl.style.color = 'red';
        } 
        if (seconds <= 0) {
            timeEl.innerHTML = 'The Grinch prevails! Better luck next year...';
        } 
    
    }, 1000);
    
});

battlefield.addEventListener('click', function(e) {
    if (e.target.id.length < 4) {
        idx = e.target.id[2];
    } else {
        idx = (e.target.id[2] + e.target.id[3]);
    };
    console.log(idx);
    fireMissile();
    console.log(board);
    render();
    checkWin();
    
});

$buttonEl.on('click', function(e) {
    init();
    restartGame();
});

timeEl.innerHTML = `00:${seconds}`;

/*----- functions -----*/
function init() {
    $('.game-board').show();
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
};

function fireMissile() {
    if (idx == ship1) {
        console.log(`you sunk ship1 at ${idx}`);
        fire = 'sink';
        $grinchShip1.css('background-color', 'black');
    } else if (idx == ship2) {
        console.log(`you sunk ship2 at ${idx}`);
        fire = 'sink';
        $grinchShip2.css('background-color', 'black'); 
    } else if (idx == ship3) {
        console.log(`you sunk ship3 at ${idx}`);
        fire = 'sink';
        $grinchShip3.css('background-color', 'black');
    } else if (idx == ship4) {
        console.log(`you sunk ship4 at ${idx}`);
        fire = 'sink';
        $grinchShip4.css('background-color', 'black'); 
    } else if (idx == ship5) {
        console.log(`you sunk ship5 at ${idx}`);
        fire = 'sink';
        $grinchShip5.css('background-color', 'black'); 
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
            // tdEl.innerHTML = '<div style="background: green"><div>';
            tdEl.innerHTML = '<div class="sunk" style="background-image: url(https://lh3.googleusercontent.com/T_elNh_z4i_tfMwAhTU3rbK-Sx2mR4DC-3dAAbcsifbJ6VbxI31zrYJcCYtIiAmodHKN3kZzMIyWUvhvjAOZHnUNt2giTBWECAMRGCmJyDghkxdc6Fc2yzwSnqb0_Ige3gFEDO7N7zRqA_sllYXIj9jcWfdKMRTu8LpeBuAHE4MXiUdpvS0XNKDsHhUgi9OacIEyZkE5s7rpoADcF6568IAMsGKTahy6DRLuG86Iv216FfH9YNn-3U2wYJWtqm7oDJkmar2ot-MJIobLi2uDMHqFmfFSkK33fgbYo1IErOFaCSQsGEZrWFuLoB1I_9d6pWe5ZiwJjJuJJ6Jlg3zjT2mLOBZVsgi49IoyGrV0jhUGs0BdNcj24-YjR9ys65CHRiUKRqETgxhfNXewpmE9DQkSYsG59Z8ISF4UaHZdtMTVrb-I5mOxMnhOAlNHExhp0t4eBcMpXVMMrW9DSpccGup9MfKFMrowRwaVd2An3nBUVKId95AMjYAbV-iJFVA7Cqu1YoC8wcVLTmqa7yD1FZnnpZqDkRXQZu6rLVWo_19jIbiNalZDjrgY6NO9zOeP6iZ1MY3llqlfRD5BLrC2NHNuQNNYZfAwFtAu9-cJuq0OHMTNkVgbPfEl8Aphxfd6x9HzkpcZZgy5nfmBuzhAgAvNRzaULO0PUwiPl-WJR-E6wimou168X_HpzGG2cPBa4-P8Ax2Armhh1-I-tsiVLH5g6qVDty4JWBy0AMur55eO0x8Ipr9QxgkzwsAScY34wXDME7S58f35DfAcsNQQiPJXMYS-lBBtVpnAxs8oOB9K6phXgZ-ssT5OlTWQ8sjZLvlyIyeKPB0POYpH14hXoFApYyMO1H-2DTBfXjQnuw7wHMLWF8Wgyd5yjbo4GQEVVVA0M1eVfcFrrFj7gBvSUjm-vkky2qjy38Y8Dj6q2cNl=w213-h197-no?authuser=0)"></div>'
        } else if (square == 'miss') {
            tdEl.innerHTML = '<p><strong>-</strong></p>';
        } else {
            tdEl.innerHTML = '<div></div>';
        }
    });
};

function restartGame() {
    init();
    $('.game-board').hide();
    $startScreen.show();
};

function countShips() {
   sunkenShips = board.filter(function(idx) {
        return idx == 'sink';
    }).length    
};

function checkWin() { 
    countShips();
       if (sunkenShips === 5 && seconds > 0) {
        clearInterval(countdown);
        $('.grinch-grid').fadeOut();
        $('aside').fadeOut();
        timeEl.innerHTML = 'You saved Christmas!';
    //    } else if (sunkenShips < 5 && seconds === 0) {
    //     timeEl.innerHTML = 'The Grinch prevails! Better luck next year...';
       }
};
