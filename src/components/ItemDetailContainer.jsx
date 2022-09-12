import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [detail, SetDetail] = useState([]);

    useEffect(()=>{
        const item = 
        {id:1, categoria:"Guitarras", marca: "PRS", nombre:"Custom 24", precio: "3200", img: "../media/Custom24.jpg", stock: 4, descripcion: "La Custom 24 de PRS está diseñada para una durabilidad apta para circular, un toque cómodo y para ofrecer una amplia gama de tonos adecuados para cualquier género o estilo de interpretación. Con una tapa de arce con una curva de violín poco profunda, espalda de caoba, mástil de arce ancho y delgado, diapasón de palisandro y el puente de trémolo PRS, la Custom eléctrica es ideal para todos, desde artistas de gira internacional hasta aspirantes a intérpretes de todas las edades. El sonido versátil de la PRS Custom proviene de pastillas 85/15 «S» emparejadas con un control de volumen y un selector de pastilla de 3 vías."};

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