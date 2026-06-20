import { useNavigate } from "react-router-dom";
import photo from "../assets/LoginLogo.png"
import { useState } from "react";
import api from "../api/axios";

function Accueil() {
    const navigate = useNavigate()

    const goToListe = () => {
        navigate('/liste')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        api.post(
            '/login',
            new URLSearchParams({ email, password }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })

            .then(Response => {

                console.log("connecte!");
                navigate('/liste')
            })

            .catch(error => {
                setError('Email ou password incorect')
            })

    }

    return (
        <>
            <h1 className="text-center mb-5 mt-5 text-white">Login</h1>

            <div className="card p-4 w-50 mx-auto d-flex flex-row flex-nowrap align-items-center">

                <div className="w-50 pe-1 mt-5">

                    <div className="d-flex align-items-center mb-3">
                        <label className="me-3" style={{ width: "100px" }}>Email: </label>
                        <div className="form-outline" >
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Entrer votre email" className="form-control" />
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                        <label className="me-3" style={{ width: "100px" }}>Password: </label>
                        <div className="form-outline" >
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password" className="form-control" />
                        </div>
                    </div>

                    <div className="mt-4 mb-5" style={{ marginLeft: "" }}>
                        <button onClick={handleLogin} className="btn btn-primary w-100">Login</button>

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