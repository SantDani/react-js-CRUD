// https://jsonplaceholder.typicode.com/users

const getAllUsers = async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();
        console.log(data);
        

        data.forEach(element => {
            console.log(element.name);
        });
        
        console.log('');
        console.log('');
        data.map( user => {
            console.log(user.name);
        })

    } catch (e) {
        console.error(e);
    }
}



getAllUsers();