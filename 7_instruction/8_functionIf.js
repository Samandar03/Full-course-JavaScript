const myFunction = (NumberOne,NumberTwo) =>{
    if(typeof NumberOne !== 'number' || typeof NumberTwo !== 'number'){
        return 'No number'
    }
    if(NumberOne<=0 || NumberTwo<=0){
       return 'No passiv'
    }

    return NumberOne+NumberTwo
}

console.log(myFunction(true,'Samandar'));
console.log(myFunction(10,-5));
console.log(myFunction(10,75)); 