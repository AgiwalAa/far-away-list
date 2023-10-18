import '../ItemsList/itemsList.css';
import '../../Shared/common.css';
import React from 'react';
import Item from '../Item/item';

const ItemsList = ({ items, deleteItem, completeItem }) => {
    return (items.map((item) => <Item item={item} key={item.id} deleteItem={deleteItem} 
    completeItem={completeItem}></Item>))
}

export default ItemsList;