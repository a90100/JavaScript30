# JS30-Day19-Unreal Webcam Fun
建立一個 web 相機，而且附有多種特別的效果

## 語法整理
### 1. `navigator.mediaDevices.getUserMedia`
用來取得視訊影像，會搭配 promise 使用

```javascript
navigator.mediaDevices.getUserMedia({video: true, audio: false})
.then(stream => {
  // do something...
})
.catch(err => {
  // do something...
});
```

[MDN 介紹 navigator.mediaDevices.getUserMedia](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/putImageData)

### 2. ctx.getImageData(sx, sy, sw, sh)
取得 canvas 某塊區域的像素值，sx 為區域的左上角 x 座標，sy 為區域的左上角 y 座標，sw 為區域寬，sh 為區域高

[MDN 介紹 ctx.getImageData(sx, sy, sw, sh)](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/getImageData)

### 3. ctx.putImageData(imageData, dx, dy)
把某塊區域的像素值呈現在指定的位址上

[MDN 介紹 ctx.putImageData(imageData, dx, dy)](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData)

### 4. canvas.toDataURL('image/jpeg')
這個語法可以把圖片轉成 base64
```javascript
// html
// <canvas id="canvas" width="5" height="5"></canvas>

var canvas = document.getElementById("canvas");
var dataURL = canvas.toDataURL();
console.log(dataURL);
```

### 5. insertBefore(newnode,existingnode)
在特定的 DOM 元素**前面**插入新的子節點
* newnode: 插入的 DOM 元素
* existingnode: 指定在特定的 DOM 元素內部的第幾個子節點前插入

```javascript
// html
// <ul id="myList"><li>Coffee</li><li>Tea</li></ul>

// <button onclick="myFunction()">Try</button>

function myFunction() {
  var newItem = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  newItem.appendChild(textnode);

  var list = document.getElementById("myList");
  list.insertBefore(newItem,list.childNodes[0]);
}
```

### 6. canplay 監聽事件
當影片可以開始撥放影片的時候觸發此事件
```javascript
const video = document.querySelector('video');

video.addEventListener('canplay', (event) => {
  console.log('Video can start, but not sure it will play through.');
});
```