import React from "react";

const ItemListContainer = (props) => {
    

    return(
        <div>
            <ul className="list-group App-header">
                <strong>{props.categoria}</strong>
            </ul>

            <ul className="list-group">
                {props.items.map (item => 
                    <li className="list-group-item list-group-item-action" key={item.id}>{item.marca} - '{item.nombre}': ${item.precio}
                        <ul >
                            <li className="list-group-item">
                                <img className="img-fluid" src={item.img} alt={item.nombre} />
                            </li>
                        </ul>
                    </li>                    
                )}
            </ul>
        </div>
    )
}

export default ItemListContainer;