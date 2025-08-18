import React from "react";
export default function Install(){
  return (
    <section className="section card">
      <h2>Install</h2>
      <pre><code className="kbd">git clone https://github.com/Ayub-shaik/flowopsai.git
cd flowopsai
cp .env.example .env
docker-compose up --build -d</code></pre>
      <p style={{opacity:.8}}>Make sure ports 3737, 8181, 8052, and 8090 are open locally.</p>
    </section>
  );
}
