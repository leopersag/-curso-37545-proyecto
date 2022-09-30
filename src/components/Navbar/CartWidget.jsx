import React, { useContext }  from "react";
import { CartContext } from "../Context/Context";

const CartWidget = () => {

    const {cartTotal} = useContext(CartContext);
    return(
        <button type="button" className="btn position-relative">
            <img style={{width: 24}} src="../media/cart.png" alt="Cart"/>
            {cartTotal() ===0
            ? null
            : <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>}
        </button>
    )
};

export default CartWidget;