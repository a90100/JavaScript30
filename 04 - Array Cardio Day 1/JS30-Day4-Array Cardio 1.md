# JS30-Day4-Array Cardio 1
介紹了幾個陣列的操作練習題目

## 以下內容是實作中的重點整理:
由於大部分的練習都做的出來，所以只針對沒解出來的一題做紀錄:
### 第 8 題:
原本以為 reduce 的第一個參數只能設定數字的累加值，沒想到裡面還能放空物件，這是自己以前沒注意到的細節
```javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// 設定第一個參數為空物件
const instancesNum = data.reduce((obj, item) => {
  // 若 obj 物件沒有 item 屬性(item 為 data 內的各元素)，就增加該屬性，並設定值為 0
  if(!obj[item]) {
    obj[item] = 0;
  }
  // 再次碰到該屬性的話，值+1
  obj[item]++;
  return obj;
}, {})
console.log(instancesNum);
```

印出的結果:

![](https://i.imgur.com/mmmwSEz.png)