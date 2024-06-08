import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/common/Home/Home";
import Error from "../pages/Error";
import Login from "../pages/Authontication/Login";
import Register from "../pages/Authontication/Register";
import AllPackages from "../pages/common/Home/AllPackages";
import Details from "../pages/common/Details";
import SecureRoute from "./SecureRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import WishPage from "../pages/common/WishPage";

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
        element: (
          <SecureRoute>
            <Details />
          </SecureRoute>
        ),
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/packages`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children:[
      {
        path:"wishList",
        element: <WishPage/>
      },
      {
        path:"userHome",
        element: <WishPage/>
      },
    ]
  },
]);

export default router;
