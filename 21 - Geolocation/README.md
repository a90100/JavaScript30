# JS30-Day21-Geolocation based Speedometer and Compass
利用取得使用者位置來顯示方向和速度的一個實作

## 重點整理
### 1. Navigator.geolocation
這是用來取得使用者位置資訊的 Web API，在此實作中搭配了 watchPosition() 方法來監控使用者位置
```javascript
navigator.geolocation.watchPosition((data) => {
  // do something...
}, (err) => {
  // do something...
});
```