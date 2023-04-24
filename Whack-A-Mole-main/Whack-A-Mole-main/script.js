/* --------------- DOM --------------- */
const ground = document.getElementById("ground");
const score = document.getElementById("score");
const time = document.getElementById("time");
let place;



/* --------------- Global --------------- */
let moleTime = 1000;

let showMoleTimer;
let playingTimeTimer;



/* --------------- Function --------------- */
// game over
function gameOver() {
    // clear Interval
    clearInterval(showMoleTimer);
    clearInterval(playingTimeTimer);
};


// playing time
function playingTime() {
    // decrease time
    time.innerText = Number(time.innerText) -1;

    // check it's === 0, than game over;
    (time.innerText === "0") && gameOver();
};


// click listener
function clickListener(event) {
    // clicked place has bg img, than socre increase
    if (event.target.style.backgroundImage) {
        // increase socre
        score.innerText = Number(score.innerText)+1;
        // decrease mole time
        moleTime -= 5;
    } // decrease socre
    else { score.innerText = Number(score.innerText)-1 };
};


// show mole
function showMole() {
    // select random place
    const selectedPlace = place[Math.floor(Math.random() *place.length)];

    // show mole img
    selectedPlace.style.backgroundImage = "url('mole.PNG')";
    // after some time remove mole img
    setTimeout(() => {
        selectedPlace.style.backgroundImage=""
    }, moleTime);
    
};


// create board
function createBoard() {
    for (let i=0; i<16; i++) {
        ground.innerHTML += `<div class="place"><div>`;
    };
    // update DOM place
    place = document.getElementsByClassName("place");
    // add click event listener
    [...place].forEach(i => i.addEventListener("click", clickListener));
};


// start game
function startGame() {
    // create board
    createBoard();
    // show mole Interval
    showMoleTimer = setInterval(showMole, moleTime);
    // playing Time Interval
    playingTimeTimer = setInterval(playingTime, 1000);
    
};



/* --------------- Run --------------- */
startGame();
