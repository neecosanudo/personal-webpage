import { useEffect, useState } from "react";
import Portal from "@components/Portal";
import IconNavPage from "./IconNavPage";
import Navigation from "./Navigation";

const NavPage = () => {
  const [menuState, setMenuState] = useState<boolean>(true);

  const ToggleMenuState = () => {
    setMenuState(!menuState);
  };

  return (
    <div>
      <button onClick={ToggleMenuState}>
        <IconNavPage isClose={menuState} />
      </button>
      {menuState ? null : (
        <Portal>
          <Navigation pages={listOfPages} />
        </Portal>
      )}
    </div>
  );
};

const listOfPages = [
  ["/", "Inicio"],
  ["/posts", "Blog"],
  ["/proyectos", "Proyecto"],
  ["/sobre-mi", "Sobre mí"],
  ["/contacto", "Contacto"],
];

export default NavPage;
