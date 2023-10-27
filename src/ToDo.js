import React, { useState } from 'react';

function ToDo(props) {
  const [check, setCheck] = useState(props.todo.completed);

  function handleCheck(event){
    setCheck(event.target.checked); 
  }

    return (
      <>
    <p>{props.todo.title}</p>
    <p>userID: {props.todo.userId}</p>
    <p>toDoId: {props.todo.id}</p>
    <input type="checkbox" checked={checked} onChange={handleCheck}></input>
    </>
    );
  }
  
  export default ToDo;