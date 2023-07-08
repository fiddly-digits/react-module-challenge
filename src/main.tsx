import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Index from './layouts/Index';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <h1>WIP NOT FOUND RIGHT NOW 404</h1>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Login',
        element: <Login />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
