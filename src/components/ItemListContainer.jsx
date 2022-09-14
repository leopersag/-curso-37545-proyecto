import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import {productos} from "./productos";
import {useParams} from "react-router-dom";

const ItemListContainer = (props) => {
    const [items, SetItems] = useState([]);
    const {id} = useParams();
    const [categoria, SetCategoria] = useState([])
    
    useEffect(()=>{
        
        let categoria = "";
        id === "guitarras"? categoria ="Guitarras": id === "bajos"? categoria = "Bajos":categoria="Todos los productos";

        const getProductos = new Promise ((resolve) => {
            setTimeout(()=>{
                resolve (productos);
            },2000);
        });

        getProductos.then((answer) => {
            if (categoria==="Todos los productos"){
                SetItems(answer);
            } else {
                const categoriaId = answer.filter(cat => cat.categoria ===categoria);  
                SetItems(categoriaId);
            }
            SetCategoria(categoria);
        });

    },[id]);    

    return(
        <div>
            <ul className="list-group App-header">
                <strong>{categoria}</strong>
            </ul>

            <div className="d-flex flex-wrap justify-content-center App-body">
                <ItemList items = {items} />
            </div>

        </div>
    )
}

export default ItemListContainer;