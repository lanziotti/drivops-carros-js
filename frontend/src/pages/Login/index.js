import './styles.css';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getItem, setItem } from '../../utils/storage';
import api from '../../services/api';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     const token = getItem('token');

    //     if (token) {
    //         navigate('/dashboard');
    //     }
    // }, [navigate]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (!email || !password) {
                return;
            }

            const response = await api.post('/login', {
                email,
                senha: password
            });

            if (response.status > 204) {
                console.log(response.data.mensagem)
            }

            const { usuario, token } = response.data;

            setItem('token', token);
            setItem('userId', usuario.id);
            setItem('userName', usuario.nome);

            navigate('/dashboard');

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <Header />
            <main className="container-main">
                <h1>Faça o Login para acessar o sistema</h1>
                <form
                    className="content-form"
                    onSubmit={handleSubmit}
                >
                    <div className="content-inputs">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="content-inputs">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button>ENTRAR</button>
                </form>
                <p>Ainda não possui cadastro?</p>
                <button
                    onClick={() => navigate('/sign-up')}
                >
                    CADASTRAR
                </button>
            </main>
        </div>
    );
}

export default Login;