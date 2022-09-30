import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
import { Link } from "react-router-dom";
import TablaCart from "./TablaCart";

const Cart = () => {
    const {clearCart, cartTotal} = useContext(CartContext);

    return(
        <div className="my-4 container-fluid">
            <div className="row justify-content-center">
                <div className="col-auto">
                    {cartTotal() === 0
                    ?<div>
                        <h3 className="fs-2">UPS!</h3>
                        <h3 className="fs-4 text-uppercase">Tu carrito está vacío</h3>
                        <img className="img-fluid" src="../media/emptyCart.gif" alt="emptyCart" />
                        <h3 className="fs-5 my-4">Elige algún producto para visualizarlo en esta sección</h3>
                        <Link className="btn btn-primary" to={"/"}>Pagina principal</Link>
                    </div>
                    :<div>
                        <div className="d-grid justify-content-end">
                            <button className="btn btn-light border border-secondary my-3" onClick={()=>{clearCart()}}>
                                Vaciar Carrito    
                                <img className="ms-2" style={{width: 24}} src="../media/delete.png" alt="Del"/>
                            </button>
                        </div>
                        <TablaCart />
                        <div className="d-grid justify-content-end">
                            <Link to={"/checkout"} className="btn btn-dark border border-light my-3">
                                Finalizar compra
                                <img className="ms-2" style={{width: 24}} src="../media/cart.png" alt="Cart"/>
                            </Link>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
};

export default Cart;