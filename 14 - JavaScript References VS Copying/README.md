# JS30-Day14-Object and Arrays - Reference VS Copy
探討如何複製不會傳同一個參考的陣列和物件

## 重點整理:
### 1. 陣列的複製
以下的這些方法只是淺複製而已，新陣列內的陣列被修改時，原陣列也會被修改
```javascript
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// 方法1: 利用回傳新陣列的特性
const team2 = players.slice();

// 方法2: 空陣列連接 players，也是出現新陣列
const team3 = [].concat(players);

// 方法3:
const team4 = [...players];

// 方法4: 利用回傳新陣列的特性
const team5 = Array.from(players);
```

### 2. 物件的複製
以下的這些方法只是淺複製而已，新物件內的物件被修改時，原物件也會被修改
```javascript
const person = {
  name: 'Wes Bos',
  age: 80
};

// 方法1: Object.assign 會複製第二個參數的物件到第一個參數去，第三個參數可為新物件增加屬性
const person2 = Object.assign({}, person, {height: 172});

// 方法2:
const person3 = {...person};

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

// 要避免淺複製的話，可以使用下面的方式:
const dev2 = JSON.parse(JSON.stringify(wes));
```