import { Navigate, Outlet, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import Dashboard from './pages/Dashboard';
import { getItem } from './utils/storage';
import { ToastContainer } from 'react-toastify';

function ProtectedRoutes({ redirectTo }) {
    const token = getItem('token');

    return token ? <Outlet /> : <Navigate to={redirectTo} />
}

function DashboardRoutes() {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/sign-up' element={<RegisterUser />} />

                <Route element={<ProtectedRoutes redirectTo='/' />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
}

export default DashboardRoutes;