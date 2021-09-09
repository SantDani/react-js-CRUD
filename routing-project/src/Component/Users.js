import React, {useEffect, useState} from 'react';
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch, // Fo change between pages
    Route, // It is a router. It is necessary for one for page
    Link // It for send to other page, basic one link <a></a>
} from "react-router-dom";

function Users(props) {
    const[users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = await response.data
        setUsers(users)
    }

    useEffect(() =>{
        getUsers().catch(e => console.error(e))
    }, [])


    return (
        <div>
            <h1>List users</h1>
            {
                users.map( user => (
                    <div key={user.id}>
                        <Link  to={`/user/${user.id}`}> <p>{user.name}</p></Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;
