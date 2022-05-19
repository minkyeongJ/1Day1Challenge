let products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 32000, title: 'Check Shirt' },
    { id: 2, price: 15000, title: 'Black Tie' },
    { id: 3, price: 67000, title: 'Springfield Shirt' },
    { id: 4, price: 82000, title: 'Red Mini Dress' },
];
// 가격낮은순 구하기
// 가격높은순 구하기
// 문자열의 오름차순 구하기
// 문자열의 내림차순 구하기

function priceASC(){
    return products.sort(function (a,b){
        return a.price - b.price;
    });
}

function priceDESC(){
    return products.sort(function (a,b){
        return b.price - a.price;
    });
}

// function titleASC(){
//     return products.sort(function(a, b) {
//         const upperCaseA = a.toUpperCase();
//         const upperCaseB = b.toUpperCase();
        
//         if(upperCaseA > upperCaseB) return 1;
//         if(upperCaseA < upperCaseB) return -1;
//         if(upperCaseA === upperCaseB) return 0;
//     });
// }

// let titleASC = products.map(e =>{

// })

console.log(priceASC());
console.log(priceDESC());
// console.log(titleASC());