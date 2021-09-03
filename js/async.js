/* fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( response => response.json())
    .then(json => console.log(json))
    .catch(e => console.log(e))   */

// async =  create a child thread
const getUser = async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}

getUser();