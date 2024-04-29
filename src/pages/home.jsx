import React from 'react';
import data from '../data.json';
import { SubHeader,Location } from '../components/components';
import Layout from '../layouts/layout';

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
                                <Location
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
