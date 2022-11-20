import './styles.css';
import LogoutIcon from '../../assets/logout.png';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { notifyError, notifySucess } from '../../utils/notifications';
import { useState } from 'react';
import { clear, getItem } from '../../utils/storage';
import ChartResultsBySellers from '../../components/ChartResultsBySellers';
import SalesChartByMonth from '../../components/SalesChartByMonth';
import GraphAverageValuesPerMonth from '../../components/GraphAverageValuesPerMonth';

const defaultFormCar = {
  marca: '',
  modelo: '',
  ano: 0,
  cor: '',
  valor: 0,
  vendido: false
}

const defaultFormSeller = {
  nome: ''
}

const defaultFormSale = {
  carro_id: 0,
  valor: 0,
  data_venda: '',
  vendedor_id: 0
}

function Dashboard() {
  const token = getItem('token');
  const navigate = useNavigate();

  const [formCar, setFormCar] = useState({ ...defaultFormCar });
  const [formSeller, setFormSeller] = useState({ ...defaultFormSeller });
  const [formSale, setFormSale] = useState({ ...defaultFormSale });

  async function handleSubmitCar(e) {
    e.preventDefault();

    try {

      const response = await api.post('/carros',
        {
          marca: formCar.marca,
          modelo: formCar.modelo,
          ano: formCar.ano,
          cor: formCar.cor,
          valor: formCar.valor,
          vendido: false
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status > 204) {
        return notifyError(response.data);
      }

      notifySucess('Carro cadastrado com sucesso!');

      setFormCar({ ...defaultFormCar });

    } catch (error) {
      notifyError(error.response.data.mensagem);
    }
  }

  function handleChangeFormCar({ target }) {
    setFormCar({ ...formCar, [target.name]: target.value });
  }

  async function handleSubmitSeller(e) {
    e.preventDefault();

    try {

      const response = await api.post('/vendedores',
        {
          nome: formSeller.nome
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status > 204) {
        return notifyError(response.data);
      }

      notifySucess('Vendedor cadastrado com sucesso!');

      setFormSeller({ ...defaultFormSeller });

    } catch (error) {
      notifyError(error.response.data.mensagem);
    }
  }

  function handleChangeFormSeller({ target }) {
    setFormSeller({ ...formSeller, [target.name]: target.value });
  }

  async function handleSubmitSale(e) {
    e.preventDefault();

    try {

      const response = await api.post('/vendas',
        {
          carro_id: formSale.carro_id,
          valor: formSale.valor,
          data_venda: formSale.data_venda,
          vendedor_id: formSale.vendedor_id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status > 204) {
        return notifyError(response.data);
      }

      notifySucess('Venda cadastrada com sucesso!');

      setFormSale({ ...defaultFormSale });

    } catch (error) {
      notifyError(error.response.data.mensagem);
    }
  }

  function handleChangeFormSale({ target }) {
    setFormSale({ ...formSale, [target.name]: target.value });
  }

  function handleLogout() {
    clear();
    navigate('/');
  }

  return (
    <div className="container-dashboard">
      <img
        src={LogoutIcon}
        alt="Logout"
        onClick={handleLogout}
      />
      <h1>Bem-vindo ao gerenciamento da concessionária</h1>
      <div className="container-main align-forms">
        <form
          className="content-form"
          onSubmit={handleSubmitCar}
        >
          <h4>Cadastre um Carro</h4>
          <div className="content-inputs">
            <label htmlFor="marca">Marca</label>
            <input
              type="text"
              name="marca"
              value={formCar.marca}
              onChange={handleChangeFormCar}
            />
          </div>
          <div className="content-inputs">
            <label htmlFor="modelo">Modelo</label>
            <input
              type="text"
              name="modelo"
              value={formCar.modelo}
              onChange={handleChangeFormCar}
            />
          </div>
          <div className="content-inputs">
            <label htmlFor="ano">Ano</label>
            <input
              type="number"
              name="ano"
              value={formCar.ano}
              onChange={handleChangeFormCar}
            />
          </div>
          <div className="content-inputs">
            <label htmlFor="cor">Cor</label>
            <input
              type="text"
              name="cor"
              value={formCar.cor}
              onChange={handleChangeFormCar}
            />
          </div>
          <div className="content-inputs">
            <label htmlFor="valor">Valor</label>
            <input
              type="number"
              name="valor"
              value={formCar.valor}
              onChange={handleChangeFormCar}
            />
          </div>
          <div className="content-inputs">
            <label htmlFor="vendido">Vendido</label>
            <input
              type="text"
              name="vendido"
              value={formCar.vendido}
              onChange={handleChangeFormCar}
            />
          </div>
          <button>CADASTRAR</button>
        </form>
        <form
          className="content-form"
          onSubmit={handleSubmitSeller}
        >
          <h4>Cadastre um Vendedor</h4>
          <div className="content-inputs">
            <label htmlFor="nome">Nome do vendedor</label>
            <input
              type="text"
              name="nome"
              value={formSeller.nome}
              onChange={handleChangeFormSeller}
            />
          </div>
          <button>CADASTRAR</button>
        </form>
        <form
          className="content-form"
          onSubmit={handleSubmitSale}
        >
          <h4>Cadastre uma Venda</h4>
          <div className="content-inputs">
            <label htmlFor="carro_id">Número identificador do carro</label>
            <input
              type="number"
              name="carro_id"
              value={formSale.carro_id}
              onChange={handleChangeFormSale}
            />
          </div>
          <div className="content-inputs">
            <label htmlFor="valor">Valor</label>
            <input
              type="number"
              name="valor"
              value={formSale.valor}
              onChange={handleChangeFormSale}
            />
          </div>
          <div className="content-inputs">
            <label htmlFor="data_venda">Data da venda</label>
            <input
              type="text"
              name="data_venda"
              value={formSale.data_venda}
              onChange={handleChangeFormSale}
            />
          </div>
          <div className="content-inputs">
            <label htmlFor="vendedor_id">Número identificador do vendedor</label>
            <input
              type="number"
              name="vendedor_id"
              value={formSale.vendedor_id}
              onChange={handleChangeFormSale}
            />
          </div>
          <button>CADASTRAR</button>
        </form>
      </div>
      <h2>Gráficos para Gerenciamento</h2>
      <div className='content-charts'>
        <ChartResultsBySellers />
        <SalesChartByMonth />
        <GraphAverageValuesPerMonth />
      </div>
    </div>
  );
}

export default Dashboard;
