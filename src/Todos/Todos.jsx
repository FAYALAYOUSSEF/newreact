import React, { useState,useEffect } from "react"
import axios from "axios"
function Todos() {
    const [todos,setTodos]=useState([]) ;
   
    useEffect(()=>{
       const apiURL="https://dummyjson.com/todos"
       axios.get(apiURL)
       .then((response)=>{
         
          console.log("response",response.data.todos);
          
          setTodos(response.data.todos);
       }).catch((err)=>{
         console.log(err)
       })
    })


  return (
    <div>
        
           {
            todos.map(todo=>(
                <div>
                    <h1>{todo.todo} </h1>
                    <h2>{todo.id}</h2>
                    <h3>{todo.userId}</h3>
                
        
                </div>
            ))
           }
        
    </div>
    
  )
}



export default Todos