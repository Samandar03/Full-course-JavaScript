const myArray = ['Apple','Banana']

const fuirts = ([fuirtsOne,fuirtsTwo]) => {
    if(!fuirtsTwo){
        return `Fuirts ${fuirtsOne} no`
    }

    return `Fuirts ${fuirtsOne} ${fuirtsTwo}`

}

console.log(fuirts(myArray));