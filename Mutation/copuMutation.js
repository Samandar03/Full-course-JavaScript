const person = {
    name: 'Samandar',
    age:20,
    isAdult: true
   }
   
   const person2=person
   person2.age=25
   person2.name='Saman'
   person2.isAdult=false
   
   console.log(person.age); //25
   console.log(person.name);//Saman
   console.log(person.isAdult); // false