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
import WishPage from "../pages/user/WishPage";
import Profile from "../pages/common/Profile";
import RequestToAdmin from "../pages/user/RequestToAdmin";
import Bookings from "../pages/user/Bookings";
import ManageUser from "../pages/admin/ManageUser";
import ManageTour from "../pages/guide/ManageTour";
import AdminRoute from "./AdminRoute";
import GuideRoute from "./GuideRoute";
import AddPackage from "../pages/admin/AddPackage";

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
    element: (
      <SecureRoute>
        <DashboardLayout />
      </SecureRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "wishList",
        element: <WishPage />,
      },
      {
        path: "profile",
        element: (
          <SecureRoute>
            <Profile />
          </SecureRoute>
        ),
      },
      {
        path: "requestAdmin",
        element: <RequestToAdmin />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUser />
          </AdminRoute>
        ),
      },
      {
        path: "addPackage",
        element: (
          <AdminRoute>
            <AddPackage />
          </AdminRoute>
        ),
      },
      {
        path: "assignedTour",
        element: (
          <GuideRoute>
            <ManageTour />
          </GuideRoute>
        ),
      },
    ],
  },
]);

export default router;
