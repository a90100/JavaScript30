# JS30-Day20-Native Speech Recognition
一個可以透過語音輸入文字的實作

## 重點整理
### 1. 建立語音辨識的物件
**SpeechRecognition** 為一個 Web Speech API
```javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
```

### 2. interimResults 設定語音輸入的是否會立即辨試
範例:
```javascript
recognition.interimResults = true;
```

### 3. result 事件
當 SpeechRecognition 回傳結果(文字或段落)時觸發

### 4. end 事件
當 SpeechRecognition 的連接中斷(不再說話時)觸發

### 5. HTML 屬性: contenteditable
加上這個屬性之後，該 DOM 元素可以像 input 標籤一樣被編輯
```javascript
<div class="words" contenteditable="true"></div>
```