import React from 'react'
import Done from '../Done'
import Notdone from '../Notdone'
export default function TestTodos({todosArray ,deleteTodoFromDatabase ,updateTodoFromDataBase}) {
  return (
    <div>
        {
        todosArray.map((todo)=>{
          // <p>todo.title</p>
          return(
            <div key={todo.id}>
                
            <div className="max-w-5xl mx-auto flex justify-between px-8 py-4 bg-blue-100 shadow-md mt-6 rounded-md">
        <div>
          <h2 className="text-2xl font-bold">{todo.title}</h2>
          <p>{todo.description}</p>
          

          <p>{new Date(todo.date.seconds * 1000).toLocaleDateString("en-US")}</p>
          
          <div className="flex space-x-6">
            <button onClick={()=>{updateTodoFromDataBase(todo)}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            
            <button onClick={()=>{deleteTodoFromDatabase(todo)}} > 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
  
        <div>
          <h3 className="bg-blue-300 p-2 rounded ">{todo.category}</h3>
          <h4 className="flex">
              
              {todo.done==="true"?<Done/>:<Notdone/>}
          </h4>
          
        </div>
      </div>
            </div>
          )
          

        })
      }

    </div>
  )
}
