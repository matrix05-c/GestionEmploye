import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${openNav ? "show" : ""}`}>
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Accueil</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/liste">Liste</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/bilan">Bilan</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;