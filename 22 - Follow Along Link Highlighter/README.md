# JS30-Day22-Follow Along Links
一個 hover 連結時會出現效果的實作

## 重點整理
### 1. element.getBoundingClientRect()
此方法會回傳選擇到的 DOM 元素的大小和位置

範例:
```javascript
const linkCoords = this.getBoundingClientRect();
```

### 2. 補充: mouse 事件
1. mouseenter: 滑鼠移入元素觸發
2. mouseleave: 滑鼠移出元素觸發
3. mouseover: 滑鼠移入元素觸發，移入移出其子元素也會觸發
4. mouseout: 滑鼠移出元素觸發，移入移出其子元素也會觸發

範例: 可以打開 codepen console 玩玩看
https://codepen.io/a90100/pen/abOKgMR?editors=1011

### 3. 取得瀏覽器捲軸位置
```javascript
window.scrollY
window.scrollX
```