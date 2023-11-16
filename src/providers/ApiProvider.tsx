import { API, APIInstance } from '@/api';
import { apiContext } from '@/contexts';
import { useState } from 'react';

const APIProvider = ({ children }: { children: React.ReactNode }) => {
  const [currToken, setCurrToken] = useState<string | null>(null);

  const setToken = (token: string | null) => {
    setCurrToken(token);
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
        token: currToken,
        setToken,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

export default APIProvider;
