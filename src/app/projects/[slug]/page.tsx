import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  const securityAngles = [
    "Audit visuel",
    "Lecture des risques",
    "Positionnement premium",
  ];

  const featureBuckets = [
    {
      title: "Ce que couvre le projet",
      items: project.highlights.slice(0, Math.ceil(project.highlights.length / 2)),
    },
    {
      title: "Apport concret",
      items: project.highlights.slice(Math.ceil(project.highlights.length / 2)),
    },
  ];

  return (
    <main className="page-shell project-page-shell">
      <div className="container">
        <section className="project-detail-hero glass">
          <div className="project-detail-hero-copy">
            <div className="project-hero-topline">
              <p className="eyebrow">{project.category}</p>
              <span className="project-live-badge">Projet showcase</span>
            </div>
            <h1 className="project-detail-title">{project.name}</h1>
            <p className="project-detail-summary">{project.summary}</p>
            <p className="project-detail-lead">{project.challenge}</p>

            <div className="project-angle-row">
              {securityAngles.map((item) => (
                <span key={item} className="project-angle-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="project-detail-stats">
              <div className="project-stat">
                <span>Stack principale</span>
                <strong>{project.stack.slice(0, 3).join(" · ")}</strong>
              </div>
              <div className="project-stat">
                <span>Orientation</span>
                <strong>Produit, sécurité et impact</strong>
              </div>
              <div className="project-stat">
                <span>Format</span>
                <strong>Projet démonstratif premium</strong>
              </div>
            </div>
          </div>

          {project.image ? (
            <div className="project-detail-visual">
              <div className="project-visual-label">
                <span>Interface</span>
                <strong>Tableau de bord sécurité</strong>
              </div>
              <div className="project-detail-visual-frame">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1400}
                  height={900}
                  className="project-detail-image"
                  priority
                />
              </div>
            </div>
          ) : null}
        </section>

        <section className="project-stack-strip glass">
          <div className="project-strip-head">
            <p className="eyebrow">Technologies</p>
            <h2>Une base technique lisible, crédible et orientée produit</h2>
          </div>
          <div className="tag-row project-stack-row">
            {project.stack.map((item: string) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="project-content-grid">
          <article className="glass project-content-card">
            <p className="eyebrow">Fonctionnement</p>
            <h2>Une expérience claire, pensée comme une vitrine haut de gamme</h2>
            <p>
              {project.summary} Le projet est présenté avec une structure simple à lire,
              afin que le visiteur comprenne rapidement le contexte, la proposition de
              valeur et l’intérêt technique, sans bruit visuel inutile.
            </p>
            <div className="project-feature-grid">
              {featureBuckets.map((bucket) => (
                <div key={bucket.title} className="project-feature-panel">
                  <h3>{bucket.title}</h3>
                  <ul>
                    {bucket.items.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <aside className="project-aside-stack">
            <article className="glass project-content-card project-impact-card">
              <p className="eyebrow">Impact</p>
              <h2>Ce que le projet démontre dans un contexte cybersécurité</h2>
              <ul className="project-list">
                {project.results.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="glass project-content-card project-note-card">
              <p className="eyebrow">Lecture rapide</p>
              <h2>Pourquoi cette page a un rendu plus premium</h2>
              <p>
                Le design met d’abord en avant le titre, l’idée centrale et le visuel du
                projet. Les détails viennent ensuite dans des blocs courts et élégants,
                pour garder un rendu premium sans surcharge.
              </p>
            </article>
          </aside>
        </section>
      </div>
    </main>
  );
}
