import { createContext, useContext, useState, ReactNode } from "react";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

interface StateContextInterface {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext<StateContextInterface>({
  activeMenu: false,
  setActiveMenu: (activeMenu) => activeMenu,
});

export interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
