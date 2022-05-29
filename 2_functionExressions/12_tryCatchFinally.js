function myFunction () {
    const  a=10
     const b=11
      a=b
      console.log(myFunction());
      return b
    
  }
  
  
  try{
      myFunction()
  }catch(error){
      console.error(error);
      console.log('Ok');
  }finally{
      console.log('Good');
  }
  console.log('Samandar');