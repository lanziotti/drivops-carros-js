import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DashboardRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
