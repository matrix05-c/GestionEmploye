import { useNavigate } from "react-router-dom";
import photo from "../assets/LoginLogo.png"
import { useState } from "react";
import api from "../api/axios";
import NavBarClient from "../Components/NavBarClient";

function Accueil() {
    const navigate = useNavigate()

    const goToListe = () => {
        navigate('/liste')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const authentification = {
        email: email,
        password: password
    }

    const handleLogin = () => {
        api.post(
            'http://localhost:8080/auth/login', authentification)
            // {
            // // headers: {
            // //     "Content-Type": "application/x-www-form-urlencoded"
            // // }})

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
            <div style={{ overflow: "hidden" }}>

                {/* <h1 className="text-center mb-5 mt-5 text-white">Login</h1> */}
                <NavBarClient login={false}></NavBarClient>

                <div className="d-flex align-items-center mt-2 mt-md-0 justify-content-center" style={{ minHeight: "70vh" }}>

                    <div className="card p-1 px-md-4 mx-2 pt-4 pt-md-5" style={{ maxWidth: "700px", width: "100%", border: "blue solid 2px" }}>

                        <div className="row flex-column-reverse  flex-md-row-reverse">
                            <div className="col-12  col-md-8 mt-2 mt-md-4">

                                <div className="d-flex row align-items-center mb-3">

                                    <label className="col-3 col-form-label d-none d-md-block">Email: </label>
                                    <div className="form-outline col" >
                                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Entrer votre email" className="form-control" />
                                    </div>

                                </div>

                                <div className="d-flex row align-items-center mb-3">

                                    <label className="col-3 col-form-label d-none d-md-block">Password: </label>
                                    <div className="form-outline col" >
                                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password" className="form-control" />
                                    </div>

                                </div>

                                <div className="mt-4 mb-4 col">
                                    <button onClick={handleLogin} className="btn btn-primary col-12">Login</button>
                                    <p className="text-primary text-start mt-3" style={{ fontSize: "13px" }}>Don't have an account? Register here</p>
                                </div>
                            </div>
                            <div className="col-6 mx-auto col-md-4 d-flex align-items-center rounded-circle">
                                <img src={photo} id="loginPhoto" alt="loginPhoto" className="img-fluid"
                                    style={{}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accueil;