import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  sql,
  java,
  c,
  php,
  vue,
  angular,
  git,
  threejs,
  alpilink,
  iut1Grenoble,
  iut1Lyon,
  master,
  lrp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "project",
    title: "Projets",
  },
];

const services = [
  {
    title: "Développeur web front-end",
    icon: web,
  },
  {
    title: "Expérience utilisateur",
    icon: mobile,
  },
  {
    title: "Ergonomie / Référencement",
    icon: backend,
  },
  {
    title: "Frameworks back et front",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue.JS",
    icon: vue,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Tuteur en développement web",
    type: "Job étudiant",
    company_name: "IUT1, Grenoble",
    icon: iut1Grenoble,
    iconBg: "#E6DEDD",
    date: "Septembre 2023 - Janvier 2024",
    points: [
      "Accompagnement d'étudiants de première année dans l'apprentissage des bases du développement web.",
      "Aide sur des concepts clés de la programmation.",
      "Correction de travaux pratiques et conseils.",
      "Création d'exercices basé sur les besoins des étudiants.",
    ],
  },
  {
    title: "Développeur Drupal",
    type: "Stage",
    company_name: "Laboratoire Rhéologie et Procédés",
    icon: lrp,
    iconBg: "#E6DEDD",
    date: "Janvier 2024 - Avril 2024",
    points: [
      "Refonte du site web du laboratoire sous le CMS Drupal 10",
      "Création d'un intranet pour le personnel du laboratoire",
      "Formation du personnel sur le CMS et création d'une documentation technique",
      "Optimisation du contenus pour le référencement et la performance",
      "Collaboration avec les équipes scientifiques pour la création de contenu technique",
    ],
  },
  {
    title: "Développeur Angular",
    type: "Alternance",
    company_name: "Alpilink",
    icon: alpilink,
    iconBg: "#E6DEDD",
    date: "Août 2024 - Août 2025",
    points: [
      "Développement d'un back office pour les stations de ski sous Angular 14.",
      "Utilisation de librarie et de composants réutilisables.",
      "Mise en place de tests unitaires pour garantir l'integrité du code.",
      "Collaboration avec l'équipe backend pour l'utilisation des API",
      "Participation aux revues de code et échanges avec les autres développeurs.",
      "Amélioration continue du code et mise à niveau vers Angular 19.",
    ],
  },
];

const parcours = [
  {
    title: "BUT Informatique",
    company_name: "IUT Lyon1, Bourg-en-Bresse",
    icon: iut1Lyon,
    iconBg: "#E6DEDD",
    date: "2021-2022",
    points: [
      "Formation axée sur la conception, le développement et la maintenance de solutions logicielles.",
      "Élaboration et gestion de bases de données relationnelles.",
      "Apprentissage des architectures logicielles et du réseaux.",
      "Méthodologies de gestion de projet (Agile, Scrum), outils de versioning et tests unitaires.",
    ],
  },
  {
    title: "BUT MMI (Métiers du multimédia et de l'internet)",
    company_name: "IUT1, Grenoble",
    icon: iut1Grenoble,
    iconBg: "#E6DEDD",
    date: "2022-2025",
    points: [
      "Formation pluridisciplinaire alliant audiovisuel, design graphique, communication et développement web.",
      "Spécialisation en développement web et dispositifs interactifs.",
      "Conception d’interfaces web et mobiles modernes en respectant les standards du web.",
      "Réalisation de projets concrets et collaboratifs comme un escape game.",
    ],
  },
  {
    title: "Master ...",
    company_name: "",
    icon: master,
    iconBg: "#E6DEDD",
    date: "2025-...",
    points: ["À suivre..."],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: css,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: css,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: css,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  parcours,
};
