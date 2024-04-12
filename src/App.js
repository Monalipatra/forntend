
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

const routes = createBrowserRouter([
 {
  path:"/",
  element:<Home />,
 },
 {
  path:"/about",
  element:<About/>,
 },
 
]);
function App() {
  return <RouterProvider router={routes}/>;
  
}

export default App;
