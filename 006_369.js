//끝자리가 3,6,9로 끝나는 숫자라면 '박수'가 출력
//심화: 33,66,99,333, 등 숫자만큼 짝 개수가 나오게하려면?

function 삼육구(number){
    let nums = number.toString().split('');
    let clap = [];

    for(let num of nums){
        if(num === '3' || num === '6' || num === '9'){
            clap.push('짝👏');
        }
    }

    return clap;
}

console.log(삼육구(369));
console.log(삼육구(1));
console.log(삼육구(31));























// function 삼육구(number){
//     let nums = number.toString().split('');
//     let clap = [];
//     for(let num of nums){
//         if(num === '3' || num === '6'|| num === '9'){
//             clap.push("짝👏");
//         }
//     }
//     return clap;
// }

// console.log(삼육구(999));