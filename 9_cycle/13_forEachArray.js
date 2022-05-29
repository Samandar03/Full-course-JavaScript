const myArray=[true,10,'abc']

myArray.forEach(element =>{
    console.log(element);
})

const myArray2=[true,10,'abc']

myArray2.forEach((element,keys) =>{
    console.log(element,keys);
})