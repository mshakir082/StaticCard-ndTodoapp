
import React from 'react';



const TodoList =()=>{

const [task,setTask]=React.useState("");
const [todo,setTodoList]=React.useState([]);

const inputTakeChange=(e)=>{
    setTask(e.target.value)
}
const buttonClick=()=>{
    setTodoList(...todo,task)
    console.log("shakir")
}
    return (
        <>
       
        <input type='text' placeholder='Write Somthing' value={task} onChange={inputTakeChange} />
        <button onClick={()=>buttonClick}>Click</button>
        {
            todo.map((elem)=>{
                return <h1>{elem}</h1>
            })
        }
        </>
    )
}
export default TodoList