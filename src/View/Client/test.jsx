import { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import api from "../../api/axios";


const AreaChartExample = ({ isAnimationActive = true, refresh }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/client/getEvolutionSolde")
            .then(response => {

                const donnees = response.data.map(transaction => {
                    const date = new Date(transaction.dateTransaction);

                    return {
                        date: date.toLocaleString("fr-FR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        }),
                        solde: transaction.soldeApres
                    };

                })
                setData(donnees);
            })
            .catch(error => console.log(error));
    }, [refresh]);

    return (
        <AreaChart
            data={data}
            style={{
                width: '100%',
                maxWidth: '1000px',
                maxHeight: '70vh',
                aspectRatio: 1.618
            }}
            responsive
        >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Area
                type="monotone"
                dataKey="solde"
                stroke="#82ca9d"
                fill="url(#colorUv)"
                isAnimationActive={isAnimationActive}
            />
        </AreaChart>
    );
};

export default AreaChartExample;