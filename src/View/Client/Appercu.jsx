import NavBarClient from "../../Components/NavBarClient"
import EvolutionSolde from "./EvolutionSolde";
import { useEffect, useState } from "react";
import TransactionMenu from "./TransactionMenu";
import api from "../../api/axios";

function Appercue() {

    const numCompte = localStorage.getItem("numCompte");
    const [soldeDispo, setSoldeDispo] = useState('');
    const [interetMensuel, setInteretMensuel] = useState(0);

    const response = () => {
        api.get("/client/allInfoClient")
            .then(response => {
                console.log(response.data)
                setSoldeDispo(response.data.solde)

            })
            .catch(error => console.log(error))
    }

    const getInteret = () => {
        api.get("/client/calculInteret/" + numCompte)
            .then(response => {
                setInteretMensuel(response.data.interetMensuel)

            })
            .catch(error => console.log(error))
    }

    const [historiqueRecent, setHistoriqueRecent] = useState([])

    const getHistorique = () => {
        api.get('client/getTop5Transaction')
            .then(response => {
                console.log(response.data)
                setHistoriqueRecent(response.data)

            }).catch(error => console.log(error))
    }

    const [refresh, setRefresh] = useState(0);


    useEffect(() => {
        response()
        getInteret()
        getHistorique()
    }, [numCompte, refresh])

    return (
        <>
            <div className="card mt-4 py-1 pb-4 py-lg-3 rounded-0 mx-2 px-2 mx-lg-4 bg-dark" style={{ border: "2px solid red" }}>
                <div className="d-flex flex-column flex-md-row justify-content-between mx-lg-3">

                    <div className="d-flex flex-column-reverse flex-md-row mt-3 ms-3 gap-2 gap-md-3">

                        <div className="d-block gap-5">
                            <h3 className="text-secondary" style={{ fontSize: "clamp(1rem, 2vw, 1.8rem)" }}> Solde disponible- </h3>
                            <p className="text-danger fs-3 fw-bold font-monospace">{soldeDispo} Ar</p>

                        </div>

                        <h5 className="text-secondary mt-1 comptePolice">Compte Épargne · N° {numCompte}</h5>

                    </div>

                    <div className="d-block mt-lg-5 ms-3">
                        <small className="text-secondary">Intérêt ce mois</small>
                        <p className="text-danger m-0 font-monospace"> + {interetMensuel} Ar</p>

                    </div>
                </div>
            </div>

            <TransactionMenu onTransactionSuccess={() => setRefresh(prev => prev + 1)}></TransactionMenu>

            <h2 className="text-white mt-4 mx-2 mx-lg-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                Evolution du solde
            </h2>

            <div>
                <EvolutionSolde refresh={refresh} />
            </div>

            <h2 className="text-white mt-4 mx-2 mx-lg-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                Historique récent:
            </h2>

            <div className="mb-5 ">
                {historiqueRecent.map((transaction) => (
                    <div key={transaction.id} className="card bg-dark mt-2 mt-lg-3 rounded-0 mx-2 px-2 mx-lg-4 " style={{ border: "red solid 2px" }}>
                        <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            {transaction.type}
                        </h3>

                        <div className="d-flex justify-content-between">
                            <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                                {/* 15 juin 2026 · 14:02 */}
                                {transaction.dateTransaction}
                            </h3>

                            <h3
                                style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}
                                className={
                                    transaction.type === "RETRAIT" || transaction.type === "VIREMENT"
                                        ? "text-danger mt-1 mt-lg-2 ms-2 ms-lg-3"
                                        : "text-success mt-1 mt-lg-2 ms-2 ms-lg-3"
                                }
                            >
                                {(transaction.type === "RETRAIT" || transaction.type === "VIREMENT")
                                    ? `- ${transaction.montant}`
                                    : `+ ${transaction.montant}`
                                }
                            </h3>

                        </div>

                        {transaction.type == "VIREMENT" && (
                            <h3 className="text-secondary ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 1vw, 1.2rem)" }}>
                                vers {transaction.compteDestinataire}
                            </h3>
                        )}

                    </div>

                ))}

            </div>

        </>
    )
}

export default Appercue;