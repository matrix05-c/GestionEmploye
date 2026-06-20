
import "bootstrap-icons/font/bootstrap-icons.css"
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import api from "../api/axios";


function Table() {

    const navigate = useNavigate()

    const goToAddClient = () => {
        navigate('/addClient')
    }

    const goToUpdate = (id) => {
        navigate(`/UpdateClient/${id}`)
    }

    const [clients, setClients] = useState([]);

    const deleteClient = (id) => {
        api.delete(`http://localhost:8080/deleteUser/${id}`)
            .then(response => {
                console.log(response.data)
                setClients(clients.filter(client1 => client1.numCompte != id))
            })

            .catch(error => console.log(error))
    }

    const [rechercheValue, setRechercheValue] = useState('');

    const findclient = () => {

        let url = '';

        if (!rechercheValue) {
            url = "http://localhost:8080/allClient";

        } else {
            url = "http://localhost:8080/findClient?find=" + rechercheValue;
        }
        api.get(url)
            .then(response => {
                setClients(response.data)
            }
            ).catch(error => console.log(error))
    }

    const getAllClient = () => {
        api.get("http://localhost:8080/allClient")
            .then(Response => {
                setClients(Response.data)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {

        if (!rechercheValue) {
            getAllClient()
        }
        else {
            findclient()
        }

    }, [rechercheValue])

    const [nbclients, setNbClients] = useState(0);

    const countAllClient = () => {
        api.get("http://localhost:8080/countAllClient")
            .then(response => setNbClients(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllClient();

        countAllClient();

    }, []);


    const CalculObservation = (solde) => {
        if (solde < 1000) return { texte: "Insuffisant", couleur: "red" };
        if (solde >= 1000 && solde <= 5000) return { texte: "Moyen", couleur: "orange" };
        if (solde > 5000) return { texte: "Elevé", couleur: "green" };
        return { texte: "", couleur: "black" };

    }

    return (
        <>
            <div className="d-flex justify-content-between ps-5 pe-5">

                <button onClick={goToAddClient} className="btn btn-success ms-5 mb-4 d-flex align-items-center gap-3">
                    <i className="bi bi-person-plus"> </i>
                    Nouveau Client
                </button>

                <div className="input-group w-25" style={{ height: "40px" }}>

                    <input type="search" value={rechercheValue} onChange={(e) => setRechercheValue(e.target.value)}
                        className="form-control rounded" placeholder="Search" />

                    <button type="button" onClick={() => {
                        findclient()
                    }} className="btn btn-outline-primary">search</button>

                </div>

            </div>
            <p className="text-white ps-5 small fw-bold ms-2">nombre des clients : {nbclients}</p>

            <table className="table table-hovered align-middle text-center table-bordered custom-table">
                <thead>
                    <tr>
                        <th scope="col" className="text-white">num Compte</th>
                        <th scope="col" className="text-white">Nom</th>
                        <th scope="col" className="text-white">Solde</th>
                        <th scope="col" className="text-white">Observation</th>
                        <th scope="col" className="text-white">Action</th>
                    </tr>
                </thead>


                <tbody>
                    {
                        clients.length > 0
                            ? clients.map((client) => {
                                const obs = CalculObservation(client.solde)

                                return (
                                    <tr key={client.numCompte}>
                                        <th scope="row" className="text-white">{client.numCompte}</th>
                                        <td className="text-white">{client.nom}</td>
                                        <td className="text-white">{client.solde}</td>

                                        <td style={{ color: obs.couleur }}>
                                            {obs.texte}
                                        </td>

                                        <td>

                                            <div className="d-flex justify-content-center gap-3 ">
                                                <button onClick={() => { goToUpdate(client.numCompte) }} className="btn btn-outline-primary btn-sm px-3">
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                                <button onClick={() => { deleteClient(client.numCompte) }} className="btn btn-outline-danger btn-sm px-3">
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                )
                            }
                            ) : <tr>
                                <td colSpan={5} className="fw-bold">
                                    Aucun client trouvve
                                </td>
                            </tr>
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table;