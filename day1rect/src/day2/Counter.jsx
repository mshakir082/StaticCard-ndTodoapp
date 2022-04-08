import React from 'react'

export const Counter=()=>{
    const [count,setCount]=React.useState(0);
    const Increment=()=>{
        setCount(count+1);
    }
    const Decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
        
    }
    const Double=()=>{
        setCount(count*2);
    }
    return(
        
        <div style={{textAlign: "center"}}>
        <h1>{count}</h1>
        <button onClick={()=>Increment()}>Increment</button>
        <button onClick={()=>Decrement()}>Decrease</button>
        <button onClick={()=>Double()}>Double</button>
        </div>
       
       
    )
}