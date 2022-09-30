import React from "react";
import { Link } from "react-router-dom";

const AddCarrito = () => {

    return(
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <Link to={"/"} className="btn btn-outline-secondary btn-sm col-auto">Seguir comprando</Link>
            </div>
            <div className="row p-2 justify-content-center">
                <Link to={"/cart"} className="btn btn-dark col-auto">Ir al Carrito</Link>
            </div>
        </div>
    )
};

export default AddCarrito;