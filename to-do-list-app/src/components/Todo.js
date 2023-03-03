import React from 'react'


export default function Todo({todo, setTodos, changeChecked}) {

    function handleCheckBox() {
        changeChecked(todo.id)
    }
    
    return (
    <div className='col-3'>
        <label>
            <input type='checkbox' value={todo.checked} onChange={handleCheckBox}/>
            <p className={todo.checked == true? 'text-danger text-decoration-line-through':'text-dark'}>{todo.text}</p>
        </label>
    </div>
  )
  
  
}
