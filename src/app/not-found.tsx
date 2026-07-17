import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell not-found-shell">
      <div className="container glass center-card not-found-card">
        <p className="eyebrow">Erreur 404</p>
        <h1>Page introuvable</h1>
        <p>Cette page n’existe pas encore. Reviens à l’accueil pour continuer la visite.</p>
        <Link className="button primary" href="/">
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
