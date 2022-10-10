import React, { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const Header = ({nombre, apellido}) =>{

    const [categorias,SetCategorias] = useState([])

    useEffect(()=>{
        const db = getFirestore();
        const categoryCollection = collection(db, "Categorias");

        getDocs(categoryCollection).then((resp)=>{
            SetCategorias(resp.docs.map((cat)=>({
                id: cat.id,
                ...cat.data()
            })))
        })
    },[])

    console.log(categorias);

    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>{nombre} {apellido}</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse text-center text-md-start" id="navbarNav">
                        <ul className="navbar-nav me-auto me-lg-0 align-items-center">
                            {categorias.map((cat)=>(
                                <li key={cat.id} className="nav-item"><Link className="nav-link" to={"/category/"+cat.path}>{cat.categoria}</Link></li>
                            ))}
                            <li className="nav-item"><Link className="nav-link" to={"/cart"}><CartWidget /></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;

/* <li className="nav-item"><Link className="nav-link" to={"/category/bajos"}>Bajos</Link></li>
<li className="nav-item"><Link className="nav-link" to={"/category/pianos"}>Pianos</Link></li>
 */