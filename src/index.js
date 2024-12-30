import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routes/AppRoutes';
import AuthProvider from './contexts/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <AuthProvider>
            <AppRoutes />
      </AuthProvider>
);

reportWebVitals();
