import { useContext } from 'react';
import AuthContext from '../components/contexts/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth необходимо использовать в рамках AuthProvider');
  }
  return context;
};
