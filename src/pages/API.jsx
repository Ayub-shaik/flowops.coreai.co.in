import React from "react";
export default function API(){
  return (
    <section className="section card">
      <h2>API</h2>
      <p>Backend (FastAPI) exposes endpoints for managing workflows, agents, and models.</p>
      <ul>
        <li><code className="kbd">GET /</code> – Health check</li>
        <li><code className="kbd">/api/*</code> – Core endpoints (see backend docs)</li>
      </ul>
    </section>
  );
}
