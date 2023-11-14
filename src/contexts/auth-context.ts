import { createContext, useContext } from 'react';

type AuthContext = {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const authContext = createContext<AuthContext>({
  token: null,
  login: async () => {},
  logout: () => {},
});

const useAuth = () => {
  return useContext(authContext);
};

export { authContext, useAuth };
