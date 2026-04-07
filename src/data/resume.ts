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
    category: "Product & Strategy",
    skills: [
      "Product Discovery", "Roadmapping", "PRDs", "Backlog Prioritization",
      "OKRs", "Go-to-Market", "A/B Testing", "Lean Canvas",
      "LLM Product Design", "Agile/Scrum", "Stakeholder Management",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "SQL", "Python", "Power BI", "Tableau",
      "Funnel Analytics", "Usage Tracking", "Data Governance",
    ],
  },
  {
    category: "AI & Platforms",
    skills: [
      "Conversational AI", "LLM Applications", "Prompt Engineering",
      "Vendor Evaluation", "API Integrations",
    ],
  },
  {
    category: "Rapid Prototyping",
    skills: [
      "v0 (Vercel)", "Lovable.dev", "Cursor", "Replit", "Figma",
    ],
  },
  {
    category: "Domain",
    skills: [
      "Insurance (Underwriting, Claims, Renewals)",
      "BFSI Compliance & Governance",
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

// ─── Capability type used across flows ───

export type Capability = {
  category: string;
  items: string[];
  color: "blue" | "purple" | "emerald" | "amber" | "cyan" | "red" | "slate";
};

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
    capabilities: [
      { category: "Product & Strategy", items: ["Product Discovery", "Vendor Management", "Conversational Design", "Stakeholder Alignment", "Agile Delivery"], color: "blue" as const },
      { category: "AI & Platforms", items: ["GenAI Vendor Evaluation", "Prompt Structuring", "Intent Architecture", "Hybrid LLM Design", "API Integrations"], color: "purple" as const },
      { category: "Governance & Compliance", items: ["IRDAI Compliance", "Data Privacy Frameworks", "Audit Trails", "Guardrails Design", "Human Fallback Logic"], color: "amber" as const },
      { category: "Data & Analytics", items: ["Sentiment Analysis", "Funnel Tracking", "Usage Analytics", "CRM Analysis", "Power BI"], color: "emerald" as const },
    ],
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
    capabilities: [
      { category: "Product & Strategy", items: ["UX Research", "Product-Led Growth", "Mobile Design", "Gamification", "Stakeholder Alignment"], color: "blue" as const },
      { category: "Data & Governance", items: ["Data Governance Frameworks", "MIS Systems Integration", "Data Modeling / Schema Alignment", "Single Source of Truth Design"], color: "purple" as const },
      { category: "Analytics & Tracking", items: ["SQL", "Power BI", "Funnel Analytics", "Usage Tracking", "Behavioral Data Analysis"], color: "emerald" as const },
    ],
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
    capabilities: [
      { category: "Product & Strategy", items: ["UX Research", "Competitive Benchmarking", "Product-Led Growth", "Stakeholder Management", "Journey Mapping"], color: "blue" as const },
      { category: "Design & Prototyping", items: ["Figma", "Interactive Prototyping", "Wireframing", "User Flow Design"], color: "purple" as const },
    ],
    metrics: [
      { value: "₹450 Cr", label: "Loan book size" },
      { value: "2–3×", label: "Growth opportunity" },
    ],
  },
  yonoPrototypes: {
    title: "YONO Distributor Life — Rapid Prototyping",
    subtitle: "Vibe-coded prototypes for stakeholder demos and validation — outside production environment.",
    steps: [
      { label: "Requirement Gathering", detail: "Distributor needs from field, contest tracking gaps" },
      { label: "Rapid Prototyping", detail: "Built functional prototypes using v0, Lovable, Copilot" },
      { label: "Stakeholder Demo", detail: "Live demos to leadership, collected feedback" },
      { label: "Iteration", detail: "Refined based on feedback, handed specs to engineering" },
    ],
    capabilities: [
      { category: "Rapid Prototyping", items: ["v0 (Vercel)", "Lovable.dev", "GitHub Copilot", "Cursor", "Figma"], color: "cyan" as const },
      { category: "Product Delivery", items: ["Stakeholder Demos", "Spec Writing", "Feedback Iteration", "Engineering Handoff"], color: "blue" as const },
    ],
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
    capabilities: [
      { category: "Product Discovery", items: ["Stakeholder Interviews", "Lean Canvas", "Market Sizing", "Prioritization Frameworks", "Kill/Go Analysis"], color: "cyan" as const },
      { category: "Research & Documentation", items: ["Miro", "Notion", "Competitive Analysis", "Industry Mapping"], color: "purple" as const },
    ],
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
    capabilities: [
      { category: "0→1 Product", items: ["PRDs", "User Journeys", "Information Architecture", "MVP Scoping", "Wireframing"], color: "cyan" as const },
      { category: "Strategy & GTM", items: ["GTM Strategy", "Pricing Model", "Competitive Positioning", "LLM Product Design"], color: "purple" as const },
      { category: "Design", items: ["Figma", "Miro", "Notion"], color: "blue" as const },
    ],
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
    capabilities: [
      { category: "Delivery & Process", items: ["Risk-Based Triage", "Process Design", "SOP Creation", "Agile Delivery", "Sprint Planning"], color: "emerald" as const },
      { category: "Governance & Reporting", items: ["VP+ Governance Forums", "Escalation Frameworks", "Audit Reporting", "Stakeholder Communication"], color: "amber" as const },
      { category: "Execution Stack", items: ["Jira", "ServiceNow", "Confluence", "Miro"], color: "blue" as const },
    ],
    metrics: [
      { value: "6,000+", label: "Vulnerabilities triaged" },
      { value: "Monthly→Weekly", label: "Release cycle improvement" },
      { value: "250+→<20", label: "Active backlog reduction" },
      { value: "Top 4/100+", label: "Best People Award" },
    ],
  },
};

// ─── MBA Extra Data ───

export const mbaLeadership = {
  role: "General Secretary, Operations Committee",
  description: "Led campus operations, event coordination, and logistics across the student body.",
};

export const caseCompetitions = [
  { title: "L'Oreal Sustainability Challenge", result: "Winner", detail: "73K+ participants. Institution's first national case competition win.", highlight: true },
  { title: "ISB E-Guerra", result: "Top 4", detail: "Ran a live e-commerce storefront — ₹1L GMV in 5 days.", highlight: true },
  { title: "B-School Leaders 2024", result: "Top 100", detail: "Unstop; 2L+ nationally. #1 within institution.", highlight: true },
  { title: "Nerolac Case Competition", result: "Finalist", detail: "National-level case competition.", highlight: false },
  { title: "8 College Case Competitions", result: "Podium Finishes", detail: "Consistently placed on the podium across inter-college competitions.", highlight: false },
];

// ─── Undergrad Extra Data ───

export const undergradKnowledge = [
  { topic: "Artificial Intelligence", description: "Machine learning fundamentals, neural networks, NLP basics, search algorithms" },
  { topic: "Cloud Computing", description: "Distributed systems, virtualization, cloud service models (IaaS/PaaS/SaaS), deployment" },
  { topic: "Data Structures & Algorithms", description: "Trees, graphs, dynamic programming, complexity analysis, sorting & searching" },
  { topic: "Big Data", description: "Hadoop ecosystem, MapReduce, distributed storage, data pipelines" },
  { topic: "Internet of Things", description: "Embedded systems, sensor networks, edge computing, communication protocols" },
  { topic: "Blockchain", description: "Distributed ledgers, consensus mechanisms, smart contracts, cryptographic fundamentals" },
];

// ─── Volunteer Work ───

export const volunteerWork = [
  {
    org: "Youth for Seva",
    role: "Volunteer",
    period: "2018 – 2022",
    items: [
      "Taught spoken English and mathematics to underprivileged 8th–10th graders",
      "Recorded textbook audio content for visually impaired students",
      "Participated in plantation drives and women safety awareness campaigns",
    ],
  },
  {
    org: "Rotaract Club of Bangalore South",
    role: "Treasurer",
    period: "2018 – 2020",
    items: [
      "Managed club membership and annual budgets",
      "Organized community events and service projects",
    ],
  },
];
