import React, { useState } from 'react'

const App = () => {

const [tasks,setTasks] = useState([]);
const [inputValue,setinputValue] = useState('');

const handleChange = (e) => {
  setinputValue(e.target.value);
}

const addTask = () =>{
  if(inputValue.trim()){
  setTasks([...tasks,inputValue]);
  setinputValue('');
  }
}

  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <br />
      <button onClick={addTask}>Add Task</button>

      <ol>
        {tasks.map((tasks)=>(<li>{tasks}</li>))}
      </ol>
    </div>
  )
}

export default App
