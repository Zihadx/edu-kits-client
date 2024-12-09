import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ToyDetails from "../Pages/Details/ToyDetails";
import AddToy from "../Pages/AddToy/AddToy";
import MyToy from "../Pages/MyToy/MyToy";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRout from "./PrivateRout";
import AllToys from "../Pages/Home/AllToys/AllToy/AllToys";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "/alltoy",
        element: <AllToys></AllToys>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/toydetails/:id",
        element: (
          <PrivateRout>
            <ToyDetails></ToyDetails>
          </PrivateRout>
        ),
        loader: () => fetch(`https://toys-zone-server-kappa.vercel.app/toys`),
      },
      {
        path: "/addtoy",
        element: (
          <>
            <AddToy></AddToy>
          </>
        ),
      },
      {
        path: "/mytoy",
        element: (
          <>
            <MyToy></MyToy>{" "}
          </>
        ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://toys-zone-server-kappa.vercel.app/${params.id}`),
      },
    ],
  },
]);

export default router;
