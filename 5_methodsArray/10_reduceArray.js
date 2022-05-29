let myArray = [1,2,3,4]
let element=0
for (let index = 0; index < myArray.length; index++) {
     
     element += myArray[index];
    
}

console.log(element);

let twoElement = myArray.reduce((prev,item,index)=>prev+item+index,1) // index = elementi array
console.log(twoElement);

let twoArray = [4,5,2,12,7,9,55,666,41]
let numbersMax= twoArray[0]
for (let index = 0; index < twoArray.length; index++) {
     if (numbersMax < twoArray[index]) {
        numbersMax = twoArray[index];
     }
    
}
console.log(numbersMax);

let numbersMan2 = twoArray.reduce((prev, item)=>{
    if (prev < item ) {
     return item

    }
    else{
        return prev
    }
},) 

console.log(numbersMan2);


let firstArray = [22,31,71,444444,2226,1,23,55]
let xElement=firstArray[0]
let t =0
for (let index = 0; index < firstArray.length; index++) {
     if (firstArray[index] < xElement) {
        xElement
     }else{
         xElement=firstArray[index]
         t = index
     }
    
}
console.log([t,xElement]);




let bot = firstArray.reduce((prev,item,index)=>{
    if (prev[1] < item) {
        return [index,item]
    }else{
        return prev
    }

}, [0,firstArray[0]])

console.log(bot);

const nowArray = [[1,2,3],[3,4,5],[5,6,7]]

let threeNowArray = nowArray.reduce((prev,item)=> {
    
    return prev.concat(item)

})

console.log(threeNowArray);
