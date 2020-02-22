# JS30-Day1-JavaScript Drum Kit
此小作品是當使用者按下鍵盤按鈕後，就會發出一個聲音，同時按鈕也會有簡單的特效。
Demo: https://a90100.github.io/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/index-Harry.html

## 以下內容是實作中的重點整理:
### 1. 為了讓整個網頁監聽鍵盤按下的事件，使用了 window 綁定 keydown 事件
```javascript=
window.addEventListener('keydown', function(){});
```

#### 補充: keydown vs. keypress 的差異
* keydown: 按任何按鍵都能觸發
* keypress: 只有按下能輸出值的按鍵才觸發，若是按下無法輸出任何字元的按鍵例如方向鍵，就無法出發事件
* 兩者共同點是一直按著按鍵(keypress 按著能輸出值的按鍵)就會不斷觸發該事件

### 2. audio 標籤的屬性和方法
此小作品使用的是:
* currentTime: 設定音訊檔的目前撥放到哪個時間
* play(): 撥放音訊檔

#### 補充: 其他常用的屬性及方法
屬性:
* autoplay: 音訊檔加載完後自動撥放
* controls: 顯示控制鍵(撥放，暫停鈕)
* loop: 是否循環撥放
* volume: 控制音量

方法:
* load(): 重新加載音訊檔，用於更改 src 之後使用
* pause(): 暫停音訊檔

### 3. 取得所有的按鍵並綁定 transitionend 事件
transitionend 事件會在 CSS 的 transition 結束後觸發
```javascript=
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', function(){}));
```

#### 補充: transition 可拆解為好幾個子屬性
* transition-property: 指定會被過渡的 CSS 屬性，常見如`width，height，opacity，background-position，word-spacing，vertical-align，z-index`
* transition-duration: 設定過渡的時間
* transition-timing-function: 設定過渡期間 CSS 屬性變化的快慢，常見如`linear，ease，ease-in，ease-out，ease-in-out，cubic-bezier(n,n,n,n)`
* transition-delay: 設定延遲過渡的時間

> 透過 propertyName 屬性，可以取得 transition-property

### 4. Array.from
雖然 forEach 在現代的瀏覽器可以搭配 NodeList 使用，但在舊的瀏覽器可能失效，詳見以下連結:
https://developer.mozilla.org/zh-TW/docs/Web/API/NodeList

然後此作品中的 document.querySelectorAll() 取得的是一個 nodeList，所以作者透過 ES6 的語法 Array.from 產生一個新的陣列，並用此陣列做 forEach。


---

全部練習的程式碼都在此連結:
https://github.com/a90100/JavaScript30