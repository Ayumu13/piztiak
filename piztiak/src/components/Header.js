import '../App.css';
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
    <div class="header">
        <h2>The Piztiak Project</h2>
        <p>"Bildots kantaria naiz"</p>
    </div>

    <Outlet />
    </div>
  );
}

export default Main;
