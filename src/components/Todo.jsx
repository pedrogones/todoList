/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
 import React from 'react'

 const Todo = ({todo, removeTodo, completaTarefa}) => {
   return (
    <div className="todo">
    <div className="content">
      <p>tarefa: ({todo.texto})</p>
      <p className='categoria'>
       categoria: {todo.category}
      </p>
      <p>status: {verificaStatus(todo.statusCompleted)}</p>
    </div>
   <div className='botoes'>
   <button className='complete' onClick={()=> completaTarefa(todo.id)}>completar</button>
    <button className='remove' onClick={()=> removeTodo(todo.id)}>deletar</button>
   </div>
  </div>
   )
 }
 const verificaStatus=(statusCompleted)=>{
if (!statusCompleted) {
    return "Tarefa Finalizada"
}else{
    return "Tarefa Incompleta"
}
 }
 export default Todo
 