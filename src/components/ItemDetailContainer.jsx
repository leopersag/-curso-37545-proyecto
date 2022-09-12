import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "./productos";

const ItemDetailContainer = () => {
    const [detail, SetDetail] = useState([]);

    useEffect(()=>{
        const item = productos.find((prod) => prod.id === 2)

        const getItem = new Promise ((resolve) => {
            setTimeout(()=>{
                resolve (item);
            },3000);
        });

        getItem.then((answer) => {
            SetDetail(answer);
        });

    },[]);    

    return(
        <div>
            <div className="d-flex flex-wrap justify-content-center">
                <ItemDetail item = {detail} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;