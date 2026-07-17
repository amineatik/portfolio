"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { personal } from "@/data/personal";
import { education, experiences, projects, socialLinks } from "@/data/site";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#footer" },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<"projects" | "experience" | "contact" | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (section: "projects" | "experience" | "contact") => {
    setActiveSection(section);

    const targetMap = {
      projects: projectsRef,
      experience: experienceRef,
      contact: contactRef,
    } as const;

    targetMap[section].current?.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => setActiveSection(null), 1400);
  };

  return (
    <>
      <header className="topbar topbar-expanded">
        <div className="container topbar-inner">
          <a className="brand brand-pill" href="#home">
            MAA
          </a>

          <nav className="nav-desktop nav-shell" aria-label="Navigation principale">
            {navLinks.map((item) =>
              item.href === "#projects" ? (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="nav-button"
                >
                  {item.label}
                </button>
              ) : item.href === "#footer" ? (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="nav-button"
                >
                  {item.label}
                </button>
              ) : (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="topbar-actions">
            <a className="chip" href={personal.resumePath} target="_blank" rel="noopener noreferrer">
              CV
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="home-shell" id="home">
        <section className="hero-focus">
          <div className="container hero-grid hero-spotlight">
            <div className="hero-copy">
            <div className="hero-topline">
              <p className="eyebrow">Profil personnel</p>
            </div>
              <h1>Mohamed Amine Atik</h1>
              <p className="lead">
                Je suis diplômé en Réseaux, Cybersécurité et Intelligence Artificielle. Mon parcours
                m’a permis de travailler sur des sujets concrets autour des systèmes, du web, de
                l’analyse et de la création d’outils utiles.
              </p>
              <div className="hero-pills">
                <span>Cybersécurité appliquée</span>
                <span>IA & analyse</span>
                <span>Web moderne</span>
              </div>
              <div className="hero-bio">
                <p>
                  Mon profil combine une vision technique, la curiosité des systèmes et l’envie de
                  construire des solutions utiles, élégantes et robustes.
                </p>
                <p>
                  Cette première page est pensée pour donner l’essentiel immédiatement, sans noyer la
                  présentation dans trop de sections.
                </p>
              </div>
              <div className="cta-row">
                <a className="button primary" href={personal.resumePath} target="_blank" rel="noopener noreferrer">
                  Télécharger mon CV
                </a>
                <button className="button" type="button" onClick={() => scrollToSection("experience")}>
                  Afficher les expériences
                </button>
                <button className="button" type="button" onClick={() => scrollToSection("projects")}>
                  Afficher les projets
                </button>
              </div>
            </div>

            <aside className="glass profile-card profile-card-large profile-card-premium">
              <div className="profile-photo-frame profile-photo-frame-xl">
                <Image
                  src="/images/profile.png"
                  alt="Mohamed Amine Atik"
                  fill
                  sizes="(max-width: 980px) 100vw, 420px"
                  className="profile-photo"
                  priority
                />
              </div>
              <div className="profile-card-copy">
                <h2>{personal.title}</h2>
                <p>{personal.location}</p>
                <p>{personal.availability}</p>
              </div>
              <div className="profile-stack profile-stack-premium">
                <span>Systèmes</span>
                <span>Analyse</span>
                <span>Web</span>
                <span>Réseaux</span>
                <span>Collaboration</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container section-head">
            <p className="eyebrow">À propos</p>
            <h2>Un profil technique à la fois précis, propre et orienté impact</h2>
            <p>
              Mohamed Amine Atik évolue à la croisée de la cybersécurité, des réseaux, du
              développement web et de l’intelligence artificielle.
            </p>
          </div>
          <div className="container about-grid">
            <article className="glass about-card">
              <h3>Qui est Mohamed Amine Atik ?</h3>
              <p>
                Son parcours est construit autour d’une logique simple: comprendre les systèmes,
                protéger les applications et créer des solutions utiles qui restent lisibles, propres
                et modernes.
              </p>
              <p>
                Il vient de terminer un DUT en Réseaux, Cybersécurité et Intelligence Artificielle,
                ce qui lui a permis de développer une base solide en administration réseau, sécurité
                web, programmation, bases de données, systèmes Linux et analyse de données.
              </p>
            </article>

            <article className="glass about-card">
              <h3>Ce qu’il apporte</h3>
              <ul className="about-list">
                <li>Conception et analyse de plateformes web avec une approche sécurité d’abord.</li>
                <li>Interfaces modernes et expériences fluides.</li>
                <li>Applications concrètes de l’IA.</li>
                <li>Connexion entre front, back, données et infrastructure.</li>
                <li>Goût pour les environnements sérieux et exigeants.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="about-section" id="education">
          <div className="container section-head">
            <p className="eyebrow">Formation</p>
            <h2>{education.title}</h2>
            <p>{education.status}</p>
          </div>
          <div className="container about-grid">
            <article className="glass about-card">
              <h3>Parcours académique</h3>
              <a className="button primary" href={personal.attestationPath} target="_blank" rel="noopener noreferrer">
                Télécharger l’attestation
              </a>
            </article>
            <article className="glass about-card">
              <h3>Domaines étudiés</h3>
              <ul className="about-list">
                {education.details.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className={`about-section section-focus-${activeSection === "experience" ? "active" : "idle"}`} id="experience" ref={experienceRef}>
          <div className="container section-head">
            <p className="eyebrow">Expériences</p>
            <h2>Des expériences qui renforcent la qualité d’exécution</h2>
            <p>Travail sur l’audit, l’intégration, la supervision et l’amélioration de systèmes.</p>
          </div>
          <div className="container about-grid">
            {experiences.map((item) => (
              <article key={item.company} className="glass about-card">
                <p className="eyebrow">{item.period}</p>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <ul className="about-list">
                  {item.points.map((point: string) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={`about-section section-focus-${activeSection === "projects" ? "active" : "idle"}`} id="projects" ref={projectsRef}>
          <div className="container section-head">
            <p className="eyebrow">Projets</p>
            <h2>Des projets pensés comme des produits, avec une vraie présence visuelle</h2>
            <p>
              Chaque projet montre une compétence réelle: analyser, construire, tester et améliorer.
            </p>
          </div>

          <div className="container project-preview-grid">
            {projects.map((project) => (
              <article key={project.slug} className="glass project-preview-card project-card-featured">
                <div className="project-card-head">
                  <p className="eyebrow">{project.category}</p>
                  <span className="project-card-badge">Détail</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <p className="project-meta">{project.challenge}</p>
                <div className="tag-row">
                  {project.stack.slice(0, 4).map((item: string) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
                <Link className="project-card-link" href={`/projects/${project.slug}`}>
                  Ouvrir le projet
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={`about-section section-focus-${activeSection === "contact" ? "active" : "idle"}`} id="contact" ref={contactRef}>
          <div className="container section-head">
            <p className="eyebrow">Contact</p>
            <h2>Une prise de contact simple, directe et professionnelle</h2>
          </div>
          <div className="container about-grid">
            <article className="glass about-card">
              <h3>Entrer en relation avec Mohamed Amine Atik</h3>
              <p>
                Pour une opportunité d’étude, un stage, une collaboration ou une discussion technique,
                tu peux le contacter directement.
              </p>
              <div className="contact-cards">
                <a className="contact-chip" href={`mailto:${personal.email}`}>
                  {personal.email}
                </a>
                <a className="contact-chip" href={`tel:${personal.phone.replace(/\s+/g, "")}`}>
                  {personal.phone}
                </a>
                <span className="contact-chip">{personal.location}</span>
              </div>
            </article>

            <article className="glass about-card">
              <h3>Réseaux</h3>
              <div className="contact-links">
                <a
                  className="button primary"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacter sur Gmail
                </a>
                <a className="button" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a className="button" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a className="button primary" href={personal.resumePath} target="_blank" rel="noopener noreferrer">
                  Ouvrir le CV actuel
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer-large" id="footer">
        <div className="container footer-card">
          <div className="footer-brand">
            <strong>Mohamed Amine Atik</strong>
            <p>Casablanca, Maroc</p>
          </div>
          <div className="footer-grid">
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
            <a href={`tel:${personal.phone.replace(/\s+/g, "")}`}>{personal.phone}</a>
            <span>{personal.location}</span>
          </div>
          <div className="footer-actions">
            <a className="chip" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="chip" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
