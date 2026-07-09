import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Profil() {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">

                    <div className="card d-flex justify-content-center align-items-center mb-5 mt-5 mx-2 mx-lg-4 rounded-0 bg-dark" style={{ border: "red solid 2px" }}>
                        <img src="/LoginLogo.png" className="rounded-circle pdpImage mt-5 mb-3" alt="pdp" style={{ border: "red solid 2px" }} />
                        <h5 className="text-white mt-1 mb-5 comptePolice">Caddy rasolonjatovo</h5>

                        <div className="mb-5">
                            <div className="d-flex flex-column flex-lg-row gap-0 gap-lg-5">
                                <h5 className="text-secondary mt-1 comptePolice">Type de Compte: </h5>
                                <h5 className="text-secondary mt-1 comptePolice">Épargne · </h5>
                            </div>

                            <div className="d-flex flex-column flex-lg-row gap-0 gap-lg-5">
                                <h5 className="text-secondary mt-1 comptePolice">Compte Numero </h5>
                                <h5 className="text-secondary mt-1 comptePolice">N° 0021145 </h5>
                            </div>

                            <div className="d-flex flex-column flex-lg-row gap-0 gap-lg-5">
                                <h5 className="text-secondary mt-1 comptePolice">Solde disponible - </h5>
                                <h5 className="text-secondary mt-1 comptePolice">820 000 Ar </h5>
                            </div>

                            <div className="d-flex flex-column flex-lg-row gap-0 gap-lg-5">
                                <h5 className="text-secondary mt-1 comptePolice">Intérêt ce mois  </h5>
                                <h5 className="text-secondary mt-1 comptePolice">+ 820 000 </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Profil;