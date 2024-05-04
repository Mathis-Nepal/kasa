import React from 'react';
import '../scss/style.scss';
import Chevron from './chevron';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navigation">
                <Chevron
                    className="navigation__chevron"
                    color={'red'}
                ></Chevron>
                <ul className="navigation__list">
                    <li>
                        <Link to={`/kasa/`}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={`/kasa/about/`}>A propos</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};
export default Navbar;
