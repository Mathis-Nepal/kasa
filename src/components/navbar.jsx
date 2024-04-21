import React from 'react';
import "../scss/style.scss";

const Navbar = () => {
    return (
        <>
        <nav>
            <img  className="" src="/kasa_logo.png" alt="" />
            <ul>
                <li>
                    <a href="/">Accueil</a>
                </li>
                <li>
                    <a href="/about">A propos</a>
                </li>
            </ul>
        </nav>
        </>
    );

};
export default Navbar;