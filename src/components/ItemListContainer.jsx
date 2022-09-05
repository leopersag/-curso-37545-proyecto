import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    

    return(
        <div>
            <ul className="list-group App-header">
                <strong>{props.categoria}</strong>
            </ul>

            <div className="d-flex flex-wrap justify-content-center">
                {props.items.map (item => 
                    <div className="card w-50 m-3"  key={item.id}>
                        <img className="img-fluid m-2" src={item.img} alt={item.nombre} />
                        <div className="card-body">
                            <h4>{item.marca} - '{item.nombre}'</h4>
                            <h5>Precio: ${item.precio}</h5>
                            <p>Stock: {item.stock}</p>
                            <div className="card-footer text-muted">
                                <ItemCount stock={item.stock} />
                            </div>
                        </div>
                    </div>                    
                )}
            </div>
        </div>
    )
}

export default ItemListContainer;