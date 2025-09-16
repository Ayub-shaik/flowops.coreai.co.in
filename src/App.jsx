import React, { useEffect, useRef, useState } from 'react';
import './index.css';   // contains @tailwind base only (you already have Tailwind)

export default function App() {
  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Mouse gradient (v0 style)
  useEffect(() => {
    const handle = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  // Static SVG workflow (draggable illusion)
  useEffect(() => {
    const svg = canvasRef.current;
    if (!svg) return;
    // fake drag – just moves on hover
    svg.addEventListener('mouseenter', () => svg.style.transform = 'translate(2px, 2px)');
    svg.addEventListener('mouseleave', () => svg.style.transform = 'translate(0, 0)');
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-hidden">
      {/* Mouse Gradient Background (v0 style) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(255,111,0,0.15), transparent 80%)`
        }}
      />

      {/* HERO – Enterprise Copy */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
          FlowOps – Ship Enterprise Apps from Plain English
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
          Describe the application you need – we generate the repo, infra, CI/CD, tests, docs, and observability.
          Fortune-500 ready, SOC-2 compliant, white-labelled.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600">Book Executive Demo</button>
          <button className="px-6 py-3 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800">Download SOC-2 Pack</button>
        </div>
      </header>

      {/* LIVE DEMO – Workflow Canvas + Chat Mock */}
      <section id="demo" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Live Demo – Enterprise Workflow</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left – Canvas (n8n-like) */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-sm text-slate-400 mb-2">Input: “Customer portal with Stripe, Postgres, GDPR”</div>
            <svg ref={canvasRef} className="w-full h-64 transition-transform" viewBox="0 0 400 200">
              <rect x="10" y="10" width="80" height="40" rx="6" className="fill-orange-500/20 stroke-orange-400" strokeWidth="2"/>
              <text x="50" y="35" textAnchor="middle" className="fill-slate-100 text-xs">Planner</text>

              <rect x="110" y="80" width="80" height="40" rx="6" className="fill-orange-500/20 stroke-orange-400" strokeWidth="2"/>
              <text x="150" y="105" textAnchor="middle" className="fill-slate-100 text-xs">Code-Gen</text>

              <rect x="210" y="150" width="80" height="40" rx="6" className="fill-orange-500/20 stroke-orange-400" strokeWidth="2"/>
              <text x="250" y="175" textAnchor="middle" className="fill-slate-100 text-xs">Terraform</text>

              <path d="M 90 30 L 150 80 M 150 120 L 250 150" className="stroke-slate-500" strokeWidth="2" fill="none"/>
            </svg>
            <button disabled className="mt-4 px-4 py-2 rounded-md bg-slate-700 text-slate-200 cursor-not-allowed">Generating… (demo mode)</button>
          </div>

          {/* Right – Chat Mock */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-sm text-slate-400 mb-2">Nano-Agent Chat (shipped inside every app)</div>
            <div className="space-y-2 text-sm">
              <div className="self-end bg-orange-500/20 rounded-lg p-2">User: Make button bigger</div>
              <div className="self-start bg-slate-700 rounded-lg p-2">Agent: Patch applied. Deploy? y/n</div>
            </div>
            <button disabled className="mt-4 px-4 py-2 rounded-md bg-slate-700 text-slate-200 cursor-not-allowed">Chat disabled (demo)</button>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Who This Is For</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {["Small Store", "Hobbyist", "Mid-Market", "Fortune-500"].map((t) => (
            <div key={t} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-xl font-semibold text-orange-400">{t}</div>
              <div className="text-slate-300 text-sm mt-2">
                {t === "Fortune-500" ? "SOC-2, HIPAA, on-prem, SLA" : "Pay-as-you-grow, white-label, self-serve"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES – App-Factory */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">App-Factory Capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Web Apps (React, Vue, Angular)",
            "Mobile Apps (React-Native, Flutter)",
            "Dashboards & BI (Metabase, Superset)",
            "Data Aggregators & ETL",
            "Email Agents (SendGrid, SES)",
            "ERP Modules (custom)",
            "Chat Agents (WhatsApp, Slack)",
            "IoT Gateways (MQTT, LoRa)",
            "Blockchain Clients (EVM, Substrate)",
            "AI Models (on-prem GPU)"
          ].map((f) => (
            <div key={f} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-slate-300 text-sm">
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About FlowOps</h2>
        <p className="text-slate-300 leading-relaxed">
          We are a team of AI engineers, cloud architects and security specialists who believe enterprise software
          should be generated, not hand-written. By combining long-context LLMs, Mixture-of-Experts routing and
          iterative development loops we reduce build cost by up to 70 % while improving SOC-2 compliance and
          time-to-market. Our mission is to make Fortune-500 grade applications accessible to every organisation
          without the Fortune-500 price tag.
        </p>
      </section>

      {/* CONTACT – Form → Admin Portal */}
      <section id="contact" className="relative z-10 max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Enterprise Sales</h2>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form sent to admin portal – demo mode"); }}>
          <input name="name" type="text" placeholder="Name" className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-100" required />
          <input name="email" type="email" placeholder="Work Email" className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-100" required />
          <input name="company" type="text" placeholder="Company" className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-100" required />
          <textarea name="message" placeholder="Describe your use-case" rows="4" className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-100" required />
          <button type="submit" className="w-full px-4 py-2 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600">Send to Admin Portal</button>
        </form>
        <p className="text-xs text-slate-400 mt-4">We will reply within 24 h. Demo instances available on request.</p>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 max-w-6xl mx-auto px-6 py-10 text-center text-slate-400 text-sm">
        © 2024 FlowOps – All rights reserved.  
        <a href="https://github.com/Ayub-shaik/flowops.coreai.co.in" className="ml-4 hover:text-orange-400">GitHub</a>
        <a href="mailto:info@flowops.coreai.co.in" className="ml-4 hover:text-orange-400">info@flowops.coreai.co.in</a>
      </footer>
    </div>
  );
}