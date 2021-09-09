import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailProduct = () => {
    const {id, name, cost} = useParams()
    
    return (
        <div className="container">
            <h1>{name}</h1>
            <h2>{cost} Euros</h2>
            <p>ID {id}</p>
            <section>
                {/* <Link className="nav-link" to="/detail-product/111">
                    <button className="btn btn-dark  form-control mt-4"> ID
                    </button></Link>
                <Link className="nav-link" to="/detail-product/222/GTX-3900">
                    <button className="btn btn-dark  form-control mt-4"> name</button>
                </Link> */}
                <Link className="nav-link" to="/detail-product/123456/GTX-3900/1500">
                    <button className="btn btn-dark  form-control mt-4"> cost</button>
                </Link>
            </section>
        </div>
    );
};

export default DetailProduct;