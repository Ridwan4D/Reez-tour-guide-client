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
import StoryDetails from "../pages/common/StoryDetails";
import AllStoriesPage from "../pages/common/AllStoriesPage";
import GuideDetails from "../pages/common/GuideDetails";
import AllGuides from "../pages/common/AllGuides";
import Contact from "../pages/common/Contact";
import Blog from "../pages/common/Blog";
import AboutUs from "../pages/common/AboutUs";
import TripTypePackage from "../pages/common/TripTypePackage";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/tripType/:type",
        element: <TripTypePackage />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/packages`),
      },
      {
        path: "/allStories",
        element: (
          <SecureRoute>
            <AllStoriesPage />
          </SecureRoute>
        ),
      },
      {
        path: "/allGuides",
        element: (
          <SecureRoute>
            <AllGuides />
          </SecureRoute>
        ),
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
      {
        path: "/storyDetails/:id",
        element: (
          <SecureRoute>
            <StoryDetails />
          </SecureRoute>
        ),
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/allStories`),
      },
      {
        path: "/guideDetails/:id",
        element: (
          <SecureRoute>
            <GuideDetails />
          </SecureRoute>
        ),
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/guides?role=guide`),
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
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/usersCount`),
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
