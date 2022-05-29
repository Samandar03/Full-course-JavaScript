class Comment{
    constructor(text){
        this.text=text,
        this.votesQty=0
    }

    upvote(){
        this.votesQty+=1
    }

    static mergeComments(first,second){
        return `${first}${second}`
    }
}

console.log(Comment.mergeComments('First Comment. ','Secound Commend'));

const MyClass = new Comment ('Samandar')

console.log(MyClass.mergeComments('1as','ass')); // error
