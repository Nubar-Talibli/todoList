import { useState } from "react"
import "./Todo.css"


function Todo({item, changeCount, todoList, setTodoList}) {

    const [selected, setSelected] = useState(false)
    const [title, setTitle] = useState(item.title)
    const handleChange=()=>{
        if (!selected) {
            changeCount((prev)=>prev+1)
        }
        else {
            changeCount((prev)=>prev-1)
        }
        setSelected((prev)=>!prev)
    }
    const [isEditable, setIsEditable] = useState(false)

    return (
        <div class="edit">
            <div class="click" onClick={isEditable?()=>{}:handleChange}>
                <input checked={selected} type="radio"/>
                <input type="text" value={isEditable?title:item.title} readOnly={!isEditable} onChange={(event)=>setTitle(event.target.value)} style={{textDecoration:selected?"line-through":"none", cursor:isEditable?"default":"pointer"}}/>    
            </div>

            <button style={{backgroundColor:"#5a95ff"}} onClick={()=>{
                setIsEditable(prev=>!prev)
                if (isEditable==true) {
                    setTodoList(todoList.map((element)=>{
                        if (item.id == element.id) {
                            return {
                                ...element,
                                title: title
                            }
                        }
                        else {
                            return element
                        }
                    }))
                }
            }}>Edit
            </button>                   
            <button style={{backgroundColor:"#ef4820"}} onClick={()=>{
                setTodoList(todoList.filter((element)=> {
                    return element.id != item.id
                }))
                if (selected) {
                    changeCount((prev)=>prev -1 )
                }
                }}>Delete
            </button>               
        </div>
    )
}


export default Todo



