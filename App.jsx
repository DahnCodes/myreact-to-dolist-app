import React, { useState } from 'react'
import './App.css'

function App() {

  //State hook - 'useState'
  const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([]);

function addItem(){
if(!newItem){
  alert("Enter an Item ");
  return;
}
const item ={
  id: Math.floor(Math.random() * 1000),
  value: newItem
};

setItems(oldList => [...oldList, item]);
setNewItem("");

console.log(items)
  }
  
  function deleteItem(id){
const newArray = items.filter(item => item.id !== id);
setItems(newArray);
  }

  return (
      <div class="container">
       {/* 1. Header */}
       <h1>Todo List App</h1>

       {/* 2. Input Text and Button*/}
       <input type="text" placeholder='Add an Item...'
       onChange={e => setNewItem(e.target.value)}
       />

       <button onClick={() => addItem()}>Add</button>

       {/* 3. lists of items*/}
       <ul>
 {items.map(item => {
  return(
    <li key={item.id}>{item.value} <button class="delete-button" onClick={() => deleteItem(item.id)}>X</button></li>
  )
 })}
       </ul>

      </div>
  )
}

export default App