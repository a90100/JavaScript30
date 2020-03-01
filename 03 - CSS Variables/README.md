# JS30-Day3-Scoped CSS Variables and JS
練習使用 CSS 的變數及用 JS 控制變數值的變化

## 以下內容是實作中的重點整理:
### 1. 使用 CSS 變數
範例:
```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

img {
  padding: var(--spacing);
  background-color: var(--base);
  filter: blur(var(--blur));
}
```

### 2. 使用 JS 改變 CSS 變數值
```javascript
document.documentElement.style.setProperty('--<varName>', '<varValue>')
```