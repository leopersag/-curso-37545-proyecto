import React from "react";
import Item from "./Item";

const ItemList = (props) =>{
    
    return(
        <div className="d-flex flex-wrap justify-content-center">
            {props.items.map (item => 
                <div className="col-md-6 p-3"  key={item.id}>
                    <Item item = {item} />
                </div>                    
            )}
        </div>

    )
}

export default ItemList;