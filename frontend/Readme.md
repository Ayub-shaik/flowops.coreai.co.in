# 🌐 FlowOpsAI Website

This repository hosts the **frontend website for FlowOpsAI**, deployed at  
👉 [flowopsai.coreai.co.in](https://flowopsai.coreai.co.in)

FlowOpsAI is an **AI + MLOps SaaS orchestration framework** that helps you:
- Define and train custom ML models  
- Integrate OpenAI, Gemini, Anthropic, and OSS LLMs  
- Automate workflows with AI agents  
- Get insights & evaluation metrics  

---

## 📂 Project Structure

flowops.coreai.co.in/
├── Dockerfile # Docker build for deployment
├── nginx.conf # Nginx config for static hosting
├── index.html # Root HTML entrypoint
├── package.json # Frontend dependencies
├── public/ # Public assets
├── src/ # React code (pages, components)
└── DEPLOY.md # Deployment instructions


---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone repo
git clone https://github.com/Ayub-shaik/flowops.coreai.co.in.git
cd flowops.coreai.co.in

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# App runs on http://localhost:5173 by default

🐳 Run with Docker
# Build image
docker build -t flowopsai-site .

# Run container
docker run -p 8080:80 flowopsai-site


Now visit 👉 http://localhost:8080

🌍 Deployment

This repo is configured for Nginx-based static hosting.
You can deploy to:

VPS/EC2 → using Dockerfile + nginx.conf

Netlify/Vercel → via static build (npm run build)

GitHub Pages (with small tweaks)

See DEPLOY.md for detailed deployment steps.

📖 Pages

/ → Home

/insights → Insights page

/models → ML Models page

/workflows → Workflows page

Each page is powered by React components in the src/pages directory.

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss.

📜 License

MIT License © 2025 Ayub Shaik


---

