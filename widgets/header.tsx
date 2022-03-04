import NavPage from "@components/NavPage";
import { TwStyle, TwAssemble } from "@utils/tailwindcss";

const Header = () => {
  return (
    <header>
      <NavPage style={TwAssemble(NavPageStyle)} pages={listOfPages} />
    </header>
  );
};

const listOfPages = [
  ["/", "Inicio"],
  ["/posts", "Blog"],
  ["/proyectos", "Proyecto"],
  ["/sobre-mi", "Sobre mí"],
  ["/contacto", "Contacto"],
];

const NavPageStyle: TwStyle = {
  layout: "justify-around",
  box: "bg-sky-500 w-screen h-screen",
  text: "text-2xl",
  responsive: "md:bg-inherit md:w-auto md:h-auto",
};

export default Header;
