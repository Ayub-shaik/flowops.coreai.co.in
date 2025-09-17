import { useEffect, useMemo, useState } from 'react';
import './App.css';

const NAV_LINKS = [
  { label: 'Platform', target: 'platform' },
  { label: 'Capabilities', target: 'capabilities' },
  { label: 'Live Demo', target: 'live-demo' },
  { label: 'Who We Serve', target: 'personas' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
];

const PROCESS_STEPS = [
  {
    title: 'Describe Outcomes',
    subtitle: 'Natural language specification',
    detail: 'Capture objectives, guardrails, compliance needs, and target stack in a single prompt or Figma import.',
  },
  {
    title: 'Assemble Multi-Agent Plan',
    subtitle: 'C1 → C5 orchestration',
    detail: 'Planner spins up nano-agents for architecture, integrations, QA, and governance while validating every artefact in context.',
  },
  {
    title: 'Ship & Self-Heal',
    subtitle: 'Continuous production readiness',
    detail: 'Generate audited repositories, Docker, Terraform, and deploy-ready CI with an embedded nano-agent for ongoing fixes.',
  },
];

const CAPABILITIES = [
  {
    title: 'Web Platforms',
    description: 'Enterprise-grade React, Next.js, or Angular frontends with design system alignment and automated accessibility checks.',
    tags: ['Multi-tenant', 'Brand SAFE', 'WCAG 2.2'],
  },
  {
    title: 'Mobile Experiences',
    description: 'Swift, Kotlin, and React Native builds with release automation, store packaging, and OTA nano-agent patching.',
    tags: ['iOS & Android', 'Secure SDLC', 'OTA updates'],
  },
  {
    title: 'Dashboards & Analytics',
    description: 'Composable BI surfaces with dbt models, semantic layers, and streaming telemetry wired into Grafana or Power BI.',
    tags: ['dbt', 'Snowflake', 'Looker'],
  },
  {
    title: 'Data Aggregators',
    description: 'Regulated ingestion pipelines with consent management, lineage, and privacy controls for HIPAA/SOC-2 workloads.',
    tags: ['PII safe', 'Airflow', 'Delta Lake'],
  },
  {
    title: 'Specialist Agents',
    description: 'Domain-tuned LLM agents for support, underwriting, and ops with guardrailed MoE inference and human-in-loop review.',
    tags: ['MoE', 'Eval harness', 'SOC-2 ready'],
  },
  {
    title: 'Connected Systems',
    description: 'ERP, CRM, IoT, and payments integrations with golden-path blueprints for SAP, Salesforce, Stripe, and ServiceNow.',
    tags: ['Low-latency', 'Resilient', 'Observability'],
  },
];

const ENTERPRISE_METRICS = [
  { label: 'Average production deployment', value: '< 28 mins', accent: 'velocity' },
  { label: 'Build cost reduction', value: '70%↓', accent: 'savings' },
  { label: 'Runtime regression risk', value: '40%↓', accent: 'quality' },
  { label: 'Compliance artefacts', value: 'SOC-2, HIPAA, GDPR', accent: 'compliance' },
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
    description: 'Automate data ingestion, analytics, and alerting pipelines with resilient governance baked in.',
    focus: 'PII controls, lineage, and audit-ready analytics.',
  },
  {
    title: 'Innovation Labs',
    description: 'Prototype to production in days with safe MoE experimentation, scenario sandboxes, and telemetry instrumentation.',
    focus: 'LTV experiments, GTM pilots, and iterative rollbacks.',
  },
];

const DEMO_TEMPLATES = [
  'Customer Billing Control Center',
  'IoT Fleet Operations Console',
  'Global Procurement Negotiator',
  'Wealth Advisory Co-Pilot',
  'Clinical Trial Compliance Hub',
  'Fraud Analytics Command Deck',
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

const CHAT_THREADS = [
  { from: 'Product Lead', message: 'Need a payments dashboard with SSO, Stripe integration, and SOC-2 evidence in under 3 weeks.' },
  { from: 'FlowOps Nano-Agent', message: 'Generating schema diffs, Terraform, and OAuth wiring. Validating policy controls and drafting observability playbook.' },
  { from: 'Product Lead', message: 'Add revenue anomaly detection and executive weekly digest.' },
  { from: 'FlowOps Nano-Agent', message: 'Embedding anomaly detection pipeline, wiring Slack digest, and updating unit/integration coverage.' },
];

const WORKFLOW_NODES = [
  { title: 'Intake Brief', detail: 'Context ingestion, requirements parsing, compliance constraints', status: 'complete' },
  { title: 'System Blueprint', detail: 'Architecture graph, data contracts, integration map', status: 'active' },
  { title: 'Delivery Plan', detail: 'Sprint packets, testing harness, approval matrix', status: 'queued' },
  { title: 'Production Release', detail: 'Git, Docker, Terraform, observability + nano-agent', status: 'queued' },
];

const CONTACT_DEFAULT = {
  name: '',
  email: '',
  company: '',
  headcount: '',
  message: '',
};

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [roiInputs, setRoiInputs] = useState({
    appsPerYear: 18,
    avgBuildCost: 420_000,
    avgMaintenanceCost: 120_000,
    expectedVelocityGain: 65,
  });
  const [formState, setFormState] = useState(CONTACT_DEFAULT);
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });

  useEffect(() => {
    const updateMousePosition = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--cursor-x', `${x}%`);
      document.documentElement.style.setProperty('--cursor-y', `${y}%`);
    };

    window.addEventListener('pointermove', updateMousePosition);
    return () => window.removeEventListener('pointermove', updateMousePosition);
  }, []);

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

  const scrollToSection = (target) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileNavOpen(false);
    }
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

  return (
    <div className="app-shell">
      <div className="gradient-overlay" aria-hidden />
      <header className="site-header">
        <div className="nav-inner">
          <button
            className="brand"
            type="button"
            onClick={() => scrollToSection('platform')}
          >
            <span>FlowOps</span>
            <span className="brand-accent">CoreAI</span>
          </button>
          <nav className={`nav-links ${mobileNavOpen ? 'nav-links--open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <button key={link.label} onClick={() => scrollToSection(link.target)} type="button">
                {link.label}
              </button>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="ghost" type="button" onClick={() => scrollToSection('contact')}>
              Request Demo
            </button>
            <button className="primary" type="button" onClick={() => scrollToSection('live-demo')}>
              Start Building
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

      <main>
        <section id="platform" className="hero">
          <div className="hero-copy">
            <div className="badge">Production AI Application Factory</div>
            <h1>
              Ship enterprise systems from natural language briefs with nano-agent guardrails.
            </h1>
            <p>
              FlowOps CoreAI transforms regulated requirements into production-ready platforms. Our multi-agent planner
              assembles architecture, infrastructure, and compliance artefacts in minutes, while an embedded nano-agent keeps
              every release hardened post-launch.
            </p>
            <div className="hero-ctas">
              <button className="primary" type="button" onClick={() => scrollToSection('capabilities')}>
                Explore Capabilities
              </button>
              <button className="secondary" type="button" onClick={() => scrollToSection('live-demo')}>
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
          <div className="hero-visual">
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

        <section id="platform-flow" className="process">
          <header className="section-header">
            <p className="eyebrow">Platform Flow</p>
            <h2>From single prompt to governed production release.</h2>
            <p>
              Each nano-agent works against a knowledge graph of proven architectures, shared components, and policy-led
              pipelines. The result: defensible systems, delivered fast, at predictable cost.
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

        <section id="capabilities" className="capabilities" aria-labelledby="capabilities-title">
          <header className="section-header">
            <p className="eyebrow">App Factory</p>
            <h2 id="capabilities-title">Capabilities engineered for mission-critical workloads.</h2>
            <p>
              FlowOps spans every layer of the stack with deterministic governance: from UX and integrations through data,
              telemetry, and continuous hardening.
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

        <section id="live-demo" className="live-demo">
          <header className="section-header">
            <p className="eyebrow">Live Demo Canvas</p>
            <h2>Workflow orchestration and nano-agent collaboration.</h2>
            <p>
              The live canvas shows how FlowOps coordinates planning, code generation, infrastructure, and compliance. Hover to
              explore our motion gradients and enterprise-ready interaction language.
            </p>
          </header>
          <div className="demo-layout">
            <div className="workflow-preview" role="group" aria-label="Workflow canvas preview">
              <div className="workflow-header">
                <span className="workflow-status">Active Blueprint</span>
                <span className="workflow-id">Engagement: FIN-4821</span>
              </div>
              <div className="workflow-canvas">
                {WORKFLOW_NODES.map((node) => (
                  <div key={node.title} className={`workflow-node workflow-node--${node.status}`}>
                    <h4>{node.title}</h4>
                    <p>{node.detail}</p>
                    <span className="node-status">{node.status}</span>
                  </div>
                ))}
                <div className="workflow-connector workflow-connector--one" />
                <div className="workflow-connector workflow-connector--two" />
                <div className="workflow-connector workflow-connector--three" />
              </div>
              <footer className="workflow-footer">
                <div>
                  <strong>Runtime nano-agent:</strong> monitors telemetry, regression tests, and proposes remediations.
                </div>
                <div>
                  <strong>Secure hand-offs:</strong> IAM-backed approvals, policy checks, and immutable audit history.
                </div>
              </footer>
            </div>
            <div className="chat-preview" role="log" aria-label="Nano-agent collaboration">
              <header>
                <span className="chat-title">Nano-Agent Dialogue</span>
                <span className="chat-presence">Live · Compliance OK</span>
              </header>
              <ul>
                {CHAT_THREADS.map((entry, index) => (
                  <li key={`${entry.from}-${index}`} className={entry.from.includes('FlowOps') ? 'nano' : 'human'}>
                    <span className="author">{entry.from}</span>
                    <p>{entry.message}</p>
                  </li>
                ))}
              </ul>
              <div className="chat-input" aria-hidden>
                <span>Ask Nano-Agent...</span>
              </div>
            </div>
            <aside className="template-cloud" aria-label="Enterprise template highlights">
              {DEMO_TEMPLATES.map((template) => (
                <span key={template}>{template}</span>
              ))}
            </aside>
          </div>
        </section>

        <section className="roi" id="roi">
          <header className="section-header">
            <p className="eyebrow">ROI Intelligence</p>
            <h2>Quantify delivery acceleration and sustained savings.</h2>
            <p>
              Adjust the model to see how FlowOps compresses delivery timelines, reduces maintenance overhead, and keeps teams
              focused on differentiation rather than boilerplate rebuilds.
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

        <section id="personas" className="personas">
          <header className="section-header">
            <p className="eyebrow">Who We Serve</p>
            <h2>Curated playbooks for every operating model.</h2>
            <p>
              Whether you are accelerating feature delivery, modernising legacy estates, or spinning up greenfield ventures, CoreAI
              adapts to your governance, stacks, and release cadence.
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
        </section>

        <section className="comparison" aria-label="Operational comparison" id="comparison">
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
        </section>

        <section id="about" className="about">
          <header className="section-header">
            <p className="eyebrow">About FlowOps</p>
            <h2>AI engineers crafting the operating system for enterprise software creation.</h2>
            <p>
              We bring decades of platform engineering, compliance, and ML experience. Our mission is to compress the distance from
              idea to production while increasing quality, security, and auditability.
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

        <section id="contact" className="contact">
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
              <p className={`form-status form-status--${formStatus.type}`}>
                {formStatus.message}
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>FlowOps CoreAI</strong>
          <span>© {new Date().getFullYear()} FlowOps Technologies. All rights reserved.</span>
        </div>
        <div className="footer-links">
          <button type="button" onClick={() => scrollToSection('comparison')}>Comparison</button>
          <button type="button" onClick={() => scrollToSection('roi')}>ROI Model</button>
          <button type="button" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
