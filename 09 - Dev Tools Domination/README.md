# JS30-Day9-14 Must Know Dev Tools Tricks
教你14個使用 Dev Tools 的技巧

## 以下記錄了我不知道的技巧:
### 1. 為 console.log 加上 css 樣式
字串最前面加上 %c
```javascript
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');
```

### 2. 斷言 console.assert()
括號裡可寫判斷式，第一個參數是 false，就輸出第二個參數的內容
```javascript
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');
```

### 3. 印出 DOM 元素 console.dir()
印出 DOM 元素還有其屬性
範例:
```javascript
console.dir(p);
```

### 4. console.groupCollapsed()
用於包覆 console 的內容，可搭配 console.groupEnd() 結束包覆內容
範例:
```javascript
console.log("outside group");
console.groupCollapsed();
console.log("inside group");
console.groupEnd();
console.log("outside group");
```

### 5. console.time()
和 console.timeEnd() 搭配使用，計算此兩行程式內的程式執行時間
```javascript
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
```