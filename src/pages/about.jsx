import { Accordion, SubHeader } from '../components/components';
import Layout from '../layouts/layout';
const dataAccordion = [
    {
        title: 'Fiabilité',
        text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
        title: 'Respect',
        text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        title: 'Service',
        text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        title: 'Sécurité',
        text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
];

const About = () => {
    return (
        <Layout>
            <main className="home">
                <SubHeader path="/montagne_view_2.png"></SubHeader>
                {dataAccordion.map((data) => {
                    return (
                        <Accordion
                            title={data.title}
                            text={data.text}
                        ></Accordion>
                    );
                })}
            </main>
        </Layout>
    );
};

export default About;