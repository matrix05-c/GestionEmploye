import "bootstrap-icons/font/bootstrap-icons.css"
function Table() {
    return (
        <table className="table align-middle text-center">
            <thead>
                <tr>
                    <th scope="col">num Sold</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Solde</th>
                    <th scope="col">Observation</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Sit</td>
                    <td>Amet</td>
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
                    <th scope="row">2</th>
                    <td>Adipisicing</td>
                    <td>Elit</td>
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
                    <th scope="row">3</th>
                    <td>Hic</td>
                    <td>Fugiat</td>
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
    );
}

export default Table;