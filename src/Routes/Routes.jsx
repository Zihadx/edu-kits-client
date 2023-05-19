import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ToyDetails from "../Pages/Details/ToyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'login',
            element: <Login></Login>
        },
        {
            path:'registration',
            element:<Registration></Registration>
        },
        {
          path: '/toydetails/:id',
          element: <ToyDetails></ToyDetails>,
          loader:()=> fetch(`http://localhost:5000/toys`)
        }
      ]
    },
  ]);

  export default router