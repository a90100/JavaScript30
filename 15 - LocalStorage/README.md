# JS30-Day15-LocalStorage and Event Delegation
介紹 LocalStorage 和 Event Delegation 事件委派，並用它們來做一個紀錄食物的實作

## 重點整理
### 1. reset() 方法: 重置表單內的輸入值
```html
<form id="myForm">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br><br>
  <input type="button" onclick="myFunction()" value="Reset form">
</form>

<script>
function myFunction() {
  document.getElementById("myForm").reset();
}
</script>
```

### 2. (複習)querySelector
querySelector 裡面不一定要放 id 或 class，用 HTML 內的屬性(例如 href，src，name)也可以
```javascript
document.querySelector('[name=item]')
```

### 3. 比較 map() vs. forEach
這是我在練習時發現的，如果使用 forEach 去遍歷陣列，最後面接 join() 將會出錯(undefined)，而 map 則不會出錯，所以我把兩者做一個比較，就比較能了解出錯的原因了

#### map:
1. 遍歷後會返回一個新陣列
2. 用於會修改陣列值的狀況
```javascript
let arr = [1, 2, 3, 4];
let doubled = arr.map(num => {
    return num * 2;
});

// doubled = [2, 4, 6, 8]
```

#### forEach:
1. 遍歷後不會返回一個新陣列，而是修改原陣列
2. 因為會修改原陣列，所以主要應用在例如**比較**，**印出值**或是**存到別的陣列**的狀況
```javascript
let arr = [1, 2, 3, 4];
arr.forEach((num, index) => {
    return (arr[index] = num * 2);
});

// arr = [2, 4, 6, 8]
```

所以 forEach 搭配 join() 出錯(undefined)的原因，就是因為它不會 return 值啊~~~

### 4. 客製化 checkbox
如程式碼所示，在 input 和 label 前加上一些小圖示
```css
.plates input {
  display: none;
}

.plates input + label:before {
  content: '⬜️';
  margin-right: 10px;
}

.plates input:checked + label:before {
  content: '🌮';
}
```