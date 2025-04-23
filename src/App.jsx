
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
    <div className="bg-blue-200 min-w-max min-h-screen pt-6 sm:pt-8 px-4 sm:px-6 md:px-12 lg:px-20">

    <h1 className="text-left text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
      Productivity
    </h1>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
