import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Todoicon from './assets/Todo.jpg'
import Timer from './assets/timer.jpg'
import TodoList from "./Todo"
import { Link } from "react-router-dom";
function Todo(){
  const [todoList, setTodoList] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []);
  const inputRef = useRef();
  
const Add = ()=> {
  const inputText = inputRef.current.value.trim();

  if(inputText === "") {
    alert("Add Some Task")
    return null;
  }
  const newTodo = {
    id:Date.now(),
    text : inputText,
    isComplete : false,
  }
  setTodoList((todo)=>[...todo , newTodo])
  inputRef.current.value = "";
 }
const DeleteTodo = (id)=> {
 setTodoList((prevTodo)=>{
  return prevTodo.filter((todo)=> todo.id !== id)
 })
}
const toggle = (id)=>{
  setTodoList((prevTodo)=>{
    return prevTodo.map((todo)=>{
      if(todo.id === id) {
        return {...todo, isComplete: !todo.isComplete}
      }
      return todo;
    })
  })
}


useEffect(()=>{
  localStorage.setItem("todo",JSON.stringify(todoList));
},[todoList])

  return(
    <>
      <div className="bg-white  w-11/12 max-w-md flex flex-col p-6 min-h-[250px] mx-auto mt-10 rounded-xl sm:ml-auto sm:mr-auto sm:mt-20 md:ml-36 lg:ml-64 xl:ml-[420px] 2xl:mx-auto">
      <div className="flex flex-row items-start gap-4 ">
      <img className="w-8" src={Todoicon} alt="to-do icon"></img>
        <h1 className="text-left text-2xl font-bold">Todo List</h1>
  <Link
    to="/Pomodor"
  
  >
  <img className="w-12 ml-32" src={Timer}></img>
  </Link>

        </div>
                {/*-----input fild -----*/}
        <div className="flex flex-row items-center my-7 rounded-full bg-gray-200">
        <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="add your task"/>
        <button onClick={Add} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">ADD + </button>
      </div>  
       {/*------List---*/}
      <div>
        {todoList.map((item,index)=>{
          return <TodoList key={item.id} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={DeleteTodo} toggle={toggle}/>
        })}
        </div>
        








      </div>
                
  
    
    
    
    
    </>
  )
}
export default Todo;
