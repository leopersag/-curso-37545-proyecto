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
    console.log(cart);

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id ===id);
    }

    const cartTotal = () => {
        return cart.reduce((total,item) => total+item.cantidad,0);
    }

    return(
        <CartContext.Provider value={{cart, addItem,clear,isInCart,cartTotal}}>
            {children}
        </CartContext.Provider>
    )
};

export default Provider;