const newPost = ( post, addedAt= Date())=> ({
    ...post,
    addedAt,


})

const firstPost = {
    id: 1245,
    author: 'Samandar',
}

const myFunctionObject = newPost(firstPost)

console.log(myFunctionObject);

// Post = firstPost