const myArray = [1,2,3]
console.log(myArray);

const newArray = myArray.map(el => el*3)
console.log(newArray);
console.log(myArray);

const newArray2 = myArray.map((el) => {
   return el**9
   })

   console.log(newArray2);

   const newArray3 = myArray.map(function (el){
    return el**9/10
    })
 
    console.log(newArray3);
    