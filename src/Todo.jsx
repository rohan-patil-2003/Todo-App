import React from "react";
import CheckMark from './assets/ckeck.jpg'
import Uncheck from './assets/uncheck.jpg'
import Edits from './assets/edit.jpg'
import Delete from './assets/delete.jpg'
import Todo from "./TodoList";
function TodoList({text,id,isComplete,deleteTodo,toggle}){
  return(
    <div className="flex items-center gap-2 my-3 w-full ">
      <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer min-w-0">
      <img className="w-6 mt-1 shrink-0" src={ isComplete ? CheckMark : Uncheck} alt="Check-Mark icon"></img>
      <p className={`ml-2  text-black text-[17px] break-words whitespace-normal overflow-hidden w-full decoration-red-800 ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>
      <img onClick={()=>{deleteTodo(id)}} className="w-8 cursor-pointer shrink-0" src={Delete} alt="Delete btn"></img>
    </div>
  )
}
export default TodoList