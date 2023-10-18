import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header/header';
import NewItem from './Components/NewItem/newItem';
import ItemsList from './Components/ItemsList/itemsList';
import Footer from './Components/Footer/footer';
import { useState } from 'react';
function App() {

  const [items, setItems] = useState([]);

  function addNewItem(data) {
    setItems((items) => [...items, data]);
  }

  function deleteItem(itemId) {
     setItems((items) => items.filter((x) => x.id !== itemId));
  }

  function completeItem(itemId){
    setItems((items) => items.map((x) => {
      if(x.id === itemId){
        if(x.isCompleted) {
          x.isCompleted = false;
        } else {
          x.isCompleted = true;
        }
      }
      return x;
    }));
  }
   
  const isCompletedItems = items.filter((x) => x.isCompleted == true);
  const percentage = isCompletedItems.length !== 0 ? (isCompletedItems.length / items.length) * 100 : 0;
  console.log(percentage);

  return (
    <React.Fragment>
      <Header></Header>
      <NewItem addNewItem={addNewItem}></NewItem>
      <div className='section2'><ItemsList items={items} deleteItem={deleteItem} completeItem={completeItem}></ItemsList></div>
      <Footer quantity={items.length} percentage={parseInt(percentage)}></Footer>
    </React.Fragment>
  );
}

export default App;
