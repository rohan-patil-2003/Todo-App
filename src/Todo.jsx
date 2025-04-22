import React from "react";
import CheckMark from './assets/ckeck.jpg'
import Uncheck from './assets/uncheck.jpg'
import Edits from './assets/edit.jpg'
import Delete from './assets/delete.jpg'
import Todo from "./TodoList";
function TodoList({text,id,isComplete,deleteTodo,toggle}){
  return(
    <div className="flex items-center gap-2 my-3">
      <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">
      <img className="w-6" src={ isComplete ? CheckMark : Uncheck} alt="Check-Mark icon"></img>
      <p className={`ml-2 text-black text-[17px] decoration-red-800 ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>
      <img onClick={()=>{deleteTodo(id)}} className="w-8 cursor-pointer" src={Delete} alt="Delete btn"></img>
    </div>
  )
}
export default TodoList