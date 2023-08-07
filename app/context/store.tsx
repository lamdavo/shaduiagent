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

const GlobalContext = createContext<Partial<ContextProps>>({
  username: '',
  isLogin: false,
  setUsername: () => '',
  setIsLogin: () => false,
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('michael');

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

export const useGlobalContext = () => {
  useContext(GlobalContext);
};
