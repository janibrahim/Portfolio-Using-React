import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Sidebar from "./Pages/Sidebar";
import About from './Pages/About'
import Skills from './Pages/Skills'

function App() {
  return (
    <>
     <div class="main">
      <Sidebar/>
      <div className="main-content">
      <Navbar/>
      <Outlet/>
        
      
    </div>
      </div>
    </>
  );
}

export default App;
