import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(["Ready", "Set", "GO"]);

  function handleSubmit(event){
    event.preventDefault();
    setTodoList([...todoList, inputText])
  }



  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskInput">Enter task</label>
        <input 
          type="text" 
          id='taskInput' 
          name='taskInput' 
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button>Add Task</button>
      </form>
      <ul>
        {todoList.map((task, index) => {
          return <li key={index}>
            {task}
          </li>
        })}
      </ul>
    </>
  )
}

export default App
