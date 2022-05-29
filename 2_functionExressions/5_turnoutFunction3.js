const name= 'Samandar'
const lastNmae= 'Ibragimov'



const myFunction = (year,birthday) => name+' '+lastNmae+' '+(year-birthday)
console.log(myFunction(2022,2000));

const goFunction = century => {
    year=century*100
    month=year*12
    deay=month*30


    return 'Century: '+century+'   Year: '+ year+'   month: '+month+'   day: '+deay

}

console.log(goFunction(1.5));