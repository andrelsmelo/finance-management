import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';

const authContextDefaultValues = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext(authContextDefaultValues);

export function AuthProvider({ children }) {
  const router = useRouter();

  const cookies = new Cookies();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = cookies.get('token');
    return token;
  });

  useEffect(() => {
    const token = cookies.get('token');
    setIsLoggedIn(token);
  }, []);

  const login = (token, client_id) => {
    setIsLoggedIn(true);
    cookies.set('token', token, {path: '/'})
    cookies.set('client_id', client_id, {path: '/'})
    localStorage.setItem('token', token);
    localStorage.setItem('client_id', client_id);
  };

  const logout = (redirect = true) => {
    setIsLoggedIn(false);
    cookies.remove('token');
    cookies.remove('client_id');
    localStorage.clear();

    if (redirect) {
      router.push('/login');
    }
  };


  const value = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
