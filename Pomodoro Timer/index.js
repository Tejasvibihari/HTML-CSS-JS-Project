const timeLeftDisplay = document.querySelector('#time-left')
const timerBoxEl = document.querySelector('#timer-box')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')
let timeLeft = 25 * 60
let timerId

function countDown() {
    if (timeLeft === 0) {
        clearInterval(timerId)
    }
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    timeLeftDisplay.innerHTML = `${minutes}:${seconds}`
    timeLeft--
}

startBtn.addEventListener('click', () => {
    timerId = setInterval(countDown, 1000);
    timerBoxEl.classList.add("timer-shadow");
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerBoxEl.classList.remove("timer-shadow");
})

resetBtn.addEventListener('click', () => {
    clearInterval(timerId)
    timeLeft = 25 * 60
    countDown()
    timerBoxEl.classList.remove("timer-shadow");
})