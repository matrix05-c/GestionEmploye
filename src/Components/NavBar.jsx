import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";

function NavBar() {
    const [openNav, setOpenNav] = useState(false);

    const navigate = useNavigate()
    const deconnexion = () => {
        navigate('/')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ borderBottom: "grey solid 1px", backgroundColor: "#212529", boxShadow: "-4px 14px 19px -5px #212529" }}>
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${openNav ? "show" : ""}`}>
                        <ul className="navbar-nav ms-3 me-auto d-flex" >
                            {/* <li className="nav-item">
                                <Link className="nav-link fw-bold text-white" to="/">Accueil</Link>
                            </li> */}

                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-link fw-bold text-success active-link"
                                        : "nav-link fw-bold text-white"} to="/liste">Liste</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav-link fw-bold text-success active-link"
                                        : "nav-link fw-bold text-white"} to="/bilan">Bilan</NavLink>
                            </li>
                        </ul>

                        {/* <span style={{ fontWeight: "bolder" }} className="text-white me-2 ms-auto">Gestion_Client</span> */}

                        <i onClick={deconnexion} className="bi bi-box-arrow-right me-2 text-white" style={{ fontSize: "25px" }}></i>

                    </div>
                </div>
            </nav >
        </>
    );
}

export default NavBar;