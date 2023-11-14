import { API, APIType } from '@/api';
import { createContext, useContext } from 'react';

type APIContext = {
  api: APIType;
  token: string | null;
  setToken: (token: string | null) => void;
};

const apiContext = createContext<APIContext>({
  api: API,
  token: null,
  setToken: () => {},
});

const useAPI = () => {
  return useContext(apiContext);
};

export { useAPI, apiContext };
