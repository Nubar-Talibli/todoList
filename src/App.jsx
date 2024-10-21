import { useState } from 'react';
import Todo from './components/Todo'


function App() {

  const [todos, setTodos] = useState([
  {
    id: 1,
    title: "Edit Video"
  },
  {
    id: 2,
    title: "Buy Eggs & Milk"
  },
  {
    id: 3,
    title: "Organize Files"
  }])
  const [todoTitle, setTodoTitle] = useState("")
  const [count, setCount] = useState(0)

  return (
   <div class="main">
    <div class="todo">
      <div class="button">
        <input type="text" placeholder="Review Presentation" value={todoTitle} onChange={({target})=>{
          setTodoTitle(target.value)
        }}/>
        <button onClick={()=>{
          if(todoTitle) {
            setTodos([...todos, {id: Math.floor(Math.random()*100000), title: todoTitle}]);
            setTodoTitle("")
          }
        }}>Add</button>
      </div>

      <p>You have {todos.length-count} task(s) to complete</p>

      {
        todos.map((item)=> (
          <Todo key={item.id} changeCount={setCount}  item={item} todoList={todos} setTodoList={setTodos}/>
        ))
      }
      
    </div>

    <div class="text">
      <h3>With Free Source Code</h3>
      <h1>TO DO LIST</h1>
      <h2>HTML, CSS, Javascript</h2>
    </div>
   </div>
  )
}

export default App
