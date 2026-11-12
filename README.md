# Pentakota Harivardhan – Premium Personal Portfolio

A world-class, futuristic, fully responsive personal portfolio website for **Pentakota Harivardhan** – AI & Machine Learning Enthusiast, Python Developer, and Front-End Developer.

---

## 🌟 Features Overview

- **Aesthetic Visual Design:** Futuristic dark theme with cyan, electric blue, and purple gradients, glassmorphism cards, neon glows, and animated starfield background.
- **Dual-Theme Engine:** Seamless Dark / Light mode toggle with persistent preferences saved to `localStorage`.
- **Typing Animation:** Dynamic multi-title typewriter effect highlighting key professional competencies.
- **Interactive Skills Section:** Animated progress bars triggered upon viewport entrance with clear percentage indicators.
- **Featured Projects:** Categorized project cards with 3D tilt hover mechanics, category filtering (AI & ML, Web Dev, Python, Other), GitHub repository links, and interactive demo modals.
- **Certifications & Achievements:** Verified credential cards with high-resolution modal preview popups.
- **Live GitHub Integration:** Synchronizes live metrics with GitHub API for `@harivardhanpentakota-cmd` (repositories, followers, public stats) with an interactive 52-week contribution heatmap and resilient fallback architecture.
- **Resume System:** Dedicated resume section with interactive preview document modal and direct one-click PDF download.
- **Contact & Messaging:** Client-side form validation, direct phone call link, direct Gmail link, LinkedIn connection, and 1-click email address clipboard copy with toast notifications.
- **AI Portfolio Assistant:** Floating chatbot widget answering visitors' questions regarding Harivardhan's skills, projects, background, and contact links.
- **Desktop Enhancements:** Smooth custom magnetic cursor with interactive element hover expansion and top scroll-progress indicator.

---

## 📁 File Structure

```text
├── index.html       # Semantic HTML5 structure, SEO metadata & Schema.org JSON-LD
├── style.css        # Clean CSS3 design system, responsive media queries & dual themes
├── script.js        # Vanilla JavaScript logic, API integration & AI chatbot engine
├── resume.pdf       # Place your official resume PDF here
├── README.md        # Deployment instructions & documentation
└── src/assets/      # High-fidelity project and profile images
```

---

## 🚀 Deployment Instructions

### 1. Deploying to GitHub Pages

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com/new) and create a new repository named `portfolio` or `harivardhanpentakota-cmd.github.io`.
2. **Push the Files:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Pentakota Harivardhan portfolio"
   git branch -M main
   git remote add origin https://github.com/harivardhanpentakota-cmd/portfolio.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - In your repository, go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select `Deploy from a branch`.
   - Set the branch to `main` and folder to `/ (root)`, then click **Save**.
   - Your site will be live at `https://harivardhanpentakota-cmd.github.io/portfolio/` within minutes!

---

### 2. Deploying to Netlify

#### Option A: Drag & Drop (Zero-Config)
1. Log in to [Netlify](https://app.netlify.com/).
2. Drag and drop the portfolio folder directly into the Netlify dashboard.
3. Your portfolio is instantly published with a free SSL certificate!

#### Option B: Connect to Git
1. Click **Add new site** > **Import an existing project**.
2. Select **GitHub** and authorize access to your `portfolio` repository.
3. Build settings:
   - **Build command:** *(leave empty or `npm run build` if building through Vite)*
   - **Publish directory:** `.` *(or `dist` if using Vite build)*
4. Click **Deploy Site**.

---

## ⚙️ Customization Guide

1. **Resume File:**
   - Place your official `resume.pdf` into the root directory to replace the placeholder download.
2. **Contact Form Backend:**
   - To receive form submissions directly in your email inbox without running a server, create a free form at [Formspree.io](https://formspree.io) and replace the form action in `index.html` or `script.js`.
3. **Contact Phone & Email:**
   - Pre-configured to `+91 9392306181` and `harivardhanpentakota@gmail.com`.

---

## 👤 Author

**Pentakota Harivardhan**  
- **Phone:** [+91 9392306181](tel:+919392306181)  
- **Email:** [harivardhanpentakota@gmail.com](mailto:harivardhanpentakota@gmail.com)  
- **LinkedIn:** [linkedin.com/in/hari6181](https://www.linkedin.com/in/hari6181)  
- **GitHub:** [github.com/harivardhanpentakota-cmd](https://github.com/harivardhanpentakota-cmd)
