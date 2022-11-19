import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import Dashboard from './pages/Dashboard';

function DashboardRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/sign-up' element={<RegisterUser />} />

            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    );
}

export default DashboardRoutes;