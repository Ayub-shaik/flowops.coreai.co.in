import React from "react";
export default function Demo(){
  return (
    <section className="section card">
      <h2>Demo</h2>
      <p>Use the UI to create a workflow, choose a model provider, and run an agent.</p>
      <ul>
        <li>Go to <b>Workflows</b> and add steps</li>
        <li>Select a model (OpenAI/Gemini/Anthropic/Mistral)</li>
        <li>Run and inspect results in <b>Insights</b></li>
      </ul>
    </section>
  );
}
