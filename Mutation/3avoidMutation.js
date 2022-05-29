const person = {

    name : "Samandar",
    age: 20,
    color: {
        
            color1: 'blue',
            color2:'Red',
            color3:'black'
        }
    


}

const person2 = JSON.parse(JSON.stringify(person))

person2.name='Saman'

person2.color.color3='orage'

console.log(person);
console.log(person2);
console.log(person2.name);//Saman
console.log(person2.color.color3);//orage
console.log(person.color.color3); //black
