
import Todo from "./TodoList"
import Pomodor from "./Pomodor"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
const router = createBrowserRouter([
    {
      path: "/",
      element: <Todo />,
    },
  
  {
    path: "/Pomodor",
    element: <Pomodor/>,
  }
])

function App() {
  

  return (
    <div className="bg-blue-200 min-h-screen pt-8 px-6 ">
    <h1 className="text-left text-3xl font-bold pt-4 ml-5">Productivity</h1>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
