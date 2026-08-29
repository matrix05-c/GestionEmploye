import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../api/axios";
import Swal from "sweetalert2";

function TransactionMenu({ onTransactionSuccess }) {

    const [showModalDepot, setShowModalDepot] = useState(false);
    const [showModalRetrait, setShowModalRetrait] = useState(false);
    const [showModalVirement, setShowModalVirement] = useState(false);
    const [showModalPret, setShowModalPret] = useState(false);


    const handleCloseDepot = () => setShowModalDepot(false);
    const handleShowDepot = () => setShowModalDepot(true);

    const handleCloseRetrait = () => setShowModalRetrait(false);
    const handleShowRetrait = () => setShowModalRetrait(true);

    const handleCloseVirement = () => setShowModalVirement(false);
    const handleShowVirement = () => setShowModalVirement(true);

    const handleClosePret = () => setShowModalPret(false);
    const handleShowPret = () => setShowModalPret(true);

    const [depotValue, setDepotValue] = useState({
        montant: 0,
        password: ''
    })

    const deposer = (e) => {

        e.preventDefault();

        api.post('client/depot', depotValue)
            .then(response => {
                setDepotValue({
                    montant: 0,
                    password: ''
                })
                console.log("depot reussi")
                onTransactionSuccess();
                handleCloseDepot()
                Swal.fire({
                    title: "Succès",
                    text: "Depot réussie",
                    icon: "success",
                    theme: 'dark'
                })
            }).catch(error => {
                console.log(error.response.data.error)
                Swal.fire({
                    title: "Erreur",
                    text: error.response.data.error,
                    icon: "error",
                    theme: "dark"
                });
            })
    }


    const [retraitValue, setRetraitValue] = useState({
        montant: 0,
        password: ''
    })

    const retrait = (e) => {

        e.preventDefault();

        api.post('client/retrait', retraitValue)
            .then(response => {

                setRetraitValue({
                    montant: 0,
                    password: ''
                })
                console.log("retrait reussi");
                onTransactionSuccess();

                handleCloseRetrait()

                Swal.fire({
                    title: "Succès",
                    text: "Retrait réussie",
                    icon: "success",
                    theme: 'dark'
                })
            }
            ).catch(error => {
                console.log(error.response.data.error)
                Swal.fire({
                    title: "Erreur",
                    text: error.response.data.error,
                    icon: "error",
                    theme: "dark"
                });
            })
    }

    const [virementValue, setVirementValue] = useState({
        montant: 0,
        numCompteDestinataire: '',
        password: ''
    })

    const virement = (e) => {

        e.preventDefault();

        api.post('client/virement', virementValue)
            .then(response => {
                setVirementValue({
                    montant: 0,
                    numCompteDestinataire: '',
                    password: ''
                })
                onTransactionSuccess();
                handleCloseVirement();

                Swal.fire({
                    title: "Succès",
                    text: "Virement réussi",
                    icon: "success",
                    theme: 'dark'
                })
            }
            ).catch(error => {
                console.log(error.response.data.error)
                Swal.fire({
                    title: "Erreur",
                    text: error.response.data.error,
                    icon: "error",
                    theme: "dark"
                });
            })
    }

    useEffect(() => {
        console.log(depotValue.montant)
        console.log(depotValue.password)
    }, [depotValue.montant])

    useEffect(() => {
        console.log("destinataire: ", virementValue.numCompteDestinataire);
    }, [virementValue.numCompteDestinataire])

    return (
        <>
            <div className="d-flex flex-wrap mt-3 mx-2 mx-lg-4 gap-lg-3 gap-1 ps-lg-0 ps-1">
                <button onClick={handleShowDepot} className="btn px-1 px-md-3  same-btn btn-dark same-btnTransaction rounded-0" style={{ border: "red solid 2px" }}>
                    + Deposer
                </button>

                <button onClick={handleShowRetrait} className="btn px-1 px-md-3  same-btn btn-dark same-btnTransaction rounded-0" style={{ border: "red solid 2px" }}>
                    - Retirer
                </button>

                <button onClick={handleShowVirement} className="btn px-1 px-md-1 same-btn btn-dark same-btnTransaction rounded-0" style={{ border: "red solid 2px" }}>
                    → Virement
                </button>

                <button onClick={handleShowPret} className="btn px-1 px-md-1 same-btn btn-dark same-btnTransaction rounded-0" style={{ border: "red solid 2px" }}>
                    ++ pret
                </button>
            </div>

            <Modal
                show={showModalDepot}
                onHide={handleCloseDepot}
                backdrop="static"
                keyboard={false}
                variant="primary"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Faire un depot</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={deposer}>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Entrer le montant</Form.Label>
                            <Form.Control

                                onChange={(e) => {
                                    setDepotValue({
                                        ...depotValue,
                                        montant: Number(e.target.value)
                                    })
                                }}
                                type="number"
                                placeholder="0000 Ar"
                                // value={depotValue.montant}
                                min={500}
                                autoFocus
                                required

                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Entrer votre mot de pass</Form.Label>
                            <Form.Control

                                onChange={(e) => {
                                    setDepotValue({
                                        ...depotValue,
                                        password: e.target.value
                                    })
                                }}
                                value={depotValue.password}
                                type="password"
                                placeholder="****"
                                required
                            />
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseDepot}>
                                Annuler
                            </Button>
                            <Button type="submit" variant="primary">
                                Deposer
                            </Button>
                        </Modal.Footer>

                    </Form>

                </Modal.Body>
            </Modal >

            <Modal
                show={showModalRetrait}
                onHide={handleCloseRetrait}
                backdrop="static"
                keyboard={false}
                variant="primary"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Faire un retrait -</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={retrait}>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Entrer le montant</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="0000 Ar"
                                // value={retraitValue.montant}
                                step={500}
                                min={500}
                                autoFocus
                                required

                                onChange={(e) => {
                                    setRetraitValue({
                                        ...retraitValue,
                                        montant: Number(e.target.value)
                                    })
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Entrer votre mot de pass</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="****"
                                value={retraitValue.password}
                                required

                                onChange={(e) => {
                                    setRetraitValue({
                                        ...retraitValue,
                                        password: e.target.value
                                    })
                                }}
                                onFocus={(e) => e.target.placeholder = ""}
                            // onBlur={(e) => e.target.placeholder = "****"}
                            />
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseRetrait}>
                                Annuler
                            </Button>
                            <Button variant="primary" type="submit">Retirer</Button>
                        </Modal.Footer>

                    </Form>

                </Modal.Body>

            </Modal>


            <Modal
                show={showModalVirement}
                onHide={handleCloseVirement}
                backdrop="static"
                keyboard={false}
                variant="primary"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Faire un Virement →</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={virement}>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>numero de compte</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="numero de compte"
                                // autoFocus
                                value={virementValue.numCompteDestinataire}
                                required

                                onChange={(e) => {
                                    console.log("hahaha")
                                    setVirementValue({
                                        ...virementValue,
                                        numCompteDestinataire: e.target.value
                                    })
                                }}
                                onFocus={(e) => { e.target.placeholder = '' }}
                                onBlur={(e) => { e.target.placeholder = 'numero de compte' }}


                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Entrer le montant</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="0000 Ar"
                                step={500}
                                min={500}
                                value={virementValue.montant}
                                required

                                onChange={(e) => {
                                    setVirementValue({
                                        ...virementValue,
                                        montant: Number(e.target.value)
                                    })
                                }}
                                onFocus={(e) => { e.target.placeholder = '' }}
                                onBlur={(e) => { e.target.placeholder = '0000 Ar' }}


                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Entrer votre mot de pass</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="****"
                                required

                                onChange={(e) => {
                                    setVirementValue({
                                        ...virementValue,
                                        password: e.target.value
                                    })
                                }}
                                onFocus={(e) => { e.target.placeholder = '' }}
                                onBlur={(e) => { e.target.placeholder = '****' }}

                            />
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseVirement}>
                                Annuler
                            </Button>
                            <Button variant="primary" type="submit">Confirmer</Button>
                        </Modal.Footer>

                    </Form>
                </Modal.Body>
            </Modal>


            <Modal
                show={showModalPret}
                onHide={handleClosePret}
                backdrop="static"
                keyboard={false}
                variant="primary"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Demande de pret</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>Entrer le montant a demander</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0000 Ar"
                            step={500}
                            min={500}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Entrer votre mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="****"
                        />
                    </Form.Group>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePret}>
                        Annuler
                    </Button>
                    <Button variant="primary">Confirmer</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TransactionMenu;