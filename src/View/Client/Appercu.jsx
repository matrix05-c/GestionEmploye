import NavBarClient from "../../Components/NavBarClient"
import EvolutionSolde from "./EvolutionSolde";
import { useState } from "react";
import TransactionMenu from "./TransactionMenu";

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

            <TransactionMenu></TransactionMenu>

            <h2 className="text-white mt-4 mx-2 mx-lg-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                Evolution du solde
            </h2>

            <div>
                <EvolutionSolde />
            </div>

            <h2 className="text-white mt-4 mx-2 mx-lg-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                Historique récent:
            </h2>

            <div className="mb-5">
                <div className="card bg-dark mt-2 mt-lg-3 rounded-0 mx-2 px-2 mx-lg-4 " style={{ border: "red solid 2px" }}>
                    <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                        Dépôt
                    </h3>

                    <div className="d-flex justify-content-between">
                        <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            15 juin 2026 · 14:02
                        </h3>
                        <h3 className="text-success mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            + 500 000 Ar
                        </h3>
                    </div>

                </div>

                <div className="card bg-dark mt-2 mt-lg-3 rounded-0 mx-2 px-2 mx-lg-4 " style={{ border: "red solid 2px" }}>
                    <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                        Virement
                    </h3>

                    <div className="d-flex justify-content-between">
                        <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            15 juin 2026 · 14:02
                        </h3>
                        <h3 className="text-danger mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            + 500 000 Ar
                        </h3>
                    </div>

                </div>

                <div className="card bg-dark mt-2 mt-lg-3 rounded-0 mx-2 px-2 mx-lg-4 " style={{ border: "red solid 2px" }}>
                    <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                        Intérêt mensuel
                    </h3>

                    <div className="d-flex justify-content-between">
                        <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            15 juin 2026 · 14:02
                        </h3>
                        <h3 className="text-success mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            + 250 Ar
                        </h3>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Appercue;