class Commend {
    constructor(text,text2,thote){
        this.text=text,
        this.text2=text2,
        this.thote=thote,
        this.votesQty=0
    }
    upvote(){
        this.votesQty+=1
        this.thote+=2
    }
    static TwoText(t1,t2){
    return `${t1},${t2}`
    }
}

const MyClass= new Commend ('SAMANDAR','Otabek',55)
console.log(MyClass.votesQty);
MyClass.upvote()
console.log(MyClass.votesQty);
console.log(MyClass);

console.log(Commend.TwoText('Samandar','Otabek'));