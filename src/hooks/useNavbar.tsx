import { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";

const useNavbar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } =
    useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize && screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  return {
    handleActiveMenu,
  };
};

export default useNavbar;
