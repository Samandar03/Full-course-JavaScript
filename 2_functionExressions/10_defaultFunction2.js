const date = Date()
const myData ={
    id: 1475,
    author: 'Samandar',
}

const defaults = {
    ...myData,
    date,
}

console.table(defaults);