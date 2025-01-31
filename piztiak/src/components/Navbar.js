import { NavLink, Outlet } from "react-router-dom";

function Navbar() {

    return (
        <div>
            <div className="navbar">
                <NavLink className={({ isActive }) => (isActive ? "navbar-link-selected" : "navbar-link")} to="/">Main page</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "navbar-link-selected" : "navbar-link")} to="/map">Navigate</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "navbar-link-selected" : "navbar-link")} to="/statistics">Statistics</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "navbar-link-selected" : "navbar-link")} to="/instructions">Translation instructions</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "navbar-link-selected" : "navbar-link")} to="/newest">Latest additions</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "navbar-link-selected" : "navbar-link")} to="/about-us">About us</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "navbar-link-selected" : "navbar-link")} to="/support-us">Support us</NavLink>
            </div>

            <Outlet />
        </div>
    );
  }
  
  export default Navbar;
  