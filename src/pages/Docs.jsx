import React from "react";
export default function Docs(){
  return (
    <section className="section card">
      <h2>Docs</h2>
      <p>Everything you need to configure and deploy FlowOpsAI.</p>
      <ol>
        <li>Create <code className="kbd">.env</code> from example and add your API keys.</li>
        <li>Run <code className="kbd">docker-compose up --build -d</code> to start all services.</li>
        <li>Open <code className="kbd">http://localhost:3737</code> for the UI.</li>
      </ol>
      <p>See the README in the GitHub repo for more details.</p>
    </section>
  );
}
