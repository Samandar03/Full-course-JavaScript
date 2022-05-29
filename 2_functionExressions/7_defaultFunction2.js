const multByFactor = function (valeu,multiplier){
    if(multiplier===undefined){
        multiplier= 1
        console.log('Нет значение');
        
    }
    return valeu*multiplier

}
console.log(multByFactor(10,50));
console.log(multByFactor(50));