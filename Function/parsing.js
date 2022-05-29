const personOne = {
    name : "samandar",
    age : 20
}

function increasePorsonAge(person){
    person.age+=1
    return person
}

increasePorsonAge(personOne)
console.log(personOne);