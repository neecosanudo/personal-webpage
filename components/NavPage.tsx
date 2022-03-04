import { useState } from "react";
import IconNavPage from "@components/IconNavPage";
import Image from "next/image";
import Link from "next/link";

type Props = {
  style: string;
  pages: string[][];
};

const NavPage = ({ pages, style }: Props) => {
  const [isClose, setIsClose] = useState(true);
  const onSetIsClose = () => {
    setIsClose(!isClose);
  };

  return (
    <>
      <button className={`md:hidden`} onClick={onSetIsClose}>
        <IconNavPage isClose={isClose} />
      </button>
      <nav
        className={`${
          isClose
            ? `hidden md:block ${style}`
            : `absolute md:static grid md:flex ${style}`
        }`}
      >
        {pages.map((page, i) => {
          return (
            <Link key={i} href={page[0]}>
              <a>{page[1]}</a>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default NavPage;
