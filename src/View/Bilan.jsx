import Chart from "../Components/Chart";
import NavBar from "../Components/NavBar";
function Bilan() {
    return (
        <>
            <NavBar></NavBar>
            <h1 className="text text-center fw-bold text-white">Dashboard:</h1>
            <Chart></Chart>
        </>
    )
}

export default Bilan;