import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
    { name: "A", valeur: 10 },
    { name: "B", valeur: 20 }
];

function Chart() {
    const data = {
        total: 125000,
        min: 5000,
        max: 45000
    };

    const chartData = useMemo(() => [
        { name: "Total", valeur: data.total, couleur: "#0d6efd" },
        { name: "Min", valeur: data.min, couleur: "#dc3545" },
        { name: "Max", valeur: data.max, couleur: "#198754" }
    ], []);
    return (
        <div className="container mt-4">
            {/* CARDS */}
            <div className="row g-3 mb-4">

                <div className="col-md-4">
                    <div className="card shadow-sm p-3 border-1 bg-dark" style={{ border: "white solid 1px" }}>
                        <h6 className="text-white">Solde Total</h6>
                        <h3 className="text-primary">{data.total} Ar</h3>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm p-3 border-1 bg-dark" style={{ border: "white solid 1px" }}>
                        <h6 className="text-white">Solde Minimum</h6>
                        <h3 className="text-danger">{data.min} Ar</h3>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm p-3 border-1 bg-dark" style={{ border: "white solid 1px" }}>
                        <h6 className="text-white">Solde Maximum</h6>
                        <h3 className="text-success">{data.max} Ar</h3>
                    </div>
                </div>

            </div>

            {/* CHART */}
            <div className="card shadow-sm p-4 bg-dark" style={{border: "white solid 2px"}}>
                <h5 className="mb-3 text-white">Analyse des soldes</h5>

                <ResponsiveContainer width="100%" height={300} >
                    <BarChart data={chartData}>
                        <XAxis dataKey="name" stroke="white"/>
                        <YAxis stroke="white" />
                        <Tooltip />

                        <Bar dataKey="valeur" >
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={
                                        entry.couleur
                                    }
                                />
                            ))}
                        </Bar>

                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}

export default Chart;