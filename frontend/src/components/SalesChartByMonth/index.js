import { useEffect } from "react";
import { Chart } from "react-google-charts";
import api from "../../services/api";
import { notifyError } from "../../utils/notifications";
import { getItem } from "../../utils/storage";

let january = [];
let february = [];
let march = [];
let april = [];
let may = [];
let june = [];
let july = [];
let august = [];
let september = [];
let october = [];
let november = [];
let december = [];

let arrayData = [];

export const data = [
    ["Mês", "Vendas X Mês", { role: "style" }]
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

                const objectMonth = response.data.map((sale) => {
                    return {
                        data_venda: sale.data_venda.slice(5, 7),
                        valor: sale.valor,
                        cor: generateColor()
                    }
                })

                for (const object of objectMonth) {
                    if (object.data_venda === '01') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        january.push(array);

                    }
                    if (object.data_venda === '02') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        february.push(array);
                    }
                    if (object.data_venda === '03') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        march.push(array);
                    }
                    if (object.data_venda === '04') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        april.push(array);
                    }
                    if (object.data_venda === '05') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        may.push(array);
                    }
                    if (object.data_venda === '06') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        june.push(array);
                    }
                    if (object.data_venda === '07') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        july.push(array);
                    }
                    if (object.data_venda === '08') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        august.push(array);
                    }
                    if (object.data_venda === '09') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        september.push(array);
                    }
                    if (object.data_venda === '10') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        october.push(array);
                    }
                    if (object.data_venda === '11') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        november.push(array);
                    }
                    if (object.data_venda === '12') {
                        let array = [];
                        array.push(object.data_venda);
                        array.push(object.valor);
                        array.push(object.cor);
                        december.push(array);
                    }
                }


                for (let index = 0; index < january.length; index++) {
                    let sum = 0;
                    sum += january[index][1];
                    if (index === january.length - 1) {
                        arrayData.push(['Janeiro', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < february.length; index++) {
                    let sum = 0;
                    sum += february[index][1];
                    if (index === february.length - 1) {
                        arrayData.push(['Fevereiro', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < march.length; index++) {
                    let sum = 0;
                    sum += march[index][1];
                    if (index === march.length - 1) {
                        arrayData.push(['Março', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < april.length; index++) {
                    let sum = 0;
                    sum += april[index][1];
                    if (index === april.length - 1) {
                        arrayData.push(['Abril', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < may.length; index++) {
                    let sum = 0;
                    sum += may[index][1];
                    if (index === may.length - 1) {
                        arrayData.push(['Maio', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < june.length; index++) {
                    let sum = 0;
                    sum += june[index][1];
                    if (index === june.length - 1) {
                        arrayData.push(['Junho', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < july.length; index++) {
                    let sum = 0;
                    sum += july[index][1];
                    if (index === july.length - 1) {
                        arrayData.push(['Julho', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < august.length; index++) {
                    let sum = 0;
                    sum += august[index][1];
                    if (index === august.length - 1) {
                        arrayData.push(['Agosto', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < september.length; index++) {
                    let sum = 0;
                    sum += september[index][1];
                    if (index === september.length - 1) {
                        arrayData.push(['Setembro', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < october.length; index++) {
                    let sum = 0;
                    sum += october[index][1];
                    if (index === october.length - 1) {
                        arrayData.push(['Outubro', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < november.length; index++) {
                    let sum = 0;
                    sum += november[index][1];
                    if (index === november.length - 1) {
                        arrayData.push(['Novembro', sum, generateColor()]);
                    }
                }

                for (let index = 0; index < december.length; index++) {
                    let sum = 0;
                    sum += december[index][1];
                    if (index === december.length - 1) {
                        arrayData.push(['Dezembro', sum, generateColor()]);
                    }
                }

                for (const array of arrayData) {
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