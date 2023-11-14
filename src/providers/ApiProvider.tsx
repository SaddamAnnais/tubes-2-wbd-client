import { API, APIInstance } from '@/api';
import { apiContext } from '@/contexts';

const APIProvider = ({ children }: { children: React.ReactNode }) => {
  const setToken = (token: string | null) => {
    if (token) {
      APIInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete APIInstance.defaults.headers.common['Authorization'];
    }
  };

  return (
    <apiContext.Provider
      value={{
        api: API,
        token: APIInstance.defaults.headers.common['Authorization']?.toString().slice(7) || null,
        setToken,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

export default APIProvider;
