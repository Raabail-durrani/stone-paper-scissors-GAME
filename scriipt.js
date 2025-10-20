let rockbtn = document.querySelector(".circle1")
let paperbtn = document.querySelector(".circle2")
let scissorsbtn = document.querySelector(".circle3")
let userscoreDisplay = document.querySelector(".user-score");
let computerscoreDisplay = document.querySelector(".comp-score");
let win = document.querySelector(".winmsg")
let arr = ["✊", "✋", "✌️"]
let randomnum
let randomsign
let userscorevalue = 0
let computerscorevalue = 0

const updatescores = () => {
    userscoreDisplay.innerText = userscorevalue;
    computerscoreDisplay.innerText = computerscorevalue;
}



rockbtn.addEventListener("click", () => {
    randomnum = Math.floor(Math.random() * arr.length)
    randomsign = arr[randomnum]
    let message = `Computer played ${randomsign}. `;
    if (randomsign === "✊") {
        win.innerText = "It's a tie!"
    }
    else if (randomsign === "✋") {
        win.innerText = "you lose!"
        computerscorevalue++;
    }
    else {
        randomsign === "✌️"
        win.innerText = "You win!!!, Congratulations"
        userscorevalue++;
    }
    updatescores();
})
paperbtn.addEventListener("click", () => {
    randomnum = Math.floor(Math.random() * arr.length)
    randomsign = arr[randomnum]
    let message = `Computer played ${randomsign}. `;
    if (randomsign === "✊ ") {
        win.innerText = "You win!!!, Congratulations"
        userscorevalue++;
    }
    else if (randomsign === "✋") {
        win.innerText = "It's a tie!"
    }
    else {
        randomsign === "✌️"
        win.innerText = "you lose!"
        computerscorevalue++;
    }
    updatescores();
})

scissorsbtn.addEventListener("click", () => {
    randomnum = Math.floor(Math.random() * arr.length)
    randomsign = arr[randomnum]
    let message = `Computer played ${randomsign}. `;
    if (randomsign === "✊") {
        win.innerText = "you lose!"
        computerscorevalue++;
    }
    else if (randomsign === "✋") {
        win.innerText = "You win!!!, Congratulations"
        userscorevalue++;
    }
    else {
        win.innerText = "It's a tie!"
    } 
    updatescores();
})