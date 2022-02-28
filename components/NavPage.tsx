import { TwAssemble, TwStyle } from "@utils/tailwindcss";
import Link from "next/link";

const NavPage = () => {
  return (
    <nav className={TwAssemble(NavStyle)}>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/proyectos">
        <a>Proyectos</a>
      </Link>
      <Link href="/sobre-mi">
        <a>Sobre mí</a>
      </Link>
      <Link href="/contacto">
        <a>Contacto</a>
      </Link>
    </nav>
  );
};

let NavStyle: TwStyle = {
  layout: "grid grid-cols-5 place-items-center",
  text: "text-2xl",
  box: "",
};

export default NavPage;
