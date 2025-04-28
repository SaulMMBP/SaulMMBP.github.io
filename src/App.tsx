import { Outlet } from "react-router";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <button className="nav-open-btn" onClick={() => setOpen(true)}>
                <i className="bi bi-gear-fill"></i>
            </button>
            <NavBar isOpen={isOpen} close={() => setOpen(false)} />
            <Outlet />
            <footer>© 2023 Saul Malagon Martinez</footer>
        </>
    );
}

export default App;
