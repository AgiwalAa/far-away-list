import React from "react";
const Item = ({item, deleteItem, completeItem}) => {
    return (
        <div>
            <input type="checkbox" onChange={() => completeItem(item.id)}></input>
            <span>{item.quantity}{item.item}</span>
            <button onClick={() => deleteItem(item.id)}>X</button>
        </div>
    )
}

export default Item;