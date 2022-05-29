let month = 2

switch (month && month-1) {
    case 12 : {
        console.log('Декабрь');
        break
    }
    case 1 : {
        console.log('Январь');
        break
    }
    case 2 : {
        console.log('Фебраль');
        break
    }
    default:{
        console.log("Это не зимний месяц");
    }
}


