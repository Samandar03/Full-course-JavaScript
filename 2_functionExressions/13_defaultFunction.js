const myFn = (err,year=Date())=>({
    ...err,
    year,
  
})
let myNameAge = {
    name:'Samandar',
    age:20
}
const x= console.log(myFn(myNameAge));

console.log(x);
