class Comment {
    constructor(text){
        this.text=text,
        this.votesQty=0
    }

    upvote(){
        this.votesQty+=1
    }
}

const firstComment = new Comment('First comment')


console.log(firstComment);

firstComment.upvote()
firstComment.upvote()

console.log(firstComment);


console.log(firstComment.text);
console.log(firstComment.votesQty);