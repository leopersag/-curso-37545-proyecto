import React from "react";

const Item = (props) => {

    return(
        <div className="card">
            <img className="img-fluid m-2" src={props.item.img} alt={props.item.nombre} />
            <div className="card-body">
                <h4>{props.item.marca} - '{props.item.nombre}'</h4>
                <h5>Precio: ${props.item.precio}</h5>
                <div className="card-footer text-muted">
                    <button className="btn btn-primary">Detalles</button>
                </div>
            </div>
        </div>   
    )
}

export default Item;
