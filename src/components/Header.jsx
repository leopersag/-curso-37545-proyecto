import React from "react";
import CartWidget from "./CartWidget";

//Definiendo un componente como una función

const Header = ({nombre, apellido}) =>{

    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./index.html">{nombre} {apellido}</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse text-center text-md-start" id="navbarNav">
                        <ul className="navbar-nav me-auto me-lg-0">
                            <li className="nav-item"><a className="nav-link" href="./index.html">Guitarras</a></li>
                            <li className="nav-item"><a className="nav-link" href="./index.html">Bajos</a></li>
                            <li className="nav-item"><a className="nav-link" href="./index.html">Pianos</a></li>
                            <li className="nav-item"><a className="nav-link" href="./index.html">Baterías</a></li>
                            <li className="nav-item"><a className="nav-link" href="./carrito.html"><CartWidget /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;