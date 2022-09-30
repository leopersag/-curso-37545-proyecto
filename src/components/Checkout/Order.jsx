import React from "react";
import {Link} from "react-router-dom";

const Order = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="fs-1 mt-4">Felicitaciones!</h2>
                    <img className="img-fluid w-50" src="../../media/shipping1.gif" alt="paquete" />
                    <p className="fs-4 m-0">La orden se generó con el ID: <br /><b className="fs-2">{props.orden}</b></p>
                    <p className="fs-6 mb-4">(Te enviaremos el ID y los datos de tu compra a tu mail)</p>
                    <Link className="btn btn-primary" to={"/"}>Volver al inicio</Link>
                </div>
            </div>
        </div>
    )
};

export default Order;