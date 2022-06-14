# 1. Make a string out of an array
```js
const fruits = ['apple' 'banana', 'orange'];

//join API: 파라미터로 saperator를 넣을 수 있다.
const string = fruits.join();
console.log(string); //return: apple,banana,orange

const string = fruits.join('|');
console.log(string); //return: 'apple|banana|orange'

const string = fruits.join(', and ');
console.log(string); //return: 'apple, and banana, and orange'
```

# 2. Make an array out of a string
```js
const fruitsString = '🍎,🍏,🍊,🍓';
//split API: 무엇을 기준으로 배열을 나눌건지 구분자를 정한다.
//두번째 인자로 limit: 몇번째 인덱스까지 배열로 만들건지 정한다.
const result = fruitsString.split(',');
console.log(result); //result: ['🍎', '🍏', '🍊', '🍓']

const result = fruitsString.split(',', 2);
console.log(result); //result: ['🍎', '🍏']
```

# 3. Make this array look like this: [5,4,3,2,1]
```js
const reverse = [1, 2, 3, 4, 5];
//revers API: 배열 순서를 거꾸로 뒤집는다.
const resultReverse = reverse.reverse();
console.log(resultReverse); //result: [5, 4, 3, 2, 1]
console.log(reverse); //result: [5, 4, 3, 2, 1] → 원본배열 자체도 변화시키는 것을 알 수 있다.
```

# 4. Make new array without the first two elements
```js
const arraySplice = [1, 2, 3, 4, 5];
//splice API: 첫번째 파라미터는 원본배열에서 어디서부터 지울건지, 두번째는 몇개를 지울건지
const resultSplice = arraySplice.splice(0, 2);
console.log(resultSplice); //result: [1, 2]
console.log(arraySplice); // result: [3, 4, 5] → 원본 배열에서 자른 부분을 지움

const arraySlice = [1, 2, 3, 4, 5];
//Returns a copy of a scetion of an array.(카피한 섹션을 리턴한다.)
//This is exclisive of the element at the index 'end' (end 파라미터는 배제된다.)
const resultSlice = arraySlice.slice(2, 5);
console.log(resultSlice); //result: [3, 4, 5]
console.log(arraySlice); //result: [1, 2, 3, 4, 5] → 원본 배열을 바뀌지 않았다.
```