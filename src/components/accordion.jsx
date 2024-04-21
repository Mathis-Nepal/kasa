import React, { useState } from 'react';

function Accordion({ title, text, listText, className }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`container ${isOpen ? 'open' : ''} ${className} `}>
                <div className="header font-bold" onClick={toggleAccordion}>
                    <p>{title}</p>
                    <div className="chevron"></div>
                </div>

            <div className="content">
                {text ? <p>{text}</p> : null}
                {listText ? (
                    <ul>
                        {listText.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </div>
    );
}

export default Accordion;
