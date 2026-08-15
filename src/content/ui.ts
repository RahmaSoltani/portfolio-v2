export const ui = {
  en: {
    nav: { work: "Work", about: "About", contact: "Contact", resume: "Resume" },
    hero: {
      viewWork: "View the work",
      getInTouch: "Get in touch",
    },
    work: { heading: "Work", count: (n: number) => `${n} projects` },
    about: {
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      alsoBuilt: "Also built",
    },
    footer: { contact: "Contact", cvFr: "CV (FR)", cvEn: "CV (EN)" },
    project: {
      allWork: "All work",
      overview: "Overview",
      whatIDid: "What I did",
      theBuild: "The build",
      inAction: "In action",
      stack: "Stack",
      nextProject: "Next project:",
    },
  },
  fr: {
    nav: { work: "Projets", about: "À propos", contact: "Contact", resume: "CV" },
    hero: {
      viewWork: "Voir mes projets",
      getInTouch: "Me contacter",
    },
    work: { heading: "Projets", count: (n: number) => `${n} projets` },
    about: {
      experience: "Expérience",
      skills: "Compétences",
      education: "Formation",
      languages: "Langues",
      alsoBuilt: "Également réalisé",
    },
    footer: { contact: "Contact", cvFr: "CV (FR)", cvEn: "CV (EN)" },
    project: {
      allWork: "Tous les projets",
      source: "Code source sur GitHub",
      overview: "Aperçu",
      whatIDid: "Ce que j'ai fait",
      theBuild: "Le montage",
      inAction: "En action",
      status: "Statut",
      stack: "Stack technique",
      nextProject: "Projet suivant :",
    },
  },
} as const;
