import { useState } from "react"
import uniqid from 'uniqid'


import './style.css'

export default function FormNames(){

    const [inputName, setName] = useState('')
    const [isEdit, setIsEdit] = useState('')
    const [id, setId] = useState('')
    const [error, setError] = useState(null)
        
    

    const generateMockUsers = () => {
        const mockName = ['Santiago', 'Segura', 'Armando', 'Guerra', 'Segura', 'Vegeta', 'Jordi', 'Viego', 'Lulu'];

        return mockName.map( name => {

            return newUser(name);
        })

    }
    
    const newUser = (name) => {
        return {
            id: uniqid(),
            name: name
        }
    }

    const [listUsers, setListUsers] = useState(generateMockUsers())

    const addUser = (name) => {
        const user = {
            id: uniqid(),
            name: name
        };
        setListUsers([user, ...listUsers]); // push value to array
        setName('');
        setError(null)
    }

    const addName = (event) => {
        
        if (event) event.preventDefault(); // do not reload page
        if(!formValid()){
            
            console.log('Form not valid');
            return;
        }
        // setlistUsers(name);// overwrite value

        addUser(inputName);
    }

    const formValid = (event) => {
        //event.preventDefault(); // do not reload page
        
        // console.log('log - trim', inputName.trim());
        if(!inputName.trim()){
            
            console.log('name is empty');
            setError('name is empty')
            return false // exit function
        }

        return true
        
        // console.log('Form valid');
    }

    const deleteName = (id) => {
        const usersFilter = listUsers.filter(user => user.id !== id)
        setListUsers(usersFilter);
    }

    const edit =(item) => {
        setIsEdit(true)
        setName(item.name)
        setId(item.id)
    }
 
    const editName = (event) =>{
        event.preventDefault();
        console.log('new name is ', inputName);
        const auxUsers = listUsers.map(user => user.id === id ? {id: user.id, name: inputName} : user )
        setListUsers(auxUsers)
        setIsEdit(false)
        setName('')
        
    }
    

    return(
        <div>
            <h2>List names work!</h2>
            <div className="row">
                <div className="col">
                    <h3>List names</h3>
                    <ul className="list-group">
                        {
                            listUsers?.map(item => 
                                <li key={item.id} className="list-group-item flex-row"> 
                                    {item.name} 
                                    <div>
                                        <button
                                            className="btn btn-danger "
                                            onClick={() => deleteName(item.id)}
                                        >Delete</button>
                                        <button
                                            className="btn btn-primary "
                                            onClick={() => edit(item)}
                                        >Edit</button>
                                    </div>
                                    
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h3>Form for add names</h3>
                    <form action="" 
                        className="form-group" 
                        onSubmit={(event) => isEdit ? editName(event) : addName(event)}>
                        <input 
                            id="" 
                            className="form-control mb-3" 
                            type="text"  
                            name="" 
                            placeholder="Name"
                            onChange={(event) => setName(event.target.value)}
                            value={inputName}
                             />
                        <input 
                            className="btn btn-info btn-block form-control" 
                            type="submit" 
                            value={ isEdit ? 'Edit name' : 'Register name'}

                             />
                             {
                        error !== null ? (
                            <div className="form-control alert alert-danger mt-1">
                                {error}
                            </div>
                        ): <div></div>
                    }
                    </form>
                    
                </div>
            </div>
        </div>
    )
}


