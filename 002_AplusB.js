//a부터 b까지 합을 구하는 함수

function sumAll(a, b){
    let sum = 0;
    for(let i=a; i<=b; i++){
        sum += i;
    }
    return sum;
}

console.log(`6에서 20까지의 합은 ${sumAll(6, 20)}입니다.`)