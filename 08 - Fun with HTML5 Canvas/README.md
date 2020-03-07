# JS30-Day8-Fun with HTML5 Canvas
使用 Canvas 讓我們可以在網頁上畫畫的一個小實作

## 以下內容是實作中的步驟:
### 1. 建立 Canvas 畫布
```javascript
// 利用 draw 建立畫布，且畫布的內容是 2d 的
const canvas = document.querySelector('#draw'),
      ctx = canvas.getContext('2d');

// 設定畫布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

#### 補充:
因為在這邊看到 innerWidth，innerHeight，所以在此補充一下 innerWidth vs. outerWidth vs. width 的差別:

![](https://i.imgur.com/fu1pM1M.gif)

可以了解到:
* innerWidth: 不包括 border，包括 padding
* outerWidth: 包括 border 和 padding
* width: 只包括該 DOM Element
然後 height 也是一樣的規則喔~~

#### 2. 寫一些繪圖的設定
```javascript
ctx.strokeStyle = '#BADA55'; // 設定勾勒圖形時用的顏色
ctx.lineJoin = 'round'; // 讓線條轉彎時它的拐角是圓的
ctx.lineCap = 'round'; // 讓線條末端是圓的
ctx.lineWidth = 100; // 線條寬度

let isDrawing = false, // 判斷是否繼續繪畫
    lastX = 0, // 設定從哪裡開始繪畫/哪裡結束繪畫的初始值
    lastY = 0;
```

### 3. 建立繪畫的函式並建立監聽事件
```javascript
function draw(e) {
  if(!isDrawing) {
    return;
  } else {
    // 開始畫線
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // 利用解構重新指定 lastX 和 lastY 值
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  // 從滑鼠按下的點開始畫
  [lastX, lastY] = [e.offsetX, e.offsetY];
  isDrawing = true;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
```
此時就能在網頁上繪畫了，下一步是新增一些變化

### 4. 新增繪畫時線條的變化(顏色，線寬)
這邊和原程式碼有些不同，有按照自己的想法修改
```javascript
let hue = 0;
let direction = true;

function draw(e) {
  if(!isDrawing) {
    return;
  } else {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // 控制顏色
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue+= 10;
    
    // 控制線寬
    if(ctx.lineWidth >= 20 || ctx.lineWidth < 5) {
      direction = !direction;
    }
    direction === true ? ctx.lineWidth++ : ctx.lineWidth--;
  }
}
```