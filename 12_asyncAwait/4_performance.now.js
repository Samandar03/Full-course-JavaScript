const timerPromise = ()=>
new Promise ((resolve,reject)=>
 setTimeout(()=> resolve(),2000)
)

const asyncFn = async () =>{
  console.log('Timer starts');
  const startsTimer = performance.now()
  await timerPromise() 
  const enstTime = performance.now()
  console.log('Time ended',enstTime-startsTimer)
}

asyncFn()
