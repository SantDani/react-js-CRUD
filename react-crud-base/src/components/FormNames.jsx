import { useState } from "react"
import uniqid from 'uniqid'

export default function FormNames(){

    const [name, setName] = useState('')
    const [listNames, setListUsers] = useState([]);

    const addName = (event) => {
        event.preventDefault(); // do not reload page
        if(validate()){
            console.log('Form not valid');
            return;
        }
        //setListNames(name);// overwrite value

        const user ={
            id: uniqid(),
            name: name
        }
        setListUsers([...listNames, user]);// push value to array
    }

    const validate = (event) => {
        //event.preventDefault(); // do not reload page
        
        
        if(!name.trim()){
            console.log('name is empty');
            return false // exit function
        }
        
        console.log('Form valid');
    }


    return(
        <div>
            <h2>List names work!</h2>
            <div className="row">
                <div className="col">
                    <h3>List names</h3>
                </div>
                <div className="col">
                    <h3>Form for add names</h3>
                    <form action="" className="form-group" onSubmit={(event) => addName(event)}>
                        <input 
                            id="" 
                            className="form-control mb-3" 
                            type="text"  
                            name="" 
                            placeholder="Name"
                            onChange={(event) => setName(event.target.value)}
                             />
                        <input 
                            className="btn btn-info btn-block form-control" 
                            type="submit" 
                            value="Register name"
                             />
                    </form>
                </div>
            </div>
        </div>
    )
}