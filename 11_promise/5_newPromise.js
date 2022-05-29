const getData = (x) =>
new Promise ((resolve,reject)=>
  fetch(x)
  .then(response =>{
    console.log(response);
    return response.json()
    })
  .then(data => resolve(data))
  .catch(not => reject(not))
  )

  getData('https://jsonplaceholder.cypress.io/todos/1')
  .then(ok => console.log(ok))
  .catch(error =>console.log(error))