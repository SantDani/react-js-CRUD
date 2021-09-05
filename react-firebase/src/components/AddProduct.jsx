import React, { useEffect, useState } from 'react';
import {firestoreDB} from './../firebaseConfig'

import { collection, addDoc } from "firebase/firestore";  // TODO Remove
import {  getDocs } from "firebase/firestore";  // TODO Remove


const AddProduct = () => {

    
    const[nameProduct, setNameProduct] = useState('')
    const[priceProduct, setPriceProduct] = useState('')
    const[msgError, setMsgError] = useState('')

    const[listProducts, setListProducts] = useState([])

    const getProducts = async () => {
        const querySnapshot = await getDocs(collection(firestoreDB, "product"));

        let auxProducts = [];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().name} , ${doc.data().price}`);
            auxProducts.push({id: doc.id, name: doc.data().name, price: doc.data().price})
            
        })

        setListProducts(auxProducts)
        console.log('log - auxProducts', auxProducts);
    }


    useEffect(() => {
        
        getProducts();
    }, [])
    
    const newProduct = async (e) => {
        e.preventDefault();
        console.log('log -', nameProduct, priceProduct);
        if(!nameProduct.trim()) {
            setMsgError('It is necessary to put the NAME of product')
            return;
        }

        if(!priceProduct.trim()) {
            setMsgError('It is necessary to put the PRICE of product')
            return;
        }

        setMsgError('')

        try {
            
            const docRef = await addDoc(collection(firestoreDB, "product"), {
                "name" : nameProduct,
                "price" : priceProduct,
            })

            console.log('Document Write with ID ', docRef.id);

            getProducts();
        } catch (error) {
            console.error(e);
            
        }
        
    }

    return (
        <div className="row mt-2">
            
            {/* Form with name product and price
            
                    Manage errors*/}
            
            <div className="col m-2">
                <h3>New product</h3>
                <form 
                    onSubmit={(event) => {newProduct(event)}}
                    className="form-group"
                    >
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Name Product"
                        onChange={(event => {setNameProduct(event.target.value)})}/>
                    <input 
                        type="number"  
                        className="form-control mt-2" 
                        placeholder="Price product. Ej. 51"
                        onChange={(event => {setPriceProduct(event.target.value)})}/>
                    <button
                        className="btn btn-dark btn-block form-control mt-4"
                        type="submit">
                        Add Product
                    
                    </button>
                    {
                        msgError && <label className='form-control alert alert-danger mt-2'>{msgError}</label>
                    }
                </form>
            </div>
            <div className="col m-2">

                <h3>List Recent</h3>
                <ul className="list-group list-group-flush">
                    {
                        listProducts?.map(product => 
                            <li key={product.id} className="list-group-item list-group-item-action">
                                {product.name}  - {product.price} €
                                <div className="d-flex justify-content-around">
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger ">Remove</button>
                                </div>
                            </li>)
                    }
                </ul>
            </div>
            
            
        </div>
    );
};

export default AddProduct;