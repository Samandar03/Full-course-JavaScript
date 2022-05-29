const getData = async (url)=> {
    const res = await fetch(url) 
    const json = await res.json()
    return json
}

getData('https://jsonplaceholder.cypress.io/todos/2')
.then(data => console.log(data))
.catch(error => console.log(error.massage))