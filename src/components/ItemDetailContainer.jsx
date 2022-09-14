import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "./productos";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const [detail, SetDetail] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const item = productos.find((prod) => prod.id === parseInt(id))
        console.log(item);

        const getItem = new Promise ((resolve) => {
            setTimeout(()=>{
                resolve (item);
            },3000);
        });

        getItem.then((answer) => {
            SetDetail(answer);
        });

    },[id]);    

    return(
        <div>
            <div className="d-flex flex-wrap justify-content-center">
                <ItemDetail item = {detail} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;