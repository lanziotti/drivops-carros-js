import { useEffect } from 'react';
import { Chart } from 'react-google-charts';
import api from '../../services/api';
import { getItem } from '../../utils/storage';
import { notifyError } from '../../utils/notifications';

let xSellers = [];
let salesSeller = [];
let salesFinal = [];
let arrayAuxiliar = [];
let arryDefinitivo = [];


export let data = [
    ["Vendedor", "Vendas X Vendedor", { role: "style" }]
];

export default function ChartResultsBySellers() {

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

                for (const seller of response.data) {
                    if (!xSellers.includes(seller.vendedor)) {
                        xSellers.push(seller.vendedor);
                    }
                }

                for (const sellers of xSellers) {
                    const arraySellers = response.data.filter((seller) => {
                        return seller.vendedor === sellers
                    })
                    salesSeller.push(arraySellers)
                }

                for (const saleData of salesSeller) {
                    let someSale = 0;
                    for (const sale of saleData) {
                        someSale += sale.valor
                    }
                    salesFinal.push(someSale)
                }

                for (let index = 0; index < salesFinal.length; index++) {
                    arrayAuxiliar.push(xSellers[index]);
                    arrayAuxiliar.push(salesFinal[index]);
                    arrayAuxiliar.push(generateColor());
                    arryDefinitivo.push(arrayAuxiliar);
                    arrayAuxiliar = [];
                }

                for (const array of arryDefinitivo) {
                    data.push(array);
                }

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
            chartLanguage="pt-BR"
        />
    );
}