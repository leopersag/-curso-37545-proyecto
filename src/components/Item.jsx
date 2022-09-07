import React from "react";
import ItemCount from "./ItemCount";

const Item = (props) => {

    return(
        <div className="card">
            <img className="img-fluid m-2" src={props.item.img} alt={props.item.nombre} />
            <div className="card-body">
                <h4>{props.item.marca} - '{props.item.nombre}'</h4>
                <h5>Precio: ${props.item.precio}</h5>
                <p>Stock: {props.item.stock}</p>
                <div className="card-footer text-muted">
                    <ItemCount stock={props.item.stock} />
                </div>
            </div>
        </div>   
    )
}

export default Item;
