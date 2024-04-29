import React, { useState, useEffect } from 'react';
import Chevron from './chevron';
const Footer = () => {
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const footerHeight = document.querySelector('main').offsetHeight;
        setContentHeight(
            `calc(100svh - ${navbarHeight}px - ${footerHeight}px)`,
        );
    }, []);
    return (
        <footer style={{ height: contentHeight }}>
            <div>
                <Chevron color={'white'}></Chevron>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};
export default Footer;
