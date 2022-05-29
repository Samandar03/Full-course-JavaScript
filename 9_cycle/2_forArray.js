const myArray = ['first','second','third','','','']

for(i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}

const myArrayForEach = ['first','second','third']
myArrayForEach.forEach((element,index)=>{
    console.log(element,index);
    
}) 