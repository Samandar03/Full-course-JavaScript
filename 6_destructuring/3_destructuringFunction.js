const userProfile = {
    name:'Samandar',
    commentsQty:20,
    hasSignedAgreement:true,
}

const userInfo = ({name,commentsQty}) =>{
    if(!commentsQty){
        return `User ${name} has no comments`
    }

    return  `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile) );