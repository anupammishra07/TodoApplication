import Todo from "./Todo"

export default function TodoList({todosArray}) { //,deletetodo 
     console.log("Todos Array:" , todosArray)
  return (

    <div>
        {todosArray.map((todoss)=>{
            return(
                <Todo todoss={todoss}  />//deleteTodo={deleteTodo}
            )
        })}
    </div>
   

  )
}
