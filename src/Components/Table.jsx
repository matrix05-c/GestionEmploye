
import "bootstrap-icons/font/bootstrap-icons.css"
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Swal from "sweetalert2";


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
        api.delete(`http://localhost:8080/admin/deleteUser/${id}`)
            .then(response => {
                console.log(response.data)
                setClients(clients.filter(client1 => client1.id != id))
                Swal.fire({
                    title: "reussi",
                    text: "client effacé avec succés",
                    icon: "success",
                    theme: 'dark'
                })
            })

            .catch(error => console.log(error))
    }


    const [rechercheValue, setRechercheValue] = useState('');

    const findclient = () => {

        let url = '';

        if (!rechercheValue) {
            url = "http://localhost:8080/admin/allClient";

        } else {
            url = "http://localhost:8080/admin/findClient?find=" + rechercheValue;
        }
        api.get(url)
            .then(response => {
                setClients(response.data)
            }
            ).catch(error => console.log(error))
    }

    const [typeCompte, setTypeCompte] = useState('COURANT')

    const getAllClient = () => {
        api.get("http://localhost:8080/admin/getAllParType/" + typeCompte)
            .then(Response => {
                setClients(Response.data)
            })
            .catch(error => console.log(error));
    }


    const [nbclients, setNbClients] = useState(0);

    const countAllClient = () => {
        api.get("http://localhost:8080/admin/countAllClient?type=" + typeCompte)
            .then(response => setNbClients(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllClient();

        countAllClient();

        if (!rechercheValue) {
            getAllClient()
        }
        else {
            findclient()
        }

    }, [typeCompte, rechercheValue]);


    const CalculObservation = (solde) => {
        if (solde < 1000) return { texte: "Insuffisant", couleur: "red" };
        if (solde >= 1000 && solde <= 5000) return { texte: "Moyen", couleur: "orange" };
        if (solde > 5000) return { texte: "Elevé", couleur: "green" };
        return { texte: "", couleur: "black" };

    }

    useEffect(() => {
        getAllClient();
        countAllClient();

        console.log(typeCompte)
    }, [typeCompte])


    return (
        <>

            <div className="d-flex flex-column flex-md-row justify-content-between gap-3 px-2 px-md-5 mt-1 mt-md-5">

                <select
                    className="form-select w-100 w-md-25"
                    style={{ maxWidth: "300px" }}
                    value={typeCompte}
                    onChange={(e) => setTypeCompte(e.target.value)}
                >
                    <option value="COURANT">
                        Liste des comptes Courant
                    </option>

                    <option value="EPARGNE">
                        Liste des comptes Épargne
                    </option>
                </select>


                <div
                    className="input-group w-100 w-md-25"
                    style={{ maxWidth: "350px" }}
                >
                    <input
                        type="search"
                        value={rechercheValue}
                        onChange={(e) => setRechercheValue(e.target.value)}
                        className="form-control"
                        placeholder="Rechercher..."
                    />

                    <button
                        type="button"
                        onClick={findclient}
                        className="btn btn-outline-primary"
                    >
                        <i className="bi bi-search"></i>
                    </button>
                </div>

            </div>



            <p className="text-white ps-5 small mt-3 fw-bold ms-2">nombre des clients : {nbclients}</p>

            <div className="table-responsive">
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
                                                    <button onClick={() => { deleteClient(client.id) }} className="btn btn-outline-danger btn-sm px-3">
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
            </div>
        </>
    );
}

export default Table;