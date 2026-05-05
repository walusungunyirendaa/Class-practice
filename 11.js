function fizzBuzz(){
    for(let i = 1; i <= 30; i++){
        const isDivisilbleBy3 = i%3===0;
        const isDivisilbleBy5 = i%5===0;
        if (isDivisilbleBy3 && isDivisilbleBy5){
            console.log("fizzBuzz");
        } else if (isDivisilbleBy3){
            console.log("Fizz");
        } else if (isDivisilbleBy5){
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(30);