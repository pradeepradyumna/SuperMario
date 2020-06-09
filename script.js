var character = document.getElementById("character");
var block = document.getElementById("block");
var score = document.getElementById("score");
var game = document.getElementById("game");
var instruction = document.getElementById("instruction");

var scoreIncrementer = 0;

function setCharacterImg() {
    var firstChild = character.firstChild;

}

function playJump() {
    var sound = new Audio('https://themushroomkingdom.net/sounds/wav/smb/smb_coin.wav');
    sound.play();
}

function playDie() {
    var sound = new Audio('https://themushroomkingdom.net/sounds/wav/smb/smb_mariodie.wav');
    sound.play();
}

function playBegin() {
    var sound = new Audio('https://themushroomkingdom.net/sounds/wav/smb/smb_stage_clear.wav');
    sound.play();
}

function jump() {

    playJump();

    if (character.classList.contains("animate") == false)
        character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);


    upadateScoreBoard();
}

function upadateScoreBoard() {
    if (isDead)
        return;

    scoreIncrementer = scoreIncrementer + 1;
    score.innerText = "Score " + scoreIncrementer;
}

var isDead = false;
var checkDead = setInterval(function() {

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

    var characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue("width"));

    var totalLeft = characterLeft + characterWidth;

    if (blockLeft >= characterLeft && blockLeft <= totalLeft &&
        characterTop >= 270) {
        isDead = true;
        playDie();
        score.innerText = "Your highest score was " + scoreIncrementer;
        block.style.animation = "none";
        block.style.display = "none";
        character.style.animation = "none";
        character.style.display = "none";

        setTimeout(function() { instruction.innerHTML = "Refresh to start again"; }, 1000);
    }

}, 10);