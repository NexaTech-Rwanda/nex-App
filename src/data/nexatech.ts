export interface Product {
  slug: string;
  name: string;
  category: string;
  status: string;
  image?: string;
  imageAlt?: string;
  tagline: string;
  summary: string;
  detail: string;
  market: string;
  stage: string;
  cardHighlights: string[];
  detailHighlights: string[];
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  description: string;
  quote: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export const BRAND_NAME = "NexatechRwanda";
export const BRAND_NAME_PROSE = "Nexatech Rwanda";

export const products: Product[] = [
  {
    slug: "shoppa",
    name: "Shoppa",
    category: "Commerce / Consumer Tech",
    status: "Priority product - Year 1 GTM underway",
    image: "/shoppa.png",
    imageAlt: "Shoppa mobile app interface",
    tagline:
      "The local commerce discovery layer for Rwanda's informal retail economy.",
    summary:
      "Shoppa helps consumers find nearby products faster while giving local shops a digital demand capture layer without operational disruption.",
    detail:
      "Shoppa is built for a simple but painful coordination problem: nearby demand and nearby inventory already exist, but consumers cannot reliably find what is available, where it is, and at what price. Nexatech is using Shoppa as its first market validation product in Kigali.",
    market: "Kigali first, then pan-African urban centers",
    stage: "In development, pre-deployment",
    cardHighlights: [
      "Searchable local inventory",
      "Location-aware product discovery",
      "Trust, ratings, and activity signals",
    ],
    detailHighlights: [
      "Reduces product discovery time from long informal search loops to fast product-level discovery.",
      "Targets informal retail density rather than formal e-commerce alone.",
      "Designed to monetize through subscriptions, promoted listings, and later transaction fees.",
    ],
  },
  {
    slug: "tugendane",
    name: "Tugendane",
    category: "Mobility / Consumer Tech",
    status: "Active development",
    tagline:
      "A ride-hailing platform designed for Rwanda's urban mobility realities.",
    summary:
      "Tugendane connects vehicle operators and passengers through a Rwanda-first mobility layer focused on accessibility, reliability, and local market fit.",
    detail:
      "Tugendane extends Nexatech's essential-services thesis into urban transportation. It is being developed as a B2B2C mobility platform that helps operators serve riders more efficiently through a trusted digital coordination layer.",
    market: "Rwanda first, then regional African cities",
    stage: "In active development",
    cardHighlights: [
      "Ride discovery and coordination",
      "Operator-to-passenger technology layer",
      "Built for local transport realities",
    ],
    detailHighlights: [
      "Focuses on dependable urban transportation access.",
      "Connects formal or organized operators to individual passengers.",
      "Fits the broader Nexatech model of modernizing essential services through coordination.",
    ],
  },
  {
    slug: "hanoserve",
    name: "Hanoserve",
    category: "Services / Labor Tech",
    status: "Active development",
    tagline:
      "A blue-collar marketplace connecting businesses with skilled workers.",
    summary:
      "Hanoserve addresses informal labor matching by making workers more visible to businesses and businesses more visible to workers seeking opportunity.",
    detail:
      "Hanoserve is being built for one of the most persistent gaps in African urban markets: skilled blue-collar labor is available, but discovery, trust, and matching remain fragmented. The product creates a marketplace layer between service demand and labor supply.",
    market: "Kigali and other urban labor markets",
    stage: "In active development",
    cardHighlights: [
      "Worker discovery and matching",
      "Business-to-worker coordination",
      "Trust and visibility for informal labor",
    ],
    detailHighlights: [
      "Targets hands-on and practical service work where matching is still highly informal.",
      "Uses the B2B2C model by serving employers and end workers together.",
      "Treats labor visibility and trust as core product infrastructure.",
    ],
  },
  {
    slug: "verline",
    name: "Verline",
    category: "AgriTech / Consumer Tech",
    status: "Active development",
    tagline:
      "An agri-tech platform for more connected agricultural value chains.",
    summary:
      "Verline is designed to digitize agricultural coordination across farmers, buyers, distributors, and related service providers.",
    detail:
      "Verline brings Nexatech's thesis into agriculture, one of Africa's largest yet least digitized sectors. The goal is to create a stronger coordination and commerce layer across fragmented agricultural activity and value chains.",
    market: "Rwanda first, with regional agricultural expansion potential",
    stage: "In active development",
    cardHighlights: [
      "Agricultural coordination layer",
      "Farmer-to-buyer connectivity",
      "Value-chain digitization",
    ],
    detailHighlights: [
      "Targets structural inefficiency in fragmented agricultural commerce.",
      "Supports businesses, processors, farmers, and downstream participants.",
      "Positions agriculture as a major long-term infrastructure category for Nexatech.",
    ],
  },
];

export const leaders: Leader[] = [
  {
    name: "Kagabo Irene Lucky",
    role: "Chief Executive Officer (CEO) & Founder",
    image: "/lucky.png",
    description:
      "Lucky leads Nexatech's long-term vision, product ownership strategy, and company-building direction from Kigali.",
    quote:
      "Africa's everyday problems deserve disciplined companies built to own solutions for the long term.",
  },
  {
    name: "Bizimana Christian",
    role: "Chief Operation Officer (COO)",
    image: "/christ.png",
    description:
      "Christian oversees operational structure, execution discipline, and the systems that help products move from concept to market readiness.",
    quote:
      "Strong execution is what turns bold ideas into products people can trust every day.",
  },
  {
    name: "Dushimire Aine",
    role: "Chief Technology Officer (CTO)",
    image: "/aine.png",
    description:
      "Aine drives the technical direction of Nexatech's product portfolio, ensuring each venture is built for resilience, scale, and real local conditions.",
    quote:
      "Technology should fit real markets, real users, and real African operating conditions from day one.",
  },
  {
    name: "Kirezi Livia",
    role: "Chief Marketing Officer (CMO)",
    image: "/livia.png",
    description:
      "Livia shapes Nexatech's market voice, consumer positioning, and growth storytelling across the company's expanding portfolio.",
    quote:
      "Great products earn attention when the message is clear, trusted, and rooted in the people they serve.",
  },
];

export const productTeam: TeamMember[] = [
  {
    name: "Nikita",
    role: "UI/UX Designer",
    image: "/Nikita.png",
  },
  {
    name: "Corene",
    role: "Frontend Engineer",
    image: "/corene.png",
  },
  {
    name: "Nelson",
    role: "Backend Engineer",
    image: "/nelson.jpg",
  },
  {
    name: "Paola",
    role: "Frontend Engineer",
    image: "/paola.png",
  },
  {
    name: "Jeremy",
    role: "Backend Engineer",
  },
  {
    name: "Chael",
    role: "Backend Engineer",
  },
  {
    name: "Arisanga",
    role: "Frontend Engineer",
  },
  {
    name: "Rubuto",
    role: "Frontend Engineer",
  },
  {
    name: "Hope",
    role: "UI/UX Designer",
    image: "/hope%205.jpg",
  },
  {
    name: "Alain",
    role: "Frontend Engineer",
  },
  {
    name: "Wilson",
    role: "Backend Engineer",
  },
];

export const companySignals = [
  {
    value: "4",
    label: "Active products",
    description:
      "Commerce, mobility, services, and agriculture are the four essential-service categories in the current portfolio.",
  },
  {
    value: "Year 1",
    label: "Company stage",
    description:
      "Nexatech is in its first year of operations and is focused on disciplined validation over premature scale.",
  },
  {
    value: "Rwanda-first",
    label: "Market focus",
    description:
      "The company starts in Kigali and Rwanda before expanding proven playbooks into broader African markets.",
  },
];

export const operatingPrinciples = [
  {
    title: "Problem-first venture creation",
    description:
      "Every product begins with a real, high-friction consumer problem inside an essential daily service.",
  },
  {
    title: "Density before revenue",
    description:
      "Nexatech prioritizes local habit, trust, and coordination before monetization or geographic expansion.",
  },
  {
    title: "Strategic product ownership",
    description:
      "The company builds, validates, and retains controlling equity in the ventures it creates.",
  },
];

export const holdingModelHighlights = [
  "Build internally, validate in market, and spin out selectively.",
  "Preserve the parent company's durability above any single product.",
  "Use private-sector discipline to modernize essential services.",
  "Treat products as long-term assets rather than short-term experiments.",
];
