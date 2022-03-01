import React from "react";
import {TwStyle, TwAssemble} from '@utils/tailwindcss';

type Props = {
  children: React.ReactNode;
  style?: TwStyle,
};

const NavPage = ({ children, style }: Props) => {
  console.log(style && TwAssemble(style));
  return <nav className={style && TwAssemble(style)}>{children}</nav>;
};

export default NavPage;
