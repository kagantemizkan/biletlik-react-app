import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Accountdetails from "./pages/Accountdetails";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Moviedetails from "./pages/Moviedetails";
import Register from "./pages/Register";
import Ticketsale from "./pages/Ticketsale";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Iletisim from "./pages/Iletisim";
import AdminPanel from "./pages/admin/AdminPanel";
import Session from "./pages/admin/Sessions";
import Movies from "./pages/admin/Movies";
import Screens from "./pages/admin/Screens";
import Tickets from "./pages/admin/Tickets";
import Categories from "./pages/admin/Categories";
import Sss from "./pages/Sss";
import Hakkimizda from "./pages/Hakkimizda";
import MyTickets from "./pages/MyTickets";
import "./style.scss"

const Layout = ()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
  {
    path: "/accountdetails",
    element: <Accountdetails/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/moviedetails",
    element: <Moviedetails/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/ticketsale",
    element: <Ticketsale/>,
  },
  {
    path: "/contact",
    element: <Iletisim/>,
  },
  {
    path: "/adminpanel",
    element: <AdminPanel/>,
  },
  {
    path: "/sessions",
    element: <Session/>,
  },
  {
    path: "/movies",
    element: <Movies/>,
  },
  {
    path: "/screens",
    element: <Screens/>,
  },
  {
    path: "/bookings",
    element: <Tickets/>,
  },
  {
    path: "/kategoriler",
    element: <Categories/>,
  },
  {
    path:"/hakkimizda",
    element: <Hakkimizda/>,
  },
  {
    path:"/sss",
    element: <Sss/>,
  },
  {
    path:"/myTickets",
    element: <MyTickets/>,
  }
]);


function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
