let timer = 60;
let clutter = ""
let score = 0;
let hitRun = 0;
let starter = document.querySelector("#start");

let bubbleMaker = () => {

    for (let i = 1; i <= 168; i++) {
        let random = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${random}</div>`
    }

    document.querySelector("#pnbt").innerHTML = clutter;
}


let timeRunner = () => {
    let timeint = setInterval(() => {
        if (timer > 0) {
            timer--
            document.querySelector("#timerval").textContent = timer
        }
        else {
            clearInterval(timeint)
            let GameOver = document.querySelector("#pnbt")
            GameOver.classList.add("gameover")
            GameOver.innerHTML = `<h2>GameOver</h2><p>Your Score is ${score}</p><h2>Refresh to restart</h2>`
        }

    }, 1000);
}

let scoreRunner = () => {
    score += 10;
    document.querySelector("#scoreval").textContent = score
}

let getHit = () => {
    hitRun = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitRun;
}

document.querySelector("#pnbt")
    .addEventListener("click", function (details) {
        let clickedNum = Number(details.target.textContent)
        if (clickedNum === hitRun) {
            scoreRunner()
            getHit()
            bubbleMaker()
        }
    })

getHit()
bubbleMaker()

starter.addEventListener("click", function () {
    timeRunner()
})