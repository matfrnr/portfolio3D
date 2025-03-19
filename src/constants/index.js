import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  css,
  resto1,
  morpion,
  delive,
  escape,
  recipe,
  planete3D,
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
    title: "Développeur front-end",
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
    icon: c,
  },
  {
    name: "CSS",
    icon: c,
  },
  {
    name: "JavaScript",
    icon: c,
  },
  {
    name: "TypeScript",
    icon: c,
  },
  {
    name: "Angular",
    icon: c,
  },
  {
    name: "Vue.JS",
    icon: c,
  },
  {
    name: "React",
    icon: c,
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
      "Création d'exercices basés sur les besoins des étudiants.",
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
      "Refonte du site web du laboratoire sous le CMS Drupal 10.",
      "Création d'un intranet pour le personnel du laboratoire.",
      "Formation du personnel sur le CMS et création d'une documentation technique.",
      "Optimisation des contenus pour le référencement et la performance.",
      "Collaboration avec les équipes scientifiques pour la partie technique.",
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
      "Développement d'un back-office pour les stations de ski sous Angular 14.",
      "Utilisation de librairies et de composants réutilisables.",
      "Mise en place de tests unitaires pour garantir l'intégrité du code.",
      "Collaboration avec l'équipe backend pour l'utilisation des API.",
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
      "Apprentissage des architectures logicielles et réseaux.",
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
    name: "Escape Game",
    description:
      "Un escape game en ligne ou chaque seconde vous fait perdre de l'argent. Résolvez des énigmes, trouvez des indices et évitez le pire.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mariadb",
        color: "green-text-gradient",
      },
      {
        name: "websockets",
        color: "pink-text-gradient",
      },
    ],
    image: escape,
    source_code_link: "https://github.com/matfrnr/EscapeGame",
  },
  {
    name: "DeliveCrous",
    description:
      "Une application de livraison de repas pour les étudiants ! Avec la possibilité de consulter les plats, de les ajouter en ❤️ et de suivre la commande.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: delive,
    source_code_link: "https://github.com/matfrnr/DeliveCROUS-",
  },
  {
    name: "RecipeApp",
    description:
      "Une application de recettes de cuisine communautaire et personnalisable ! Créez vos propres recettes, générez automatiquement une liste de courses et demandez à une IA des recettes uniques.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "gradle",
        color: "pink-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/matfrnr/RecipeApp",
  },
  {
    name: "Système solaire 3D",
    description:
      "Découvrez une animation 3D du système solaire, naviguez entre les planètes, apprenez des informations sur chacune d'elles. Une comparaison de taille est également disponible.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "Babylon.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: planete3D,
    source_code_link: "https://github.com/matfrnr/System_solar_3D",
  },
  {
    name: "The Resto",
    description:
      "Site vitrine de restaurant moderne et épuré. Découvrez les plats du chef, les événements à venir et réservez en ligne. Responsive et optimisé pour le référencement.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: resto1,
    source_code_link: "https://github.com/matfrnr/TheResto",
  },
  {
    name: "Mini Jeux",
    description:
      "Envie de vous amuser ? Essayez ce site regroupant 6 mini-jeux uniques et variés. De quoi passer un bon moment seul ou entre amis ! ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: morpion,
    source_code_link: "https://github.com/matfrnr/MiniJeu",
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
