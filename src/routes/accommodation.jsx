import { useParams } from 'react-router-dom';
import data from '../data.json';
import React, { useState } from 'react';
import { Navbar, Rating, Accordion, Footer } from '../components/components';
const Accommodation = () => {
    const { id } = useParams();

    const accommodation = data.find((item) => item.id === id);

    const images = accommodation.pictures;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    return (
        <>
            <Navbar></Navbar>
            <main className="accomodation-main px-sm">
                <div className="carousel ">
                    <div className="overlay-button">
                        <button onClick={prevSlide}>
                            <img src="/inferior_at.png" alt="" />
                        </button>
                        <button onClick={nextSlide}>
                            <img src="/superior_at.png" alt="" />
                        </button>
                    </div>
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                    />
                </div>
                <div className="information">
                    <div className="principal-information">
                        <h2 className="title font-regular">
                            {accommodation.title}
                        </h2>
                        <p className="location ">{accommodation.location}</p>
                        <div className="list-equipments-accomadation">
                            {accommodation.equipments.map((tag, index) => (
                                <p key={index}>{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className="rating-host-row">
                        <Rating rating={accommodation.rating}></Rating>
                        <div className="host">
                            <p>{accommodation.host.name}</p>
                            <img src={accommodation.host.picture} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container-accordion">
                    <Accordion
                        className="accordion"
                        title="Description"
                        text={accommodation.description}
                    ></Accordion>
                    <Accordion
                        className="accordion"
                        title="Équipements"
                        listText={accommodation.equipments}
                    ></Accordion>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};
export default Accommodation;
