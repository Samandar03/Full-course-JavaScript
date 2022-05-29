function myFn(a){
    console.log(a);
}

const b = true

let c=10
myFn(2+5)
myFn(b)
myFn(c=c+1)

try{
myFn(c=c+1)
}catch(error){
  console.log('NO function');
}

try{
    myFn(let )
    }catch(error){
      console.error('NO function');
    }