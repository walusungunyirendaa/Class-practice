function findLargest(numbers){
    let max = numbers[0];
    for(let i = 1; i<numbers.length; i++){
        if(numbers[i]>max){
            max = numbers[i];
        }
    }
    return max;
}
console.log(findLargest([3,17,18,22,5]));

function findSmallest(numbers){
    let min = numbers[0];
    for(let i = 1; i<numbers.length; i++){
        if(numbers[i]<min){
            min = numbers[i];
        }
    }
    return min;
}
console.log(findSmallest([3,17,18,22,5]));