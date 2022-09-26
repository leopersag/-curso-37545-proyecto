import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart} = useContext(CartContext);
    const {cartPrecioTotal} = useContext(CartContext);
    const {delItem} = useContext(CartContext);
   const {cartTotal} = useContext(CartContext);

    return(
        <div className="m-5">
            {cartTotal()===0?<div><h2>Tu carrito está vacío</h2><h3>Elige algún producto de la <Link to={"/"}>lista</Link> para visualizarlo en esta sección</h3></div>:
            <table className="table table-hover align-middle mb-0">
                <thead className="table-light align-middle" style={{height:"60px"}}>
                    <tr>
                        <th scope="col" className="col-md-2">Imagen</th>
                        <th scope="col" className="col-md-3">Producto</th>
                        <th scope="col" className="col-md-1">Precio Unitario</th>
                        <th scope="col" className="col-md-1">Cantidad</th>
                        <th scope="col" className="col-md-1">Subtotal</th>
                    </tr>
                </thead>
                <tbody >
                    {cart.map (item => 
                        <tr key={item.id}>
                            <th scope="row"><img className="p-2" style={{width:"200px"}} src={item.img} alt={item.nombre} /></th>
                            <td>{item.marca} - '{item.nombre}'</td>
                            <td>${item.precio}</td>
                            <td>
                                <p>{item.cantidad}</p>
                                <button type="button" className="btn btn-outline-light btn-sm" onClick={()=>{delItem(item)}}>
                                    <img style={{width: 24}} src="../media/delete.png" alt="Del"/>
                                </button>
                            </td>
                            <td><strong>${item.precio*item.cantidad}</strong></td>
                        </tr>
                    )}
                 </tbody>
                <tfoot className="table-light align-middle" style={{height:"60px"}}>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th>Total:</th>
                        <th> ${cartPrecioTotal()}</th>
                    </tr>
                </tfoot>
            </table>}
        </div>
    )
};

export default Cart;

