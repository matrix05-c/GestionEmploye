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

    const userAdde = {
        'numCompte': numCompte,
        'nom': nom,
        'solde': solde
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

            <div className="card p-4 w-50 mx-auto">

                <div className="d-flex align-items-center mb-3 mt-3">
                    <label className="me-3" style={{ width: "120px" }}>Num Compte: </label>
                    <div className="form-outline" >
                        <input type="number" value={numCompte} onChange={(e) => setNumCompte(e.target.value)} className="form-control" />
                    </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                    <label className="me-3" style={{ width: "120px" }}>Nom: </label>
                    <div className="form-outline" >
                        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} className="form-control" />
                    </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                    <label className="me-3" style={{ width: "120px" }}>Solde: </label>
                    <div className="form-outline" >
                        <input type="number" value={solde} onChange={(e) => setSolde(e.target.value)} placeholder="0" className="form-control" />
                    </div>
                </div>

                <div className="d-flex align-items-center mt-4 mb-5 gap-5" style={{ marginLeft: "140px" }}>
                    <button onClick={goToListe} className="btn btn-outline-dark">annuler</button>
                    <button className="btn btn-success" onClick={enregistrer}>Ajouter</button>

                </div>
            </div>
        </>
    )
}

export default AjoutClient;