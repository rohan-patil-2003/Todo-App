import React, { useEffect, useState, useRef } from "react";
import Todoicon from './assets/Todo.jpg';
import Timer from './assets/timer.jpg';
import TodoList from "./Todo";
import { Link } from "react-router-dom";

function Todo() {
  const [todoList, setTodoList] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []);
  const inputRef = useRef();

  const Add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      alert("Add Some Task");
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((todo) => [...todo, newTodo]);
    inputRef.current.value = "";
  };

  const DeleteTodo = (id) => {
    setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white relative w-[90%] max-w-xs p-4 sm:p-6 min-h-[250px] mx-auto mt-8 sm:mt-20 rounded-xl shadow-lg">


      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <img className="w-8 h-8" src={Todoicon} alt="to-do icon" />
          <h1 className="text-xl sm:text-2xl font-bold">Todo List</h1>
        </div>
        <Link to="/Pomodor">
          <img className="w-10 sm:w-12" src={Timer} alt="timer icon" />
        </Link>
      </div>

      {/* Input field */}
      <div className="flex flex-row sm:flex-row items-center  sm:gap-2 mb-6">
      <input
  ref={inputRef}
  id="todo-input"
  name="todo"
  className="  flex-1 w-56 h-10 px-3 rounded-full border border-gray-300 outline-none text-sm sm:text-base placeholder:text-slate-600"
  type="text"
  placeholder="Add your task"
/>

        <button
          onClick={Add}
          className="w-28 sm:w-32 h-10 rounded-full bg-orange-600 text-white font-medium text-sm sm:text-lg"
        >
          ADD +
        </button>
      </div>

      {/* Task List */}
      <div>
        {todoList.map((item) => (
          <TodoList
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={DeleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
