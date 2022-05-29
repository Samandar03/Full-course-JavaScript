const button = {
    width: 200,
    text:'Bey',
    x: {
        xA: '15',
        xB: '45',
        xC: '55'
    }
   
}
const redButton = {
    
    color1:'red',
    
}
button.text='11111111111111'

const button3 = {
    ...button,
    ...redButton,
    text:'Good',

    
}
console.log(button);
console.log(redButton);
console.log(button3);

button.width=300
button.x.xB=50
button.text='11111111111111'
