import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/notifications.svg"
import api from "../api/axios";

function NavBarClient({ login }) {

    const deconnexion = () => {
        api.get("http://localhost:8080/logout")
            .then(response => {
                navigate('/')

            }).catch(error => console.log("failed to logout"))
    }

    return (
        <>
            <h6 className="text-white mt-3 mx-2 mx-lg-4">Espace</h6>
            <div className="d-flex mx-2 mx-lg-4 mt-1 pb-2 justify-content-between" style={{ borderBottom: "red solid 2px" }}>

                {login
                    ? <h2 className="text-white fw-bold">MON COMPTE</h2>
                    : <h2 className="text-white fw-bold">LOGIN</h2>
                }

                {login
                    ? <i onClick={deconnexion} className="bi bi-box-arrow-right me-2 text-white" style={{ fontSize: "22px", cursor: "pointer" }}></i>
                    : <img src={Logo} alt="" />
                }

            </div>

            {login &&
                <div className="d-flex mt-3 mx-2 mx-lg-4 gap-lg-3 gap-1">
                    <button className="btn px-1 px-md-3 same-btnPolice same-btn btn-dark rounded-0" style={{ border: "red solid 2px" }}>
                        <NavLink to={"AppercuClient"} className={"nav-link"}>
                            Apercu
                        </NavLink>
                    </button>

                    <button className="btn px-1 px-md-3 same-btnPolice same-btn btn-dark rounded-0" style={{ border: "red solid 2px" }}>
                        <NavLink to={"Historique"} className={"nav-link"}>
                            Historique
                        </NavLink>
                    </button>

                    <button className="btn px-1 px-md-3 same-btnPolice same-btn btn-dark rounded-0" style={{ border: "red solid 2px" }}>
                        <NavLink to={"Profil"} className={"nav-link"}>
                            Profil
                        </NavLink>
                    </button>
                </div>
            }
            <Outlet />
        </>
    )
}

export default NavBarClient;