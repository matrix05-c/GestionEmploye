function Profil() {
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

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...aaaaaaaaaaaaaa
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profil;