import { createContext, useContext, useState, ReactNode } from "react";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

type ClickedInterface = typeof initialState;
export type HandleClickParam = "chat" | "cart" | "userProfile" | "notification";
type SizeScreenInterface = undefined | number;

interface StateContextInterface {
  initialState: typeof initialState;
  activeMenu: boolean;
  isClicked: ClickedInterface;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClicked: React.Dispatch<React.SetStateAction<ClickedInterface>>;
  screenSize: SizeScreenInterface;
  setScreenSize: React.Dispatch<React.SetStateAction<SizeScreenInterface>>;
  handleClick: (clicked: HandleClickParam) => void;
}

const StateContext = createContext<StateContextInterface>({
  initialState,
  activeMenu: false,
  isClicked: initialState,
  setActiveMenu: (activeMenu) => activeMenu,
  setIsClicked: (isClicked) => isClicked,
  screenSize: undefined,
  setScreenSize: (screenSize) => screenSize,
  handleClick: (click) => click,
});

export interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState<SizeScreenInterface>();

  const handleClick = (clicked: HandleClickParam) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        screenSize,
        setScreenSize,
        handleClick,
        initialState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
