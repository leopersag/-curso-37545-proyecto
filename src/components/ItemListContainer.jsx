import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import {productos} from "./productos";

const ItemListContainer = (props) => {
    const [items, SetItems] = useState([]);

    useEffect(()=>{

        const getProductos = new Promise ((resolve) => {
            setTimeout(()=>{
                resolve (productos);
            },2000);
        });

        getProductos.then((answer) => {
            SetItems(answer);
        });

    },[]);    

    return(
        <div>
            <ul className="list-group App-header">
                <strong>{props.categoria}</strong>
            </ul>

            <div className="d-flex flex-wrap justify-content-center">
                <ItemList items = {items} />
            </div>

        </div>
    )
}

export default ItemListContainer;