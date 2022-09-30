import React, { useContext } from "react";
import { CartContext } from "../Context/Context";

const TableCheckout = () => {

    const {cart, cartPrecioTotal} = useContext(CartContext);

    return(
        <table className="table table-borderless align-middle mb-0">
            <thead className="table-light align-middle">
                <tr>
                    <th scope="col" className="col-md-3">Imagen</th>
                    <th scope="col" className="col-md-4 text-start ps-1 ps-md-5">Producto</th>
                    <th scope="col" className="col-md-2">Subtotal</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {cart.map (item => 
                    <tr key={item.id}>
                        <th scope="row"><img className="img-fluid" style={{width:"200px"}} src={item.img} alt={item.nombre} /></th>
                        <td className="text-start ps-1 ps-md-5">{item.marca} - '{item.nombre}' - (x{item.cantidad})</td>
                        <td>${item.precio*item.cantidad}</td>
                    </tr>
                )}
            </tbody>
            <tfoot className="table-light align-middle">
                <tr>
                    <td></td>
                    <td className="text-end">Iva (%21): </td>
                    <td>${(cartPrecioTotal()*0.21).toFixed(2)}</td>
                </tr>
                <tr>
                    <td></td>
                    <th className="text-end">Total a pagar:</th>
                    <th>${(cartPrecioTotal()*1.21).toFixed(2)}</th>
                </tr>
            </tfoot>
        </table>
    )
};

export default TableCheckout;