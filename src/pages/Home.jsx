import React from "react";
export default function Home(){
  return (
    <section className="hero">
      <div>
        <div className="pill">
          <span>⚡ AI + MLOps Orchestration</span>
        </div>
        <h1 className="title">Build, Orchestrate, and Ship AI Workflows</h1>
        <p className="subtitle">
          FlowOpsAI brings together LLMs, custom ML models, and automation-ready agents with a clean developer experience.
        </p>
        <div className="btnrow">
          <a className="cta" href="/docs">Get Started</a>
          <a className="chip" href="https://github.com/Ayub-shaik/flowopsai" target="_blank" rel="noreferrer">⭐ Star on GitHub</a>
        </div>
        <div className="section grid">
          <div className="card feature">
            <h4>🔗 Multi‑LLM</h4>
            <p>OpenAI, Gemini, Anthropic, Mistral, and OSS models.</p>
          </div>
          <div className="card feature">
            <h4>🤖 Agents</h4>
            <p>Composable agents to automate complex workflows.</p>
          </div>
          <div className="card feature">
            <h4>📊 Insights</h4>
            <p>Evaluations and observability baked in.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <code className="kbd">docker-compose up --build -d</code>
        <p style={{marginTop:12, opacity:.8}}>Spin up the full stack in minutes.</p>
      </div>
    </section>
  );
}
