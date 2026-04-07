import { Experience, Education, SkillCategory, Achievement } from "@/types";

export const profile = {
  name: "Nanda Kishore D",
  title: "Product Manager",
  tagline: "I ship AI products where failure is expensive and trust is earned",
  subtitle:
    "MBA, BITSoM | PMP | 4 years owning product decisions in regulated AI, enterprise platforms & 0→1 builds",
  positioningStatement:
    "I make high-stakes product decisions in regulated, high-scale environments. I've shipped conversational AI to 4.5 Cr users in insurance, turned a 6,000-item vulnerability backlog into a weekly release machine, and evaluated 10 product verticals to pick the two highest-growth bets. I think in tradeoffs — cost vs. experience, automation vs. control, growth vs. risk — and I own the outcome either way.",
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
      "Reported to the President's Office. Owned the AI roadmap, led vendor evaluation, and shipped the org's first customer-facing Gen AI product to 4.5 Cr policyholders. Made build-vs-buy decisions, navigated IRDAI compliance, and turned a data-trust problem into a 10× engagement platform.",
    projects: [],
    bullets: [],
  },
  {
    id: "cloudcraftz",
    company: "Cloudcraftz",
    role: "Product Intern",
    period: "2023",
    location: "Kolkata",
    description: "AI/ML startup with BFSI-heavy founders exploring non-finance domains. Interviewed 40+ experts, evaluated 10 verticals to identify the highest-growth opportunities, and designed a 0→1 LLM hiring platform that shipped from my specs.",
    bullets: [],
  },
  {
    id: "accenture",
    company: "Accenture Solutions",
    role: "Application Development Associate",
    period: "2020 – 2022",
    location: "Bengaluru",
    description: "Fortune 500 global energy client. Inherited a 6,000+ vulnerability backlog that had blocked releases for years. Built the triage framework that cleared it and presented to VP+ leadership.",
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
  { metric: "30–40%", label: "Cost Savings", description: "Projected savings from Gen AI-first renewal outreach" },
  { metric: "4 Weeks", label: "vs. Usual 10", description: "Record-breaking pilot delivery at SBI Life" },
];

// ─── Capability type used across flows ───

export type Capability = {
  category: string;
  items: string[];
  color: "blue" | "purple" | "emerald" | "amber" | "cyan" | "red" | "slate";
};

// ─── SBI Life Flowcharts ───

export type CaseStudy = {
  problem: string;
  insight: string;
  decision: string;
  tradeoffs: string;
  outcome: string;
};

export const sbiProcessFlows = {
  conversationalAI: {
    title: "Conversational AI — Policy Awareness, Servicing & Renewals",
    subtitle: "The problem wasn't the AI. It was the trust architecture around it.",
    caseStudy: {
      problem: "Renewal outreach was structurally broken — high-cost call centers were being used for low-ticket policies, while rural customers across 10+ languages were effectively unreachable. The org had never shipped a customer-facing AI product, and customer communication ownership was fragmented.",
      insight: "The bottleneck wasn't model capability — it was compliance, trust, and failure handling. In a regulated setup, success depends less on the AI being right, and more on how safely it fails. So instead of optimizing for conversations, I focused on failure modes, guardrails, and auditability as the real enablers of scale.",
      decision: "Adopted a failure-first architecture: guardrails, human fallback, and audit trails designed before scaling flows. Chose a hybrid model (LLM + structured knowledge + human-in-loop) over full automation. Governance, monitoring, and compliance baked in from day one.",
      tradeoffs: "Phase 1 (Pilot): optimized for speed — shipped in 4 weeks (org record). Phase 2 (Scale): deliberately slowed specific surfaces like WhatsApp by ~2 weeks to ensure auditability and compliance sign-offs. Balanced rapid rollout with long-term regulatory viability.",
      outcome: "Scaled across 5 products + 1 campaign, covering ~4.5 Cr unique policyholders. 25% improvement in AI accuracy via iterative guardrails + knowledge refinement. 4% uplift in renewal retention. 30–40% projected cost savings by reducing call-center dependency.",
    } as CaseStudy,
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
      { value: "30–40%", label: "Projected cost savings" },
    ],
  },
  distributorDashboard: {
    title: "Mobile-First Distributor Performance Dashboards",
    subtitle: "You can't build adoption on data nobody trusts.",
    caseStudy: {
      problem: "400K+ distributors across retail, alliance, and branch channels had no self-serve performance tracking. Existing MIS had 5% error rates. Multiple data owners, no single source of truth.",
      insight: "The engagement problem wasn't UX — it was data trust. Distributors ignored the dashboard because the numbers didn't match what they saw in the field. Fixing the data layer was the prerequisite to any growth strategy.",
      decision: "Delayed visible feature work to rebuild the data governance layer. Unified MIS across 3 channels. Then invested in adoption — home screen repositioning, gamification, contest tracking.",
      tradeoffs: "Leadership wanted new features fast. I argued that shipping unreliable dashboards would destroy trust permanently. Spent 6 weeks on invisible infrastructure before any user-facing changes.",
      outcome: "10× DAU growth (5K → 50K) in 6 months. Data error rate from 5% to <1%. 40+ sales initiatives now powered by the platform.",
    } as CaseStudy,
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
    subtitle: "A ₹450 Cr book sitting under-monetized because the UX treated it like a back-office workflow.",
    caseStudy: {
      problem: "Policy loans at SBI Life were a ₹450 Cr book with 2–3× growth potential, but the UX was built for ops teams, not borrowers. Drop-off rates were high and users had no visibility into loan status.",
      insight: "Borrowers compared the experience to KreditBee and Navi — not other insurers. The competition for attention was fintech, not legacy. The journey needed to feel like a lending app, not an insurance portal.",
      decision: "Benchmarked against 5 lending apps, redesigned the end-to-end flow with loan tracking, statements, and top-up features. Built interactive prototypes to win cross-functional buy-in from ops, risk, and tech.",
      tradeoffs: "Risk team wanted more friction (verification steps). I pushed for progressive disclosure — verify upfront, then get out of the way. Compromised with smart defaults + optional manual review.",
      outcome: "₹450 Cr loan book repositioned for 2–3× growth. Cross-functional alignment achieved across ops, risk, tech, and leadership.",
    } as CaseStudy,
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
    subtitle: "When the org doesn't have a prototyping culture, you build it yourself.",
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
    subtitle: "BFSI-heavy founders exploring non-finance domains. My job: find where the real growth is.",
    caseStudy: {
      problem: "AI/ML startup with deep BFSI expertise but founders wanted to explore non-finance domains — legal, healthcare, HR, sales, logistics. 10 industries on the table, no framework for picking the right bets.",
      insight: "Most verticals had interesting problems but terrible unit economics for an early-stage LLM product. The biggest TAM on paper is rarely where a 10-person team can win. I needed to identify where founder expertise + LLM capability created a defensible edge.",
      decision: "Built a Lean Canvas scoring framework across viability, feasibility, and desirability. Interviewed 40+ domain experts. Evaluated all 10 verticals and prioritized talent acquisition and B2B sales intelligence — highest signal, most defensible data moats. Also helped build internal tools to strengthen the core before going external.",
      tradeoffs: "Passing on 8 verticals meant walking away from genuinely interesting problems (legal AI, healthcare documentation). But spreading thin would have been worse. Also chose to invest in internal tooling over immediate monetization — building the foundation first.",
      outcome: "2 high-growth verticals identified with clear specs. Engineering focused instead of scattered. Talent acquisition became the lead product. Internal tools strengthened operational efficiency.",
    } as CaseStudy,
    steps: [
      { label: "Expert Interviews", detail: "40+ domain experts across 10 industries" },
      { label: "Lean Canvas Eval", detail: "Evaluated each vertical on viability, feasibility, desirability" },
      { label: "Prioritization", detail: "Evaluated 10 verticals — prioritized talent acquisition & B2B sales intelligence as highest-growth bets" },
    ],
    capabilities: [
      { category: "Product Discovery", items: ["Stakeholder Interviews", "Lean Canvas", "Market Sizing", "Prioritization Frameworks", "Go/No-Go Analysis"], color: "cyan" as const },
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
    subtitle: "The industry was doing keyword matching and calling it AI. We built for contextual fit.",
    caseStudy: {
      problem: "HR tech relied on keyword matching — 'Python developer with 5 years experience' returned resumes that mentioned Python once in a side project. No contextual understanding of fit.",
      insight: "The highest-value entry point wasn't the full hiring pipeline — it was resume validation. If the first filter is bad, everything downstream is garbage. Fix the top of the funnel first.",
      decision: "Scoped MVP to resume validation only — the highest-signal, lowest-risk entry point. Designed pricing model, GTM strategy, and wrote the spec that engineering shipped directly from.",
      tradeoffs: "Resisted pressure to build interview scheduling, candidate management, and the 'full platform.' Kept V1 brutally scoped to one thing that works.",
      outcome: "0→1 MVP shipped directly from product specs. Engineering built without ambiguity because the spec was that tight.",
    } as CaseStudy,
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
    subtitle: "6,000 vulnerabilities. Releases blocked for years. No framework. I built one.",
    caseStudy: {
      problem: "Fortune 500 energy client had accumulated 6,000+ vulnerabilities across their stack. Releases had been blocked for 4–5 years. No triage framework, no prioritization — just a growing list and growing frustration.",
      insight: "Not all vulnerabilities are equal, but the existing process treated them that way. A critical exploit on a production-facing service was in the same queue as a low-severity library warning on an internal tool.",
      decision: "Built a risk-based triage framework that scored by severity, exploitability, and business impact. Cleared critical blockers first to restore the release pipeline, then systematized the rest.",
      tradeoffs: "Accepting risk on low-severity items to unblock releases. This required explicit sign-off from VP+ leadership — I presented the framework in governance forums and owned the recommendation.",
      outcome: "Release cycle improved from monthly to weekly. Active backlog reduced from 250+ to <20. Framework became the account standard. Recognized with Best People Award (top 4 / 100+).",
    } as CaseStudy,
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
