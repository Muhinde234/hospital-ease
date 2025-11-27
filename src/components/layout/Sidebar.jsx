import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../../feature/data/SectionData";
import {
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  Activity,
} from "lucide-react";


const SidebarItem = ({ icon: Icon, label, href, isActive, isSidebarExpanded, onClick }) => {
  return (
    <Link
      to={href}
      className={`flex items-center rounded-lg px-3 py-2  transition-all duration-200  ${
        isActive ? "bg-blue-100 text-blue-600 font-medium" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <Icon className={` text-blue-600 flex-shrink-0 ${isActive ? "text-gray-600" : "text-blue-600"}`} size={20} />
      {isSidebarExpanded && (
        <span className="ml-3 transition-opacity duration-200 whitespace-nowrap">{label}</span>
      )}
    </Link>
  );
};

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setExpanded(!expanded);
  const toggleMobileSidebar = () => setMobileOpen(!mobileOpen);


  return (
    <>
  
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button
          onClick={toggleMobileSidebar}
          className="rounded-full bg-white shadow-md p-2 border border-gray-200 hover:bg-gray-100 transition-colors"
        >
          <Menu size={20}  />
        </button>
      </div>

   
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

    
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${
          expanded ? "w-80" : "w-[72px]"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
      
        <div
          className={`flex items-center p-4 border-b border-gray-200 ${
            expanded ? "justify-between" : "justify-center"
          }`}
        >
          {expanded && (
           <div className="flex items-center gap-8">
           <Link to="/" className="flex-shrink-0 flex items-center">
             <Activity size={42} className="text-blue-400" />
             <span className="ml-2 text-xl font-bold">
               Health Staff  app
             </span>
           </Link>
         </div>
         
          )}

       
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex p-1 rounded-md  "
          >
            {expanded ? <ChevronLeft size={22} className="text-blue-500" /> : <ChevronRight size={22} className="text-blue-500" />}
          </button>

          <button
            onClick={toggleMobileSidebar}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ChevronLeft size={20} className="text-blue-600" />
          </button>
        </div>

     
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={location.pathname.startsWith(item.href)}
              isSidebarExpanded={expanded}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        </nav>

        <div className="p-3 border-t border-gray-200">
          <Link
            to="/logout"
            className="flex items-center rounded-lg px-3 py-2  hover:bg-blue-700 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <LogOut size={20} className=" text-blue-500" />
            {expanded && <span className="ml-3">Logout</span>}
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
