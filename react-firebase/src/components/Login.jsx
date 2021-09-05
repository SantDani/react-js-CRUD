import { useState } from 'react'
import {useHistory} from 'react-router-dom'

import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword
 } from './../firebaseConfig.js'

import "firebase/auth"


export default function Login(){

    const [inputEmail, setInputEmail] = useState('santiago@gmail.com')
    const [inputPassword, setInputPassword] = useState('123456789')
    const [msgError, setMsgError] = useState('')
    const [waitingLogin, setWaitingLogin] = useState(false)

    const history = useHistory();
    
    const registerUserWithEmail = (event) => {
        event.preventDefault();
        // console.log('log - register', inputEmail, inputPassword);
        try {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, inputEmail, inputPassword).then((userCredential) =>{
                // const user = userCredential.user;
                // console.log('log - user Register', user);
                setMsgError('')
                history.push('/')
            }).catch((e) => {
                // const errorCode = e.code;
                const errorMessage = e.message;
                // alert(errorMessage, errorCode);
                console.error(e);
                
                
                setMsgError(formatMessageToFriendly(errorMessage))

            })
        } catch (e) {
            console.error(e);
        }
    }

    const loginWithEmail  = (event) =>{
        event.preventDefault()

        try {
            setWaitingLogin(true)
            const auth = getAuth()
            signInWithEmailAndPassword(auth, inputEmail, inputPassword)
                .then((userCredential) => {
                    const user = userCredential.user;

                    console.log('log - ', userCredential, user);
                    // Log when userCredential.operationType = signIn
                    setMsgError('')
                    setWaitingLogin(false)
                    history.push('/')
                }).catch((e) =>{
                    console.error(e);
                    setMsgError(formatMessageToFriendly(e.message))
                    setWaitingLogin(false)
                })

        } catch (e) {
            console.error(e); 
        }
    }
    return(
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form  className="form-group" >
                {/* <form action={registerUser} className="form-group" > */}
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Name"
                        onChange={(event) => {setInputEmail(event.target.value)} }
                         />
                    <input 
                        type="password" 
                        className="form-control mt-2"  
                        placeholder="Password"
                        onChange={(event) => {setInputPassword(event.target.value)}}
                        />
                  

                    <button
                        className="btn btn-secondary btn-block form-control mt-4"
                        onClick={(event) => {registerUserWithEmail(event)}}>
                        Register
                    </button>

                    
                    {
                        waitingLogin ? 
                        (
                            <button
                                className="btn btn-light btn-block form-control mt-4">
                                <div class="spinner-border text-dark" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            </button>
                            
                            
                        ) : 
                        (
                            <button
                                className="btn btn-dark btn-block form-control mt-4"
                                onClick={(event) => {loginWithEmail(event)}}>
                                Login
                            </button>
                        )
                    }
                    
                    {
                        msgError && <div className="alert alert-danger mt-2">{msgError}</div>
                    }
                </form>

            </div>
            <div className="col"></div>
        </div>
    )

    function formatMessageToFriendly(errorMessage) {
        // flag g = global
        // flag i = ignore case
        return errorMessage.replace(/[^a-zA-Z ]|firebase|error|auth/gi, " ")
    }
}