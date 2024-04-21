import { useRouteError } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Navbar></Navbar>
    <main className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d’accueil</a>
    </main>
    <Footer></Footer>

    </>
  );
}