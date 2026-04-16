import NavBar from "../Components/NavBar";

function Accueil() {
    return (
        <>
            <h1 className="text-center mb-5">Ajout d'un client</h1>

            <div className="card p-4 w-50 mx-auto">

                <div className="d-flex align-items-center mb-3 mt-3">
                    <label className="me-3" style={{ width: "120px" }}>Num Compte: </label>
                    <div className="form-outline" >
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                    <label className="me-3" style={{ width: "120px" }}>Nom: </label>
                    <div className="form-outline" >
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                    <label className="me-3" style={{ width: "120px" }}>Solde: </label>
                    <div className="form-outline" >
                        <input type="number" className="form-control" />
                    </div>
                </div>

                <div className="d-flex align-items-center ms-5  gap-5">
                    <button className="btn btn-outline-danger">annuler</button>
                    <button className="btn btn-success">Ajouter</button>

                </div>
            </div>
        </>
    )
}

export default Accueil;