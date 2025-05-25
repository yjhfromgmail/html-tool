let timerInterval;
let countdownInterval;
let isPaused = false;
let currentTime = 0;
let countdownTime = 0;

function formatTime(time) {
    const milliseconds = time % 1000;
    const totalSeconds = Math.floor(time / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}

function startCountdown() {
    const hours = parseInt(document.getElementById('hours').value, 10) || 0;
    const minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
    const seconds = parseInt(document.getElementById('seconds').value, 10) || 0;
    const milliseconds = parseInt(document.getElementById('milliseconds').value, 10) || 0;

    countdownTime = hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;
    isPaused = false;

    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        if (isPaused) return;
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            alert('倒计时结束！');
            return;
        }
        document.getElementById('timer').innerText = formatTime(countdownTime);
        countdownTime -= 10;
    }, 10);
}

function startTimer() {
    clearInterval(countdownInterval);
    clearInterval(timerInterval);
    currentTime = 0;
    isPaused = false;

    timerInterval = setInterval(() => {
        if (isPaused) return;
        currentTime += 10;
        document.getElementById('timer').innerText = formatTime(currentTime);
    }, 10);
}

function pause() {
    isPaused = true;
}

function reset() {
    clearInterval(countdownInterval);
    clearInterval(timerInterval);
    currentTime = 0;
    countdownTime = 0;
    document.getElementById('timer').innerText = "00:00:00:000";
    isPaused = false;
}
