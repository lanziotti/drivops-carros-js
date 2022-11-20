import { useEffect } from "react";
import { Chart } from "react-google-charts";
import api from "../../services/api";
import { notifyError } from "../../utils/notifications";
import { getItem } from "../../utils/storage";

// const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
// let arrayMonthsFilter = [];

export const data = [
    ["Element", "Vendas X Mês", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export default function SalesChartByMonth() {

    useEffect(() => {
        const token = getItem('token');

        async function loadDataSales() {
            try {
                const response = await api.get('/vendas', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status > 204) {
                    return notifyError(response.data);
                }

                // const objectMonth = response.data.map((sale) => {
                //     return sale.data_venda.slice(5, 7)   
                // })

                // for (const month of months) {
                //     const arrayMonths = objectMonth.filter((date) => {
                //         return date === month
                //     })
                //     arrayMonthsFilter.push(arrayMonths)
                // }

                // console.log(arrayMonthsFilter)

            } catch (error) {
                notifyError(error.response.data)
            }
        }

        function generateColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';

            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }

            return color;

        }


        loadDataSales();

    }, []);

    return (
        <Chart
            chartType="ColumnChart"
            width="80%"
            height="400px"
            data={data}
        />
    );
}