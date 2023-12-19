/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import{useState} from 'react'
import './App.css'
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"
import Search from "./components/Search"
import Filter from "./components/Filter"

function App() {
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Ascendente")

  const [todos, setTodos] = useState([
    {id:1,
    texto:"caminhar",
    category: "lazer",
    statusCompleted: true
    },
    {
      id:2,
    texto:"Ler",
    category: "estudos",
    statusCompleted: true
    },
    {
      id:3,
    texto:"Reuniao",
    category: "trabalho",
    statusCompleted: false
    }
  ])
  const addTodo = (texto: any, category: any) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 100),
        texto,
        category,
        statusCompleted: false
      },
    ];
    setTodos(newTodos);
  };
  const [search, setSearch]=useState("")
const removeTodo=(id: any)=>{
const newTodos=[...todos]
const filterTodo=newTodos.filter(todo=>todo.id!==id?todo: null);
setTodos(filterTodo)
showSort()
  }
const showSort=()=>{
  console.log(sort)
}
  const completaTarefa=(id: any)=>{
    const newTodos=[...todos]
    newTodos.map((todo)=> todo.id===id?todo.statusCompleted=!todo.statusCompleted:todo)
    setTodos(newTodos)
      }
  
  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} showSort/>
      
      <div className='todo-list'>
        {todos.
        filter((todo)=>filter==="All"?true:filter==="Completed" ? !todo.statusCompleted : todo.statusCompleted).
        filter((todo)=>(todo.texto.toLowerCase().includes(search.toLowerCase())||todo.category.toLowerCase().includes(search.toLowerCase())))
        .sort((a, b)=> 
        sort === "Ascendente" ? a.texto.localeCompare(b.texto) : b.texto.localeCompare(a.texto))
        .map((todo)=>(
         <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completaTarefa={completaTarefa}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
