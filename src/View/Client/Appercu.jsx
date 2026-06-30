import NavBarClient from "../../Components/NavBarClient"
import EvolutionSolde from "./EvolutionSolde";
function Appercue() {
    return (
        <>
            <div className="card mt-4 py-1 pb-4 py-lg-3 rounded-0 mx-2 px-2 mx-lg-4 bg-dark" style={{ border: "2px solid red" }}>
                <div className="d-flex flex-column flex-md-row justify-content-between mx-lg-3">

                    <div className="d-flex flex-column-reverse flex-md-row mt-3 ms-3 gap-2 gap-md-3">

                        <div className="d-block gap-5">
                            <h3 className="text-secondary" style={{ fontSize: "clamp(1rem, 2vw, 1.8rem)" }}> Solde disponible- </h3>
                            <p className="text-danger fs-3 fw-bold font-monospace">820 000 Ar</p>

                        </div>

                        <h5 className="text-secondary mt-1 comptePolice">Compte Épargne · N° 0021145</h5>

                    </div>

                    <div className="d-block mt-lg-5 ms-3">
                        <small className="text-secondary">Intérêt ce mois</small>
                        <p className="text-danger m-0 font-monospace"> + 820 000 Ar</p>

                    </div>
                </div>
            </div>

            <div className="d-flex mt-3 mx-2 mx-lg-4 gap-lg-3 gap-1">
                <button className="btn px-1 px-md-3 same-btn btn-dark same-btnTransaction rounded-0" style={{ border: "red solid 2px" }}>
                    + Deposer
                </button>

                <button className="btn px-1 px-md-3  same-btn btn-dark same-btnTransaction rounded-0" style={{ border: "red solid 2px" }}>
                    - Retirer
                </button>

                <button className="btn px-1 px-md-1 same-btn btn-dark same-btnTransaction rounded-0" style={{ border: "red solid 2px" }}>
                    → Virement
                </button>
            </div>

            <h2 className="text-white mt-4 mx-2 mx-lg-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>Evolution du solde</h2>
            <div>
                <EvolutionSolde />
            </div>
        </>
    )
}

export default Appercue;