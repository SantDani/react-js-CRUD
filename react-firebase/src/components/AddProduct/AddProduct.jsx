import React, { useEffect, useState } from 'react';
import {firestoreDB} from '../../firebaseConfig'

import { collection, addDoc } from "firebase/firestore";  // TODO Remove
import {  getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";  // TODO Remove
import { query, orderBy, limit } from "firebase/firestore" // TODO remove

import Product from './Product' // Export


const AddProduct = () => {

    const[nameProduct, setNameProduct] = useState('')
    const[priceProduct, setPriceProduct] = useState('')
    const[msgError, setMsgError] = useState('')
    

    const[listProducts, setListProducts] = useState([])
    const[isEdit, setIsEdit]= useState(false)
    const[productUpdate, setProductUpdate] = useState(null)
    

    const getProducts = async () => {
        const querySnapshot = await getDocs(collection(firestoreDB, "product"));
        
        const qOrderByName = query(collection(firestoreDB, "product"), orderBy('name'), limit(3))
        console.log('log qOrderByName', qOrderByName);
        let auxProducts = [];
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data().name} , ${doc.data().price}`);
            auxProducts.push(new Product(doc))
            
        })

        

        setListProducts(auxProducts)
        
    }


    useEffect(() => {
        getProducts();
    }, [])
    
    const newProduct = async (e) => {
        e.preventDefault();

        // console.log('log -', nameProduct, priceProduct);
        if(!nameProduct.trim()) {
            setMsgError('It is necessary to put the NAME of product')
            return;
        }

        if(!priceProduct.trim()) {
            setMsgError('It is necessary to put the PRICE of product')
            return;
        }

        if(isEdit){
            updateProduct()
            return
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

    

    function openEditProduct(product) {
        console.log('log - product', product.getDocument());
        // console.log('log - product data', product.getDocument().data());
        // await updateDoc(product.getDocument(), )
        setIsEdit(true);
        setNameProduct(product.getName())
        setPriceProduct(product.getPrice())
        setProductUpdate(product.getDocument())

        // console.log('log - value isEdit', isEdit);

    }

    async function  updateProduct(){
        console.log('log - run update to database');
        const products = doc(firestoreDB, 'product', productUpdate.id) 
        await updateDoc(products,{
            name: nameProduct,
            price: priceProduct
        })
        setIsEdit(false)
        setNameProduct('')
        setPriceProduct('')

        await getProducts();

    }

    async function removeProduct(product) {
        
        const document = product.getDocument()
        console.log('log - remove', doc);

        const docFirebase = doc(firestoreDB, 'product', document.id);
        console.log('log - load docFirebase', docFirebase);
        await deleteDoc(docFirebase) 
        // await getProducts();
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
                        onChange={(event => {setNameProduct(event.target.value)})}
                        value={ nameProduct }
                        />
                    <input 
                        type="number"  
                        className="form-control mt-2" 
                        placeholder="Price product. Ej. 51"
                        onChange={(event => {setPriceProduct(event.target.value)})}
                        value={ priceProduct}
                        />
                    <button
                        className="btn btn-dark btn-block form-control mt-4"
                        type="submit">
                        {
                            isEdit ? 'Update Product' : 'Add Product'
                        }
                    
                    </button>
                    {
                        isEdit
                    }
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
                                    <button className="btn btn-primary" onClick={() => openEditProduct(product)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => removeProduct(product)}>Remove</button>
                                </div>
                            </li>)
                    }
                </ul>
            </div>
            
            
        </div>
    );
};

export default AddProduct;