import './styles.css';
import Header from '../../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';
import { notifyError, notifySucess } from '../../utils/notifications';

const defaultForm = {
    name: '',
    email: '',
    password: ''
}

function RegisterUser() {
    const navigate = useNavigate();

    const [form, setForm] = useState({ ...defaultForm });

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (!form.name || !form.email || !form.password) {
                return notifyError('Todos os campos são obrigatórios.');
            }

            const response = await api.post('usuario',
                {
                    nome: form.name,
                    email: form.email,
                    senha: form.password
                }
            );

            if (response.status > 204) {
                return notifyError(response.data);
            }

            notifySucess('Cadastro realizado com sucesso!');

            navigate('/');

        } catch (error) {
            return notifyError(error.response.data.mensagem);
        }
    }

    function handleChangeForm({ target }) {
        setForm({ ...form, [target.name]: target.value });
    }

    return (
        <div className="container">
            <Header />
            <main className="container-main">
                <h1>Faça seu Cadastro</h1>
                <form
                    className="content-form"
                    onSubmit={handleSubmit}
                >
                    <div className="content-inputs">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="name"
                            name="name"
                            value={form.name}
                            onChange={handleChangeForm}
                        />
                    </div>
                    <div className="content-inputs">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChangeForm}
                        />
                    </div>
                    <div className="content-inputs">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChangeForm}
                        />
                    </div>
                    <button>CADASTRAR</button>
                    <Link  className='btn-sign-in' to="/">Já é cadastrado? Clique aqui!</Link>
                </form>
            </main>
        </div>
    );
}

export default RegisterUser;