class Comment{
    constructor(text){
        this.text=text,
        this.votesQty=0
    }
    upvote(){
        if (secondComment.votesQty===thirdCommend.votesQty) {
            this.votesQty+=5**4
        }
        // this.votesQty+=5**4
    }
}

const firstComment = new Comment('first Comment')
const secondComment = new Comment('second Comment')
const thirdCommend = new Comment('Third Comment ')
console.log(thirdCommend);
thirdCommend.upvote()

console.log(thirdCommend);
console.log(secondComment);
console.log(firstComment);