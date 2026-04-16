import Table from "../Components/Table";
function Liste() {
    return (
        <>
            <h1 className="text-center">Liste des Clients</h1>
            <div className="d-flex justify-content-between ps-5 pe-5">
                <button className="btn btn-success ms-5 mb-4 d-flex align-items-center gap-3">
                    <i className="bi bi-person-plus"> </i>
                    Nouveau Client
                </button>
                <div className="input-group w-25" style={{height: "40px"}}>
                    <input type="search" className="form-control rounded" placeholder="Search" />
                    <button type="button" className="btn btn-outline-primary">search</button>
                </div>
            </div>
            <div>
                <Table></Table>
            </div>
        </>
    )
}
export default Liste;
