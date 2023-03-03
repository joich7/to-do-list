import React from 'react';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoBtn from './components/AddTodoBtn';
import RemoveButton from './components/RemoveButton';


function App() {
  const [todos, setTodos] = useState([])
  console.log(todos)
  
  function changeChecked(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)      
    todo.checked = !todo.checked
    setTodos(newTodos)
  }

  function remover(){
    const newTodos = todos.filter(todo => todo.checked === false)
    setTodos(newTodos)
  }

  return (
    <div className="App container ">
      <h1>Todo List App</h1>
      <p>{todos.length==0? "add a new task": "no completed tasks"}</p>
      
      <AddTodoBtn setTodos={setTodos} todos={todos} />
      
      <RemoveButton remover={remover}/>
      <div className='row'>
          <TodoList todos={todos} setTodos={setTodos} changeChecked={changeChecked}/>
      </div>


    </div>
  );
}



export default App;


// take input from text box and store in state and make a button that goes with it 