import APIProvider from './ApiProvider';
import AuthProvider from './AuthProvider';
import { Outlet } from 'react-router-dom';

const Provider = () => {
  return (
    <APIProvider>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </APIProvider>
  );
};

export default Provider;
