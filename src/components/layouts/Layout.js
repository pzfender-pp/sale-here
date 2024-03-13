import React from "react";
import Logo from "../../assets/images/logo.png";
import "./Layout.scss";

const Layout = ({ children }) => {
    return (
        <main className="main__wrapper">
            <header className="main__wrapper__header">
                <img src={Logo} alt="Proxumer Logo" />
            </header>
            <section className="main__wrapper__section">{children}</section>
        </main>
    );
};

export default Layout;
