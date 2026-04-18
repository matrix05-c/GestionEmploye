import { useNavigate } from "react-router-dom";

function UpdateClient() {
    const navigate = useNavigate()

    const goToListe = () => {
        navigate('/liste')
    }
    return (
        <>
            <h1 className="text-center mb-5 text-white">Modifier un client</h1>

            <div className="card p-4 w-50 mx-auto">

                <div className="d-flex align-items-center mb-3 mt-3">
                    <label className="me-3" style={{ width: "120px" }}>Num Compte: </label>
                    <div className="form-outline" >
                        <input disabled type="number" className="form-control" />
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
                        <input type="number" placeholder="0" className="form-control" />
                    </div>
                </div>

                <div className="d-flex align-items-center mt-4 mb-5 gap-5" style={{ marginLeft: "140px" }}>
                    <button onClick={goToListe} className="btn btn-outline-dark">annuler</button>
                    <button className="btn btn-success">Modifier</button>

                </div>
            </div>
        </>
    )
}

export default UpdateClient;