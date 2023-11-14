import './App.css';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import APIProvider from './providers/ApiProvider';
import AuthProvider from './providers/AuthProvider';
import { Login, Register, Protected } from './pages';
import { Layout } from './layouts';

const Providers = () => {
  return (
    <APIProvider>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </APIProvider>
  );
};
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Providers />,
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
