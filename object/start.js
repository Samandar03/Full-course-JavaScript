const myCity = {
    city : 'New York',
    country : 'USA',
    popular : true ,
   
}
myCity.country='Uzb'
myCity.city="Tashkend"
console.log(myCity);

myCity.hh='headhander'
console.log(myCity.city);
console.log(myCity.country);
console.log(myCity.popular);
console.log(myCity);

delete myCity.city

console.log(myCity);


const myCity = {
    city: 'Astana',
    country: 'Kz',
    popular: true
}

const constMyCity = 'Const Astana'

myCity[constMyCity]='Sass'

delete myCity['Const Astana']

console.log(myCity);