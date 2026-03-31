import type { Project, StackCategory, ContactInfo, DeveloperProfile } from '@/types/index'

// Update availability and responseTime before each mission cycle
export const developerProfile: DeveloperProfile = {
  fullName: 'Kamel AÏT AHMED',
  title: 'Développeur Web Fullstack Freelance',
  tagline:
    'Développeur web fullstack avec plus de 6 ans d\'expérience, disponible en freelance pour prendre en charge vos projets de bout en bout.',
  location: 'Paris, France',
  availability: 'Disponible remote ou Paris · Missions en régie ou au forfait',
  responseTime: 'Réponse sous 24h',
}

// Ordered by relevance — most significant project first
export const projects: Project[] = [
  {
    id: 'matiklass',
    name: 'MatiKlass',
    description:
      'Plateforme SaaS de gestion scolaire multi-tenant destinée aux établissements maternels. Gestion des écoles, classes, élèves et affectations depuis une interface unifiée, avec quatre rôles distincts (superadmin, admin, directeur, enseignant).',
    stack: ['Laravel 11', 'Blade', 'Tailwind CSS', 'Alpine.js', 'Livewire', 'MySQL', 'Docker'],
    technicalRationale:
      'Laravel pour sa maturité en contexte SaaS multi-tenant et son écosystème robuste. Architecture DDD pour isoler les contextes métier complexes et faciliter la montée en charge.',
    mainChallenge:
      "Modélisation d'un système d'affectation avec historisation des dates de début et de fin, tout en garantissant la cohérence des données lors des changements de période.",
    githubUrl: null,
    demoUrl: null,
    previewImage: 'images/projects/matiklass-login.png',
    status: 'in-progress',
  },
  {
    id: 'skycast',
    name: 'SkyCast',
    description:
      "Application météo full-stack avec recherche par ville et géolocalisation. Visualisation graphique des prévisions horaires et journalières, bascule d'unités (°C/°F, km/h↔m/s), mise en cache Redis TagAware pour limiter les appels API.",
    stack: ['Symfony 6.4', 'Redis', 'Open-Meteo API', 'AssetMapper', 'CSS'],
    technicalRationale:
      "Symfony pour la robustesse du backend et la structuration des services. Redis avec invalidation par tags pour absorber les limites de l'API externe et garantir la résilience en cas d'indisponibilité.",
    mainChallenge:
      "Gestion du cache Redis avec invalidation par tags pour éviter les données météo périmées sans surcharger l'API tierce.",
    githubUrl: 'https://github.com/KMAit/skycast',
    demoUrl: null,
    previewImage: 'images/projects/skycast-preview.png',
    status: 'completed',
  },
  {
    id: 'url-short-sf',
    name: 'url-short-sf',
    description:
      "Raccourcisseur d'URL avec génération de codes courts, dates d'expiration, statistiques de clics, QR code et rate limiting par IP.",
    stack: ['Symfony 6', 'Doctrine ORM', 'endroid/qr-code', 'symfony/rate-limiter', 'Twig', 'CSS'],
    technicalRationale:
      "Symfony pour la gestion du routing et des redirections HTTP 301/302. Rate limiting natif via symfony/rate-limiter pour protéger l'endpoint de création sans infrastructure supplémentaire.",
    mainChallenge:
      'Générer des codes courts sans collision tout en conservant une architecture simple et maintenable.',
    githubUrl: 'https://github.com/KMAit/url-short-sf',
    demoUrl: null,
    previewImage: 'images/projects/url-shortener-preview.png',
    status: 'completed',
  },
]

// Order within each category reflects proficiency — most used first
export const stackCategories: StackCategory[] = [
  {
    name: 'Backend',
    items: ['PHP', 'Symfony', 'Laravel'],
  },
  {
    name: 'Frontend',
    items: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Infrastructure & Outils',
    items: ['Docker', 'MySQL', 'Redis', 'Git', 'GitHub Actions'],
  },
]

export const aboutText =
  'Développeur web fullstack avec plus de 6 ans d\'expérience, j\'ai travaillé en startup et scale-up sur des produits SaaS à forte charge, notamment dans le domaine RH (EasyRecrue / iCIMS). Je travaille principalement avec PHP/Symfony/Laravel côté backend et Vue.js/TypeScript côté frontend. Autonome et orienté architecture, je m\'implique autant sur les choix techniques que sur l\'exécution. J\'interviens en régie ou au forfait, remote ou Paris, sur des missions courtes ou longues.'

export const contactInfo: ContactInfo = {
  github: 'https://github.com/KMAit',
  linkedin: 'https://www.linkedin.com/in/kamel-ait-ahmed/',
}
