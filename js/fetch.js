
// Open inde.html in browser
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( response => response.json())
    .then(json => console.log(json))
    .catch(e => console.log(e))  