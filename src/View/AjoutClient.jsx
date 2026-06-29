import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function AjoutClient() {
    const navigate = useNavigate()

    const goToListe = () => {
        navigate('/liste')
    }

    const [numCompte, setNumCompte] = useState(0);
    const [nom, setNom] = useState('');
    const [solde, setSolde] = useState(0);
    const [typeCompte, setTypeCompte] = useState('');

    const userAdde = {
        'numCompte': numCompte,
        'nom': nom,
        'solde': solde,
        'typeCompte': typeCompte
    }


    const enregistrer = () => {

        api.post("http://localhost:8080/insert2", userAdde)
            .then(response => {
                console.log(response.data)
                goToListe()

            }).catch(error => console.log(error))
    }


    return (
        <>
            <h1 className="text-center mb-5 text-white">Ajout d'un client</h1>

            <div className="card p-5 w-50 mx-auto">

                <div className="d-flex flex-column flex-md-row align-items-md-center mb-3">
                    <label
                        className="me-md-3 mb-2 mb-md-0 flex-shrink-0"
                        style={{ minWidth: "160px" }}
                    >
                        Num Compte :
                    </label>

                    <input
                        type="number"
                        value={numCompte}
                        onChange={(e) => setNumCompte(e.target.value)}
                        className="form-control"
                    />
                </div>


                <div className="d-flex flex-column flex-md-row align-items-md-center mb-3">
                    <label
                        className="me-md-3 mb-2 mb-md-0 flex-shrink-0"
                        style={{ minWidth: "160px" }}
                    >
                        Nom :
                    </label>

                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        className="form-control"
                    />
                </div>


                <div className="d-flex flex-column flex-md-row align-items-md-center mb-3">
                    <label
                        className="me-md-3 mb-2 mb-md-0 flex-shrink-0"
                        style={{ minWidth: "160px" }}
                    >
                        Type de compte :
                    </label>

                    <select
                        className="form-select"
                        value={typeCompte}
                        onChange={(e) => setTypeCompte(e.target.value)}
                    >
                        <option value="" defaultValue disabled>
                            type de votre compte
                        </option>

                        <option value="COURANT">
                            Compte Courant
                        </option>

                        <option value="EPARGNE">
                            Compte Épargne
                        </option>
                    </select>
                </div>

                <div className="d-flex flex-column flex-md-row align-items-md-center mb-4">
                    <label
                        className="me-md-3 mb-2 mb-md-0 flex-shrink-0"
                        style={{ minWidth: "160px" }}
                    >
                        Solde initial :
                    </label>

                    <input
                        type="number"
                        value={solde}
                        onChange={(e) => setSolde(e.target.value)}
                        placeholder="0"
                        
                        className="form-control"
                    />
                </div>

                <div className="d-flex justify-content-center gap-5">
                    <button
                        onClick={goToListe}
                        className="btn btn-outline-dark"
                    >
                        Annuler
                    </button>

                    <button
                        onClick={enregistrer}
                        className="btn btn-success"
                    >
                        Ajouter
                    </button>
                </div>

            </div>
        </>
    )
}

export default AjoutClient;