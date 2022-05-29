const asyncFn = async ()=> {
    return 'Success'
    }
    asyncFn()
     .then(velve => console.log(velve))
     
    
    
    
     const asyncFn2 = async ()=> {
        throw new Error('There was an error!')
        }
      asyncFn2()  // console.log(asyncFn2()); не возможна
     .then(velve => console.log(velve))
     .catch(error => console.log(error))
    
    //   console.log(asyncFn2())
    //   .then(velve => console.log(velve))
    //   .catch(error => console.log(error)) не возможна