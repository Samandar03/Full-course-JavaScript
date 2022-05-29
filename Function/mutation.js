const personOne = {
    name: "Samandar",
    age: 20
    }
    
    
    function increasePersomAge(person){
        const updatePerson = Object.assign({},person)
        updatePerson.age +=1
        return updatePerson
    
    }
    
    const updatePersonOne = increasePersomAge(personOne)
    console.log(personOne.age);
    console.log(updatePersonOne.age);   
    
    
    
    