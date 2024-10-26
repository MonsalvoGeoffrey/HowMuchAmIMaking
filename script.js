let income = document.getElementById('income');
let startTime = new Date();
let timeEl = document.getElementById('time');
let earnedEl = document.getElementById('earned');
let started = false;
let startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', function () {
    startTime = new Date();
    started = true;
    update();
});

function update() {
    if (!started) {
        timeEl.innerHTML = 'Total Time: <strong>00:00:00</strong>';
        earnedEl.innerHTML = 'Total Earned: <strong>$0</strong>';
        return;
    }
    let value = parseInt(income.value);
    let time = (new Date() - startTime) / 1000 / 60 / 60;
    let hour = Math.floor(Math.floor(new Date() - startTime) / 1000 / 60 / 60);
    let minute = Math.floor((new Date() - startTime) / 1000 / 60) % 60;
    let second = Math.floor((new Date() - startTime) / 1000) % 60;

    // Format minutes and seconds with leading zeros
    const formattedHours = hour.toString().padStart(2, '0');
    const formattedMinutes = minute.toString().padStart(2, '0');
    const formattedSeconds = second.toString().padStart(2, '0');

    timeEl.innerHTML = `Total Time: <strong>${formattedHours}:${formattedMinutes}:${formattedSeconds}</strong>`;
    earnedEl.innerHTML = `Total Earned: <strong>$${Math.floor(value * time * 100) / 100}</strong>`;
    // timeEl.innerHTML += '<br>Total Hourly Rate: <strong>$' + Math.floor(value * time * 100) / 100 + "</strong>";
}

update();

income.addEventListener('input', function () {
    update();
});

setInterval(update, 90);