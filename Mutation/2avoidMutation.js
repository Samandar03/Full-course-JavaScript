const person = {
    name:'Samandar',
    age:20,
    fruit: {
        apple:2,
        banan:5
    }
}

const person2= {...person}

person2.age=25
person2.fruit.apple=5

console.log(person2.age); //25
console.log(person.age);//20
console.log(person2.fruit.apple);//5
console.log(person.fruit.apple);//5
