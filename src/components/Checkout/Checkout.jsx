import React, { useState, useContext } from "react";
import TableCheckout from "./TableCheckout";
import { CartContext } from "../Context/Context";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import Order from "./Order";
import Error from "./Error";

const Checkout = () => {
    const {cart, clearCart, cartPrecioTotal} = useContext (CartContext);

    const [nombre, setNombre] = useState ("");
    const [apellido, setApellido] = useState ("");
    const [celular, setCelular] = useState ("");
    const [email, setEmail] = useState ("");
    const [orderId, setOrderId] = useState ("");

    const [valNombre, setValNombre] = useState("");
    const [valApellido, setValApellido] = useState("");
    const [valCelular, setValCelular] = useState("");
    const [valEmail, setValEmail] = useState("");

    const PlaceOrder = () =>{
        const buyer = {name: (apellido+", "+nombre), email: email, phone: celular};
        const items = [];
        cart.forEach((e) => {
            items.push({id: e.id, title: e.nombre, price: e.precio, cantidad: e.cantidad})            
        });
        const order = {date: new Date(), buyer: buyer, items: items, total: (cartPrecioTotal()*1.21).toFixed(2)};
        const db = getFirestore();
        addDoc((collection(db, "Ordenes")), order).then((data)=>{
            setOrderId(data.id);
            clearCart();
        });   
    };

    const Validacion = () =>{
        valNombre === "is-valid" && valApellido === "is-valid" && valEmail === "is-valid" && valCelular === "is-valid"
        ? PlaceOrder()
        : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor complete los campos requeridos',
          });
    };

    return(
        <div className="container-fluid p-4 ">
            {cartPrecioTotal() > 0 
            ?<div className="row justify-content-evenly align-items-center">
                <div className="col-12 col-lg-4 col-md-5 col-sm-6 text-secondary text-start">     
                    <div className="input-group has-validation p-1">
                        <div className={"form-floating " + valNombre}>
                            <input type="text" id="nombres" className={"form-control " + valNombre} placeholder="nombre" required onInput={(e)=>{
                                setNombre(e.target.value);}}/>
                            <label htmlFor="nombres">Nombre</label>
                        </div>
                        <div className="invalid-feedback ps-2">
                            Por favor complete su Nombre
                        </div>
                    </div>
                    <div className="input-group has-validation p-1">
                        <div className={"form-floating " + valApellido}>
                            <input type="text" id="apellido" className={"form-control " + valApellido} placeholder="apellido" required onInput={(e)=>{
                                setApellido(e.target.value);
                            }}/>
                            <label htmlFor="apellido">Apellido</label>
                        </div>
                        <div className="invalid-feedback ps-2">
                            Por favor complete su Apellido
                        </div>
                        </div>
                    <div className="input-group has-validation p-1">
                        <div className={"form-floating " + valCelular}>
                            <input type="number" id="celular" className={"form-control " + valCelular} placeholder="celular" required onInput={(e)=>{
                                setCelular(e.target.value);
                            }}/>
                            <label htmlFor="celular">Teléfono</label>
                        </div>
                        <div className="invalid-feedback ps-2">
                            Por favor complete con un número de teléfono válido
                        </div>
                    </div>
                    <div className="input-group has-validation p-1">
                        <div className={"form-floating " + valEmail}>
                            <input type="email" id="email" className={"form-control " + valEmail} placeholder="email" required onInput={(e)=>{
                                setEmail(e.target.value);
                            }}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="invalid-feedback ps-2">
                            Por favor complete su Email
                        </div>
                    </div>
                    <button to={"/order"} className="col-auto btn btn-dark border border-light mt-3 mb-1" onMouseUp={()=>{
                        nombre === ""? setValNombre("is-invalid"): setValNombre("is-valid");
                        apellido === ""? setValApellido("is-invalid"): setValApellido("is-valid");  
                        email === ""? setValEmail("is-invalid"): setValEmail("is-valid");  
                        celular === ""? setValCelular("is-invalid"): setValCelular("is-valid"); 
                    }} onClick={()=>{
                        Validacion();                       
                    }}>
                        Generar Orden
                    </button>
                </div>
                <div className="col-12 col-sm-6 my-4 my-sm-0">
                    <TableCheckout />
                </div>
            </div>
            : orderId !== ""
            ? <Order orden= {orderId}/>
            : <Error />
            }
        </div>
    )
};

export default Checkout;