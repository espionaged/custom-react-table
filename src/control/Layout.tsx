import React from "react";

interface LayoutProps {
  search: React.ReactNode;
}

const Layout = ({ search }: LayoutProps) => {
  return <div>{search}</div>;
};

export default Layout;
