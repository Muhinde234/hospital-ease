import { Outlet } from "react-router"
import Footer from "./footer"
import Navbar from "./Navbar"


const GuestLayout = () => {
  return (
   <>
   <Navbar/>
   <main>
    <Outlet/>
   </main>
   <Footer/>
   </>
  )
}

export default GuestLayout