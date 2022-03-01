import React from "react";

type Props = {
  children: React.ReactNode;
};

const NavPage = ({ children }: Props) => {
  return <nav>{children}</nav>;
};

export default NavPage;
