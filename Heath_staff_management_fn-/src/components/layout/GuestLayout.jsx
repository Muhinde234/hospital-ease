import { Outlet } from "react-router"
import Footer from "./Footer"
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