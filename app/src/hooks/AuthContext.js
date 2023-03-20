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

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = (redirect = true) => {
    setIsLoggedIn(false);
    cookies.remove('token');
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