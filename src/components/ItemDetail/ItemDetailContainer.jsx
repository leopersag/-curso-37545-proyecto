import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
//import { productos } from "./productos";
import {useParams} from "react-router-dom";
import {doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [detail, SetDetail] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
/*         const item = productos.find((prod) => prod.id === parseInt(id))

        const getItem = new Promise ((resolve) => {
            setTimeout(()=>{
                resolve (item);
            },500);
        });

        getItem.then((answer) => {
            SetDetail(answer);
        }); 
*/

        const db = getFirestore();
/*         const itemCollection = collection(db, "Productos");
        const queryItems = id? query(itemCollection,where("categoria", "==",categoria)):itemCollection;
*/

        const response = doc(db,"Productos",id);
        getDoc(response).then((snapShot) => {
            SetDetail({id:snapShot.id, ...snapShot.data()});
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