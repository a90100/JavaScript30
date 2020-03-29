const timerDisplay = document.querySelector('.display__time-left'),
  endTime = document.querySelector('.display__end-time'),
  buttons = document.querySelectorAll('[data-time]');
let countdown;

// 倒數計時器主體
function timer(seconds) {
  clearInterval(countdown);
  displayTimeLeft(seconds);

  const now = Date.now(),
    then = now + seconds * 1000;
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

// 呈現時間用
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60),
    remainderSeconds = seconds % 60,
    display = `${minutes} : ${remainderSeconds < 10 ? '0':''}${remainderSeconds}`;

  document.title = display;
  timerDisplay.textContent = display;
}

// 呈現結束時間
function displayEndTime(timestamp) {
  const end = new Date(timestamp),
    hours = end.getHours() > 12 ? end.getHours() - 12 : end.getHours(),
    minutes = end.getMinutes(),
    display = `Be Back At ${hours} : ${minutes < 10 ? '0':''}${minutes}`;

  endTime.textContent = display;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  timer(this.minutes.value * 60);
  this.reset();
})