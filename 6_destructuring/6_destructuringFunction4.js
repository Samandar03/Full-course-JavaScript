const myArray = ['Apple','Banana']
const newFunction = ()=>{
    const [AppleOne,BananaTwo]= myArray
    if(!BananaTwo){
        return `fuirts ${AppleOne} no`
    }
    return `fuirts ${AppleOne} ${BananaTwo}`
}

console.log(newFunction(myArray));