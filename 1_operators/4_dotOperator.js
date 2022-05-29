const button = {
    width: 200,
    text:'Bey',
    colors:{
        color1: 'black',
        color2: 'blue',
        color3: 'wtile'
    }
}
const redButton = {
    ...button,
    color:'red'
}


const button3 = {
    ...button,
    text:'Good',
    colors:{
        color1: 'black',
        color2: 'ble',
        color3: 'wtile'
    }
}

console.log(redButton);
console.log(button);
console.table(button3);