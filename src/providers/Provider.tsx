import APIProvider from './ApiProvider';
import AuthProvider from './AuthProvider';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/Navbar';

const Provider = () => {
  return (
    <APIProvider>
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </APIProvider>
  );
};

export default Provider;
