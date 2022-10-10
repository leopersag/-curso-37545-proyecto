import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {doc, getDoc, getFirestore } from "firebase/firestore";
import Error from "../Checkout/Error";

const ItemDetailContainer = () => {
    const [detail, SetDetail] = useState([]);
    const [error, SetError] = useState("");
    const {id} = useParams();
        
    useEffect(()=>{
        const db = getFirestore();

        const response = doc(db,"Productos",id);
        getDoc(response).then((snapShot) => {
            if(snapShot.data()){
                SetError(false);
                SetDetail({id:snapShot.id, ...snapShot.data()});
            }
        }).catch(SetError(true));
    },[id]);

    return(
        <div>
            {error === false?
            <div className="d-flex flex-wrap justify-content-center">
                <ItemDetail item = {detail} />
            </div>
            : <Error />}            
        </div>
    )
}

export default ItemDetailContainer;