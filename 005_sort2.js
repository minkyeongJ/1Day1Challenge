let products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 32000, title: 'Check Shirt' },
    { id: 2, price: 15000, title: 'Black Tie' },
    { id: 3, price: 67000, title: 'Springfield Shirt' },
    { id: 4, price: 82000, title: 'Red Mini Dress' },
];
// 문자열의 오름차순 구하기
// 문자열의 내림차순 구하기

function strASC(){
    return products.sort((a,b)=>{
        if(a.title > b.title){
            return 1;
        }else if(a.title < b.title){
            return -1;
        }else{
            return 0;
        }
    });
}
function strDESC(){
    return products.sort((a,b)=>{
        if(a.title > b.title){
            return -1;
        }else if(a.title < b.title){
            return 1;
        }else{
            return 0;
        }
    });
}

console.log(strASC());
console.log(strDESC());





















// function strASC(){
//     return products.sort((a,b)=>{
//         if(a.title > b.title){
//             return 1;
//         }else if(a.title < b.title){
//             return -1;
//         }else{
//             return 0;
//         }
//     });
// }

// function strDESC(){
//     return products.sort((a,b)=>{
//         if(a.title > b.title){
//             return -1;
//         }else if(a.title < b.title){
//             return 1;
//         }else{
//             return 0;
//         }
//     });
// }

// console.log(strASC());
// console.log(strDESC());