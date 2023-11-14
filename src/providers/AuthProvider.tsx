import { API } from '@/api';
import Loading from '@/components/Loading';
import { authContext, useAPI } from '@/contexts';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { token, setToken } = useAPI();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const login = async (username: string, password: string) => {
    const res = await API.login(username, password);

    if (res.data) {
      setToken(res.data.token);

      // TODO: NAVIGATE
      navigate('/protected');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      setToken(localStorage.getItem('token') || null);
    }

    if (location.pathname === '/login' || location.pathname === '/register') {
      if (token) {
        navigate('/protected');
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    } else {
      if (!token) {
        navigate('/login');
        return;
      }

      API.self()
        .then((res) => {
          if (!res.data) {
            throw new AxiosError('Unauthorized', '401');
          }
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.code === '401') {
            localStorage.removeItem('token');
            setToken(null);
            navigate('/login');
            return;
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  return <authContext.Provider value={{ token, login, logout }}>{children}</authContext.Provider>;
};

export default AuthProvider;
