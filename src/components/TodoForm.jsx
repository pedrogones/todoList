/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue]=useState("")
    const [category, setCategory]=useState("")

    const submit=(e)=>{
        e.preventDefault()
        if(!value||!category) return;
        //adcionar todo
        addTodo(value, category)
        //limpar os campos
        setCategory('')
        setValue('')
        console.log(value, category)
    }
  return (
    <div className='todoForm'>
      <h2>criar tarefa:</h2>
      <form onSubmit={submit}>
        <input type='text' placeholder='digite uma nova tarefa' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <select  value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value=''>Selecione uma categoria</option>
            <option value='Trabalho'>Trabalho</option>
            <option value='Lazer'>Lazer</option>
            <option value='Estudos'>Estudos</option>
        </select>
        <button >Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
