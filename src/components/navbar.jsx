import React from 'react';
import '../scss/style.scss';
import Chevron from './chevron';

const Navbar = () => {
    return (
        <>
            <nav>
                <Chevron color={'red'}></Chevron>
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
