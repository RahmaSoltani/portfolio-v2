export const profile = {
  name: "Rahma Soltani",
  role: { en: "Software Engineer", fr: "Ingénieure Logicielle" },
  location: { en: "Algiers, Algeria", fr: "Alger, Algérie" },
  email: "lr_soltani@esi.dz",
  phone: "+213 669 548 329",
  github: "https://github.com/RahmaSoltani",
  bio: {
    en: [
      "Software engineer from ESI Algiers (Ecole Superieure d'Informatique), specialized in software systems. I work across the full stack (backend, mobile, web, and DevOps), with a focus on distributed, high-availability systems and the architecture that holds them together.",
    ],
    fr: [
      "Ingénieure logicielle diplômée de l'École Supérieure d'Informatique (ESI Alger), spécialisée en systèmes informatiques et logiciels. Je travaille sur l'ensemble de la stack (backend, mobile, web et DevOps), avec un accent sur les systèmes distribués à haute disponibilité et l'architecture qui les soutient.",
    ],
  },
  cv: {
    fr: "/cv/Soltani_Rahma_CV_FR.pdf",
    en: "/cv/Soltani_Rahma_CV_EN.pdf",
  },
  education: [
    {
      degree: {
        en: "Software Engineering Degree, Computer & Software Systems",
        fr: "Diplôme d'Ingénieur d'État en Informatique, Systèmes Informatiques et Logiciels",
      },
      school: {
        en: "Ecole Superieure d'Informatique (ESI), Algiers",
        fr: "École Supérieure d'Informatique (ESI), Alger",
      },
      period: "2021 – 2026",
    },
    {
      degree: {
        en: "Baccalaureat: 18.34/20, Excellent",
        fr: "Baccalauréat : 18,34/20, Mention Excellent",
      },
      school: { en: "Algeria", fr: "Algérie" },
      period: "2021",
    },
  ],
  experience: [
    {
      role: { en: "Software Developer", fr: "Développeuse Logicielle" },
      org: {
        en: "KABAS AI, deep-tech startup, AI & software for industrial clients",
        fr: "KABAS AI, startup deep-tech, solutions IA et logicielles pour clients industriels",
      },
      location: { en: "Algiers, Algeria", fr: "Alger, Algérie" },
      period: { en: "Aug 2025 – Aug 2026", fr: "Août 2025 – Août 2026" },
      points: {
        en: [
          "HSE inspection platform, built end to end: Flutter app (QR-code inspection points), FastAPI/PostgreSQL backend with real-time WebSockets, and a React analytics dashboard. JWT auth, Dockerized deployment, Jenkins CI/CD.",
          "Dalile, sovereign multi-agent AI platform: built the React frontend for KABAS AI's industrial document-intelligence system. Multi-agent architecture (RAG, scientific search, analytics), workspace management with live PDF citation highlighting, live indexing status, and GED/Drive connectors.",
        ],
        fr: [
          "Plateforme d'Inspection HSE : conçue et développée de bout en bout. Application Flutter (points d'inspection par QR code), backend FastAPI/PostgreSQL avec WebSockets en temps réel, et tableau de bord d'analyse React. Sécurité JWT, déploiement conteneurisé Docker et pipelines CI/CD Jenkins.",
          "Dalile, Plateforme d'IA Souveraine Multi-Agents : développement de l'interface frontend React pour le système d'intelligence documentaire industrielle de KABAS AI. Architecture multi-agents (RAG, recherche scientifique, analytique), gestion d'espaces de travail avec surlignage dynamique de citations PDF, statut d'indexation en direct et connecteurs GED/Drive.",
        ],
      },
    },
    {
      role: {
        en: "Graduation Project: Distributed LLM-IoT & Data Security",
        fr: "Projet de Fin d'Études : LLM-IoT Distribué & Sécurité des Données",
      },
      org: {
        en: "Ecole Superieure d'Informatique (ESI), defended June 28, 2026",
        fr: "École Supérieure d'Informatique (ESI), soutenu le 28 juin 2026",
      },
      location: { en: "Algiers, Algeria", fr: "Alger, Algérie" },
      period: { en: "Sep 2025 – Jun 2026", fr: "Sep 2025 – Juin 2026" },
      points: {
        en: [
          "Designed a highly secure embedded system for mental health monitoring: local processing of IoT sensor data into structured reports and an on-device (edge) LLM, with zero data leaving the device to the cloud.",
          "Integrated decentralized, federated learning to guarantee absolute data confidentiality.",
        ],
        fr: [
          "Conception d'un système embarqué hautement sécurisé pour la santé mentale : traitement local des données capteurs IoT en rapports structurés et exécution d'un modèle de langage embarqué (Edge LLM), sans fuite de données vers le Cloud.",
          "Intégration de l'apprentissage décentralisé et fédéré garantissant la confidentialité absolue des données.",
        ],
      },
    },
    {
      role: {
        en: "Research Internship: Data Analysis & NLP",
        fr: "Stage de Recherche : Analyse de Données & Traitement du Langage",
      },
      org: {
        en: "Ecole Superieure d'Informatique (ESI)",
        fr: "École Supérieure d'Informatique (ESI)",
      },
      location: { en: "Algiers, Algeria", fr: "Alger, Algérie" },
      period: { en: "Jul 2024 – Sep 2024", fr: "Juil 2024 – Sep 2024" },
      points: {
        en: [
          "Designed descriptors for detecting relational conflict on social networks. Cleaned data, structured an annotated corpus, and built the analysis interface (Django, MySQL, Vue.js).",
        ],
        fr: [
          "Conception de descripteurs pour la détection de conflits relationnels sur les réseaux sociaux. Nettoyage de données, structuration d'un corpus annoté et développement de l'interface d'analyse (Django, MySQL, Vue.js).",
        ],
      },
    },
  ],
  otherProjects: [
    {
      name: {
        en: "Smart SMS Gateway & Developer API (IoT/ESP32)",
        fr: "Passerelle SMS Intelligente & API pour Développeurs (IoT/ESP32)",
      },
      period: { en: "Mar 2025", fr: "Mars 2025" },
      description: {
        en: "SMS gateway on an ESP32/GSM microcontroller. REST API, Python/JS SDKs, web/mobile interfaces, and webhook integrations (Zapier, Google Calendar).",
        fr: "Passerelle SMS sur microcontrôleur ESP32/GSM. API REST, SDKs Python/JS, interfaces web/mobile, et intégrations webhooks (Zapier, Google Calendar).",
      },
    },
  ],
  skills: [
    {
      category: { en: "Languages", fr: "Langages" },
      items: ["Python", "JavaScript/TypeScript", "Dart", "Kotlin", "PHP", "C/C++"],
    },
    {
      category: { en: "Backend & APIs", fr: "Backend & APIs" },
      items: ["FastAPI", "Django", "Flask", "Node.js/Express", "REST APIs", "WebSockets", "Socket.IO"],
    },
    {
      category: { en: "Frontend & Mobile", fr: "Front & Mobile" },
      items: ["React", "Tailwind CSS", "Ant Design", "shadcn/Radix UI", "Flutter (BLoC)", "Kotlin"],
    },
    {
      category: { en: "Data & Search", fr: "Data & Search" },
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
      category: { en: "AI & Architecture", fr: "IA & Architecture" },
      items: ["Multi-agent RAG", "LLM APIs", "Fine-tuning (QLoRA/LoRA)", "System architecture"],
    },
    {
      category: { en: "IoT & Embedded", fr: "IoT & Embarqué" },
      items: ["ESP32", "Raspberry Pi", "Arduino IDE", "IoT sensors", "Computer vision"],
    },
    {
      category: { en: "DevOps", fr: "DevOps" },
      items: ["Docker", "Docker Compose", "Jenkins CI/CD", "Git/GitHub"],
    },
  ],
  languages: [
    { name: { en: "Arabic", fr: "Arabe" }, level: { en: "Native", fr: "Langue maternelle" } },
    { name: { en: "French", fr: "Français" }, level: { en: "Fluent", fr: "Courant" } },
    {
      name: { en: "English", fr: "Anglais" },
      level: { en: "Fluent (technical & professional)", fr: "Courant (technique et professionnel)" },
    },
  ],
};
