import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  tailwind,
  nest,
  laravel,
  reactNative,
  express,
  nodejs,
  css,
  resto1,
  azul,
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
  myDigitalSchool,
  open,
  vaisseau,
  vaisseau1,
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
    title: "Sites & Apps web",
    icon: web,
  },
  {
    title: "Applications mobiles",
    icon: mobile,
  },
  {
    title: "API & Back-end",
    icon: backend,
  },
  {
    title: "Design UI/UX & Animations",
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
    name: "PHP",
    icon: php,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Express.JS",
    icon: express,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue.JS",
    icon: vue,
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
  {
    title: "Concepteur développeur",
    type: "Alternance",
    company_name: "Open (Ministère de la transition écologique)",
    icon: open,
    iconBg: "#E6DEDD",
    date: "Août 2025 - Novembre 2025",
    points: [
      "Maintenance et mise à niveau d'une sonde de supervision pour le client",
      "Développement d'une application de planning pour la gestion des effectifs.",
      "Participation à la remontée d'alertes et au monitoring des systèmes critiques.",
      "Migration des serveurs vers une infrastructure à Paris.",
    ],
  },
  {
    title: "Prochainement...",
    type: "Alternance",
    icon: vaisseau,
    company_name: "Et si c'était vous ? 🚀",
    iconBg: "#E6DEDD",
    date: "Jusqu'en Août 2027",
    points: [],
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
    title: "MBA Développeur Full-Stack",
    company_name: "MyDigitalSchool, Grenoble",
    icon: myDigitalSchool,
    iconBg: "#E6DEDD",
    date: "2025-2027",
    points: [
      "Formation en développement web moderne, couvrant les technologies front-end et back-end.",
      "Maîtrise des frameworks avancés et des technologies serveur.",
      "Développement d'APIs REST, déploiement continu et automatisation.",
      "Gestion de projets techniques en équipe, méthodologies DevOps.",
    ],
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
        name: "express.js",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
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
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "cyan-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "async storage",
        color: "yellow-text-gradient",
      },
      {
        name: "jest",
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
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "sqlite",
        color: "blue-text-gradient",
      },
      {
        name: "retrofit",
        color: "pink-text-gradient",
      },
      {
        name: "gradle",
        color: "purple-text-gradient",
      },
      {
        name: "api",
        color: "cyan-text-gradient",
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
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "babylon.js",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "cyan-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
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
    name: "Azul Game",
    description:
      "Une version numérique du célèbre jeu de société Azul. Jouez contre un ami en local, avec une interface intuitive et des graphismes colorés. Redécouvrez le plaisir d'aligner des tuiles !",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "cyan-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "purple-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: azul,
    source_code_link: "https://github.com/matfrnr/azul",
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
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "responsive",
        color: "blue-text-gradient",
      },
      {
        name: "site vitrine",
        color: "cyan-text-gradient",
      },
    ],
    image: resto1,
    source_code_link: "https://github.com/matfrnr/TheResto",
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
