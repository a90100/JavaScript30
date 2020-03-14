# JS30-Day11-Custom HTML5 Video Player
實作一個影片撥放器

## 重點整理
### 1. 選取 HTML data 屬性
在教學中看到用 querySelectorAll 選取標籤內的 data，以前不知道可以這樣選取，紀錄一下
```javascript
const skipButtons = player.querySelectorAll('[play-skip]');
```

### 2. timeupdate 事件
屬於 Audio/Video 的事件，這裡用來控制影片進度條

### 3. 小技巧
為了讓滑鼠**實際有點擊**並拉動進度條時才會成功控制影片進度，所以使用 mouseClick 紀錄點擊狀態，當 mouseClick 為 true 時，才觸發後面 controlBar() 此函式
```javascript
progress.addEventListener('mousemove', (e) => mouseClick && controlBar(e));
```