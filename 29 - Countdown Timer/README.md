# JS30-Day29-Countdown Clock
建立一個倒數計時器

## 重點整理
### 1. new Date() vs. Date.now()
透過這個實作重新複習一次兩者取出的值

`new Date()` 取出的是有星期幾，年月日幾點幾分幾秒的格式，而  `Date.now()` 取出的是從現在的時間到 1970 年 1 月 1 日開始的毫秒數值
![](https://i.imgur.com/Yh6oBu3.png)

`new Date()` 內也可以放置 timestamp，取得過去的時間
![](https://i.imgur.com/8dvB5rZ.png)

### 2. 可以使用屬性 name 來綁定監聽事件
```html
<form name="customForm" id="custom">
    <input type="text" name="minutes" placeholder="Enter Minutes">
</form>
```

這裡使用表單名字 customForm 綁定監聽事件
```javascript
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // ...
});
```