import React from "react";
import '../Item/item.css';

const Item = ({item, deleteItem, completeItem}) => {
    return (
        <div className="item-row">
            <input type="checkbox" onChange={() => completeItem(item.id)}></input>
            <span>{item.quantity}{item.item}</span>
            <button className="cross" onClick={() => deleteItem(item.id)}>X</button>
        </div>
    )
}

export default Item;