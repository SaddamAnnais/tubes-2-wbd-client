import { useAuth } from '@/contexts';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { user } = useAuth();

  return user?.isAdmin ? (
    <div>
      Admin Layout <Outlet />
    </div>
  ) : (
    <div>
      User Layout <Outlet />
    </div>
  );
};

export { Layout };
