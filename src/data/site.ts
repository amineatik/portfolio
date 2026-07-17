import type { Experience, NavItem, Project, SkillGroup } from "../types";

export const navItems: NavItem[] = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Formation", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/amineatik",
  linkedin: "https://www.linkedin.com/in/mohamed-amine-atik-55bb19345/",
  email: "mailto:mohamedamineatik4@gmail.com",
};

export const skills: SkillGroup[] = [
  {
    title: "Cybersécurité",
    icon: "Shield",
    items: ["Nmap", "OWASP ZAP", "Burp Suite", "Kali Linux", "SQLMap", "Hydra", "WPScan", "Dirsearch", "FFUF", "OWASP Top 10"],
  },
  {
    title: "Réseaux & Systèmes",
    icon: "Network",
    items: ["Cisco Packet Tracer", "GNS3", "TCP/IP", "Routage", "DNS", "DHCP", "Linux", "Proxmox", "Supervision système"],
  },
  {
    title: "IA & Machine Learning",
    icon: "Brain",
    items: ["Python", "Scikit-learn", "Pandas", "NumPy", "Analyse de données", "Classification", "Régression", "Déploiement de modèles"],
  },
  {
    title: "Développement web",
    icon: "Code",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Django REST Framework", "FastAPI", "Flask", "PHP", "HTML", "CSS"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Stagiaire en cybersécurité - Audit et développement",
    company: "Tython",
    period: "Stage de fin d'études",
    points: [
      "Audit de sécurité de plateformes web et SaaS",
      "Tests en boîte noire et boîte grise",
      "Analyse statique de projets React, TypeScript, Node.js et Express",
      "Analyse des configurations de sécurité",
      "Détection de vulnérabilités web",
      "Analyse des headers HTTP",
      "Analyse de l’authentification JWT",
      "Recherche de problèmes de rate limiting",
      "Vérification des risques liés aux secrets exposés côté client",
      "Utilisation de Kali Linux, OWASP ZAP, Burp Suite, Nmap, WhatWeb, WPScan, Dirsearch, FFUF, SQLMap et Hydra",
      "Analyse d’outils comme Proxmox, Grafana, Loki, Prometheus et Mailcow",
      "Rédaction de recommandations de sécurité",
    ],
  },
  {
    role: "Stagiaire en digitalisation et systèmes de gestion",
    company: "Liveco",
    period: "Stage",
    points: [
      "Installation et configuration du logiciel Aronium POS",
      "Importation d’inventaires depuis Excel",
      "Configuration du point de vente",
      "Assistance technique",
      "Formation du responsable du magasin",
      "Participation à la digitalisation du processus de vente",
      "Correction et amélioration de certaines fonctionnalités internes",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "vulnguard-ai",
    name: "VulnGuard AI",
    category: "Cybersécurité + IA",
    image: "/images/projects/vulnguard-ai.png",
    summary:
      "Plateforme intelligente d’analyse de sécurité permettant de scanner une URL, analyser les mauvaises configurations, identifier les risques de sécurité et fournir des recommandations.",
    challenge:
      "Aider à identifier rapidement les mauvaises configurations, les faiblesses d’authentification et les risques web.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "MySQL", "Ollama", "JWT", "Docker"],
    highlights: [
      "Authentification utilisateur",
      "Scan d’URL",
      "Analyse des headers HTTP",
      "Détection de mauvaises configurations",
      "Recherche de vulnérabilités",
      "Corrélation avec des CVE",
      "Score de sécurité",
      "Assistant IA",
      "Historique des scans",
      "Génération de rapports",
    ],
    results: [
      "Projet orienté sécurité offensive et assistance IA",
      "Analyse structurée des risques web",
      "Base solide pour un assistant d’audit",
    ],
    liveUrl: "#contact",
    repoUrl: socialLinks.github,
  },
  {
    slug: "siri-darija",
    name: "Siri Darija",
    category: "NLP + IA vocale",
    summary:
      "Assistant vocal intelligent capable de comprendre et de répondre en dialecte marocain (Darija).",
    challenge:
      "Créer une interaction vocale naturelle adaptée au dialecte marocain avec un traitement intelligent du langage.",
    stack: ["NLP", "Reconnaissance vocale", "Intelligence artificielle"],
    highlights: [
      "Compréhension du dialecte marocain",
      "Réponses vocales intelligentes",
      "Base NLP adaptée au contexte local",
    ],
    results: [
      "Projet orienté interaction vocale",
      "Approche locale et pratique de l’IA",
      "Prototype pertinent pour assistants intelligents",
    ],
    liveUrl: "#contact",
    repoUrl: socialLinks.github,
  },
  {
    slug: "securelog",
    name: "SecureLog",
    category: "Analyse de logs + IA",
    image: "/images/projects/securelog.png",
    summary:
      "Collecte, parsing et structuration de logs système, web et firewall pour leur exploitation par des modèles d’intelligence artificielle.",
    challenge:
      "Transformer des logs bruts en données propres, lisibles et exploitables pour l’analyse et la supervision.",
    stack: ["Python", "Linux", "Parsing de logs", "CSV", "JSON", "Tableau de bord"],
    highlights: [
      "Collecte de logs système",
      "Parsing et extraction d’événements clés",
      "Stockage structuré en CSV/JSON",
      "Tableau de bord interactif",
    ],
    results: [
      "Données prêtes pour analyse IA",
      "Vision claire des événements",
      "Base utile pour la supervision",
    ],
    liveUrl: "#contact",
    repoUrl: socialLinks.github,
  },
  {
    slug: "reservation-salles",
    name: "Site Web de Réservation des Salles",
    category: "Web + sécurité",
    summary:
      "Plateforme de réservation de salles intégrant les bonnes pratiques de sécurité des applications web.",
    challenge:
      "Proposer une solution web simple tout en gardant une attention particulière à la sécurité applicative.",
    stack: ["Sécurité web", "OWASP", "Développement web"],
    highlights: [
      "Réservation de salles",
      "Gestion simple des usages",
      "Intégration des bonnes pratiques OWASP",
    ],
    results: [
      "Projet web concret",
      "Accent mis sur la sécurité",
      "Base utile pour des réservations internes",
    ],
    liveUrl: "#contact",
    repoUrl: socialLinks.github,
  },
  {
    slug: "supervision-nagios",
    name: "Supervision des Systèmes",
    category: "Supervision",
    summary:
      "Mise en place d’une solution de supervision pour suivre la disponibilité des hôtes et des services et analyser les alertes.",
    challenge:
      "Surveiller l’état des systèmes et donner une vue claire des performances et des alertes.",
    stack: ["Nagios", "Linux", "Réseaux"],
    highlights: [
      "Supervision des hôtes",
      "Surveillance des services",
      "Analyse des alertes",
      "Suivi des performances",
    ],
    results: [
      "Vision opérationnelle des systèmes",
      "Projet utile pour l’administration réseau",
      "Base solide de supervision",
    ],
    liveUrl: "#contact",
    repoUrl: socialLinks.github,
  },
];

export const education = {
  title: "DUT Réseaux, Cybersécurité et Intelligence Artificielle",
  status: "Diplôme obtenu - Attestation de réussite disponible",
  details: [
    "Réseaux informatiques",
    "Cybersécurité",
    "Intelligence artificielle",
    "Machine Learning",
    "Développement web",
    "Programmation Python",
    "Bases de données",
    "Systèmes Linux",
    "Administration réseau",
  ],
};
