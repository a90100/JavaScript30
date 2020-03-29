# JS30-Day30-Whack A Mole Game
最後一天!實作一個打地鼠的遊戲

## 重點整理
### 1. e.isTrusted()
判斷事件是否由使用者操作而觸發，若是則為 true，若是由程式碼或是透過 `EventTarget.dispatchEvent()` 來觸發，則為 false

MDN 介紹:
https://developer.mozilla.org/zh-TW/docs/Web/API/Event/isTrusted