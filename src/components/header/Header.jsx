import React from "react";
import { Component } from "react";
import { Navbar } from "../../components";

const Header = () => {
  return (
    <div className="mainHeader">
      <section className="header-top">
        <section className="main-logo">LOGO</section>
        <section className="top-navbar">
          <Navbar />
        </section>
      </section>
      <section className="user-profile"> UserName</section>
    </div>
  );
};

export default Header;
