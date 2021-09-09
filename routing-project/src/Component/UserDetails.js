import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const UserDetails = () => {

    const param = useParams()
    // console.log('log - param', param)
    const[user, setUser] = useState(null)

    const getUsers = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${param.id}`)
        const detailsUser = await response.data
        // setUser(detailsUser)
        // console.log('log - details user', detailsUser)
        setUser(detailsUser)
    }

    useEffect(() =>{
        getUsers().catch(e => console.error(e))

        const array1 = [1 , 2, 3, 4, 5]
        const array2 = ['a' , 'b', 'c', 'd', 'e']
        // Spread
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        const arrayAux = [...array1, ...array2]

        console.log('log - array Aux', arrayAux)
    }, [])


    return (
        <div>
            {/*Details user work {param.id}*/}
            <div>
                <h2 >{user?.name}</h2>
                {/*<p>{user?.name}</p>*/}
                <p>Email :  {user?.email}</p>
                <p>Phone : {user?.phone}</p>
                <p>Website : {user?.website}</p>
            </div>
        </div>
    );
}

export default UserDetails;
