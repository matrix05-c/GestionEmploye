import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import api from "../../api/axios";

function Profil() {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [profils, setProfils] = useState([])

    const getInfo = () => {
        api.get("client/getInfo")
            .then(response => {
                setProfils(response.data)
                console.log(response.data)

            })
            .catch(error => console.log(error))
    }

    const [interetMensuel, setInteretMensuel] = useState('')
    const numCompte = localStorage.getItem("numCompte");
    const getInteret = () => {
        api.get("/client/calculInteret/" + numCompte)
            .then(response => {
                setInteretMensuel(response.data.interetMensuel)

            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getInfo()
        getInteret()
    }, [])

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">

                    <div className="card d-flex justify-content-center align-items-center mb-5 mt-5 mx-2 mx-lg-4 rounded-0 bg-dark" style={{ border: "red solid 2px" }}>
                        <img src="/LoginLogo.png" className="rounded-circle pdpImage mt-5 mb-3" alt="pdp" style={{ border: "red solid 2px" }} />
                        <h5 className="text-white mt-1 mb-5 comptePolice">{profils.nom}</h5>

                        <div className="mb-5">
                            <div className="d-flex flex-column flex-lg-row gap-0 gap-lg-5">
                                <h5 className="text-secondary mt-1 comptePolice">Type de Compte : </h5>
                                <h5 className="text-secondary mt-1 comptePolice">{profils.typeCompte} · </h5>
                            </div>

                            <div className="d-flex flex-column flex-lg-row gap-0 gap-lg-5">
                                <h5 className="text-secondary mt-1 comptePolice">Numero de Compte :  </h5>
                                <h5 className="text-secondary mt-1 comptePolice">{profils.numCompte} </h5>
                            </div>

                            <div className="d-flex flex-column flex-lg-row gap-0 gap-lg-5">
                                <h5 className="text-secondary mt-1 comptePolice">Solde disponible - </h5>
                                <h5 className="text-secondary mt-1 comptePolice">{profils.solde} Ar </h5>
                            </div>

                            <div className="d-flex flex-column flex-lg-row gap-0 gap-lg-5">
                                <h5 className="text-secondary mt-1 comptePolice">Intérêt ce mois  </h5>
                                <h5 className="text-secondary mt-1 comptePolice">+ {interetMensuel} </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Profil;