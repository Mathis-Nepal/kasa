import React from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';
import { Navbar, Footer, SubHeader } from '../components/components';

const Locations = ({ title, src, id }) => {
    return (
        <Link to={`/accommodation/${id}`} className="accomodation">
            {/* <a href={`/accommodation/${id}`} className='location'> */}
            {/* <img src={src} alt="" /> */}
            <h2>{title}</h2>
            {/* </a> */}
        </Link>
    );
};

export default function Root() {
    return (
        <>
            <Navbar></Navbar>
            <main className="home">
                <SubHeader
                    path="/montagne_view.png"
                    title="Chez vous,partout et ailleurs"
                ></SubHeader>
                <section className="location-container">
                    {data.map(
                        (location, index) => (
                            console.log(location),
                            (
                                <Locations
                                    key={index}
                                    title={location.title}
                                    src={location.cover}
                                    id={location.id}
                                />
                            )
                        ),
                    )}
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}
