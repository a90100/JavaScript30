# JS30-Day6-Ajax Type Ahead
輸入特定的城市名片段後會出現 json 檔中符合該名字的城市

## 以下內容是實作中的重點整理:
### 1. (複習)正則表達式
常見的使用方式有兩種:
1. 直接用兩個斜線代表
```javascript
const regex = /\w/gi;
```
2. 建立 RegExp 物件，本實作採用此寫法
```javascript
const regex = new RegExp('\\w+', 'gi');
```
以上兩者是相同的意思

而在處理人口數字的部分，作者使用了千位分隔符，程式碼如下:
```javascript
num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
```
至於此段程式碼的意義，可以參考我之前的發問:

https://ithelp.ithome.com.tw/questions/10195924

### 2. change 監聽事件
這邊要補充的是 change 和 input 事件的比較:
* change: 在`<input>`，`<select>`，和`<textarea>`內的值改變時且不再是 focus 狀態時觸發
* input:  `<input>`，`<select>`，和`<textarea>`內的值改變時就會觸發

在此實作中，作者綁定了兩個事件: change & keyup 去搜尋資料，但其實只要使用 input 事件就能達到一樣的效果

### 3. (複習)replace 函式
將一個 str 字串的某個部分用新的字串取代
語法:
```javascript
str.replace(regexp|substr, newSubstr|function)
```