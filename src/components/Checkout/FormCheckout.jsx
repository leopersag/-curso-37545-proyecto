/* import React from "react";

const FormCheckout = ({nombre}) => {   
    
    return(
        <div>
            <div className="input-group has-validation p-1">
                <div className="form-floating is-invalid">
                    <input type="text" id="nombre" className="form-control is-invalid" placeholder="nombre" required onInput={nombre}/>
                    <label for="nombre">Nombre</label>
                </div>
                <div className="invalid-feedback ps-2">
                    Por favor complete su Nombre
                </div>
            </div>
            <div className="input-group has-validation p-1">
                <div className="form-floating is-invalid">
                    <input type="text" id="apellido" className="form-control is-invalid" placeholder="apellido" required onInput={(e)=>{
                        setApellido(e.target.value);
                    }}/>
                    <label for="apellido">Apellido</label>
                </div>
                <div className="invalid-feedback ps-2">
                    Por favor complete su Apellido
                </div>
                </div>
            <div className="input-group has-validation p-1">
                <div className="form-floating is-valid">
                    <input type="number" id="celular" className="form-control is-valid" placeholder="celular" required onInput={(e)=>{
                        setCelular(e.target.value);
                    }}/>
                    <label for="celular">Teléfono</label>
                </div>
                <div className="invalid-feedback ps-2">
                    Por favor complete con un número de teléfono válido
                </div>
            </div>
            <div className="input-group has-validation p-1">
                <div className="form-floating ">
                    <input type="email" id="email" className="form-control" placeholder="email" required onInput={(e)=>{
                        setEmail(e.target.value);
                        console.log(e.target.value);
                    }}/>
                    <label for="email">Email</label>
                </div>
                <div className="invalid-feedback ps-2">
                    Por favor complete su Email
                </div>
            </div>
        </div>
    )
};

export default FormCheckout; */