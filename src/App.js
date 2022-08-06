import {db} from './Firebase'
import { addDoc, collection, getDoc, getDocs  ,deleteDoc ,doc, updateDoc} from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import './App.css';
import { async } from '@firebase/util';
import Header from './components/Header';
import Todo  from './components/Todo';
import TodoList from './components/TodoList';
import TestTodos from './components/TestTodos';
import NewTodoForm from './components/NewTodoForm';
import Done from './Done';
import Notdone from './Notdone';
function App() {
  const [todosArray ,setTodosArray]=useState([]);
  const [isOpen ,setIsOpen]=useState(false);
  useEffect(()=>{
    getTodosFromFirebase();
    // saveTodoTFirebase();
    // deleteTodoFromDatabase();

  },[])
  const getTodosFromFirebase= async ()=>{
    const todoSnapshot=await getDocs(collection(db ,"todo"));
    const todoList =todoSnapshot.docs.map((doc)=>{
    // console.log(doc.data())
    console.log(doc.id);
    const tempDoc=doc.data();
    console.log(tempDoc)
    const newDoc={...tempDoc,id:doc.id};
    console.log(newDoc)
     return newDoc;
    //  doc.data();



    })
    console.log(todoList)
    setTodosArray(todoList)

  }
  // const fakeTodo={
  //   title:"title of the fake todo",
  //   description:"description",
  //   category:"sdsd",
  //   done:"true"

  // }
  
  // const saveTodoTFirebase=async ()=>{
  //   await addDoc(collection(db,"todo"),fakeTodo)

  // }
    
  const deleteTodoFromDatabase= async (todo)=>{
    console.log("Delete called")
        const todoref=doc(db,'todo',todo.id)
        await deleteDoc(todoref).then(()=>{
          console.log("todo deleted");
          getTodosFromFirebase();
        })

  }
  const updateTodoFromDatabase= async (todo)=>{
    console.log("update button clicked")
    const todoref=doc(db,'todo',todo.id)
    await updateDoc(todoref,{
      done:"true"

    }).then(()=>{
      console.log("todo is updated");
      getTodosFromFirebase();

    })



  }

  function addTodo(newTodo) {
    console.log("New Todo To be added is :", newTodo);

    // setTodosArray([...todosArray,newTodo]);

    // todosArray.push(newTodo);
    // console.log(todosArray);

    // localStorage.setItem("todosArray", JSON.stringify(todosArray));
    setIsOpen(false)
  }

  return (

    <React.Fragment>
      <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <NewTodoForm  todosArray={todosArray}
        // addTodo={addTodo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setTodosArray={setTodosArray}/>
        <TestTodos deleteTodoFromDatabase={deleteTodoFromDatabase} todosArray={todosArray} updateTodoFromDataBase={updateTodoFromDatabase}/>
        
      </div>

    </React.Fragment>
  );
}

export default App;
