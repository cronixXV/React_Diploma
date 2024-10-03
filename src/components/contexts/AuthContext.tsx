import React, { createContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (password: string) => {
    const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
