import "bootstrap-icons/font/bootstrap-icons.css"

import { useNavigate } from "react-router-dom";

function Table() {

    const navigate = useNavigate()

    const goToAddClient = () => {
        navigate('/addClient')
    }

    const goToUpdate = () => {
        navigate('/UpdateClient')
    }
    return (
        <>
            <div className="d-flex justify-content-between ps-5 pe-5">

                <button onClick={goToAddClient} className="btn btn-success ms-5 mb-4 d-flex align-items-center gap-3">
                    <i className="bi bi-person-plus"> </i>
                    Nouveau Client
                </button>

                <div className="input-group w-25" style={{ height: "40px" }}>
                    <input type="search" className="form-control rounded" placeholder="Search" />
                    <button type="button" className="btn btn-outline-primary">search</button>
                </div>

            </div>

            <table className="table align-middle text-center custom-table">
                <thead>
                    <tr>
                        <th scope="col" className="text-white">num Sold</th>
                        <th scope="col" className="text-white">Nom</th>
                        <th scope="col" className="text-white">Solde</th>
                        <th scope="col" className="text-white">Observation</th>
                        <th scope="col" className="text-white">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row" className="text-white">1</th>
                        <td className="text-white">Sit</td>
                        <td className="text-white">Amet</td>
                        <td>
                            <button className="btn btn-link btn-sm px-3">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                        <td>

                            <div className="d-flex justify-content-center gap-3 ">
                                <button onClick={goToUpdate} className="btn btn-outline-primary btn-sm px-3">
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm px-3">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>

                        </td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-white">2</th>
                        <td className="text-white">Adipisicing</td>
                        <td className="text-white">Elit</td>
                        <td>
                            <button className="btn btn-link btn-sm px-3">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                        <td>

                            <div className="d-flex justify-content-center gap-3 ">
                                <button className="btn btn-outline-primary btn-sm px-3">
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm px-3">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>

                        </td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-white">2</th>
                        <td className="text-white">Adipisicing</td>
                        <td className="text-white">Elit</td>
                        <td>
                            <button className="btn btn-link btn-sm px-3">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                        <td>

                            <div className="d-flex justify-content-center gap-3 ">
                                <button className="btn btn-outline-primary btn-sm px-3">
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm px-3">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>

                        </td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-white">2</th>
                        <td className="text-white">Adipisicing</td>
                        <td className="text-white">Elit</td>
                        <td>
                            <button className="btn btn-link btn-sm px-3">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                        <td>

                            <div className="d-flex justify-content-center gap-3 ">
                                <button className="btn btn-outline-primary btn-sm px-3">
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm px-3">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>

                        </td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-white">2</th>
                        <td className="text-white">Adipisicing</td>
                        <td className="text-white">Elit</td>
                        <td>
                            <button className="btn btn-link btn-sm px-3">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                        <td>

                            <div className="d-flex justify-content-center gap-3 ">
                                <button className="btn btn-outline-primary btn-sm px-3">
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm px-3">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>

                        </td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-white">2</th>
                        <td className="text-white">Adipisicing</td>
                        <td className="text-white">Elit</td>
                        <td>
                            <button className="btn btn-link btn-sm px-3">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                        <td>

                            <div className="d-flex justify-content-center gap-3 ">
                                <button className="btn btn-outline-primary btn-sm px-3">
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm px-3">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>

                        </td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-white">2</th>
                        <td className="text-white">Adipisicing</td>
                        <td className="text-white">Elit</td>
                        <td>
                            <button className="btn btn-link btn-sm px-3">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                        <td>

                            <div className="d-flex justify-content-center gap-3 ">
                                <button className="btn btn-outline-primary btn-sm px-3">
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm px-3">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>

                        </td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-white">3</th>
                        <td className="text-white">Hic</td>
                        <td className="text-white">Fugiat</td>
                        <td>
                            <button className="btn btn-link btn-sm px-3">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                        <td>

                            <div className="d-flex justify-content-center gap-3 ">
                                <button className="btn btn-outline-primary btn-sm px-3">
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm px-3">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Table;