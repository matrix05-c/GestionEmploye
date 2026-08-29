import Table from "../Components/Table";
import NavBar from "../Components/NavBar";
function Liste() {
    return (
        <>
        <NavBar></NavBar>
            <h1 className="text-center mt-3 mt-lg-5 text-white">Liste des Clients</h1>
            
            <div>
                <Table></Table>
            </div>
        </>
    )
}
export default Liste;
