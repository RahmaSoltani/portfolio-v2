export type L = { en: string; fr: string };
export type ProjectVideo = { label: L; src: string };
export type ProjectImage = { label: L; src: string };

export type Project = {
  slug: string;
  title: L;
  shortTitle: string;
  tagline: L;
  year: string;
  role: L;
  tech: string[];
  summary: { en: string[]; fr: string[] };
  whatIDid: L;
  videos: ProjectVideo[];
  images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "hse-henkel",
    title: {
      en: "HSE Henkel: Industrial Safety Inspections",
      fr: "HSE Henkel : Inspections de Sécurité Industrielle",
    },
    shortTitle: "HSE Henkel",
    tagline: {
      en: "Digital inspection platform replacing paper safety audits at Henkel's Reghaia factory.",
      fr: "Plateforme d'inspection digitale qui remplace les audits de sécurité papier à l'usine Henkel de Réghaïa.",
    },
    year: "Apr – Jun 2026",
    role: { en: "Full-Stack Engineer at KABAS AI", fr: "Ingénieure Full-Stack chez KABAS AI" },
    tech: [
      "Flutter",
      "SQLite",
      "FastAPI",
      "PostgreSQL",
      "WebSockets",
      "React",
      "shadcn/ui",
      "Docker",
      "Jenkins CI/CD",
    ],
    summary: {
      en: [
        "Built at KABAS AI, HSE (Hygiene, Securite, Environnement) replaces paper-based industrial safety inspections with a digital system for Henkel Reghaia, an Algerian factory producing home-care and adhesive products, across 3–6 buildings and 100–300 inspection points (extinguishers, electrical cabinets, ATEX zones, emergency exits, PPE, and more).",
        "Inspectors scan a QR code at each inspection point, fill out a dynamic form on mobile, and submit. Supervisors then validate submissions from a web dashboard without needing to revisit the site in person.",
        "Non-conformities are flagged automatically by threshold/binary fields or by inspector judgement, triggering an alert and a corrective workflow. Overdue inspections escalate to the HSE manager and shift supervisor.",
      ],
      fr: [
        "Développé chez KABAS AI, HSE (Hygiène, Sécurité, Environnement) remplace les inspections de sécurité industrielle papier par un système digital pour Henkel Réghaïa, une usine algérienne de produits d'entretien et de colle, répartie sur 3 à 6 bâtiments et 100 à 300 points d'inspection (extincteurs, armoires électriques, zones ATEX, issues de secours, EPI, etc.).",
        "Les inspecteurs scannent le QR code d'un point d'inspection, remplissent un formulaire dynamique sur mobile, et soumettent. Les superviseurs valident ensuite les soumissions depuis un tableau de bord web, sans avoir à repasser sur le terrain.",
        "Les non-conformités sont détectées automatiquement par seuils ou champs binaires, ou par le jugement de l'inspecteur, ce qui déclenche une alerte et un workflow correctif. Les inspections en retard remontent au responsable HSE et au superviseur du shift.",
      ],
    },
    whatIDid: {
      en: "Designed and built the system end to end: a Flutter app for inspectors, a FastAPI/PostgreSQL backend with real-time WebSockets, and a React analytics dashboard for supervisors and admins.",
      fr: "Conçu et développé le système de bout en bout : une application Flutter pour les inspecteurs, un backend FastAPI/PostgreSQL avec WebSockets en temps réel, et un tableau de bord d'analyse React pour les superviseurs et admins.",
    },
    videos: [
      {
        label: { en: "Analytics dashboard", fr: "Tableau de bord analytique" },
        src: "/projects/hse-henkel/videos/dashboard.mp4",
      },
      {
        label: { en: "Supervisor app", fr: "App superviseur" },
        src: "/projects/hse-henkel/videos/superviseur.mp4",
      },
      {
        label: { en: "Submissions & non-conformities", fr: "Soumissions et NC" },
        src: "/projects/hse-henkel/videos/submissions.mp4",
      },
      {
        label: { en: "Inspector app", fr: "App inspecteur" },
        src: "/projects/hse-henkel/videos/inspecteur.mp4",
      },
      {
        label: { en: "Dynamic inspection forms", fr: "Formulaires d'inspection dynamiques" },
        src: "/projects/hse-henkel/videos/forms.mp4",
      },
      {
        label: { en: "Inspection points & QR", fr: "Points d'inspection & QR" },
        src: "/projects/hse-henkel/videos/inspection-points.mp4",
      },
      {
        label: { en: "Users & settings", fr: "Utilisateurs et paramètres" },
        src: "/projects/hse-henkel/videos/others.mp4",
      },
    ],
  },
  {
    slug: "dalile",
    title: {
      en: "Dalile: Sovereign Multi-Agent AI Platform",
      fr: "Dalile : Plateforme d'IA Souveraine Multi-Agents",
    },
    shortTitle: "Dalile",
    tagline: {
      en: "Enterprise document intelligence with multi-agent RAG, built to run fully air-gapped.",
      fr: "Intelligence documentaire d'entreprise avec RAG multi-agents, conçue pour fonctionner entièrement hors ligne.",
    },
    year: "Aug 2025 – Aug 2026",
    role: { en: "Frontend Engineer at KABAS AI", fr: "Ingénieure Frontend chez KABAS AI" },
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Vercel AI SDK",
      "FastAPI",
      "PostgreSQL + pgvector",
      "Redis",
    ],
    summary: {
      en: [
        "Built at KABAS AI, Dalile is an enterprise AI document-intelligence platform: upload documents and interact through a conversational interface to ask questions, run compliance checks, do deep research, and get analytics, with everything also deployable fully air-gapped / on-premise for regulated industries like banking, insurance, pharma, and government.",
        "The pitch against competitors like Glean, Harvey AI, ChatGPT Enterprise, and Notion AI: one platform combining multi-agent RAG, a knowledge graph, sandboxed code execution, and automated compliance scoring, deployable with zero internet dependency.",
        "The backend treats every capability (RAG search, compliance checks, deep research, analytics) as a self-contained, hot-swappable skill.",
      ],
      fr: [
        "Développée chez KABAS AI, Dalile est une plateforme d'intelligence documentaire IA pour l'entreprise : on y importe des documents et on interagit via une interface conversationnelle pour poser des questions, lancer des contrôles de conformité, faire de la recherche approfondie et obtenir des analyses, le tout déployable entièrement hors ligne / on-premise pour les secteurs régulés comme la banque, l'assurance, la pharma et le gouvernement.",
        "L'argument face à des concurrents comme Glean, Harvey AI, ChatGPT Enterprise ou Notion AI : une seule plateforme combinant RAG multi-agents, graphe de connaissances, exécution de code sandboxée et scoring de conformité automatisé, déployable sans aucune dépendance à Internet.",
        "Le backend traite chaque capacité (recherche RAG, contrôles de conformité, recherche approfondie, analytique) comme une skill autonome et interchangeable à chaud.",
      ],
    },
    whatIDid: {
      en: "Built the Next.js frontend for the platform's workspace: the multi-agent chat UI, live PDF citation highlighting, and real-time document indexing status.",
      fr: "Développé le frontend Next.js de l'espace de travail : l'interface de chat multi-agents, le surlignage en direct des citations PDF, et le statut d'indexation des documents en temps réel.",
    },
    videos: [
      {
        label: { en: "Admin workspace", fr: "Espace admin" },
        src: "/projects/dalile/videos/1-workspace.mp4",
      },
      {
        label: { en: "Projects & chats", fr: "Projets et chats" },
        src: "/projects/dalile/videos/2-chat.mp4",
      },
    ],
  },
  {
    slug: "careconnect",
    title: {
      en: "CareConnect: Doctor Appointment Scheduling",
      fr: "CareConnect : Prise de Rendez-vous Médicaux",
    },
    shortTitle: "CareConnect",
    tagline: {
      en: "An Android app where patients book doctors and doctors run their practice, QR check-in included.",
      fr: "Une app Android où les patients réservent des médecins et les médecins gèrent leur cabinet, avec check-in par QR code.",
    },
    year: "May 2025 – Jun 2026",
    role: { en: "Backend & Mobile Engineer", fr: "Ingénieure Backend & Mobile" },
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Django REST Framework",
      "JWT",
      "Firebase (FCM, Google Sign-In)",
    ],
    summary: {
      en: [
        "A doctor appointment scheduling app: patients book appointments with doctors, doctors manage their availability and appointment requests, check patients in via QR code, and write prescriptions, an Android app backed by a Django REST API.",
        "It's one app with two completely different experiences: log in as a patient and you get booking, browsing, and prescriptions; log in as a doctor and you get a schedule, requests to accept or decline, and a way to check patients in and write them a prescription.",
      ],
      fr: [
        "Une application de prise de rendez-vous médicaux : les patients réservent des créneaux avec des médecins, les médecins gèrent leurs disponibilités et les demandes de rendez-vous, enregistrent les patients par QR code, et rédigent des ordonnances, une app Android connectée à une API Django REST.",
        "C'est une seule app avec deux expériences complètement différentes : on se connecte comme patient et on a la réservation, la recherche de médecins et les ordonnances ; on se connecte comme médecin et on a le planning, les demandes à accepter ou refuser, et l'enregistrement des patients pour rédiger une ordonnance.",
      ],
    },
    whatIDid: {
      en: "Built the Kotlin/Compose Android app (doctor and patient modules) and the Django REST backend behind it, with JWT auth and Firebase push notifications.",
      fr: "Développé l'application Android Kotlin/Compose (modules médecin et patient) ainsi que le backend Django REST derrière, avec authentification JWT et notifications push Firebase.",
    },
    videos: [
      { label: { en: "Doctor app", fr: "App médecin" }, src: "/projects/careconnect/videos/doctor.mp4" },
      { label: { en: "Patient app", fr: "App patient" }, src: "/projects/careconnect/videos/patient.mp4" },
    ],
  },
  {
    slug: "irchad",
    title: {
      en: "IRCHAD: Indoor Navigation for the Visually Impaired",
      fr: "IRCHAD : Navigation Intérieure pour Malvoyants",
    },
    shortTitle: "IRCHAD",
    tagline: {
      en: "An indoor navigation aid for visually impaired users, turning live sensor data into real-time voice and haptic guidance.",
      fr: "Une aide à la navigation intérieure pour malvoyants, qui transforme les données captées en guidage vocal et haptique en temps réel.",
    },
    year: "2024 – 2025",
    role: { en: "Embedded Systems & Mobile Engineer", fr: "Ingénieure Systèmes Embarqués & Mobile" },
    tech: ["Python", "OpenCV", "ArUco", "Flask-SocketIO", "Raspberry Pi", "GPIO", "WebSockets"],
    summary: {
      en: [
        "IRCHAD is an indoor navigation aid for visually impaired users, built by a 12-person team as the ESI 2CS SIL capstone project. The project spanned three parts working as one product: a web client, an Android app, and an embedded onboard computer.",
        "The onboard computer is an embedded prototype that runs on a Raspberry Pi and streams live sensor data to the mobile app for real-time navigation feedback. It fuses four sensing sources over WebSocket: an ultrasonic sensor for obstacle distance, an IMU for orientation, WiFi signal strength for proximity to known access points, and a camera that localizes the device in the room by tracking a floor-mounted visual tag.",
      ],
      fr: [
        "IRCHAD est une aide à la navigation intérieure pour malvoyants, réalisée par une équipe de 12 personnes dans le cadre du projet de fin de 2CS SIL à l'ESI. Le projet couvrait trois parties formant un seul produit : un client web, une app Android, et un ordinateur de bord embarqué.",
        "L'ordinateur de bord est un prototype embarqué qui tourne sur un Raspberry Pi et diffuse les données capteurs en direct vers l'app mobile pour un retour de navigation en temps réel. Il fusionne quatre sources de capteurs via WebSocket : un capteur ultrasonique pour la distance aux obstacles, une IMU pour l'orientation, le signal WiFi pour la proximité aux points d'accès connus, et une caméra qui localise l'appareil dans la pièce en suivant un repère visuel posé au sol.",
      ],
    },
    whatIDid: {
      en: "Built the Raspberry Pi's camera-based indoor positioning pipeline and the mobile app's receiving end that turns that data into voice/haptic guidance.",
      fr: "Développé le pipeline de positionnement intérieur par caméra sur le Raspberry Pi, ainsi que le côté réception de l'app mobile qui transforme ces données en guidage vocal/haptique.",
    },
    videos: [
      {
        label: { en: "ArUco tag localization", fr: "Localisation par tag ArUco" },
        src: "/projects/bitween/videos/tags.mp4",
      },
      {
        label: { en: "Full pipeline demo", fr: "Démo du pipeline complet" },
        src: "/projects/bitween/videos/demo.mp4",
      },
    ],
    images: [
      {
        label: { en: "Wiring diagram", fr: "Schéma de câblage" },
        src: "/projects/bitween/images/architecture.png",
      },
      { label: { en: "The build", fr: "Le montage" }, src: "/projects/bitween/images/hardware-1.jpg" },
      {
        label: { en: "Sensors on the breadboard", fr: "Capteurs sur la breadboard" },
        src: "/projects/bitween/images/hardware-2.jpg",
      },
    ],
  },
  {
    slug: "rtclebyte",
    title: {
      en: "RTcleByte: Scientific Article Search Platform",
      fr: "RTcleByte : Plateforme de Recherche d'Articles Scientifiques",
    },
    shortTitle: "RTcleByte",
    tagline: {
      en: "Find the article you need, not a thousand results off-topic: an Elasticsearch-powered research tool.",
      fr: "Trouvez l'article qu'il vous faut, pas mille résultats hors sujet : un outil de recherche propulsé par Elasticsearch.",
    },
    year: "Oct 2023 – Jan 2024",
    role: { en: "Full-Stack Engineer", fr: "Ingénieure Full-Stack" },
    tech: [
      "Django",
      "Django REST Framework",
      "Elasticsearch",
      "django-elasticsearch-dsl",
      "React",
      "React Router",
      "Tailwind CSS",
      "JWT",
    ],
    summary: {
      en: [
        "A platform for searching, indexing, and moderating scientific articles, combining a Django backend with Elasticsearch-powered search and a React frontend.",
        "Researchers search a corpus of scientific articles by keyword, author, or institution, save favorites, and read full details: abstract, authors, institutions, keywords, references, PDF link. Submitted articles go through a moderation workflow before becoming searchable, and admins manage the moderator team.",
        "Three roles, each with a dedicated landing page after login: regular users search and manage favorites, moderators review and treat submitted articles, and admins manage the moderator team and upload new articles.",
      ],
      fr: [
        "Une plateforme de recherche, d'indexation et de modération d'articles scientifiques, combinant un backend Django avec une recherche propulsée par Elasticsearch et un frontend React.",
        "Les chercheurs recherchent dans un corpus d'articles scientifiques par mot-clé, auteur ou institution, sauvegardent des favoris, et consultent les détails complets : résumé, auteurs, institutions, mots-clés, références, lien PDF. Les articles soumis passent par un workflow de modération avant de devenir consultables, et les admins gèrent l'équipe de modérateurs.",
        "Trois rôles, chacun avec sa propre page d'accueil après connexion : les utilisateurs recherchent et gèrent leurs favoris, les modérateurs examinent et traitent les articles soumis, et les admins gèrent l'équipe de modérateurs et publient de nouveaux articles.",
      ],
    },
    whatIDid: {
      en: "Built the Django + Elasticsearch search backend, then took over and fully redesigned the React frontend across all three user roles.",
      fr: "Développé le backend de recherche Django + Elasticsearch, puis repris et entièrement repensé le frontend React pour les trois rôles utilisateurs.",
    },
    videos: [
      {
        label: { en: "Member", fr: "Membre" },
        src: "/projects/article-search/videos/1-home.mp4",
      },
      {
        label: { en: "Moderator", fr: "Modérateur" },
        src: "/projects/article-search/videos/2-search.mp4",
      },
      {
        label: { en: "Admin", fr: "Admin" },
        src: "/projects/article-search/videos/3-admin.mp4",
      },
    ],
  },
  {
    slug: "baraa",
    title: {
      en: "Baraa: Nonprofit Association Platform",
      fr: "Baraa : Plateforme pour Association à But Non Lucratif",
    },
    shortTitle: "Baraa",
    tagline: {
      en: "A member, volunteer, and donation management platform for a nonprofit. Rescued from a broken main branch.",
      fr: "Une plateforme de gestion des membres, bénévoles et dons pour une association. Sauvée d'une branche main hors service.",
    },
    year: "Feb – Jun 2023",
    role: { en: "Backend Engineer", fr: "Ingénieure Backend" },
    tech: ["Django", "Django REST Framework", "Knox", "django-allauth", "React", "Tailwind CSS", "Chargily API"],
    summary: {
      en: [
        "A management platform for a nonprofit association: members, volunteers, beneficiaries, donors, donations, events, and partners, with Google OAuth login and Chargily (Algerian payment gateway) integration for donations.",
        "Visitors request to join as a member, volunteer, or partner; admins review and approve or reject. Approved members get accounts, get assigned to event teams, and get email notifications for role changes, invitations, and outcomes. Donors give money or goods, tied to an event or not, processed through Chargily. Anyone in need can submit a help request, which staff can accept to register them as a beneficiary.",
        "The repo looked normal from the GitHub file listing, but main wasn't in a runnable state. Before any feature work was possible, it had to actually be repaired.",
      ],
      fr: [
        "Une plateforme de gestion pour une association à but non lucratif : membres, bénévoles, bénéficiaires, donateurs, dons, événements et partenaires, avec connexion Google OAuth et intégration Chargily (passerelle de paiement algérienne) pour les dons.",
        "Les visiteurs demandent à rejoindre l'association comme membre, bénévole ou partenaire ; les admins examinent et approuvent ou rejettent. Les membres approuvés obtiennent un compte, sont affectés à des équipes d'événements, et reçoivent des notifications email pour les changements de rôle, invitations et décisions. Les donateurs font des dons en argent ou en nature, liés ou non à un événement, traités via Chargily. Toute personne dans le besoin peut soumettre une demande d'aide, que le staff peut accepter pour l'enregistrer comme bénéficiaire.",
        "Le dépôt avait l'air normal en parcourant les fichiers sur GitHub, mais la branche main n'était pas dans un état fonctionnel. Avant tout travail sur les fonctionnalités, il fallait d'abord la réparer.",
      ],
    },
    whatIDid: {
      en: "Rescued a repo stuck in a broken state: fixed syntax-breaking merge conflicts, merged in the missing frontend, moved leaked secrets to environment variables, and wired up real authentication.",
      fr: "Sauvé un dépôt bloqué dans un état cassé : corrigé des conflits de fusion qui cassaient la syntaxe, fusionné le frontend manquant, déplacé les secrets exposés vers des variables d'environnement, et branché une authentification réelle.",
    },
    videos: [
      { label: { en: "Home", fr: "Accueil" }, src: "/projects/baraa/videos/home.mp4" },
      { label: { en: "About", fr: "À propos" }, src: "/projects/baraa/videos/about.mp4" },
      { label: { en: "Events", fr: "Événements" }, src: "/projects/baraa/videos/events.mp4" },
      { label: { en: "Team", fr: "Équipe" }, src: "/projects/baraa/videos/teams.mp4" },
      { label: { en: "Members", fr: "Membres" }, src: "/projects/baraa/videos/membre.mp4" },
      { label: { en: "Admin", fr: "Admin" }, src: "/projects/baraa/videos/admin.mp4" },
      {
        label: { en: "Accepting a beneficiary", fr: "Accepter un bénéficiaire" },
        src: "/projects/baraa/videos/accepterbeficiaire.mp4",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
