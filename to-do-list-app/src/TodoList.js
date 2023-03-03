import React from 'react'
import Todo from './Todo';

export default function TodoList({todos, setTodos, changeChecked}) {
    console.log(todos);
  return (
    todos.map(todo => <Todo key={todo.text} setTodos={setTodos} todo={todo} changeChecked={changeChecked}/>)
  )
}
//for every object in todos print them out 