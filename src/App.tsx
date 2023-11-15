import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from './providers';
import { Login, Register, Protected } from './pages';
import { Layout } from './layouts';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Provider />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/protected',
            element: <Protected />,
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default Router;
