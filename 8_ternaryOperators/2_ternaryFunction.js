const myFunction = (velue1,velue2) => {
    return velue1+velue2
}

const myFunction2 = (velue1,velue2) => {
    return velue1-velue2
}

const velue1 = 11
const velue2 = 55

velue1 && velue2 
  ? console.log(myFunction(velue1,velue2))
  : console.log( myFunction2(velue1,velue2))