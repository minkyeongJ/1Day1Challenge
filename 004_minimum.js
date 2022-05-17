// 최솟값 구하기

function min(array){
    let output = array[0];
    for(const item of array){
        if(output > item){
            output = item;
        }
    }
    return output;
}

console.log(`제일 작은 수는? ${min([35, 4, 9, 10, 143, 2])}`);