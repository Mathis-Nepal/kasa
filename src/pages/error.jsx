import { Link } from 'react-router-dom';
import Layout from '../layouts/layout';

export default function ErrorPage() {
    return (
        <Layout>
            <main className="main-404">
                <h1 className="main-404__title">404</h1>
                <p className="main-404__text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link className={'main-404__link'} to={'/kasa/'}>
                    Retourner sur la page d’accueil
                </Link>
            </main>
        </Layout>
    );
}
