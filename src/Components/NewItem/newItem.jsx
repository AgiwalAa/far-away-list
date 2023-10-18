import ItemsList from '../ItemsList/itemsList';
import '../NewItem/newItem.css'
import React, { useState } from 'react';
const NewItem = ({addNewItem}) => {

    const [quantity, setQuantity] = useState(1);
    const [item, setItem] = useState('');

    function onSubmit(e){
        e.preventDefault();
        addNewItem({quantity: quantity, item: item, id: Math.random()});
        setItem('');
    }
    
    return (
        <React.Fragment>
        <div className='section1 flex-center'>
            <form onSubmit={onSubmit} className='new-item-form'>
            <span>What do you need for trip?</span>
            <select className='qty-dropdown' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
               <option>6</option>
               <option>7</option>
            </select>
            <input type='text' className='description-input' placeholder='Description..' value={item} onChange={(e) => setItem(e.target.value)}/>
            <button type='submit' disabled={!item} className='new-item-form-submit-btn'>Add</button>
            </form>
        </div>
        </React.Fragment>
    )
}

export default NewItem;