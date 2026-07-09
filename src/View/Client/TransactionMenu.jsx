import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

import { useState } from "react";

function TransactionMenu() {

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
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>Entrer le montant</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0000 Ar"
                            step={500}
                            min={500}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Entrer votre mot de pass</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="****"
                        />
                    </Form.Group>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDepot}>
                        Annuler
                    </Button>
                    <Button variant="primary">Deposer</Button>
                </Modal.Footer>
            </Modal>

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
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>Entrer le montant</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0000 Ar"
                            step={500}
                            min={500}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Entrer votre mot de pass</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="****"
                        />
                    </Form.Group>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseRetrait}>
                        Annuler
                    </Button>
                    <Button variant="primary">Retrait</Button>
                </Modal.Footer>
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

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>numero de compte</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="numero de compte"
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Label>Entrer le montant</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0000 Ar"
                            step={500}
                            min={500}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Entrer votre mot de pass</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="****"
                        />
                    </Form.Group>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseVirement}>
                        Annuler
                    </Button>
                    <Button variant="primary">Confirmer</Button>
                </Modal.Footer>
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