const player = document.querySelector('.player'),
      video = player.querySelector('.viewer'),
      progress = player.querySelector('.progress'),
      progressBar = player.querySelector('.progress__filled'),
      toggle = player.querySelector('.toggle'),
      skipButtons = player.querySelectorAll('[data-skip]'),
      range = player.querySelectorAll('.player__slider');

let mouseClick = false;

function togglePlay(e) {
  const status = video.paused ? 'play' : 'pause';
  const icon = status === 'play' ? '❚ ❚' : '►';
  toggle.textContent = icon;
  video[status]();
}

function skip() {
  video.currentTime += parseInt(this.dataset.skip);
}

function changeRange(e) {
  video[e.target.name] = e.target.value;
}

function fillBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function controlBar(e) {
  const time = (e.offsetX / this.offsetWidth) * video.duration;
  video.currentTime = time;
}

video.addEventListener('click', togglePlay); // 控制撥放暫停
video.addEventListener('timeupdate', fillBar); // 控制已撥放部分的樣式
toggle.addEventListener('click', togglePlay);
progress.addEventListener('click', controlBar); // 控制影片進度
progress.addEventListener('mousemove', (e) => mouseClick && controlBar(e));
progress.addEventListener('mousedown', () => mouseClick = true);
progress.addEventListener('mouseup', () => mouseClick = false);
skipButtons.forEach(btn => btn.addEventListener('click', skip)); // 控制影片前進/後退
range.forEach(btn => btn.addEventListener('mousemove', changeRange)); // 控制音量/撥放速度