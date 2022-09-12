import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [items, SetItems] = useState([]);

    useEffect(()=>{
        const productos = [
            {id:1, categoria:"Guitarras", marca: "PRS", nombre:"Custom 24", precio: "3200", img: "../media/Custom24.jpg", stock: 4, descripcion: "La Custom 24 de PRS está diseñada para una durabilidad apta para circular, un toque cómodo y para ofrecer una amplia gama de tonos adecuados para cualquier género o estilo de interpretación. Con una tapa de arce con una curva de violín poco profunda, espalda de caoba, mástil de arce ancho y delgado, diapasón de palisandro y el puente de trémolo PRS, la Custom eléctrica es ideal para todos, desde artistas de gira internacional hasta aspirantes a intérpretes de todas las edades. El sonido versátil de la PRS Custom proviene de pastillas 85/15 «S» emparejadas con un control de volumen y un selector de pastilla de 3 vías."},
            {id:2, categoria:"Guitarras", marca: "Gibson", nombre:"Les Paul", precio: "3000", img: "../media/LesPaul.jpg", stock: 7, descripcion: "Esta guitarra eléctrica Les Paul ofrece a los instrumentistas una nueva versión de un diseño clásico. El tratamiento especial comienza con un cuerpo de caoba equipado con pastillas humbucker de bobina abierta 490R y 490T para tonos ricos y clásicos de Gibson. Los afinadores de botón blancos de lujo vintage y un cordal envolvente compensado mantienen las cosas simples y elegantes. La comodidad siempre estará disponible gracias al mástil de arce de perfil redondeado y al diapasón de palisandro auténtico. Se podría decir que esta es una entrega especial sónica."},
            {id:3, categoria:"Guitarras", marca: "Ibanez", nombre:"JS1000", precio: "3150", img: "../media/JS1000.jpg", stock: 5, descripcion: "Ibanez comenzó a ofrecer modelos JS con unidades Sustainiac preinstaladas desde el lanzamiento de JS2480 en 2017, y se enorgullece de ofrecer JS240PSCA, el modelo JS equipado con Sustainiac más asequible."},
            {id:4, categoria:"Guitarras", marca: "Fender", nombre:"Stratocaster", precio: "2200", img: "../media/Stratocaster.jpg", stock: 0, descripcion: "La Stratocaster® se basa en más de sesenta años de innovación, inspiración y evolución para satisfacer las demandas del músico de hoy en día. Nuestro popular mástil “Deep C» ahora tiene bordes de diapasón redondeados, un acabado satinado «Super-Natural» y un talón de mástil recién esculpido para una sensación sumamente cómoda y de fácil acceso al registro superior. Las nuevas pastillas de bobina simple V-Mod II Stratocaster son más articuladas que nunca y conservan la calidez y el timbre de campana. La Stratocaster tiene al sonido y sensación clásicos pero con amplias mejoras que se suman a las habituales para marcar un nuevo estándar para instrumentos profesionales."},
            {id:5, categoria:"Guitarras", marca: "Jackson", nombre:"JS Dinky", precio: "1800", img: "../media/JS Dinky.jpg", stock: 2, descripcion: "Rápidas, mortales e increíbles, las guitarras Jackson JS Series dan un salto épico hacia adelante, lo que hace que sea más fácil que nunca obtener el clásico tono, apariencia y toque de Jackson a un precio asequible."},
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