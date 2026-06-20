import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";


function UpdateClient() {
    const navigate = useNavigate()

    const goToListe = () => {
        navigate('/liste')
    }

    const { id } = useParams();

    useEffect(() => {
        console.log(id)
    }, [id])

    const [clientUpdateValue, setClientUpdateValue] = useState({
        'numCompte': 0,
        'nom': '',
        'solde': 0
    })

    const clientUpdate = () => {
        console.log("haha")
        api.get(`http://localhost:8080/getUpdate/${id}`)
            .then(Response => {

                setClientUpdateValue({
                    numCompte: Response.data.numCompte,
                    nom: Response.data.nom,
                    solde: Response.data.solde
                });

                console.log(Response.data.nom)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        clientUpdate()
    }, [])

    const updateEnvoyer = () => {
        api.put("http://localhost:8080/updateGo/" + id, clientUpdateValue)
            .then(respose => {
                goToListe()
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1 className="text-center  mt-5 mb-5 text-white">Modifier un client</h1>
            {id}
            <div className="card p-4 w-50 mx-auto">

                <div className="d-flex align-items-center mb-3 mt-3">
                    <label className="me-3" style={{ width: "120px" }}>Num Compte: </label>
                    <div className="form-outline" >
                        <input disabled type="number" value={clientUpdateValue.numCompte} onChange={(e) => {
                            setClientUpdateValue({ ...clientUpdateValue, numCompte: e.target.value })
                        }} className="form-control" />
                    </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                    <label className="me-3" style={{ width: "120px" }}>Nom: </label>
                    <div className="form-outline" >
                        <input type="text" value={clientUpdateValue.nom} onChange={(e) => {
                            setClientUpdateValue({ ...clientUpdateValue, nom: e.target.value })
                        }} className="form-control" />
                    </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                    <label className="me-3" style={{ width: "120px" }}>Solde: </label>
                    <div className="form-outline" >
                        <input type="number" value={clientUpdateValue.solde} onChange={(e) => {
                            setClientUpdateValue({ ...clientUpdateValue, solde: e.target.value })
                        }} placeholder="0" className="form-control" />
                    </div>
                </div>

                <div className="d-flex align-items-center mt-4 mb-5 gap-5" style={{ marginLeft: "140px" }}>
                    <button onClick={goToListe} className="btn btn-outline-dark">annuler</button>
                    <button onClick={() => {
                        updateEnvoyer()
                    }} className="btn btn-success">Modifier</button>

                </div>
            </div>
        </>
    )
}

export default UpdateClient;