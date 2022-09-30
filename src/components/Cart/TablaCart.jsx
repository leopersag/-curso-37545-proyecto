import React, { useContext } from "react";
import { CartContext } from "../Context/Context";



const TablaCart = () => {    
    const {cart, cartPrecioTotal, delItem} = useContext(CartContext);

    return(
        <table className="table table-hover align-middle mb-0">
            <thead className="table-light align-middle" style={{height:"60px"}}>
                <tr>
                    <th scope="col" className="col-md-3">Imagen</th>
                    <th scope="col" className="col-md-3 text-start ps-2 ps-md-5">Producto</th>
                    <th scope="col" className="col-md-2">Precio Unitario</th>
                    <th scope="col" className="col-md-2">Cantidad</th>
                    <th scope="col" className="col-md-2">Subtotal</th>
                </tr>
            </thead>
            <tbody >
                {cart.map (item => 
                    <tr key={item.id}>
                        <th scope="row"><img className="img-fluid" style={{width:"200px"}} src={item.img} alt={item.nombre} /></th>
                        <td className="text-start ps-2 ps-md-5">{item.marca} - '{item.nombre}'</td>
                        <td>${item.precio}</td>
                        <td>
                            <p>{item.cantidad}</p>
                            <button type="button" className="btn btn-light btn-sm border border-secondary" onClick={()=>{delItem(item)}}>
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
                    <th className="text-end">Total:</th>
                    <th> ${(cartPrecioTotal()).toFixed(2)}</th>
                </tr>
            </tfoot>
        </table>
    )
};

export default TablaCart;