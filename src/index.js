import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/home';
import Accomodation from './routes/accommodation';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/error-page';
import './scss/style.scss';
import About from './routes/about';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/accommodation/:id',
        element: <Accomodation />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/about/',
        element: <About />,
        errorElement: <ErrorPage />,
    },
]);
const originelRoot = document.getElementById('root');
originelRoot.classList.add('font-regular');
const root = ReactDOM.createRoot(originelRoot);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
