import React from 'react';
import data from '../data.json';
import { SubHeader, Accomodation } from '../components/components';
import Layout from '../layouts/layout';

export default function Root() {
    return (
        <Layout>
            <main className="p-5">
                <SubHeader
                    path="/kasa/montagne_view.png"
                    title="Chez vous, partout et ailleurs"
                ></SubHeader>
                <section className="accomodation-container">
                    {data.map(
                        (accomodation, index) => (
                            console.log(accomodation),
                            (
                                <Accomodation
                                    key={index}
                                    title={accomodation.title}
                                    src={accomodation.cover}
                                    id={accomodation.id}
                                />
                            )
                        ),
                    )}
                </section>
            </main>
        </Layout>
    );
}
