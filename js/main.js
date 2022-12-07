
let board, fire, winner, countdown, ship1, ship2, ship3, ship4, ship5

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

// Show start screen on load 
$('.game-board').hide();

/*----- event listeners -----*/

// Begin game on click
playBtn.addEventListener('click', function (e) {
    $startScreen.hide();
    $('.game-board').show();
    init();
    countdown = setInterval(() => {
        seconds--;
        timeEl.innerHTML = `00:${seconds}`;
        if (seconds < 10) {
            timeEl.innerHTML = `00:0${seconds}`;
        }
        if (seconds <= 5) {
            timeEl.style.color = 'red';
        }
        if (seconds <= 0) {
            $('.grinch-grid').fadeOut();
            $('aside').fadeOut();
            timeEl.innerHTML = 'The Grinch prevails! Better luck next year...';
        }

    }, 1000);

});

// Update board on click and track events to determine win/loss 
battlefield.addEventListener('click', function (e) {
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

// Restart game on click
$buttonEl.on('click', restartGame);

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
    getRandomShips();
    placeShips();
};

function fireMissile() {
    if (idx == ship1) {
        fire = 'sink';
        $grinchShip1.css('background-color', 'black');
    } else if (idx == ship2) {
        fire = 'sink';
        $grinchShip2.css('background-color', 'black');
    } else if (idx == ship3) {
        fire = 'sink';
        $grinchShip3.css('background-color', 'black');
    } else if (idx == ship4) {
        fire = 'sink';
        $grinchShip4.css('background-color', 'black');
    } else if (idx == ship5) {
        fire = 'sink';
        $grinchShip5.css('background-color', 'black');
    } else {
        fire = 'miss';
    };
    board[idx] = fire;
};

function getRandomShips() {
    for (let i = 0; i < 5; i++) {
        randomShips.push(Math.floor(Math.random() * board.length));
    };
};

function placeShips() {
    ship1 = randomShips[0];
    ship2 = randomShips[1];
    ship3 = randomShips[2];
    ship4 = randomShips[3];
    ship5 = randomShips[4];
};

function render() {
    board.forEach(function (square, idx) {
        const tdEl = document.getElementById('sq' + idx);
        if (square == 'sink') {
            tdEl.innerHTML = '<div class="sunk" style="background-image: url(https://lh3.googleusercontent.com/T_elNh_z4i_tfMwAhTU3rbK-Sx2mR4DC-3dAAbcsifbJ6VbxI31zrYJcCYtIiAmodHKN3kZzMIyWUvhvjAOZHnUNt2giTBWECAMRGCmJyDghkxdc6Fc2yzwSnqb0_Ige3gFEDO7N7zRqA_sllYXIj9jcWfdKMRTu8LpeBuAHE4MXiUdpvS0XNKDsHhUgi9OacIEyZkE5s7rpoADcF6568IAMsGKTahy6DRLuG86Iv216FfH9YNn-3U2wYJWtqm7oDJkmar2ot-MJIobLi2uDMHqFmfFSkK33fgbYo1IErOFaCSQsGEZrWFuLoB1I_9d6pWe5ZiwJjJuJJ6Jlg3zjT2mLOBZVsgi49IoyGrV0jhUGs0BdNcj24-YjR9ys65CHRiUKRqETgxhfNXewpmE9DQkSYsG59Z8ISF4UaHZdtMTVrb-I5mOxMnhOAlNHExhp0t4eBcMpXVMMrW9DSpccGup9MfKFMrowRwaVd2An3nBUVKId95AMjYAbV-iJFVA7Cqu1YoC8wcVLTmqa7yD1FZnnpZqDkRXQZu6rLVWo_19jIbiNalZDjrgY6NO9zOeP6iZ1MY3llqlfRD5BLrC2NHNuQNNYZfAwFtAu9-cJuq0OHMTNkVgbPfEl8Aphxfd6x9HzkpcZZgy5nfmBuzhAgAvNRzaULO0PUwiPl-WJR-E6wimou168X_HpzGG2cPBa4-P8Ax2Armhh1-I-tsiVLH5g6qVDty4JWBy0AMur55eO0x8Ipr9QxgkzwsAScY34wXDME7S58f35DfAcsNQQiPJXMYS-lBBtVpnAxs8oOB9K6phXgZ-ssT5OlTWQ8sjZLvlyIyeKPB0POYpH14hXoFApYyMO1H-2DTBfXjQnuw7wHMLWF8Wgyd5yjbo4GQEVVVA0M1eVfcFrrFj7gBvSUjm-vkky2qjy38Y8Dj6q2cNl=w213-h197-no?authuser=0)"></div>'
        } else if (square == 'miss') {
            tdEl.innerHTML = '<p><strong>-</strong></p>';
        } else {
            tdEl.innerHTML = '<div></div>';
        }
    });
};

function restartGame() {
    stopTimer();
    resetTimer();
    resetBoard();
    $('.game-board').hide();
    $startScreen.show();
};

function countShips() {
    sunkenShips = board.filter(function (idx) {
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
    }
};

function stopTimer() {
    clearInterval(countdown);
};

function resetTimer() {
    seconds = 30;
    timeEl.innerHTML = `00:${seconds}`;
    timeEl.style.color = 'black';
};

function resetBoard() {
    board.forEach(function (square, idx) {
        const tdEl = document.getElementById('sq' + idx);
        if (square) {
            tdEl.innerHTML = '<p><strong></strong></p>';
        }
    });
    $grinchShip1.css('background-color', 'white');
    $grinchShip2.css('background-color', 'white');
    $grinchShip3.css('background-color', 'white');
    $grinchShip4.css('background-color', 'white');
    $grinchShip5.css('background-color', 'white');
    $('.grinch-grid').fadeIn();
    $('aside').fadeIn();
};