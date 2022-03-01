import React from "react";
import LinkItem from "@components/LinkItem";
import NavPage from "@components/NavPage";

const Header = () => {
  return (
    <header>
      <NavPage>
        {listOfPages.map((page, i) => {
          return (
            <LinkItem key={i} href={page[0]}>
              {page[1]}
            </LinkItem>
          );
        })}
      </NavPage>
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

export default Header;
