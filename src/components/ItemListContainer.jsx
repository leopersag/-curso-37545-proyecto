import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [items, SetItems] = useState([]);

    useEffect(()=>{
        const productos = [
            {id:1, marca: "PRS", nombre:"Custom 24", precio: "3200", img: "../media/Custom24.jpg", stock: 4},
            {id:2, marca: "Gibson", nombre:"Les Paul", precio: "3000", img: "../media/LesPaul.jpg", stock: 7},
            {id:3, marca: "Ibanez", nombre:"JS1000", precio: "3150", img: "../media/JS1000.jpg", stock: 5},
            {id:4, marca: "Fender", nombre:"Stratocaster", precio: "2200", img: "../media/Stratocaster.jpg", stock: 0},
            {id:5, marca: "Jackson", nombre:"JS Dinky", precio: "1800", img: "../media/JS Dinky.jpg", stock: 2},
        ];

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