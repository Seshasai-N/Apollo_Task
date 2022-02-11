import React from "react";
import Header from "components/header";
import Footer from "components/footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
