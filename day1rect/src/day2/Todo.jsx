import React from "react"

export const Todo=()=>{
    const [task,setTask]=React.useState("")
    const [todo,setTodo]=React.useState([])
    
    const inputTakeChange=(e)=>{
        setTask(e.target,value)
    }
    const buttonClick=()=>{
        setTodo(...todo,task)
    }

    return (
        <>
        {
            todo.map((elem)=>{
                return <h1>{elem}</h1>
            })
        }
        <input type='text' placeholder='Write Somthing' value={task} onChange={inputTakeChange} />
        <button onClick={()=>buttonClick}>+</button>
        </>
    )
}