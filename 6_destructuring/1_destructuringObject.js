const userProfile = {
    name: 'Samandar',
    commentsQty: 20,
    hasSignedAgreement: false,
}

const {name,commentsQty,hasSignedAgreement} = userProfile

console.log(name,commentsQty,hasSignedAgreement);


const userProfile2 = {
    name2: 'Doni',
    commentsQty2: 22,
    hasSignedAgreement2: true,
}

const {name2,commentsQty2} = userProfile2
const {hasSignedAgreement2} = userProfile2

console.log(name2);
console.log(commentsQty2,hasSignedAgreement2);
