import React, { useState } from 'react';

function Accordion({ title, text, listText, className }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion ${isOpen ? 'open' : ''} ${className} `}>
            <div
                className="accordion__header font-bold"
                onClick={toggleAccordion}
            >
                <p>{title}</p>
                <div className="accordion__header__chevron"></div>
            </div>

            <div className="accordion__content">
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
