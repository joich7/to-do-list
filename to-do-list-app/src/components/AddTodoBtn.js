import React, { useState } from 'react'


export default function AddTodoBtn({setTodos, todos}) {

    const [value, setValue] = useState('');

    function addTodoItem(){
        if(value !== ''){
            setTodos([...todos, {text: value, id: value, checked: false}])
        }
        console.log(value)
        
    }
    

  return (
    <>
        <input type="text" onChange={(i)=>setValue(i.target.value)} />
        
        <button onClick={addTodoItem}>Add todo</button>
    </>
  )
}
