import { useState } from 'react'

import { getAuth, createUserWithEmailAndPassword} from './../firebaseConfig.js'

import "firebase/auth"


export default function Login(){
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [msgError, setMsgError] = useState('')

    
    const registerUser = (event) => {
        event.preventDefault();
        console.log('log - register', inputEmail, inputPassword);
        try {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, inputEmail, inputPassword).then((userCredential) =>{
                const user = userCredential.user;
                console.log('user Register', user);
                setMsgError('')
            }).catch((e) => {
                // const errorCode = e.code;
                const errorMessage = e.message;
                // alert(errorMessage, errorCode);
                console.error(e);
                // flag g = global
                // flag i = ignore case
                const errorMessageFriendly = errorMessage.replace(/[^a-zA-Z ]|firebase|error|auth/gi, " ")
                setMsgError(errorMessageFriendly )

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
                        className="btn btn-dark btn-block form-control mt-4"
                        onClick={(event) => {registerUser(event)}}>
                        Register
                    </button>
                    
                    {
                        msgError && <div className="alert alert-danger mt-2">{msgError}</div>
                    }
                </form>

            </div>
            <div className="col"></div>
        </div>
    )
}