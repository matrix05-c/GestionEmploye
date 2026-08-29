import { useEffect, useState } from "react";
import api from "../../api/axios";

function Historique() {

    const [historique, setHistorique] = useState([])

    const loadHistorie = () => {
        api.get('client/transactionsHistorique')
            .then(response => {
                // console.log(response.data)
                setHistorique(response.data)
                console.log(historique)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadHistorie()
    }, [])

    useEffect(() => {
        console.log("Historique mis à jour :", historique);
    }, [historique]);

    return (
        <>
            <h2 className="text-white mt-4 mx-2 mx-lg-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                liste des Historiques
            </h2>

            <div className="mb-5 mt-4">
                {historique.map((transaction) => (
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

export default Historique;