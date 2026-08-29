import { useState } from "react";
import AreaChartExample from "./test";

function EvolutionSolde({ refresh }) {

    return (
        <>
            <div className="mx-2 mx-lg-4 mt-lg-4 d-flex justify-content-center align-items-center card bg-dark p-1 p-lg-3 rounded-0" style={{ border: "red solid 2px" }}>
                <AreaChartExample refresh={refresh} />
            </div>
        </>
    )
} export default EvolutionSolde;