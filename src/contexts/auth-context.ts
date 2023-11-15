import { User } from '@/lib/types';
import { createContext, useContext } from 'react';

type AuthContext = {
  token: string | null;
  user: User | null;
  register: (username: string, name: string, password: string) => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const authContext = createContext<AuthContext>({
  token: null,
  user: null,
  register: async () => {},
  login: async () => {},
  logout: () => {},
});

const useAuth = () => {
  return useContext(authContext);
};

export { authContext, useAuth };
