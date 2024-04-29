import React from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';
import { SubHeader } from '../components/components';
import Layout from '../layouts/layout';

const Locations = ({ title, src, id }) => {
    return (
        <Link to={`/accommodation/${id}`} className="accomodation">
            <h2>{title}</h2>
        </Link>
    );
};

export default function Root() {
    return (
        <Layout>
            <main className="home">
                <SubHeader
                    path="/montagne_view.png"
                    title="Chez vous, partout et ailleurs"
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
        </Layout>
    );
}
