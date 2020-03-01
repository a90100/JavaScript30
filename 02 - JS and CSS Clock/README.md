# JS30-Day2-CSS + JS Clock
這次的練習是實作一個小時鐘

## 以下內容是實作中的重點整理:
### 1. CSS 屬性
1. transform-origin: 設定物件變形的起始點
共有三個參數，分別是控制 x 軸(左到右)，y 軸(上到下)，z 軸的起始位置
```css
transform-origin(0, 0); /* 從物件的左上角開始 */
```

2. transform: 設定物件的變形種類
常用包括translate(位移)、scale(縮放)、rotate(旋轉)、skew(傾斜)等，還有結合 scale、skew、translate 的 matrix(scale X, scale Y, skew X, skew Y, move X, move Y)

3. transition-timing-function: 設定物件不同變形期間的變形速度
```css
transition-timing-function: cubic-bezier(.29, 1.01, 1, -0.68);
```
