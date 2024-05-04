import { useRouteError } from 'react-router-dom';
import Layout from '../layouts/layout';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Layout>
            <main className="main-404">
                <h1 className="main-404__title">404</h1>
                <p className="main-404__text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <a className="main-404__link" href="/">
                    Retourner sur la page d’accueil
                </a>
            </main>
        </Layout>
    );
}
