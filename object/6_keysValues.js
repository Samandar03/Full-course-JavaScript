const myObject = {
    x: 10,
    y: true,
    z:'abc',
}

Object.keys(myObject).forEach(key=> console.log(key,myObject[key]))

Object.values(myObject).forEach(values =>{
    console.log(values);
})