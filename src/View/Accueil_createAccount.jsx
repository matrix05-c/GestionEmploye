import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import NavBarClient from "../Components/NavBarClient";
import Swal from "sweetalert2";

function Accueil_createAccount() {

    const navigate = useNavigate();

    const annuler = () => {
        navigate('/')
    }

    const [email, setEmail] = useState('')
    const [nom, setNom] = useState('');
    // const [numCompte, setNumCompte] = useState('');
    const [password, setPassword] = useState('')
    // const [solde, setSolde] = useState(0);
    const [typeCompte, setTypeCompte] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const userAdde = {
        email: email,
        nom: nom,
        password: password,
        typeCompte: typeCompte,
        solde: 0
    };

    const enregistrer = () => {

        if (userAdde.password !== passwordConfirmation) {
            Swal.fire({
                title: "Erreur",
                text: "Les mots de passe ne correspondent pas",
                icon: "error",
                theme: 'dark'
            });
        } else {

            api.post("/createClient", userAdde)
                .then(response => {
                    console.log(response.data);
                    annuler()
                    Swal.fire({
                        title: "Client créé",
                        text: "Client créé avec succès",
                        icon: "success",
                        theme: 'dark'
                    });
                })
                .catch(error => console.log(error));
        }
    };

    useEffect(() => {
        console.log(userAdde)
    }, [nom])
    return (
        <>
            <div className="overflow-hidden">
                <NavBarClient
                    login={false}
                    typeLogin={"creation"}
                />

                <div className="container-fluid px-2 px-md-4">

                    <div className="card p-3 p-md-4 p-lg-5 mx-auto mt-5 mt-md-5 mb-4"
                        style={{
                            maxWidth: "700px",
                            width: "100%",
                            border: "blue solid 3px",
                        }}>

                        {/* NOM */}
                        <div className="row align-items-center mb-1 mb-md-3">

                            <label className="col-12 col-md-4 col-form-label mb-1 mb-md-0">
                                Nom :
                            </label>

                            <div className="col-12 col-md-8">
                                <input
                                    type="text"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    className="form-control"
                                    placeholder="Entrer votre nom"
                                    required
                                />
                            </div>

                        </div>


                        {/* EMAIL */}
                        <div className="row align-items-center mb-3">

                            <label className="col-12 col-md-4 col-form-label mb-2 mb-md-0">
                                Email :
                            </label>

                            <div className="col-12 col-md-8">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Entrer votre email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>

                        </div>


                        {/* TYPE DE COMPTE */}
                        <div className="row align-items-center mb-3">

                            <label className="col-12 col-md-4 col-form-label mb-2 mb-md-0">
                                Type de compte :
                            </label>

                            <div className="col-12 col-md-8">

                                <select
                                    className="form-select"
                                    value={typeCompte}
                                    onChange={(e) => setTypeCompte(e.target.value)}
                                    required
                                >

                                    <option value="" disabled>
                                        Type de votre compte
                                    </option>

                                    <option value="COURANT">
                                        Compte Courant
                                    </option>

                                    <option value="EPARGNE">
                                        Compte Épargne
                                    </option>

                                </select>

                            </div>

                        </div>


                        {/* MOT DE PASSE */}
                        <div className="row align-items-center mb-3">

                            <label className="col-12 col-md-4 col-form-label mb-2 mb-md-0">
                                Mot de passe :
                            </label>

                            <div className="col-12 col-md-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Entrer votre mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required

                                />
                            </div>

                        </div>


                        {/* CONFIRMATION */}
                        <div className="row align-items-center mb-4">

                            <label className="col-12 col-md-4 col-form-label mb-2 mb-md-0">
                                Confirmation :
                            </label>

                            <div className="col-12 col-md-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirmer votre mot de passe"
                                    value={passwordConfirmation}
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                    required

                                />
                            </div>

                        </div>


                        {/* BOUTONS */}
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-4">

                            <button
                                className="btn btn-dark px-4 w-100" onClick={annuler}
                            >
                                Annuler
                            </button>

                            <button
                                onClick={enregistrer}
                                className="btn btn-primary px-4 w-100"
                            >
                                Créer
                            </button>

                        </div>

                    </div>

                </div>
            </div>

            {/* {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )} */}
        </>
    );
}

export default Accueil_createAccount;