
  fetch('https://jsonplaceholder.cypress.io/todos/1')
.then(response => {
    console.log(response);
    return response.json()
} )
.then(json => console.log(json))
.catch(error => console.error(error))