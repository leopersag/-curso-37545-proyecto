import React from "react";
import { useEffect , useState } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = (props) => {
    const [items, SetItems] = useState([]);
    const {id} = useParams();
    const [categoria, SetCategoria] = useState([])
    
    useEffect(()=>{
        
        id === "guitarras"
        ? SetCategoria("Guitarras")
        : id === "bajos"
            ? SetCategoria("Bajos")
            :id === "pianos"
                ? SetCategoria("Pianos")
                :SetCategoria("Todos los productos");

/*         const getProductos = new Promise ((resolve) => {
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
        }); */

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
/* 
        const response = doc(db,"Coder-React-JS","");
        getDoc(response).then((snapShot) => {
            console.log("Validacion: " + snapShot.exists());
            console.log(snapShot.data());
        }); */

    },[id,categoria]);    

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