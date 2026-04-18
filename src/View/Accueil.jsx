import { useNavigate } from "react-router-dom";
import photo from "../assets/LoginLogo.png"

function Accueil() {
    const navigate = useNavigate()

    const goToListe = () => {
        navigate('/liste')
    }
    return (
        <>
            <h1 className="text-center mb-5 mt-5 text-white">Login</h1>

            <div className="card p-4 w-50 mx-auto d-flex flex-row flex-nowrap align-items-center">

                <div className="w-50 pe-1 mt-5">

                    <div className="d-flex align-items-center mb-3">
                        <label className="me-3" style={{ width: "100px" }}>Email: </label>
                        <div className="form-outline" >
                            <input type="email" placeholder="Entrer votre email" className="form-control" />
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                        <label className="me-3" style={{ width: "100px" }}>Password: </label>
                        <div className="form-outline" >
                            <input type="password" placeholder="password" className="form-control" />
                        </div>
                    </div>

                    <div className="mt-4 mb-5" style={{ marginLeft: ""}}>
                        <button onClick={goToListe} className="btn btn-primary w-100">Login</button>

                    </div>
                </div>
                <div className="w-50 p-0 d-flex">
                    <img src={photo} alt="loginPhoto" className="w-100 h-100"
                        style={{}} />
                </div>
            </div>
        </>
    )
}

export default Accueil;