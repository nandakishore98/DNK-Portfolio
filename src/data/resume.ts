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
    "Proactive, creative, and solution-oriented Product Management Professional with 4 years of experience in enterprise AI and digital product delivery across BFSI, startup and tech.",
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
    projects: [],
    bullets: [],
  },
  {
    id: "cloudcraftz",
    company: "Cloudcraftz",
    role: "Product Intern",
    period: "2023",
    location: "Kolkata",
    description: "AI/ML startup — Enterprise LLM product discovery and 0→1 design.",
    bullets: [],
  },
  {
    id: "accenture",
    company: "Accenture Solutions",
    role: "Application Development Associate",
    period: "2020 – 2022",
    location: "Bengaluru",
    description: "Enterprise application delivery for a Fortune 500 global energy client.",
    bullets: [],
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
  { metric: "4.5 Cr+", label: "Policyholders Reached", description: "Conversational AI pilot shipped to entire policyholder base" },
  { metric: "50K", label: "Daily Active Users", description: "Grew distributor dashboard engagement 10× in 6 months" },
  { metric: "30%", label: "Cost Savings", description: "Projected savings from Gen AI-first renewal outreach" },
  { metric: "4 Weeks", label: "vs. Usual 10", description: "Record-breaking pilot delivery at SBI Life" },
];

// ─── SBI Life Flowcharts ───

export const sbiProcessFlows = {
  conversationalAI: {
    title: "Conversational AI — Policy Awareness, Servicing & Renewals",
    subtitle: "The hardest part was never getting the AI to work. It was everything around it.",
    steps: [
      { label: "Problem Discovery", detail: "CRM data analysis, complaint mining, cost-per-call audit across languages" },
      { label: "Pilot Design", detail: "Control cohorts, multilingual scope, success metrics definition" },
      { label: "Vendor Evaluation", detail: "RFP, POC scoring, integration feasibility, compliance readiness" },
      { label: "Intent Architecture", detail: "Conversation flows, fallback logic, escalation paths, language switching" },
      { label: "Compliance Sign-offs", detail: "IRDAI guidelines, data privacy, audit trails, legal review" },
      { label: "Sprint Coordination", detail: "Cross-functional sprints with vendor + internal teams" },
      { label: "Rollout", detail: "Phased: WhatsApp → voice bot, 4.5 Cr+ policyholders" },
      { label: "Post-Launch", detail: "Sentiment monitoring, accuracy iteration, retention tracking" },
    ],
    skills: ["Product Discovery", "Vendor Management", "Conversational Design", "Compliance", "Agile/Scrum", "Stakeholder Management", "Analytics"],
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
    title: "Mobile-First Distributor Performance Dashboards",
    subtitle: "From 5K to 50K daily active users by solving for discoverability and data trust.",
    steps: [
      { label: "Field Validation", detail: "Agent & manager interviews, pain point mapping across channels" },
      { label: "Solution Design", detail: "Plug-and-play framework, mobile-first architecture" },
      { label: "Data Governance", detail: "Single source of truth across MIS, retail, and alliance channels" },
      { label: "Adoption Strategy", detail: "Home screen repositioning, gamification hooks, contest tracking" },
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
  loanAgainstPolicy: {
    title: "Policy Loan Journey — UX & Product-Led Growth",
    subtitle: "Redesigning a ₹450 Cr book with 2–3× growth opportunity by benchmarking against lending apps.",
    steps: [
      { label: "Benchmarking", detail: "Analyzed lending apps (KreditBee, Navi, etc.) for UX patterns" },
      { label: "User Research", detail: "Interviewed borrowers on pain points, drop-offs, trust signals" },
      { label: "Journey Redesign", detail: "Loan tracking, statements, top-up features, simplified flow" },
      { label: "Prototyping", detail: "Interactive prototypes to align stakeholders and test assumptions" },
      { label: "Stakeholder Alignment", detail: "Cross-functional buy-in from ops, risk, tech, and leadership" },
    ],
    skills: ["UX Research", "Prototyping", "Stakeholder Management", "Competitive Analysis", "Product-Led Growth"],
    tools: ["Figma", "v0 (Vercel)", "Lovable.dev", "Miro"],
    metrics: [
      { value: "₹450 Cr", label: "Loan book size" },
      { value: "2–3×", label: "Growth opportunity" },
    ],
  },
  yonoPrototypes: {
    title: "YONO Distributor Life — Rapid Prototyping",
    subtitle: "Vibe-coded prototypes to visualize distributor experiences on YONO platform.",
    steps: [
      { label: "Requirement Gathering", detail: "Distributor needs from field, contest tracking gaps" },
      { label: "Rapid Prototyping", detail: "Built functional prototypes using v0, Lovable, Copilot" },
      { label: "Stakeholder Demo", detail: "Live demos to leadership, collected feedback" },
      { label: "Iteration", detail: "Refined based on feedback, handed specs to engineering" },
    ],
    skills: ["Rapid Prototyping", "Vibe Coding", "Stakeholder Management", "Product Specs"],
    tools: ["v0 (Vercel)", "Lovable.dev", "GitHub Copilot", "Cursor", "Figma"],
    metrics: [
      { value: "3 weeks→2", label: "Deployment cycle cut" },
      { value: "40+", label: "Initiatives powered" },
    ],
  },
};

// ─── Cloudcraftz Flowchart ───

export const cloudcraftzFlow = {
  discovery: {
    title: "Enterprise LLM Product Discovery",
    subtitle: "Finding the right problem before building the solution.",
    steps: [
      { label: "Expert Interviews", detail: "40+ domain experts across 10 industries" },
      { label: "Lean Canvas Eval", detail: "Evaluated each vertical on viability, feasibility, desirability" },
      { label: "Kill/Go Decisions", detail: "Kill/go calls on 10 verticals — prioritized talent acquisition & B2B sales intelligence" },
    ],
    skills: ["Product Discovery", "Lean Canvas", "Stakeholder Interviews", "Market Sizing", "Prioritization"],
    tools: ["Miro", "Notion", "Google Sheets", "Figma"],
    metrics: [
      { value: "40+", label: "Expert interviews" },
      { value: "10", label: "Industries evaluated" },
      { value: "2", label: "Verticals prioritized" },
    ],
  },
  aiHiringPlatform: {
    title: "0→1 AI Hiring Platform",
    subtitle: "From existing rule-based NLP to LLM-driven contextual resume evaluation.",
    steps: [
      { label: "Problem Framing", detail: "Existing HR tech relied on keyword matching — missing contextual fit" },
      { label: "Spec & Journeys", detail: "Product spec, user journeys, wireframes, information architecture" },
      { label: "Pricing & GTM", detail: "Pricing model, go-to-market strategy, competitive positioning" },
      { label: "V1 Scoping", detail: "Scoped MVP to resume validation — the highest-signal, lowest-risk entry point" },
      { label: "Engineering Handoff", detail: "Engineering shipped MVP directly from product specs" },
    ],
    skills: ["0→1 Product Design", "PRDs", "Wireframing", "GTM Strategy", "Pricing", "LLM Product Design"],
    tools: ["Figma", "Miro", "Notion"],
    metrics: [
      { value: "0→1", label: "From scratch to MVP" },
      { value: "V1", label: "Shipped from specs" },
    ],
  },
};

// ─── Accenture Flowchart ───

export const accentureFlow = {
  vulnerabilityTriage: {
    title: "Vulnerability Backlog Turnaround",
    subtitle: "Inherited a 6,000+ vulnerability backlog with releases blocked for 4–5 years.",
    steps: [
      { label: "Backlog Audit", detail: "Assessed 6,000+ vulnerabilities across severity, exploitability, and business impact" },
      { label: "Risk Framework", detail: "Built risk-based triage — not all vulnerabilities are equal" },
      { label: "Release Unblocking", detail: "Cleared critical blockers, restored release pipeline" },
      { label: "Process Standardization", detail: "Created SOPs, reporting formats, escalation frameworks" },
      { label: "Governance", detail: "Presented to client VP+ leadership in governance forums" },
    ],
    skills: ["Risk Assessment", "Process Design", "Stakeholder Communication", "Agile Delivery", "Governance"],
    tools: ["Jira", "Excel", "ServiceNow", "Confluence"],
    metrics: [
      { value: "6,000+", label: "Vulnerabilities triaged" },
      { value: "Monthly→Weekly", label: "Release cycle improvement" },
      { value: "250+→<20", label: "Active backlog reduction" },
      { value: "Top 4/100+", label: "Best People Award" },
    ],
  },
};
