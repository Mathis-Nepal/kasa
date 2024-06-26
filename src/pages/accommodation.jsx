import { useParams } from 'react-router-dom';
import data from '../data.json';
import React, { useState } from 'react';
import { Rating, Accordion } from '../components/components';
import Layout from '../layouts/layout';
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
    function needToDisplayButton() {
        if (images.length === 1) {
            return 'hidden';
        } else {
            return 'visible';
        }
    }

    return (
        <Layout>
            <main className="accomodation-main px-sm">
                <div className="accomodation-main__carousel">
                    <div className="accomodation-main__carousel__overlay-button">
                        <button
                            style={{
                                visibility: needToDisplayButton(),
                            }}
                            className="accomodation-main__carousel__overlay-button__button"
                            onClick={prevSlide}
                        >
                            <img
                                className="accomodation-main__carousel__overlay-button__button__img "
                                src="/kasa/chevron.svg"
                                alt="image précédente"
                            />
                        </button>
                        <button
                            style={{
                                visibility: needToDisplayButton(),
                            }}
                            className="accomodation-main__carousel__overlay-button__button"
                            onClick={nextSlide}
                        >
                            <img
                                className="accomodation-main__carousel__overlay-button__button__img reverse"
                                src="/kasa/chevron.svg"
                                alt="image suivante"
                            />
                        </button>
                    </div>
                    <img
                        className="accomodation-main__carousel__background-img"
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                    />
                    { images.length > 1 ?
                        <p className='accomodation-main__carousel__counter'>
                        {currentIndex + 1}/{images.length}
                    </p>
                    : null
                    }
                    
                    
                </div>
                <div className="accomodation-main__information">
                    <div className="accomodation-main__information__principal-information">
                        <h2 className="accomodation-main__information__principal-information__title font-regular">
                            {accommodation.title}
                        </h2>
                        <p className="accomodation-main__information__principal-information__location ">
                            {accommodation.location}
                        </p>
                        <div className="accomodation-main__information__principal-information__list-equipments-accomadation">
                            {accommodation.equipments.map((tag, index) => (
                                <p key={index}>{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className="accomodation-main__information__rating-host-row">
                        <Rating rating={accommodation.rating}></Rating>
                        <div className="accomodation-main__information__rating-host-row__host">
                            <p class="accomodation-main__information__rating-host-row__host__name">
                                {accommodation.host.name}
                            </p>
                            <img
                                className="accomodation-main__information__rating-host-row__host__picture"
                                src={accommodation.host.picture}
                                alt="hôte"
                            />
                        </div>
                    </div>
                </div>
                <div className="accomodation-main__container-accordion">
                    <Accordion
                        title="Description"
                        text={accommodation.description}
                    ></Accordion>
                    <Accordion
                        title="Équipements"
                        listText={accommodation.equipments}
                    ></Accordion>
                </div>
            </main>
        </Layout>
    );
};
export default Accommodation;
