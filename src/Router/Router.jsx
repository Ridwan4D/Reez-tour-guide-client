import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/common/Home/Home";
import Error from "../pages/Error";
import Login from "../pages/Authontication/Login";
import Register from "../pages/Authontication/Register";
import AllPackages from "../pages/common/Home/AllPackages";
import Details from "../pages/common/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allPackages",
        element: <AllPackages />,
      },
      {
        path: "/details/:id",
        element: <Details/>,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/packages`)
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  }
]);

export default router;
