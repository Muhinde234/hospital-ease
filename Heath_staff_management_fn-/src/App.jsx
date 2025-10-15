
import "./App.css";

import LandingPage from "./pages/landing/landingPage";
import About from "./pages/landing/About";
import ApplyPage from "./pages/landing/ApplyPage";
import ForgotPassword from "./pages/landing/forgot-password";
import Login from "./pages/landing/Login";
import Register from "./pages/landing/Register";
import Contact from "./pages/landing/Contact";
import Services from "./pages/landing/services"
import GuestLayout from "./components/layout/GuestLayout";
import Sidebar from "./components/layout/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "about", element:<About/>  },
      { path: "services", element: <Services/> },
      { path: "contact", element: <Contact/> },
      { path: "apply-page", element:<ApplyPage/>},
     
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
    {
    path: "/forgot-password",
    element: <ForgotPassword/>,
  },
  {
    path: "/dashboard",
    element: <Sidebar />,
  },
]);

const helmetContext = {};
const App = () => {
  return (
    <div className="font-['Poppins']">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
