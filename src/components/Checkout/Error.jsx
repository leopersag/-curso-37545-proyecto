import React from "react";
import {Link} from "react-router-dom";

const Error = () => {

    return(
        <div className="container-fluid text-center">
            <div className="row align-items-center justify-content-evenly">
                <div className="col-1"></div>
                <div className="col-12 col-md-4">
                    <img className="img-fluid p-0 m-0" src="../../media/miguel.png" alt="Error"/>
                </div>
                <div className="col-12 col-md-4">
                    <h3 className="fs-1 text-uppercase fw-bold">UPS!  pagina</h3>
                    <h3 className="fs-1 text-uppercase fw-bolder"> no encontrada</h3>
                    <h4 className="my-5">Debes estar buscando algo del más allá, pero no desesperes que acá tenemos de todo!</h4>
                    <Link className="btn btn-primary" to={"/"}>Volver a la página principal</Link> 
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
};

export default Error;
