const getData = async (url) =>{
    const res = await fetch(url)
    const json = await res.json()
    return json
}
 const url = 'https://jsonplaceholder.cypress.io/todos/2';
 const data = await getData(url)
 console.log(data);

//  нет обработка