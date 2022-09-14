import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return(
        <div className="card text-bg-light col-md-11 p-3">
            <div className="row g-0 align-items-center">
                <div className="col-md-7">
                    <img className="img-fluid m-2" src={props.item.img} alt={props.item.nombre} />
                </div>
                <div className="col-md-5 text-start">
                    <div className="card-body">
                        <h4>{props.item.marca} - '{props.item.nombre}'</h4>
                        <h5>Precio: ${props.item.precio}</h5>
                        <p><b>Descripción:</b> {props.item.descripcion}</p>
                        <p><b>Stock:</b> {props.item.stock}</p>
                    </div>
                    <div className="card-footer text-muted">
                        <ItemCount stock={props.item.stock} />
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default ItemDetail;
