import  React, { useContext, useState } from "react";
import { CartContext } from "./Context/Context";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
    const {addItem} = useContext(CartContext);

    const [counter,setCounter] = useState(0);
    const onAdd = (counter) => {
        setCounter(counter);
        addItem (props.item, counter);
    }

    return(
        <div className="card text-bg-light col-md-11 m-3">
            <div className="row g-0 align-items-center">
                <div className="col-md-7 p-2">
                    <img className="img-fluid" src={props.item.img} alt={props.item.nombre} />
                </div>
                <div className="col-md-5 text-start">
                    <div className="card-body">
                        <h4>{props.item.marca} - '{props.item.nombre}'</h4>
                        <h5>Precio: ${props.item.precio}</h5>
                        <p><b>Descripción:</b> {props.item.descripcion}</p>
                        <p><b>Stock:</b> {props.item.stock}</p>
                    </div>
                    <div className="card-footer text-muted text-center">
                        {counter ===0 ? <ItemCount item={props} stock={props.item.stock} onAdd={onAdd}/> : <Link to={"/cart"} className="btn btn-dark">Ir al Carrito</Link>}
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default ItemDetail;
