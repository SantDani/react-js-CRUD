import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {getAuth, onAuthStateChanged} from './../firebaseConfig'
import {useHistory} from 'react-router-dom'

const Menu = () => {
    const history = useHistory()
    const [loggedUser, setLoggedUser] = useState(null)
    const [loggedAdmin] = useState(null)

    useEffect(() =>{
        // in loggedUser save email if he is logged
        onAuthStateChanged(getAuth(), (user) =>{
            if(user){
                setLoggedUser(user.email)
            }

            console.log('log - changes in user', user?.email);
        })

        
        
    }, [])

    const logOut =() =>{
        getAuth().signOut()
            .then(() => {
                // console.log('log - Sing Out OK!');
                setLoggedUser(null)
                history.push('/login')
            }).catch((e) => {
                console.error(e);
                // console.log('log - Sing Out FAIL');
            })
    }

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/new-product">New Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/detail-product">Detail Product</Link>
                    </li>
                    
                    {
                        !loggedUser && 
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                    }
                    {   
                        loggedAdmin && 
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li> 
                    }
                    
                </ul>
                {
                    loggedUser && 
                        <button
                            style={{
                                marginLeft: "auto",
                                marginRight: "1rem"
                            }}
                            className="btn btn-danger"
                            onClick={logOut}>
                            Log out
                        </button>
                }
            </nav>
        </div>
    );
};

export default Menu;