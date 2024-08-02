import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { login, logout } from '../utils/auth';
import Loading from '@/components/Loading';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = async (email, password) => {
    const result = await login(email, password);
    if (result.success) {
      setIsAuthenticated(true);
      router.push('/home');
    } else {
      alert('Não foi possível realizar o login. Erro: ' + result.message);
    }
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    router.push('/');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};