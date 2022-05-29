const myArray = [true,10,'abc',null]

for(key in myArray){
    console.log(key,myArray[key]);
}

myArray.forEach((keys,element)=> console.log(element,keys))