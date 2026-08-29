import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import api from "../api/axios";

function NavBar() {
    const [openNav, setOpenNav] = useState(false);

    const navigate = useNavigate()
    // const deconnexion = () => {
    //     api.post("http://localhost:8080/logout")
    //         .then(response => {
    //             navigate('/')

    //         }).catch(error => console.log("failed to logout"))
    // }

    const deconnexion = () => {
        localStorage.removeItem("token"); // ou sessionStorage, selon où tu le stockes
        navigate('/');
    };
    
    return (
        <>
            <nav className="navbar navbar-expand-lg mb-3" style={{ borderBottom: "grey solid 1px", backgroundColor: "#212529", boxShadow: "-4px 14px 19px -5px #212529" }}>
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setOpenNav(!openNav)}
                        style={{ filter: "invert(1)" }}
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

                        {/* <i onClick={deconnexion} className="bi bi-box-arrow-right me-2 text-white" style={{ fontSize: "22px", cursor: "pointer" }}></i> */}
                        <div className="d-flex align-items-center mt-2 mt-lg-0 mb-2 mb-lg-0 ms-3 ms-lg-0">
                            <i
                                onClick={deconnexion}
                                className="bi bi-box-arrow-right text-white"
                                style={{ fontSize: "22px", cursor: "pointer" }}
                                title="Déconnexion"
                            ></i>
                            <span
                                onClick={deconnexion}
                                className="text-white ms-2 fw-bold"
                                style={{ cursor: "pointer", fontSize: "14px" }}
                            >
                                Déconnexion
                            </span>
                        </div>

                    </div>
                </div>
            </nav >
        </>
    );
}

export default NavBar;