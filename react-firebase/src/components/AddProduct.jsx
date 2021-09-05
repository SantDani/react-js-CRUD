import React, { useState } from 'react';

const AddProduct = () => {

    const[nameProduct, setNameProduct] = useState('')
    const[priceProduct, setPriceProduct] = useState('')
    const[msgError, setMsgError] = useState('')

    
    const newProduct = (e) => {
        e.preventDefault();

        if(!nameProduct.trim()) {
            setMsgError('It is necessary to put the name of product')
            return;
        }

        if(!priceProduct.trim()) {
            setMsgError('It is necessary to put the Price of product')
            return;
        }

    }

    return (
        <div className="row mt-2">
            
            {/* Form with name product and price
            
                    Manage errors*/}
            
            <div className="col m-2">
                <h3>New product</h3>
                <form 
                    onClick={(event) => {newProduct(event)}}
                    className="form-group"
                    >
                    <input type="text" className="form-control" placeholder="Name Product"/>
                    <input type="number"  className="form-control mt-2" placeholder="Price product. Ej. 51"/>
                    <button
                        className="btn btn-dark btn-block form-control mt-4">
                        Add Product
                    </button>
                </form>
            </div>
            <div className="col m-2">
                <h3>List Recent</h3>
            </div>
            {/* <div className="col "></div> */}
            
        </div>
    );
};

export default AddProduct;