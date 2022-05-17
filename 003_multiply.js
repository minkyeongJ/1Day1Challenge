// a에서 b까지 곱구하기

function multiAll(a,b){
    let multi = 1;
    for(let i=a; i<=b; i++){
        multi = multi * i;
    }
    return multi;
}

console.log(`2에서 5까지의 곱은 ${multiAll(2,5)}입니다.`)