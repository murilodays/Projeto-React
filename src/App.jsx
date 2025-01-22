import { useEffect, useState } from 'react'

import './App.css'

function App() {
  let [toDo, setToDo] = useState(['Go to School learn react.js','Study more about State'])
  let [newItem, setNewItem] = useState('')

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="input-container">
        <input value={newItem} onChange={(event) => setNewItem(event.target.value)} type="text" placeholder="Enter your to do item"
        />
        <button onClick={addNewItem}>Add</button>
      </div>
      <div className="todo-list">
        {toDo.map((item, index) => (
          <div key={index} className="todo-item">
            <input type="checkbox"/>
            <span>{item}</span>
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )

 function addNewItem(){
  setToDo([...toDo, newItem])
  setNewItem("")
  }

  function removeItem(index){
    let tmpArray = [...toDo]
    tmpArray.splice(index, 1)
    setToDo(tmpArray)
  }
}

export default App
