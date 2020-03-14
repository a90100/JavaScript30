# JS30-Day16-CSS Text Shadow Mouse Move Effect
一個滑鼠移動時產生特效的實作

## 重點整理
### 1. this vs. e.target
this: 被監聽的元素本身，例如:
```javascript
hero.addEventListener('mousemove', shadow);
```
shadow函式內，this 在此為 hero

e.target: 指事件被觸發時的對象