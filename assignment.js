function findMax(numbers) {
  
  if (numbers.length === 0) {
    return undefined;
  }

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    
    if (numbers[i] > max) {
      max = numbers[i];
    }
    
  }
  return max;
}
console.log(findMax([3, 12, 7, 2, 25, 8])); 
console.log(findMax([7, 87, 89, 0, -100]));
console.log(findMax([]));
