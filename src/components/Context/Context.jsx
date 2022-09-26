import React, { useState, createContext } from "react";
export const CartContext = createContext ();

const Provider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let producto = cart.find(e => e.id === item.id);
            cart[cart.indexOf(producto)].cantidad + cantidad > cart[cart.indexOf(producto)].stock? cart[cart.indexOf(producto)].cantidad=cart[cart.indexOf(producto)].stock : cart[cart.indexOf(producto)].cantidad += cantidad ;
            setCart ([...cart]);
        } else {
            setCart([...cart, {...item, cantidad: cantidad}]);
        }
    }

    const delItem = (item) => {
        let producto = cart.find(e => e.id === item.id);
        cart.splice(cart.indexOf(producto),1);
        setCart ([...cart]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id ===id);
    }

    const cartTotal = () => {
        return cart.reduce((total,item) => total+item.cantidad,0);
    }

    const cartPrecioTotal = () =>{
        return cart.reduce((total,item) => total+(item.cantidad*item.precio),0);
    }

    return(
        <CartContext.Provider value={{cart, addItem, delItem, isInCart, cartTotal, cartPrecioTotal}}>
            {children}
        </CartContext.Provider>
    )
};

export default Provider;