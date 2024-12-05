import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Add from "./components/addSports/Add"
import Sports from "./components/getSports/Sports";
import Edit from "./components/updateSports/Edit";

function App() {
  const route =createBrowserRouter([
    {
      path:"/add",
      element:<Add/> 
    },
    {
      path:"/",
      element:<Sports/>
    },
    {
      path:"/edit/:id",
      element:<Edit/>
    }


  ])
  return (
    <div className="App">
        <RouterProvider router ={route}></RouterProvider>
    </div>
  )
}
export default App;

