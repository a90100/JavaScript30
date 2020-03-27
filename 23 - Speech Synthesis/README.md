# JS30-Day23-Speech Synthesis
一個將輸入的文字轉語音的實作，還可以控制音調和速度

## 重點整理
### 1. SpeechSynthesisUtterance
為 Web Speech API，可以藉由它讀出指定的文字，還可以設定語言，音量，音調

範例:
```javascript
const msg = new SpeechSynthesisUtterance();
```

[MDN 介紹](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)

### 2. SpeechSynthesis
為 Web Speech API，上面提到 SpeechSynthesisUtterance 是可以輸出語音，調整音量，音調和選擇語言，那麼 **SpeechSynthesis 就是用來控制語音的撥放和暫停及移除語音資訊的 API**

[MDN 介紹](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)