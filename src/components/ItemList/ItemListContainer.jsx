import React, { useEffect , useState } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = () => {
    const [items, SetItems] = useState([]);
    const {id} = useParams();
    const [categoria, SetCategoria] = useState([])
    
    useEffect(()=>{
        
        id === "guitarras"
        ? SetCategoria("Guitarras")
        : id === "bajos"
            ? SetCategoria("Bajos")
            : id === "pianos"
                ? SetCategoria("Pianos")
                : SetCategoria("Todos los productos");

        const db = getFirestore();
        const itemCollection = collection(db, "Productos");
        
        const queryItems = id
        ? (categoria==="Todos los productos"
            ? itemCollection
            :query(itemCollection,where("categoria", "==",categoria)))
        :itemCollection;
    
        getDocs(queryItems).then((snapShot) =>{
            SetItems(snapShot.docs.map(item=>({id:item.id,...item.data()})))
        });

    },[id,categoria]);    

    return(
        <div>
            <ul className="list-group App-header">
                <strong>{categoria}</strong>
            </ul>

            <div className="d-flex flex-wrap justify-content-center App-body">
                <ItemList items = {items}/>
            </div>

        </div>
    )
}

export default ItemListContainer;