import React from "react";
import {Link} from "react-router-dom";

const Item = (props) => {

    return(
        <div className="card">
            <Link to={"/item/"+props.item.id}>
                <img className="img-fluid p-2" src={props.item.img} alt={props.item.nombre} />
            </Link>
            <div className="card-body">
                <h4>{props.item.marca} - '{props.item.nombre}'</h4>
                <h5>Precio: ${props.item.precio}</h5>
                <div className="card-footer text-muted">
                    <Link className="btn btn-primary" to={"/item/"+props.item.id}>Detalles</Link>
                </div>
            </div>
        </div>   
    )
}

export default Item;
