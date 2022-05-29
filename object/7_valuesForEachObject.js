const myObject = {
    name: 'Samandar',
    age: 20,
    year: 2020,
}

Object.values(myObject).forEach(element =>{
    console.log(element);
})

Object.keys(myObject).forEach(element =>{
    console.log(element);
})



for (const prop of myObject) {
    console.log(prop);
} // Error
