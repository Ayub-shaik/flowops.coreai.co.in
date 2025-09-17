import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import { CHART_ROWS, PRICING_PLANS } from './content/marketing';

const NAV_ITEMS = [
  { label: 'Overview', key: 'overview' },
  { label: 'Central', key: 'engine' },
  { label: 'Live Demo', key: 'live' },
  { label: 'Pricing', key: 'cost' },
  { label: 'Docs', key: 'docs' },
];

const PROCESS_STEPS = [
  {
    title: 'Describe Outcomes',
    subtitle: 'Natural language specification',
    detail:
      'Capture objectives, guardrails, compliance needs, and target stack in a single prompt, backlog import, or design file.',
  },
  {
    title: 'Assemble Multi-Agent Plan',
    subtitle: 'C1 → C5 orchestration',
    detail:
      'Planner spins up nano-agents for architecture, integrations, QA, and governance while validating each artefact in shared context.',
  },
  {
    title: 'Ship & Self-Heal',
    subtitle: 'Continuous production readiness',
    detail:
      'Generate audited repositories, Docker, Terraform, and deploy-ready CI with an embedded nano-agent for progressive hardening.',
  },
];

const CAPABILITIES = [
  {
    title: 'Web Platforms',
    description:
      'Enterprise-grade React, Next.js, or Angular frontends with design system alignment and automated accessibility checks.',
    tags: ['Multi-tenant', 'Brand SAFE', 'WCAG 2.2'],
  },
  {
    title: 'Mobile Experiences',
    description:
      'Swift, Kotlin, and React Native builds with release automation, store packaging, and OTA nano-agent patching.',
    tags: ['iOS & Android', 'Secure SDLC', 'OTA updates'],
  },
  {
    title: 'Dashboards & Analytics',
    description:
      'Composable BI surfaces with dbt models, semantic layers, and streaming telemetry wired into Grafana or Power BI.',
    tags: ['dbt', 'Snowflake', 'Looker'],
  },
  {
    title: 'Data Aggregators',
    description:
      'Regulated ingestion pipelines with consent management, lineage, and privacy controls for HIPAA / SOC-2 workloads.',
    tags: ['PII safe', 'Airflow', 'Delta Lake'],
  },
  {
    title: 'Specialist Agents',
    description:
      'Domain-tuned LLM agents for support, underwriting, and ops with guardrailed MoE inference and human-in-loop review.',
    tags: ['MoE', 'Eval harness', 'SOC-2 ready'],
  },
  {
    title: 'Connected Systems',
    description:
      'ERP, CRM, IoT, and payments integrations with golden-path blueprints for SAP, Salesforce, Stripe, and ServiceNow.',
    tags: ['Low-latency', 'Resilient', 'Observability'],
  },
];

const ENTERPRISE_METRICS = [
  { label: 'Average production deployment', value: '< 28 mins', accent: 'velocity' },
  { label: 'Build cost reduction', value: '70%↓', accent: 'savings' },
  { label: 'Runtime regression risk', value: '40%↓', accent: 'quality' },
  { label: 'Compliance artefacts', value: 'SOC-2, HIPAA, GDPR', accent: 'compliance' },
];

const ARCHITECTURE_PILLARS = [
  {
    title: 'Memory Fabric',
    detail:
      'Vector-logged conversations with streaming summarisation and retrieval, enabling persistent context over weeks of collaboration.',
  },
  {
    title: 'Long-Context Reasoning',
    detail:
      '128k context windows combined with structured memory slots so planners reconcile requirements, deltas, and regression signals.',
  },
  {
    title: 'Mixture-of-Experts',
    detail:
      'Expert routing across code, infra, security, and data models keeps latency low while enforcing deterministic guardrails.',
  },
  {
    title: 'Nano-Agent Mesh',
    detail:
      'Embedded runtime agents monitor telemetry, propose patches, and execute safe fixes with IAM-backed approvals and audit trails.',
  },
  {
    title: 'Zero-Trust Security',
    detail:
      'Signed artefacts, SBOM generation, policy as code, and runtime posture management integrated into every delivery stage.',
  },
  {
    title: 'Universal Builders',
    detail:
      'From marketing microsites to high-throughput ERP backbones, FlowOps maps each workload to proven patterns and compliance baselines.',
  },
];

const WORKFLOW_NODES = [
  { title: 'Intake Brief', detail: 'Context ingestion, requirements parsing, compliance constraints' },
  { title: 'System Blueprint', detail: 'Architecture graph, data contracts, integration map' },
  { title: 'Delivery Plan', detail: 'Sprint packets, testing harness, approval matrix' },
  { title: 'Production Release', detail: 'Git, Docker, Terraform, observability + nano-agent' },
];

const RUN_STEPS = [
  {
    title: 'Intent understanding',
    description:
      'EmbeddingGemma classifies complexity (C1–C5), extracts entities, and builds a context pack with semantic memory hits.',
  },
  {
    title: 'Decision-tree retrieval',
    description:
      'Elysia RAG selects datasources, retrieves and reranks knowledge, then emits a design brief plus action graph.',
  },
  {
    title: 'Structured planning',
    description:
      'Hierarchical Reasoning Model (HRM) converts the brief into SiteSpec JSON, acceptance tests, and complexity tags.',
  },
  {
    title: 'Model routing',
    description:
      'Router balances cost and latency across OpenAI, Gemini, OpenRouter, or local OSS models within budget envelopes.',
  },
  {
    title: 'Agent execution',
    description:
      'MCP agents (UI, API, DB, QA, Fixer) write code, run builds, and validate output with sandboxed tool access.',
  },
  {
    title: 'Preview & QA',
    description:
      'Renderer generates the app preview; QA and Fixer iterate automatically until standards are met.',
  },
  {
    title: 'Nano-agent & telemetry',
    description:
      'Nano-agent ships with the app for runtime patches, telemetry, and crash recovery as users iterate post-launch.',
  },
];

const TOOLCHAIN = [
  {
    name: 'EmbeddingGemma',
    role: 'Intent classifier & semantic recall',
    detail:
      'Runs locally to understand prompts, tag complexity, and pull relevant code blueprints without leaving the tenant boundary.',
    tags: ['On-device', 'Cost aware', 'Semantic memory'],
  },
  {
    name: 'Elysia RAG',
    role: 'Decision-tree retrieval & rendering',
    detail:
      'Fetches only the knowledge needed, documents why, and supplies action graphs so agents operate with traceable context.',
    tags: ['Retrieval', 'Traceable', 'Cached'],
  },
  {
    name: 'HRM Planner',
    role: 'Blueprint generation',
    detail:
      'Transforms briefs into deterministic SiteSpec JSON with acceptance tests, constraints, and complexity governance.',
    tags: ['Deterministic', 'JSON spec', 'Test-first'],
  },
  {
    name: 'MCP Agents',
    role: 'Code, infra, QA execution',
    detail:
      'UI, API, DB, QA, and Fixer agents operate via Model Context Protocol servers for safe file, shell, and HTTP tooling.',
    tags: ['Sandboxed', 'Composable', 'Policy-aware'],
  },
  {
    name: 'LLM Router',
    role: 'Provider resilience',
    detail:
      'Balances OpenAI, Gemini, OpenRouter, and OSS models with token, latency, and cost budgets plus automatic failover.',
    tags: ['Cost control', 'Latency targets', 'Fallback'],
  },
  {
    name: 'Nano Agent',
    role: 'Runtime patch engine',
    detail:
      'Lives inside generated apps to capture telemetry, apply patch manifests, and maintain guardrails after release.',
    tags: ['Telemetry', 'Patch manifests', 'Self-heal'],
  },
];

const PIPELINE_FLOW = [
  {
    stage: '1. Intake & Memory',
    description:
      'Prompts, documents, or Jira imports are embedded, classified, and enriched with semantic memory via MEMP.',
    systems: ['EmbeddingGemma', 'MEMP cache'],
  },
  {
    stage: '2. Retrieval & Briefing',
    description:
      'Elysia RAG orchestrates retrieve → rerank → chunk-on-demand and produces the design brief plus action graph.',
    systems: ['Elysia decision nodes', 'Local vector store'],
  },
  {
    stage: '3. Planning & Spec',
    description:
      'HRM Planner writes SiteSpec JSON, tests, and guardrails while tagging complexity classes (C1–C5).',
    systems: ['HRM Planner', 'Spec validator'],
  },
  {
    stage: '4. Agentic Build',
    description:
      'Orchestrator spawns MCP agents to generate UI, API, DB, and QA assets with policy and cost enforcement.',
    systems: ['MCP Tooling', 'LLM Router'],
  },
  {
    stage: '5. Preview & QA',
    description:
      'Renderer outputs previews, QA runs smoke and integration tests, and Fixer agents auto-patch failures.',
    systems: ['Renderer', 'QA/Fixer'],
  },
  {
    stage: '6. Ship & Observe',
    description:
      'Artifacts stored, previews served, nano-agent embedded, telemetry wired to observability and audit trails.',
    systems: ['Nano Agent', 'RunEvents', 'Observability'],
  },
];

const SAFEGUARDS = [
  {
    title: 'Security & secrets',
    detail: 'Scoped secrets storage, PII redaction before cloud calls, zero-trust MCP tooling with workspace jails.',
  },
  {
    title: 'Deterministic plans',
    detail: 'Blueprint validation, patch manifests, and tracked run events ensure reproducibility across refine loops.',
  },
  {
    title: 'Observability',
    detail: 'Live Log Dock exposes provider hops, retrieval traces, agent timing, and cost controls in real time.',
  },
  {
    title: 'Governance',
    detail: 'RBAC-ready approvals, policy-led task assignment, and compliance artefacts (SBOM, audits, runbooks).',
  },
];

const CHAT_THREADS = [
  {
    from: 'Client App · Embedded Nano-Agent',
    message: 'User requests colour swap on billing cards and reports 502 errors on nightly sync.',
  },
  {
    from: 'FlowOps Core',
    message:
      'Receiving telemetry traces. Replaying failing request via sandbox. Proposed quick patch: adjust reverse proxy timeout + update theme token.',
  },
  {
    from: 'Client App · Embedded Nano-Agent',
    message: 'Acknowledged. Applying local token change. Forwarding patch manifest for infra update.',
  },
  {
    from: 'FlowOps Core',
    message: 'Patch manifest validated. Deploying Terraform update. Drafting follow-up refine instructions for client dashboard.',
  },
  {
    from: 'Product Lead',
    message: 'Need quick swap from line chart to stacked bars in revenue overview before sending preview.',
  },
  {
    from: 'FlowOps Core',
    message: 'Template selection identified. Pushing updated preview and refine snippet to dashboard for confirmation.',
  },
];

const LIVE_ACTIVITY = [
  {
    label: 'Template seeded',
    detail: 'Blueprint matched from memory graph · overview and billing flows scaffolded instantly.',
  },
  {
    label: 'Components streaming',
    detail: 'Hero + KPI cards rendered, stacked billing chart animating inside preview.',
  },
  {
    label: 'Integrations bound',
    detail: 'Stripe webhook + Postgres sync wired; audit log IaC committed to workspace.',
  },
  {
    label: 'Telemetry guards',
    detail: 'Embedded nano-agent attaching monitors and relaying metrics back to FlowOps Core.',
  },
];

const FLOW_STEPS = ['Plan', 'Patch', 'Validate', 'PR'];

const PREVIEW_TILES = [
  {
    id: 'prompt',
    label: 'Prompt Digest',
    body: '“Generate a finance operations hub with Stripe billing, Postgres telemetry, and weekly anomaly insights.”',
  },
  {
    id: 'sitespec',
    label: 'SiteSpec JSON',
    body: '{ pages: [overview, billing, telemetry], integrations: ["stripe", "postgres"], auth: "sso" }',
  },
  {
    id: 'integrations',
    label: 'Integrations Map',
    body: 'Stripe → Billing API · Postgres → Metrics service · Slack → Ops alerts',
  },
  {
    id: 'telemetry',
    label: 'Telemetry Hooks',
    body: 'Nano-agent monitors latency, sync failures, policy events — streaming to FlowOps Core.',
  },
];

const COST_STRATEGIES = [
  {
    title: 'Plan → Patch split',
    detail: 'Cheap planner drafts JSON diffs; premium model only touches targeted files.',
  },
  {
    title: 'Repo-RAG retrieval',
    detail: 'Embed once, retrieve via import graph + semantics, stream neighbors on demand.',
  },
  {
    title: 'Patch-only + AST codemods',
    detail: 'Force unified diffs and run libcst/ts-morph codemods before escalating to LLMs.',
  },
  {
    title: 'Route by complexity',
    detail: 'C1–C2 stay local, C3–C4 mid-tier OpenRouter, C5 escalates after validator retries.',
  },
  {
    title: 'Selective test scaling',
    detail: 'Verifier/best-of-N reserved for C5; single shot for lint, docs, and small patches.',
  },
  {
    title: 'Design memo memory',
    detail: 'Persist 1–2 KB decision memos so future prompts skip replaying history.',
  },
];

const MARKET_COMPARISON = [
  {
    tool: 'FlowOps Credits',
    offering: 'Usage-based orchestration with Plan→Patch optimisations',
    cost: 'Pay-as-you-go (~$12–$18/mo typical)',
    notes: 'Credits fund model mix; FlowOps Core routes safest path per step.',
  },
  {
    tool: 'Anthropic (direct run)',
    offering: 'Single premium model call (e.g., Claude) for full app build',
    cost: '≈$20/run for stock-market app',
    notes: 'Full repo context sent to one model; no plan/patch or routing savings.',
  },
  {
    tool: 'Cursor Pro',
    offering: 'Editor + agent + large context',
    cost: '~$20/mo',
    notes: 'Great UX; heavy usage can push spend. Ultra tier hits $200/mo.',
  },
  {
    tool: 'Replit Core',
    offering: 'Browser IDE + agent credits',
    cost: '~$20/mo (annual)',
    notes: 'Credits plus hosted compute; overages billed separately.',
  },
  {
    tool: 'Lovable',
    offering: 'GPT-engineer style scaffolding',
    cost: '~$25/mo',
    notes: 'Credits apply; token routing opaque.',
  },
  {
    tool: 'Sourcegraph Cody',
    offering: 'Deep code search + assistant',
    cost: '≈$19+/user/mo',
    notes: 'Excellent for monorepos; org features add spend.',
  },
  {
    tool: 'Supermaven Pro',
    offering: '1M-token inline completions',
    cost: '~$10/mo',
    notes: 'Pair with FlowOps router for low-latency typing.',
  },
  {
    tool: 'Flowise / Langflow / Dify',
    offering: 'Open-source orchestration canvases',
    cost: '$0 self-host (infra only)',
    notes: 'FlowOps mirrors these flows without platform tax.',
  },
];

const DEMO_TEMPLATES = [
  'Customer Billing Control Center',
  'IoT Fleet Operations Console',
  'Global Procurement Negotiator',
  'Wealth Advisory Co-Pilot',
  'Clinical Trial Compliance Hub',
  'Fraud Analytics Command Deck',
  'Unified Service Desk (ITSM + NLU)',
  'Field Ops Mobility Suite',
];

const PERSONAS = [
  {
    title: 'Growth-Stage Builders',
    description: 'Launch customer portals, partner dashboards, and internal tooling without expanding headcount.',
    focus: 'Headless architectures, rapid pilots, traceable decisions.',
  },
  {
    title: 'Global Enterprises',
    description: 'White-labelled platforms with multi-region deployment, policy enforcement, and phased rollouts.',
    focus: 'Separation of duties, SBOM management, enterprise IAM.',
  },
  {
    title: 'Ops & Data Teams',
    description: 'Automate ingestion, analytics, and alerting pipelines with resilient governance baked in.',
    focus: 'PII controls, lineage, and audit-ready analytics.',
  },
  {
    title: 'Innovation Labs',
    description: 'Prototype to production in days with safe MoE experimentation, scenario sandboxes, and telemetry instrumentation.',
    focus: 'LTV experiments, GTM pilots, iterative rollbacks.',
  },
];

const COMPARISON_POINTS = [
  {
    label: 'Architecture & stack choices',
    flowOps: 'Generated from guardrailed templates with architect nano-agent approvals.',
    legacy: 'Manual selection, environment drift, limited reuse of winning blueprints.',
  },
  {
    label: 'Compliance reporting',
    flowOps: 'SOC-2 control mapping, privacy impact, SBOM, and policy attestations generated automatically.',
    legacy: 'Spreadsheet-driven attestations with lagging updates and manual sign-off loops.',
  },
  {
    label: 'Lifecycle maintenance',
    flowOps: 'Embedded nano-agent observes telemetry and proposes patches with one-click approvals.',
    legacy: 'Runbooks, ticket queues, and dependency drift across environments.',
  },
];

const CONTACT_DEFAULT = {
  name: '',
  email: '',
  company: '',
  headcount: '',
  message: '',
};

const THEME_STORAGE_KEY = 'flowops-theme';
const LIVE_DEMO_ROTATION_MS = 2800;
const CHAT_WINDOW_SIZE = 3;

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored === 'light' ? 'light' : 'dark';
};

const getInitialPage = () => {
  if (typeof window === 'undefined') return 'overview';
  const hash = window.location.hash.replace('#', '');
  return NAV_ITEMS.some((item) => item.key === hash) ? hash : 'overview';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activePage, setActivePage] = useState(getInitialPage);
  const [roiInputs, setRoiInputs] = useState({
    appsPerYear: 18,
    avgBuildCost: 420_000,
    avgMaintenanceCost: 120_000,
    expectedVelocityGain: 65,
  });
  const [formState, setFormState] = useState(CONTACT_DEFAULT);
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });
  const [activeNode, setActiveNode] = useState(0);
  const [chatCursor, setChatCursor] = useState(CHAT_THREADS.length - CHAT_WINDOW_SIZE);
  const [activeRunStep, setActiveRunStep] = useState(0);
  const [activeLog, setActiveLog] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    document.body.dataset.theme = theme;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.removeProperty('--cursor-x');
    document.documentElement.style.removeProperty('--cursor-y');
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (NAV_ITEMS.some((item) => item.key === hash)) {
        setActivePage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileNavOpen(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveNode((prev) => (prev + 1) % WORKFLOW_NODES.length);
      setActiveRunStep((prev) => (prev + 1) % RUN_STEPS.length);
      setChatCursor((prev) => (prev + 1) % CHAT_THREADS.length);
      setActiveLog((prev) => (prev + 1) % LIVE_ACTIVITY.length);
      setCycleKey((prev) => prev + 1);
    }, LIVE_DEMO_ROTATION_MS);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const roiResults = useMemo(() => {
    const annualTraditional =
      roiInputs.appsPerYear * (roiInputs.avgBuildCost + roiInputs.avgMaintenanceCost);
    const efficiencyMultiplier = Math.max(0, 100 - roiInputs.expectedVelocityGain) / 100;
    const flowOpsDelivery = annualTraditional * efficiencyMultiplier;
    const savings = annualTraditional - flowOpsDelivery;
    const paybackWeeks = Math.max(1, Math.round((flowOpsDelivery / roiInputs.appsPerYear) / 52 * 12));

    return {
      annualTraditional,
      flowOpsDelivery,
      savings,
      paybackWeeks,
    };
  }, [roiInputs]);

  const visibleChat = useMemo(() => {
    const result = [];
    for (let index = 0; index < CHAT_WINDOW_SIZE; index += 1) {
      const cursor = (chatCursor + index) % CHAT_THREADS.length;
      result.push(
        CHAT_THREADS[cursor] || CHAT_THREADS[CHAT_THREADS.length - CHAT_WINDOW_SIZE + index] || CHAT_THREADS[index]
      );
    }
    return result;
  }, [chatCursor]);

  const changePage = (key) => {
    if (key === 'docs') {
      if (typeof window !== 'undefined') {
        window.open('https://docs.flowops.coreai.co.in', '_blank', 'noopener');
      }
      setMobileNavOpen(false);
      return;
    }

    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${key}`);
    }
    setActivePage(key);
    setMobileNavOpen(false);
  };

  const trackPricingCta = useCallback((plan) => {
    if (typeof window === 'undefined') {
      return;
    }

    const payload = {
      event: 'pricing_cta_click',
      product: 'flowops',
      plan: plan.name,
      price: plan.price,
      timestamp: Date.now(),
    };

    try {
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(payload);
      } else if (typeof window.gtag === 'function') {
        window.gtag('event', 'pricing_cta_click', payload);
      } else {
        console.debug('[analytics]', payload);
      }
    } catch (error) {
      console.debug('[analytics:error]', error);
    }
  }, []);

  const handlePricingCtaClick = (plan) => {
    trackPricingCta(plan);
    if (plan.price === 'Contact us') {
      changePage('contact');
      return;
    }
    changePage('live');
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleRoiChange = (field, value) => {
    setRoiInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFormChange = (field, value) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFormStatus({ type: 'idle', message: '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({ type: 'error', message: 'Please provide your name, email, and a short overview.' });
      return;
    }

    try {
      setFormStatus({ type: 'loading', message: 'Submitting...' });
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Unable to submit form right now.');
      }

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'Something went wrong.');
      }

      setFormStatus({ type: 'success', message: 'Thanks — our team will connect within 24 hours.' });
      setFormState(CONTACT_DEFAULT);
    } catch (error) {
      setFormStatus({ type: 'error', message: error.message });
    }
  };

  const renderHero = () => (
    <section className="hero">
      <div className="hero-copy">
        <div className="badge">Production AI Application Factory</div>
        <h1>Ship full apps from plain English. Cheaper. Faster. Safer.</h1>
        <p>
          FlowOps Central orchestrates planners, code agents, and infrastructure so regulated teams preview, test, and deploy in minutes.
          Embedded nano-agents keep every release hardened while FlowOps Core routes the next best action.
        </p>
        <div className="hero-ctas">
          <button className="primary" type="button" onClick={() => changePage('capabilities')}>
            Explore Capabilities
          </button>
          <button className="secondary" type="button" onClick={() => changePage('live')}>
            View Live Demo
          </button>
        </div>
        <ul className="hero-metrics">
          {ENTERPRISE_METRICS.map((metric) => (
            <li key={metric.label} className={`metric metric--${metric.accent}`}>
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-visual" aria-hidden>
        <div className="visual-sphere">
          <div className="visual-sphere-glow" />
          <div className="visual-sphere-core">
            <span>CoreAI Orchestration Mesh</span>
          </div>
        </div>
        <div className="visual-footer">
          <strong>Compliance-ready by default</strong>
          <p>Deliverables include SOC-2 control mapping, SBOM exports, threat models, and observability playbooks.</p>
        </div>
      </div>
    </section>
  );

  const renderProcess = () => (
    <section className="process">
      <header className="section-header">
        <p className="eyebrow">Platform Flow</p>
        <h2>From single prompt to governed production release.</h2>
        <p>
          Each nano-agent works against a knowledge graph of proven architectures, shared components, and policy-led pipelines. The
          result: defensible systems, delivered fast, at predictable cost.
        </p>
      </header>
      <div className="process-grid">
        {PROCESS_STEPS.map((step) => (
          <article key={step.title} className="process-card">
            <span className="process-index">{step.subtitle}</span>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );

  const renderArchitecture = () => (
    <section className="architecture">
      <header className="section-header">
        <p className="eyebrow">Core Structure</p>
        <h2>Advanced tooling powering FlowOps.</h2>
        <p>
          FlowOps blends long-context planning, MoE reasoning, and embedded runtime agents to deliver software that stays resilient
          after launch. Security, governance, and observability live alongside code generation by design.
        </p>
      </header>
      <div className="architecture-grid">
        {ARCHITECTURE_PILLARS.map((pillar) => (
          <article key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );

  const renderCapabilities = () => (
    <section className="capabilities">
      <header className="section-header">
        <p className="eyebrow">App Factory</p>
        <h2>Capabilities engineered for mission-critical workloads.</h2>
        <p>
          FlowOps spans every layer of the stack with deterministic governance: from UX and integrations through data, telemetry, and
          continuous hardening.
        </p>
      </header>
      <div className="capability-grid">
        {CAPABILITIES.map((item) => (
          <article key={item.title} className="capability-card">
            <div className="capability-card__header">
              <h3>{item.title}</h3>
              <div className="divider" />
            </div>
            <p>{item.description}</p>
            <div className="tag-list">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  const renderLiveDemo = () => (
    <section className="live-demo">
      <header className="section-header">
        <p className="eyebrow">Live Demo Canvas</p>
        <h2>Preview, refine, and collaborate with FlowOps Core.</h2>
        <p>
          Watch the preview update in real time while the embedded nano-agent relays insights to FlowOps Core. Refine instructions, review
          sequential reasoning, and trigger builds without waiting for the full run to finish.
        </p>
      </header>
      <p className="workflow-summary">
        FlowOps Core drives the active blueprint across Plan → Patch → Validate → PR while FlowOps AppGen — the build engine — streams a live
        preview and cost telemetry.
      </p>
      <div className="demo-layout">
        <div className="preview-panel" role="group" aria-label="FlowOps preview workspace">
          <header className="preview-header">
            <span className="preview-title">FlowOps AppGen Overview</span>
            <span className="preview-status">Streaming build · 68% complete</span>
          </header>
          <div className="preview-screen">
            <div className="preview-sidebar">
              {FLOW_STEPS.map((step, index) => (
                <span
                  key={step}
                  className={`preview-nav ${index <= activeLog ? 'preview-nav--active' : ''}`}
                  data-flowops-step={step.toLowerCase()}
                >
                  {step}
                </span>
              ))}
            </div>
            <div className="preview-canvas">
              <div className="preview-card preview-card--hero">
                <span className="preview-card__label">{PREVIEW_TILES[0].label}</span>
                <p className="preview-card__body">{PREVIEW_TILES[0].body}</p>
              </div>
              <div className="preview-grid">
                {PREVIEW_TILES.slice(1, 3).map((tile) => (
                  <div key={tile.id} className="preview-card">
                    <span className="preview-card__label">{tile.label}</span>
                    <p className="preview-card__body">{tile.body}</p>
                  </div>
                ))}
                <div className="preview-card preview-card--wide">
                  <span className="preview-card__label">{PREVIEW_TILES[3].label}</span>
                  <p className="preview-card__body">{PREVIEW_TILES[3].body}</p>
                </div>
              </div>
              <div className="preview-code">
                <pre>
{`Plan → Patch → Validate → PR\nRoute: openrouter:qwen-long → openrouter:deepseek-coder → local:ci → github\nCost window: $0.012 + $0.018`}
                </pre>
              </div>
            </div>
          </div>
          <div className="preview-activity" role="list">
            {LIVE_ACTIVITY.map((item, index) => (
              <div key={item.label} className={`activity-row ${index === activeLog ? 'activity-row--active' : ''}`}>
                <span className="activity-indicator" aria-hidden />
                <div className="activity-copy">
                  <span className="activity-label">{item.label}</span>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="refine-dock" role="form" aria-label="Refine instruction">
            <div className="refine-header">
              <span className="refine-title">Refine</span>
              <span className="refine-hint">Drop specs, Jira JSON/CSV, or quick prompts</span>
            </div>
            <textarea
              value="Replace hero copy with enterprise compliance wording, upgrade billing chart to stacked bars, ensure Stripe logs retained 30 days."
              readOnly
            />
            <div className="refine-actions">
              <button className="ghost" type="button">Preview changes</button>
              <button className="primary" type="button">Generate</button>
            </div>
          </div>
        </div>

        <div className="workflow-preview" role="group" aria-label="Workflow canvas preview">
          <div className="workflow-header">
            <span className="workflow-status">Active Blueprint Engagement</span>
            <span className="workflow-id">Engagement · FIN-4821</span>
            <div key={cycleKey} className="workflow-progress" style={{ animationDuration: `${LIVE_DEMO_ROTATION_MS}ms` }}>
              <span />
            </div>
          </div>
          <div className="workflow-canvas">
            <div className="workflow-track">
              {WORKFLOW_NODES.map((node, index) => {
                let status = 'queued';
                if (index === activeNode) {
                  status = 'active';
                } else if (index < activeNode) {
                  status = 'complete';
                }
                return (
                  <div key={node.title} className={`workflow-node workflow-node--${status}`}>
                    <h4>{node.title}</h4>
                    <p>{node.detail}</p>
                    <span className="node-status">{status}</span>
                  </div>
                );
              })}
            </div>
            <div className="workflow-edges" aria-hidden>
              <svg viewBox="0 0 1200 240" preserveAspectRatio="none">
                <path d="M130 120 C 200 40, 300 40, 370 120" />
                <path d="M430 120 C 500 40, 600 40, 670 120" />
                <path d="M730 120 C 800 40, 900 40, 970 120" />
              </svg>
            </div>
          </div>
          <footer className="workflow-footer">
            <div>
              <strong>Embedded nano-agent:</strong> handles light tweaks, telemetry, and user chats inside the delivered app.
            </div>
            <div>
              <strong>FlowOps Core:</strong> validates patches, escalates complex fixes, and maintains compliance artefacts.
            </div>
          </footer>
        </div>

        <div className="chat-preview" role="log" aria-label="FlowOps core collaboration">
          <header>
            <span className="chat-title">FlowOps Core Intelligence</span>
            <span className="chat-presence">Linked to embedded nano-agent</span>
          </header>
          <ul>
            {visibleChat.map((entry, index) => (
              <li key={`${entry.from}-${index}`} className={entry.from.includes('Core') ? 'central' : 'edge'}>
                <span className="author">{entry.from}</span>
                <p>{entry.message}</p>
              </li>
            ))}
          </ul>
          <div className="chat-input" aria-hidden>
            <span>Type to refine or ship patches…</span>
          </div>
        </div>

        <div className="run-timeline" role="list" aria-label="Generation stages">
          {RUN_STEPS.map((step, index) => (
            <div key={step.title} className={`run-step ${index === activeRunStep ? 'run-step--active' : ''}`}>
              <div className="run-step__index">{index + 1}</div>
              <div className="run-step__content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <aside className="prompt-cloud" aria-label="Prompt accelerators">
          {DEMO_TEMPLATES.map((template) => (
            <span key={template}>{template}</span>
          ))}
        </aside>
      </div>
    </section>
  );

  const renderEngine = () => (
    <section className="engine" id="engine">
      <header className="section-header">
        <p className="eyebrow">FlowOps Central</p>
        <h2>FlowOps Central is the command brain coordinating every agent.</h2>
        <p>
          Central listens to planners, code agents, CI, and external tools to decide the next best action. Explore the pipeline, tooling,
          and safeguards that keep FlowOps AppGen reliable at enterprise scale.
        </p>
      </header>

      <div className="engine-grid">
        {PIPELINE_FLOW.map((item) => (
          <article key={item.stage} className="engine-card">
            <h3>{item.stage}</h3>
            <p>{item.description}</p>
            <div className="tag-list">
              {item.systems.map((system) => (
                <span key={system}>{system}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="toolchain">
        <h3>Tooling stack</h3>
        <p>
          Every run uses resilient routing, deterministic planners, and embedded agents so the generated app mirrors the brief while
          staying patchable after launch.
        </p>
        <div className="toolchain-grid">
          {TOOLCHAIN.map((tool) => (
            <article key={tool.name} className="tool-card">
              <header>
                <h4>{tool.name}</h4>
                <span>{tool.role}</span>
              </header>
              <p>{tool.detail}</p>
              <div className="tag-list">
                {tool.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="safeguards">
        <h3>Safeguards & observability</h3>
        <div className="safeguard-grid">
          {SAFEGUARDS.map((item) => (
            <article key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  const renderROI = () => (
    <section className="roi" id="roi">
      <header className="section-header">
        <p className="eyebrow">ROI Intelligence</p>
        <h2>Quantify delivery acceleration and sustained savings.</h2>
        <p>
          Adjust the model to see how FlowOps compresses delivery timelines, reduces maintenance overhead, and keeps teams focused on
          differentiation rather than boilerplate rebuilds.
        </p>
      </header>
      <div className="roi-panel">
        <form className="roi-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Apps generated per year
            <input
              type="number"
              min="1"
              value={roiInputs.appsPerYear}
              onChange={(event) => handleRoiChange('appsPerYear', Number(event.target.value))}
            />
          </label>
          <label>
            Average build cost (per app)
            <input
              type="number"
              min="0"
              step="1000"
              value={roiInputs.avgBuildCost}
              onChange={(event) => handleRoiChange('avgBuildCost', Number(event.target.value))}
            />
          </label>
          <label>
            Annual maintenance cost (per app)
            <input
              type="number"
              min="0"
              step="1000"
              value={roiInputs.avgMaintenanceCost}
              onChange={(event) => handleRoiChange('avgMaintenanceCost', Number(event.target.value))}
            />
          </label>
          <label>
            Delivery acceleration (%)
            <input
              type="number"
              min="0"
              max="95"
              value={roiInputs.expectedVelocityGain}
              onChange={(event) => handleRoiChange('expectedVelocityGain', Number(event.target.value))}
            />
          </label>
        </form>
        <div className="roi-results">
          <div className="result-card">
            <span className="label">Traditional spend</span>
            <strong>${Number(roiResults.annualTraditional).toLocaleString()}</strong>
            <span className="hint">Build + run cost per year today</span>
          </div>
          <div className="result-card">
            <span className="label">FlowOps projected spend</span>
            <strong>${Number(roiResults.flowOpsDelivery).toLocaleString()}</strong>
            <span className="hint">Automated delivery, nano-agent maintenance</span>
          </div>
          <div className="result-card highlight">
            <span className="label">Savings unlocked</span>
            <strong>${Number(roiResults.savings).toLocaleString()}</strong>
            <span className="hint">Annual efficiency reclaimed</span>
          </div>
          <div className="result-card">
            <span className="label">Median payback window</span>
            <strong>{roiResults.paybackWeeks} weeks</strong>
            <span className="hint">From first production launch</span>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCostEfficiency = () => (
    <section className="cost" id="cost">
      <header className="section-header">
        <p className="eyebrow">Cost Architecture</p>
        <h2>Stack cost-saving primitives and keep frontier models in reach.</h2>
        <p>
          FlowOps optimises spend with deterministic planning, Repo-RAG, patch-first workflows, and routing heuristics. Frontier models stay
          available without blasting tokens.
        </p>
      </header>

      <div className="pricing-grid">
        {PRICING_PLANS.map((plan) => (
          <article key={plan.name} className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''}`}>
            <div className="pricing-card__header">
              <h3>{plan.name}</h3>
              <span className="pricing-amount">{plan.price}</span>
              <span className="pricing-cadence">{plan.cadence}</span>
            </div>
            <ul>
              {plan.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <button type="button" className="primary pricing-cta" onClick={() => handlePricingCtaClick(plan)}>
              {plan.price === 'Contact us' ? 'Talk to sales' : 'Start with credits'}
            </button>
          </article>
        ))}
      </div>

      <div className="cost-grid">
        {COST_STRATEGIES.map((item) => (
          <article key={item.title} className="cost-card">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="chart-panel">
        <header>
          <h3>Cost & speed against alternatives</h3>
          <p>FlowOps credits deliver complete apps faster and with higher accuracy while staying budget friendly.</p>
        </header>
        <div className="chart-grid">
          {CHART_ROWS.map((row) => (
            <div key={row.label} className="chart-row">
              <div className="chart-label">{row.label}</div>
              <div className="chart-bars">
                <div className="chart-bar">
                  <span>Cost</span>
                  <div className="bar-track">
                    <div className="bar bar--flowops" style={{ width: `${row.flowOps.cost}%` }}>
                      ${row.flowOps.cost}
                    </div>
                    <div className="bar bar--competitor" style={{ width: `${row.competitor.cost}%` }}>
                      ${row.competitor.cost}
                    </div>
                  </div>
                </div>
                <div className="chart-bar">
                  <span>Build minutes</span>
                  <div className="bar-track">
                    <div className="bar bar--flowops" style={{ width: `${row.flowOps.time}%` }}>
                      {row.flowOps.time}m
                    </div>
                    <div className="bar bar--competitor" style={{ width: `${row.competitor.time}%` }}>
                      {row.competitor.time}m
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="market-table" role="table" aria-label="Market comparison">
        <div className="market-head" role="row">
          <span>Tool</span>
          <span>Offering</span>
          <span>Cost</span>
          <span>Notes</span>
        </div>
        {MARKET_COMPARISON.map((row) => (
          <div key={row.tool} className="market-row" role="row">
            <span>{row.tool}</span>
            <span>{row.offering}</span>
            <span>{row.cost}</span>
            <span>{row.notes}</span>
          </div>
        ))}
      </div>

      <div className="cost-summary">
        Keep a lightweight seat (e.g., Supermaven $10/mo), self-host your orchestration canvas, and purchase FlowOps credits so the platform
        can combine Plan→Patch + Repo-RAG + routing on your behalf. FlowOps credits typically land at $12–$18 per month for complex apps,
        compared with ~$20 for a single Anthropic run, because Central dynamically mixes models and keeps token waste down.
      </div>
    </section>
  );

  const renderPersonas = () => (
    <section className="personas" id="personas">
      <header className="section-header">
        <p className="eyebrow">Who We Serve</p>
        <h2>Curated playbooks for every operating model.</h2>
        <p>
          Whether you are accelerating feature delivery, modernising legacy estates, or spinning up greenfield ventures, CoreAI adapts
          to your governance, stacks, and release cadence.
        </p>
      </header>
      <div className="persona-grid">
        {PERSONAS.map((persona) => (
          <article key={persona.title}>
            <h3>{persona.title}</h3>
            <p>{persona.description}</p>
            <span>{persona.focus}</span>
          </article>
        ))}
      </div>
      <div className="comparison" aria-label="Operational comparison">
        <header className="section-header">
          <p className="eyebrow">Operating Model Shift</p>
          <h2>From manual software factories to automated, policy-led delivery.</h2>
        </header>
        <div className="comparison-table">
          <div className="comparison-head">
            <span>Dimension</span>
            <span>FlowOps CoreAI</span>
            <span>Traditional delivery</span>
          </div>
          {COMPARISON_POINTS.map((item) => (
            <div key={item.label} className="comparison-row">
              <span className="dimension">{item.label}</span>
              <p className="flowops">{item.flowOps}</p>
              <p className="legacy">{item.legacy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderAbout = () => (
    <section className="about" id="about">
      <header className="section-header">
        <p className="eyebrow">About FlowOps</p>
        <h2>AI engineers crafting the operating system for enterprise software creation.</h2>
        <p>
          We bring decades of platform engineering, compliance, and ML experience. Our mission is to compress the distance from idea to
          production while increasing quality, security, and auditability.
        </p>
      </header>
      <div className="about-columns">
        <div className="about-card">
          <h3>Why we build</h3>
          <ul>
            <li>Long-context orchestration reduces specification misses by 40%.</li>
            <li>Mixture-of-Experts (MoE) inference delivers sub-second agent collaboration.</li>
            <li>Every release ships with threat models, SBOMs, runbooks, and observability plans.</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>How we differentiate</h3>
          <ul>
            <li>Cost reductions averaging 70% across Fortune 500 pilot programs.</li>
            <li>Policy-led approvals map engineering tasks to risk owners and compliance frameworks.</li>
            <li>Embedded nano-agent keeps teams shipping safely across the full lifecycle.</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Where we are heading</h3>
          <ul>
            <li>Secure admin workspace for approvals, audit trails, and contact intelligence.</li>
            <li>Interactive user dashboards and workspace-level analytics.</li>
            <li>Automated email routing to bespoke mailboxes like info@flowops.coreai.co.in.</li>
          </ul>
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="contact" id="contact">
      <div className="contact-copy">
        <header className="section-header">
          <p className="eyebrow">Contact</p>
          <h2>Connect with the team.</h2>
          <p>
            Tell us about your roadmap, compliance landscape, and target architectures. We will align a tailored playbook, share
            relevant case studies, and schedule a deep dive.
          </p>
        </header>
        <div className="contact-highlights">
          <div>
            <span className="highlight">24h</span>
            <p>Average response time from an architect partner.</p>
          </div>
          <div>
            <span className="highlight">Nano-agent demo</span>
            <p>Preview how embedded agents patch and evolve your stack post launch.</p>
          </div>
          <div>
            <span className="highlight">Admin portal</span>
            <p>Secure area (coming soon) to review submissions, approvals, and release status.</p>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input
            type="text"
            value={formState.name}
            onChange={(event) => handleFormChange('name', event.target.value)}
            required
          />
        </label>
        <label>
          Work email
          <input
            type="email"
            value={formState.email}
            onChange={(event) => handleFormChange('email', event.target.value)}
            required
          />
        </label>
        <label>
          Company / Business unit
          <input
            type="text"
            value={formState.company}
            onChange={(event) => handleFormChange('company', event.target.value)}
          />
        </label>
        <label>
          Team size
          <input
            type="text"
            placeholder="e.g. 25 product engineers"
            value={formState.headcount}
            onChange={(event) => handleFormChange('headcount', event.target.value)}
          />
        </label>
        <label className="full-width">
          Opportunity details
          <textarea
            rows={4}
            value={formState.message}
            onChange={(event) => handleFormChange('message', event.target.value)}
            required
          />
        </label>
        <button className="primary" type="submit" disabled={formStatus.type === 'loading'}>
          {formStatus.type === 'loading' ? 'Submitting…' : 'Submit overview'}
        </button>
        {formStatus.type !== 'idle' && (
          <p className={`form-status form-status--${formStatus.type}`}>{formStatus.message}</p>
        )}
      </form>
    </section>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return (
          <>
            {renderHero()}
            {renderProcess()}
            {renderArchitecture()}
          </>
        );
      case 'capabilities':
        return (
          <>
            {renderCapabilities()}
            {renderROI()}
            {renderCostEfficiency()}
          </>
        );
      case 'live':
        return renderLiveDemo();
      case 'engine':
        return renderEngine();
      case 'cost':
        return renderCostEfficiency();
      case 'personas':
        return renderPersonas();
      case 'about':
        return renderAbout();
      case 'contact':
        return renderContact();
      default:
        return renderHero();
    }
  };

  return (
    <div className="app-shell">
      <div className="gradient-overlay" aria-hidden />
      <header className="site-header">
        <div className="nav-inner">
          <button className="brand" type="button" onClick={() => changePage('overview')}>
            <span>FlowOps</span>
            <span className="brand-accent">CoreAI</span>
          </button>
          <nav className={`nav-links ${mobileNavOpen ? 'nav-links--open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => changePage(item.key)}
                className={item.key === activePage ? 'nav-active' : ''}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="ghost" type="button" onClick={() => changePage('contact')}>
              Request Demo
            </button>
            <button className="primary" type="button" onClick={() => changePage('live')}>
              Start Building
            </button>
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <span className="theme-toggle__icon" aria-hidden>
                {theme === 'dark' ? '🌙' : '☀️'}
              </span>
            </button>
            <button
              className={`mobile-toggle ${mobileNavOpen ? 'mobile-toggle--open' : ''}`}
              type="button"
              onClick={() => setMobileNavOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main key={activePage} className="page-content">
        {renderPage()}
      </main>

      <footer className="site-footer">
        <div>
          <strong>FlowOps CoreAI</strong>
          <span>© {new Date().getFullYear()} FlowOps Technologies. All rights reserved.</span>
        </div>
        <div className="footer-links">
          <button type="button" onClick={() => changePage('capabilities')}>
            Capabilities
          </button>
          <button type="button" onClick={() => changePage('live')}>
            Live Demo
          </button>
          <button type="button" onClick={() => changePage('contact')}>
            Contact
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
