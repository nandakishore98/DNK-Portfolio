import { Experience, Education, SkillCategory, Achievement } from "@/types";

export const profile = {
  name: "Nanda Kishore D",
  title: "Product Manager",
  tagline: "Building AI-powered products that ship and scale",
  subtitle:
    "MBA, BITSoM (BITS Pilani) | PMP Certified | 4 Years in Enterprise AI & Digital Product Delivery",
  email: "nandakishored98@gmail.com",
  phone: "(+91) 9740603400",
  linkedin: "https://linkedin.com/in/dnk1998",
  locations: ["Mumbai", "Bengaluru"],
  photo: "/nanda-photo.jpg",
  summary:
    "Proactive, creative, and solution-oriented Product Management Professional with 4 years of experience in enterprise AI and digital product delivery across BFSI, startup and tech. Specializes in cross-functional team leadership, vendor collaboration, and taking products from roadmap to ship.",
};

export const experiences: Experience[] = [
  {
    id: "sbi-life",
    company: "SBI Life Insurance",
    role: "Assistant Manager, President's Office",
    period: "2024 – 2026",
    location: "Mumbai",
    description:
      "Structured board-level operations and technology strategy. Led AI roadmap and evaluation; launched the org's first customer-facing Gen AI initiative and advised on M365 + Copilot rollout.",
    projects: [
      {
        title: "Conversational AI — Policy Awareness, Servicing & Renewals",
        period: "",
        bullets: [
          "Secured executive sponsorship for a Gen AI-first alternative to call-center renewal outreach — projected cost savings of 30%.",
          "Scoped, designed, and tested a multi-channel (WhatsApp + voice bot), multilingual solution spanning awareness, servicing, and renewals.",
          "Shipped pilot to 4.5 Cr+ policyholder base in 4 weeks vs. usual 10 — an organizational record.",
          "Built a single-pane analytics dashboard — engagement funnel, language-switching patterns, unanswered questions, accuracy, efficacy, and sentiment. Improved AI accuracy ~25% and policy retention by 4%.",
        ],
      },
      {
        title: "Mobile-First Distributor Performance Dashboards",
        period: "",
        bullets: [
          "Architected plug-and-play frameworks for 400K+ distributors — cut deployment from 3 weeks to 2 per week, powering 40+ sales initiatives.",
          "Repositioned dashboards to app home screen — grew engagement from 5K to 50K DAU in 6 months.",
          "Diagnosed root causes of data inaccuracy — reduced errors from 5% to <1%.",
        ],
      },
      {
        title: "UX & Product-Led Growth",
        period: "",
        bullets: [
          "Policy Loan Journey (₹450 Cr book, 2–3× growth opportunity): Benchmarked against lending apps, interviewed borrowers — redesigned with loan tracking, statements, and top-up features.",
        ],
      },
    ],
  },
  {
    id: "cloudcraftz",
    company: "Cloudcraftz",
    role: "Product Intern",
    period: "2023",
    location: "Kolkata",
    description: "AI/ML startup — Enterprise LLM product discovery and 0→1 design.",
    bullets: [
      "Interviewed 40+ domain experts across 10 industries for enterprise LLM opportunities. Evaluated via Lean Canvas; kill/go calls on 10 verticals.",
      "Designed an LLM-driven AI Hiring Platform — spec, journeys, wireframes, pricing, GTM — scoped V1 to resume validation; engineering shipped MVP from specs.",
    ],
  },
  {
    id: "accenture",
    company: "Accenture Solutions",
    role: "Application Development Associate",
    period: "2020 – 2022",
    location: "Bengaluru",
    description:
      "Enterprise application delivery for a Fortune 500 global energy client.",
    bullets: [
      "Inherited a 6,000+ vulnerability backlog (4–5 years) with releases blocked. Developed a risk-based triage framework — improved release cycle from monthly to weekly, reduced active backlog from 250+ to <20.",
      "Created reporting formats, SOPs, and escalation frameworks that became the account standard. Presented directly to client VP+ leadership.",
      "Recognized with Best People Award (top 4 / 100+).",
    ],
  },
];

export const education: Education[] = [
  {
    id: "mba",
    institution: "BITSoM (BITS Pilani)",
    degree: "MBA – Marketing & Consumer Insights",
    period: "2022 – 2024",
    location: "Mumbai",
    achievements: [
      "Winner — L'Oreal Sustainability Challenge 2023 (73K+ participants). Institution's first national case competition win.",
      "Top 4 — ISB E-Guerra: Ran a live e-commerce storefront — ₹1L GMV in 5 days.",
      "Top 100 — B-School Leaders 2024 (Unstop; 2L+ nationally). #1 within institution.",
    ],
  },
  {
    id: "undergrad",
    institution: "RNSIT, Bengaluru",
    degree: "B.E. – Information Science & Engineering",
    period: "2016 – 2020",
    location: "Bengaluru",
    grade: "8.19 CGPA",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Tools",
    skills: [
      "SQL", "Python", "Power BI", "Tableau", "Excel", "Miro", "Figma",
      "v0 (Vercel)", "Lovable.dev", "Cursor", "Replit",
    ],
  },
  {
    category: "Product & Strategy",
    skills: [
      "Product Discovery", "Roadmapping", "PRDs", "Backlog Prioritization",
      "OKRs", "Go-to-Market", "A/B Testing", "Lean Canvas",
      "LLM Product Design", "Agile/Scrum", "Stakeholder Management",
    ],
  },
  {
    category: "Domain",
    skills: [
      "Insurance (Underwriting, Claims, Renewals)",
      "Conversational AI",
      "LLM Applications",
    ],
  },
];

export const certifications = [
  "PMP (PMI)",
  "Associate Diploma in Insurance (III)",
  "Google Project Management Specialization",
];

export const achievements: Achievement[] = [
  {
    metric: "4.5 Cr+",
    label: "Policyholders Reached",
    description: "Conversational AI pilot shipped to SBI Life's entire policyholder base",
  },
  {
    metric: "50K",
    label: "Daily Active Users",
    description: "Grew distributor dashboard engagement 10× in 6 months",
  },
  {
    metric: "30%",
    label: "Cost Savings",
    description: "Projected savings from Gen AI-first renewal outreach",
  },
  {
    metric: "4 Weeks",
    label: "vs. Usual 10",
    description: "Record-breaking pilot delivery at SBI Life",
  },
];

// Flowchart data for SBI Life projects
export const processFlows = {
  conversationalAI: {
    title: "Conversational AI — How I Shipped It",
    subtitle: "The hardest part was never getting the AI to work. It was everything around it.",
    steps: [
      { label: "Problem Discovery", detail: "CRM data, complaint analysis, cost-per-call audit" },
      { label: "Pilot Design", detail: "Control cohorts, success metrics, multilingual scope" },
      { label: "Vendor Evaluation", detail: "RFP, POC scoring, integration feasibility" },
      { label: "Intent Architecture", detail: "Conversation flows, fallback logic, escalation paths" },
      { label: "Compliance Sign-offs", detail: "IRDAI guidelines, data privacy, audit trails" },
      { label: "Sprint Coordination", detail: "Cross-functional sprints with vendor + internal teams" },
      { label: "Rollout", detail: "Phased launch: WhatsApp → voice bot, 4.5 Cr+ users" },
      { label: "Post-Launch", detail: "Sentiment monitoring, accuracy iteration, retention tracking" },
    ],
    skills: ["Product Discovery", "Vendor Management", "Conversational Design", "Compliance", "Agile/Scrum", "Stakeholder Management"],
    tools: ["Miro", "Figma", "Power BI", "Excel", "SQL"],
    metrics: [
      { value: "4.5 Cr+", label: "Policyholders reached" },
      { value: "4 Weeks", label: "vs. usual 10 to ship" },
      { value: "~25%", label: "AI accuracy improvement" },
      { value: "4%", label: "Policy retention lift" },
      { value: "30%", label: "Projected cost savings" },
    ],
  },
  distributorDashboard: {
    title: "Distributor Dashboards — How I Scaled It",
    subtitle: "From 5K to 50K daily active users by solving for discoverability and data trust.",
    steps: [
      { label: "Field Validation", detail: "Agent & manager interviews, pain point mapping" },
      { label: "Solution Design", detail: "Plug-and-play framework, mobile-first architecture" },
      { label: "Data Governance", detail: "Single source of truth across MIS and channels" },
      { label: "Adoption Strategy", detail: "Home screen repositioning, gamification hooks" },
      { label: "Feedback Loops", detail: "Behavioral data → feature iteration → re-engagement" },
    ],
    skills: ["UX Research", "Data Governance", "Product-Led Growth", "Mobile Design", "Gamification"],
    tools: ["Figma", "Power BI", "SQL", "Excel"],
    metrics: [
      { value: "400K+", label: "Distributors served" },
      { value: "10×", label: "DAU growth (5K → 50K)" },
      { value: "40+", label: "Sales initiatives powered" },
      { value: "<1%", label: "Data error rate (from 5%)" },
    ],
  },
};
