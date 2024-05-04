import React from 'react';
import '../scss/style.scss';
import Chevron from './chevron';

const Navbar = () => {
    return (
        <>
            <nav className='navigation'>
                <Chevron className="navigation__chevron"  color={'red'}></Chevron>
                <ul  className="navigation__list">
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
