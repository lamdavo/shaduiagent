'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from 'react';

interface ContextProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  username: '',
  isLogin: false,
  setIsLogin: () => false,
  setUsername: () => '',
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        isLogin,
        setIsLogin,
        username,
        setUsername,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
