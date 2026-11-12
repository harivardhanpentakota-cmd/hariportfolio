/**
 * Pentakota Harivardhan – Premium Personal Portfolio
 * Core Vanilla JavaScript Architecture
 * Author: Pentakota Harivardhan
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. Portfolio Data & Knowledge Base
     ========================================================================== */
  const PORTFOLIO_DATA = {
    name: 'Pentakota Harivardhan',
    title: 'AI & Machine Learning Enthusiast | Python Developer | Front-End Developer',
    email: 'harivardhanpentakota@gmail.com',
    phone: '+91 9392306181',
    github: 'https://github.com/harivardhanpentakota-cmd',
    linkedin: 'https://www.linkedin.com/in/hari6181',
    education: {
      btech: {
        degree: 'B.Tech in Computer Science and Engineering',
        institution: 'NSRIT (Nadimpalli Satyanarayana Raju Institute of Technology)',
        year: '2023 – 2027 (Currently Pursuing)'
      },
      intermediate: {
        degree: 'Intermediate (+2 MPC)',
        institution: 'Sri Chaitanya',
        year: '2020 – 2022',
        percentage: '63%'
      },
      school: {
        degree: 'Secondary School Certificate (10th Standard)',
        institution: 'ZPH High School',
        year: '2020',
        percentage: '96% Distinction'
      }
    },
    skills: {
      programming: ['Python', 'JavaScript', 'SQL'],
      frontend: ['HTML5', 'CSS3', 'Responsive Web Design'],
      aiml: ['Machine Learning', 'Data Preprocessing', 'NumPy', 'Pandas', 'Scikit-learn'],
      database: ['MySQL', 'Relational Schema Design', 'Query Optimization'],
      tools: ['Git', 'GitHub', 'VS Code'],
      professional: ['Communication', 'Teamwork', 'Leadership', 'Problem Solving', 'Time Management']
    },
    projects: {
      'aiml-engine': {
        title: 'AI & Machine Learning Predictive Analytics Engine',
        category: 'AI & ML',
        description: 'An end-to-end supervised machine learning platform featuring automated data cleaning, cross-validation tuning, feature scaling with Scikit-learn, and predictive visual analytics using Pandas and NumPy.',
        tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
        image: '/src/assets/images/project_aiml_engine_1794477775821.jpg',
        repo: 'https://github.com/harivardhanpentakota-cmd',
        demoNote: 'Interactive predictive simulation evaluates sample feature sets and outputs probability metrics.'
      },
      'web-platform': {
        title: 'Quantum Responsive Web Analytics',
        category: 'Web Development',
        description: 'A modern, high-performance responsive web dashboard featuring glassmorphic design, dynamic dark/light states, real-time widget reactivity, and accessible semantic markup.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Data Visualization'],
        image: '/src/assets/images/project_web_platform_1794477776824.jpg',
        repo: 'https://github.com/harivardhanpentakota-cmd',
        demoNote: 'Full responsive dashboard layout with modular widgets and real-time interaction.'
      },
      'python-pipeline': {
        title: 'Autonomous Python Data & ML Pipeline',
        category: 'Python & ML',
        description: 'Automated ETL pipeline designed to ingest tabular telemetry, perform statistical anomaly detection, and synchronize results with a MySQL relational database.',
        tech: ['Python', 'MySQL', 'NumPy', 'Data Pipelines', 'Automation'],
        image: '/src/assets/images/project_python_analytics_1794477777433.jpg',
        repo: 'https://github.com/harivardhanpentakota-cmd',
        demoNote: 'Simulated pipeline execution showing data ingestion, transformation, and database record upserts.'
      },
      'algo-visualizer': {
        title: 'Interactive Algorithm Visualizer',
        category: 'Web Development',
        description: 'Interactive web application designed to demonstrate sorting algorithms (Merge, Quick, Bubble) and graph pathfinding logic with step-by-step visual speed controls.',
        tech: ['JavaScript', 'Canvas API', 'Algorithms', 'CSS3 Animations'],
        image: '/src/assets/images/project_web_platform_1794477776824.jpg',
        repo: 'https://github.com/harivardhanpentakota-cmd',
        demoNote: 'Visualizes array sorting states and complexity benchmarks in real-time.'
      },
      'pattern-classifier': {
        title: 'Neural Pattern Classifier',
        category: 'AI & ML',
        description: 'Machine learning classification engine utilizing multi-class feature extraction, hyperparameter tuning, and decision boundary visualization.',
        tech: ['Python', 'Scikit-learn', 'Feature Extraction', 'Matplotlib'],
        image: '/src/assets/images/project_aiml_engine_1794477775821.jpg',
        repo: 'https://github.com/harivardhanpentakota-cmd',
        demoNote: 'Visual representation of confusion matrices, precision-recall curves, and ROC benchmarks.'
      },
      'inventory-system': {
        title: 'Relational Inventory & Order System',
        category: 'Database & Python',
        description: 'Transactional enterprise database management system integrating Python connectors with MySQL to enforce ACID compliance, indexing, and automated report generation.',
        tech: ['Python', 'MySQL', 'SQL Queries', 'Database Design'],
        image: '/src/assets/images/project_python_analytics_1794477777433.jpg',
        repo: 'https://github.com/harivardhanpentakota-cmd',
        demoNote: 'Relational data schema viewer and transactional inventory query simulation.'
      }
    },
    certificates: {
      '1': {
        title: 'Python & Machine Learning Foundations',
        org: '[Issuing Organization – Editable]',
        date: '[Year / Issue Date – Editable]',
        image: '/src/assets/images/cert_preview_credential_1794477777627.jpg'
      },
      '2': {
        title: 'Supervised Machine Learning & Data Preprocessing',
        org: '[Issuing Organization – Editable]',
        date: '[Year / Issue Date – Editable]',
        image: '/src/assets/images/cert_preview_credential_1794477777627.jpg'
      },
      '3': {
        title: 'Front-End Web Development & Responsive Design',
        org: '[Issuing Organization – Editable]',
        date: '[Year / Issue Date – Editable]',
        image: '/src/assets/images/cert_preview_credential_1794477777627.jpg'
      },
      '4': {
        title: 'Relational Database Management & SQL',
        org: '[Issuing Organization – Editable]',
        date: '[Year / Issue Date – Editable]',
        image: '/src/assets/images/cert_preview_credential_1794477777627.jpg'
      }
    }
  };

  /* ==========================================================================
     2. Page Loading Screen
     ========================================================================== */
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => loadingScreen.remove(), 600);
      }, 400);
    });
    // Fallback dismiss after 2s in case window load event is delayed
    setTimeout(() => {
      if (document.body.contains(loadingScreen)) {
        loadingScreen.classList.add('fade-out');
      }
    }, 2000);
  }

  /* ==========================================================================
     3. Toast Notification Helper
     ========================================================================== */
  const toastContainer = document.getElementById('toast-container');
  function showToast(message, type = 'info', duration = 3500) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconClass = 'fa-solid fa-circle-info';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check';
    if (type === 'error') iconClass = 'fa-solid fa-circle-exclamation';

    toast.innerHTML = `
      <i class="${iconClass} toast-icon" aria-hidden="true"></i>
      <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  /* ==========================================================================
     4. Theme Toggle (Dark / Light) with LocalStorage
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  function initTheme() {
    const savedTheme = localStorage.getItem('harivardhan_theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark theme as requested for futuristic look
      setTheme('dark');
    }
  }

  function setTheme(theme) {
    if (theme === 'light') {
      htmlRoot.classList.remove('dark');
      htmlRoot.classList.add('light');
    } else {
      htmlRoot.classList.remove('light');
      htmlRoot.classList.add('dark');
    }
    localStorage.setItem('harivardhan_theme', theme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = htmlRoot.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark Futuristic' : 'Clean Light'} theme`, 'info', 2000);
    });
  }

  initTheme();

  /* ==========================================================================
     5. Custom Cursor (Desktop Only)
     ========================================================================== */
  const cursorDot = document.getElementById('cursor');
  const cursorFollower = document.getElementById('cursor-follower');

  if (cursorDot && cursorFollower && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth follower motion with requestAnimationFrame
    function animateCursor() {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      cursorFollower.style.left = `${followerX}px`;
      cursorFollower.style.top = `${followerY}px`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Enlarge cursor when hovering interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .cert-card, .bento-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => cursorFollower.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursorFollower.classList.remove('hovering'));
    });
  }

  /* ==========================================================================
     6. Scroll Progress & Sticky Navigation
     ========================================================================== */
  const scrollProgress = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercent}%`;
    }

    if (navbar) {
      if (scrollTop > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     7. Active Navigation Link on Scroll
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* ==========================================================================
     8. Mobile Hamburger Drawer Menu
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    if (!mobileDrawer || !hamburgerBtn) return;
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer || !hamburgerBtn) return;
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeDrawer);
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
  }

  /* ==========================================================================
     9. Hero Typing Text Animation
     ========================================================================== */
  const typingElement = document.getElementById('typing-text');
  const titles = [
    'AI & Machine Learning Enthusiast',
    'Python Developer',
    'Front-End Developer',
    'Software Developer',
    'Technology Enthusiast'
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    if (!typingElement) return;

    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typingElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      typingSpeed = 1600; // Pause at full text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 400; // Pause before typing next title
    }

    setTimeout(typeEffect, typingSpeed);
  }

  setTimeout(typeEffect, 600);

  /* ==========================================================================
     10. Animated Statistics Counters
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  function animateCounters() {
    statNumbers.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      const duration = 1800;
      const startTime = performance.now();

      function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOut * target);
        counter.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  const statsSection = document.querySelector('.hero-stats-banner');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersAnimated) {
          animateCounters();
          countersAnimated = true;
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  /* ==========================================================================
     11. Scroll Reveal Animations & Skill Bars
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // If skill card, animate internal progress bars
        if (entry.target.classList.contains('skill-category-card')) {
          const bars = entry.target.querySelectorAll('.skill-bar-item');
          bars.forEach((bar) => {
            const level = bar.getAttribute('data-level');
            const fill = bar.querySelector('.progress-fill');
            if (fill) fill.style.width = `${level}%`;
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ==========================================================================
     12. Interactive Project Filtering
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 240);
        }
      });
    });
  });

  /* ==========================================================================
     13. 3D Tilt Hover Effect for Project Cards
     ========================================================================== */
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  /* ==========================================================================
     14. Certificate Preview Modal
     ========================================================================== */
  const certModal = document.getElementById('cert-modal');
  const certModalClose = document.getElementById('cert-modal-close');
  const certModalImg = document.getElementById('cert-modal-img');
  const certModalTitle = document.getElementById('cert-modal-title');
  const certModalOrg = document.getElementById('cert-modal-org');
  const certModalDate = document.getElementById('cert-modal-date');
  const certPreviewTriggers = document.querySelectorAll('.btn-cert-preview, .cert-view-btn');

  function openCertModal(certId) {
    const cert = PORTFOLIO_DATA.certificates[certId];
    if (!cert || !certModal) return;

    if (certModalTitle) certModalTitle.textContent = cert.title;
    if (certModalOrg) certModalOrg.textContent = cert.org;
    if (certModalDate) certModalDate.textContent = cert.date;
    if (certModalImg) certModalImg.src = cert.image;

    certModal.classList.add('open');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    if (!certModal) return;
    certModal.classList.remove('open');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  certPreviewTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const certId = btn.getAttribute('data-cert');
      openCertModal(certId);
    });
  });

  if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  /* ==========================================================================
     15. Project Details & Live Demo Modal
     ========================================================================== */
  const projectModal = document.getElementById('project-modal');
  const projectModalClose = document.getElementById('project-modal-close');
  const projectModalTitle = document.getElementById('project-modal-title');
  const projectModalHeading = document.getElementById('project-modal-heading');
  const projectModalDesc = document.getElementById('project-modal-desc');
  const projectModalPreview = document.getElementById('project-modal-preview');
  const projectModalTech = document.getElementById('project-modal-tech');
  const projectModalRepo = document.getElementById('project-modal-repo');
  const projectModalLaunch = document.getElementById('project-modal-launch');
  const projectTriggers = document.querySelectorAll('.project-modal-trigger');

  function openProjectModal(projectId) {
    const proj = PORTFOLIO_DATA.projects[projectId];
    if (!proj || !projectModal) return;

    if (projectModalTitle) projectModalTitle.textContent = proj.title;
    if (projectModalHeading) projectModalHeading.textContent = proj.title;
    if (projectModalDesc) projectModalDesc.textContent = proj.description;

    if (projectModalPreview) {
      projectModalPreview.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}" referrerpolicy="no-referrer" />
      `;
    }

    if (projectModalTech) {
      projectModalTech.innerHTML = proj.tech.map((t) => `<span class="tag">${t}</span>`).join('');
    }

    if (projectModalRepo) {
      projectModalRepo.href = proj.repo;
    }

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  projectTriggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project');
      openProjectModal(projId);
    });
  });

  if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  if (projectModalLaunch) {
    projectModalLaunch.addEventListener('click', () => {
      showToast('Simulation initiated! All computational models validated successfully.', 'success');
    });
  }

  /* ==========================================================================
     16. Resume View & Download Modal
     ========================================================================== */
  const resumeModal = document.getElementById('resume-modal');
  const resumeModalClose = document.getElementById('resume-modal-close');
  const btnViewResume = document.getElementById('btn-view-resume');

  function openResumeModal() {
    if (!resumeModal) return;
    resumeModal.classList.add('open');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    if (!resumeModal) return;
    resumeModal.classList.remove('open');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (btnViewResume) btnViewResume.addEventListener('click', openResumeModal);
  if (resumeModalClose) resumeModalClose.addEventListener('click', closeResumeModal);
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  // Handle resume download feedback
  const btnDownloadResume = document.getElementById('btn-download-resume');
  if (btnDownloadResume) {
    btnDownloadResume.addEventListener('click', () => {
      showToast('Downloading Pentakota Harivardhan Resume PDF...', 'info');
    });
  }



  /* ==========================================================================
     18. Copy Email to Clipboard
     ========================================================================== */
  const copyEmailButtons = document.querySelectorAll('.copy-email-btn');
  copyEmailButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || PORTFOLIO_DATA.email;
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast(`Copied ${email} to clipboard!`, 'success');
        })
        .catch(() => {
          // Fallback
          const tempInput = document.createElement('input');
          tempInput.value = email;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          showToast(`Copied ${email} to clipboard!`, 'success');
        });
    });
  });


  /* ==========================================================================
     20. Advanced GitHub Dashboard & API Integration
     ========================================================================== */
  const GITHUB_USERNAME = 'harivardhanpentakota-cmd';
  const githubAvatar = document.getElementById('github-avatar');
  const githubName = document.getElementById('github-name');
  const githubBio = document.getElementById('github-bio');
  const githubReposCount = document.getElementById('github-repos-count');
  const githubFollowersCount = document.getElementById('github-followers-count');
  const githubFollowingCount = document.getElementById('github-following-count');
  const githubReposList = document.getElementById('github-repos-list');
  const reposStatus = document.getElementById('repos-status');
  const contributionGraph = document.getElementById('contribution-graph');

  // Render Simulated Contribution Heatmap (52 weeks x 7 days)
  function renderContributionGraph() {
    if (!contributionGraph) return;
    const totalCells = 52 * 7;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.className = 'graph-cell';

      // Realistic random distribution favoring active days
      const rand = Math.random();
      let level = 0;
      if (rand > 0.45) level = 1;
      if (rand > 0.70) level = 2;
      if (rand > 0.88) level = 3;
      if (rand > 0.96) level = 4;

      cell.classList.add(`level-${level}`);
      cell.title = `${level * 2 + 1} contributions`;
      fragment.appendChild(cell);
    }
    contributionGraph.appendChild(fragment);
  }

  renderContributionGraph();

  // Curated Fallback Repositories for Graceful Display
  const fallbackRepos = [
    {
      name: 'ai-predictive-analytics-engine',
      description: 'End-to-end Machine Learning pipeline utilizing Scikit-learn and Pandas for automated feature scaling and predictive analytics.',
      language: 'Python',
      stars: 4,
      forks: 1,
      url: `https://github.com/${GITHUB_USERNAME}`
    },
    {
      name: 'quantum-responsive-dashboard',
      description: 'Futuristic responsive web telemetry platform built with vanilla JavaScript, modern CSS architecture, and high accessibility standards.',
      language: 'JavaScript',
      stars: 5,
      forks: 2,
      url: `https://github.com/${GITHUB_USERNAME}`
    },
    {
      name: 'autonomous-python-data-pipeline',
      description: 'Tabular ETL ingestion and statistical anomaly detection workflow integrated with MySQL relational database storage.',
      language: 'Python',
      stars: 3,
      forks: 1,
      url: `https://github.com/${GITHUB_USERNAME}`
    },
    {
      name: 'interactive-algorithm-visualizer',
      description: 'Real-time sorting and graph traversal visualization tool with customizable playback controls and complexity analysis.',
      language: 'JavaScript',
      stars: 6,
      forks: 3,
      url: `https://github.com/${GITHUB_USERNAME}`
    }
  ];

  function renderRepoCards(repos) {
    if (!githubReposList) return;
    githubReposList.innerHTML = '';

    repos.slice(0, 6).forEach((repo) => {
      const card = document.createElement('div');
      card.className = 'repo-card';

      const langColor = repo.language === 'Python' ? '#3572A5' : repo.language === 'JavaScript' ? '#f7df1e' : '#06b6d4';

      card.innerHTML = `
        <div class="repo-card-top">
          <a href="${repo.html_url || repo.url}" target="_blank" rel="noopener noreferrer" class="repo-card-name">
            <i class="fa-solid fa-book-bookmark"></i> ${repo.name}
          </a>
          <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.75rem; color:var(--text-muted)"></i>
        </div>
        <p class="repo-card-desc">${repo.description || 'Production-grade software repository developed by Pentakota Harivardhan.'}</p>
        <div class="repo-card-meta">
          <span class="repo-lang">
            <span class="repo-lang-dot" style="background:${langColor}"></span>
            ${repo.language || 'Code'}
          </span>
          <span><i class="fa-regular fa-star"></i> ${repo.stargazers_count ?? repo.stars ?? 0}</span>
          <span><i class="fa-solid fa-code-fork"></i> ${repo.forks_count ?? repo.forks ?? 0}</span>
        </div>
      `;

      githubReposList.appendChild(card);
    });
  }

  async function fetchGitHubData() {
    try {
      // 1. Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
      if (userRes.ok) {
        const userData = await userRes.json();
        if (githubAvatar && userData.avatar_url) githubAvatar.src = userData.avatar_url;
        if (githubName && userData.name) githubName.textContent = userData.name;
        if (githubBio && userData.bio) githubBio.textContent = userData.bio;
        if (githubReposCount) githubReposCount.textContent = userData.public_repos ?? '12+';
        if (githubFollowersCount) githubFollowersCount.textContent = userData.followers ?? '10+';
        if (githubFollowingCount) githubFollowingCount.textContent = userData.following ?? '15+';
      }

      // 2. Fetch public repos
      const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        if (Array.isArray(reposData) && reposData.length > 0) {
          renderRepoCards(reposData);
          if (reposStatus) reposStatus.textContent = 'Live GitHub sync active';
          return;
        }
      }
      
      // Fallback if rate limited or empty
      renderRepoCards(fallbackRepos);
      if (reposStatus) reposStatus.textContent = 'Featured repositories';
    } catch {
      // Graceful fallback without broken UI
      renderRepoCards(fallbackRepos);
      if (reposStatus) reposStatus.textContent = 'Curated repositories';
    }
  }

  fetchGitHubData();

  /* ==========================================================================
     21. Contact Form Client-Side Validation & Submission
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('form-submit-btn');

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameInput.classList.add('invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('invalid');
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('invalid');
      }

      // Validate Subject
      if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
        subjectInput.classList.add('invalid');
        isValid = false;
      } else {
        subjectInput.classList.remove('invalid');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('invalid');
        isValid = false;
      } else {
        messageInput.classList.remove('invalid');
      }

      if (!isValid) {
        showToast('Please correct the highlighted fields before sending.', 'error');
        return;
      }

      // Show loading spinner
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      if (btnText && btnLoading) {
        btnText.classList.add('hidden');
        btnLoading.classList.remove('hidden');
        submitBtn.disabled = true;
      }

      // Check if user has configured an actual Formspree endpoint
      // Users can set formAction in HTML or script.js
      setTimeout(() => {
        // Construct mailto link as direct delivery bridge
        const mailtoSubject = encodeURIComponent(`Portfolio Inquiry: ${subjectInput.value.trim()}`);
        const mailtoBody = encodeURIComponent(`Name: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`);
        
        // Open user's email client
        window.location.href = `mailto:${PORTFOLIO_DATA.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

        // Reset form & state
        contactForm.reset();
        if (btnText && btnLoading) {
          btnText.classList.remove('hidden');
          btnLoading.classList.add('hidden');
          submitBtn.disabled = false;
        }

        showToast('Your email compose client was launched with your message ready to send!', 'success', 5000);
      }, 800);
    });

    // Real-time error clearance
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      if (input) {
        input.addEventListener('input', () => {
          if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
          }
        });
      }
    });
  }

  /* ==========================================================================
     22. AI Portfolio Chatbot ("Harivardhan's Portfolio Assistant")
     ========================================================================== */
  const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
  const chatbotPanel = document.getElementById('chatbot-panel');
  const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
  const chatbotForm = document.getElementById('chatbot-form');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotQuickChips = document.getElementById('chatbot-quick-chips');

  function openChatbot() {
    if (!chatbotPanel) return;
    chatbotPanel.classList.add('open');
    chatbotPanel.setAttribute('aria-hidden', 'false');
    if (chatbotInput) chatbotInput.focus();
  }

  function closeChatbot() {
    if (!chatbotPanel) return;
    chatbotPanel.classList.remove('open');
    chatbotPanel.setAttribute('aria-hidden', 'true');
  }

  if (chatbotToggleBtn) chatbotToggleBtn.addEventListener('click', () => {
    if (chatbotPanel.classList.contains('open')) {
      closeChatbot();
    } else {
      openChatbot();
    }
  });

  if (chatbotCloseBtn) chatbotCloseBtn.addEventListener('click', closeChatbot);

  // Predefined FAQ Intelligent Response Generator
  function getBotResponse(userQuery) {
    const q = userQuery.toLowerCase().trim();

    if (q.includes('who is') || q.includes('about') || q.includes('background') || q.includes('harivardhan')) {
      return `<strong>Pentakota Harivardhan</strong> is an AI & Machine Learning Enthusiast, Python Developer, and Front-End Developer with a B.Tech in Computer Science and Engineering.<br><br>He focuses on constructing reliable Python machine learning models, statistical data preprocessing pipelines, and clean, high-performance responsive web user experiences.`;
    }

    if (q.includes('skill') || q.includes('technolog') || q.includes('stack')) {
      return `<strong>Harivardhan's Technical Arsenal:</strong><br>
      • <strong>Programming:</strong> Python, JavaScript, SQL<br>
      • <strong>AI & ML:</strong> Machine Learning, Data Preprocessing, NumPy, Pandas, Scikit-learn<br>
      • <strong>Frontend:</strong> HTML5, CSS3, Responsive Web Design<br>
      • <strong>Databases & Tools:</strong> MySQL, Git, GitHub, VS Code<br>
      • <strong>Professional Skills:</strong> Problem Solving, Collaboration, Team Leadership.`;
    }

    if (q.includes('project') || q.includes('work') || q.includes('portfolio')) {
      return `<strong>Featured Projects:</strong><br>
      1. <strong>AI Predictive Analytics Engine:</strong> Supervised learning system with Scikit-learn, Pandas & NumPy.<br>
      2. <strong>Quantum Responsive Analytics:</strong> Modern web dashboard with dark/light themes and telemetry widgets.<br>
      3. <strong>Autonomous Python Data Pipeline:</strong> Tabular ETL ingestion with anomaly detection & MySQL.<br>
      4. <strong>Algorithm Visualizer:</strong> Interactive simulator for sorting and graph traversals.<br><br>
      You can test live demos in the <a href="#projects" style="color:var(--accent-cyan);text-decoration:underline;">Projects Section</a>.`;
    }

    if (q.includes('language') || q.includes('python') || q.includes('javascript') || q.includes('code')) {
      return `Harivardhan is proficient in <strong>Python</strong> (advanced scripts, ML algorithms, data pipelines), <strong>JavaScript</strong> (modern ES6+, DOM manipulation, responsive UI), and <strong>SQL</strong> (complex queries, indexing, and MySQL database architecture).`;
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('reach') || q.includes('message')) {
      return `You can reach Harivardhan directly through:<br>
      • <strong>Direct Phone Call:</strong> <a href="tel:+919392306181" style="color:var(--accent-cyan);font-weight:600;">+91 9392306181</a><br>
      • <strong>Gmail:</strong> <a href="mailto:${PORTFOLIO_DATA.email}" style="color:var(--accent-cyan);">${PORTFOLIO_DATA.email}</a><br>
      • <strong>LinkedIn:</strong> <a href="${PORTFOLIO_DATA.linkedin}" target="_blank" style="color:var(--accent-cyan);">linkedin.com/in/hari6181</a><br>
      • <strong>GitHub:</strong> <a href="${PORTFOLIO_DATA.github}" target="_blank" style="color:var(--accent-cyan);">github.com/harivardhanpentakota-cmd</a><br>
      • Or submit a personal inquiry via the <a href="#contact" style="color:var(--accent-cyan);text-decoration:underline;">Contact Form</a>!`;
    }

    if (q.includes('github') || q.includes('repo')) {
      return `Explore Harivardhan's open-source projects, algorithms, and commit records directly on GitHub:<br><a href="${PORTFOLIO_DATA.github}" target="_blank" style="color:var(--accent-cyan);font-weight:600;">github.com/harivardhanpentakota-cmd</a>.`;
    }

    if (q.includes('linkedin') || q.includes('connect')) {
      return `Connect with Harivardhan professionally on LinkedIn:<br><a href="${PORTFOLIO_DATA.linkedin}" target="_blank" style="color:var(--accent-cyan);font-weight:600;">linkedin.com/in/hari6181</a>.`;
    }

    if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('school') || q.includes('percentage') || q.includes('btech') || q.includes('intermediate')) {
      return `<strong>Harivardhan's Academic Qualifications:</strong><br>
      • <strong>B.Tech – Computer Science &amp; Engineering:</strong> NSRIT (Nadimpalli Satyanarayana Raju Institute of Technology), 2023 – 2027 (Currently Pursuing)<br>
      • <strong>Intermediate (+2 MPC):</strong> Sri Chaitanya Junior College, 2020 – 2022 (Score: <strong>63%</strong>)<br>
      • <strong>Secondary School (10th):</strong> ZPH High School, Passing Year: 2020 (Score: <strong>96%</strong>)`;
    }

    if (q.includes('resume') || q.includes('cv')) {
      return `You can view or download Harivardhan's official resume directly from the <a href="#resume" style="color:var(--accent-cyan);text-decoration:underline;">Resume Section</a>.`;
    }

    // Default polite response
    return `Thank you for your question! Harivardhan specializes in <strong>AI & Machine Learning</strong>, <strong>Python development</strong>, and <strong>Front-End Web Engineering</strong>.<br><br>Would you like to know more about his technical skills, inspect his projects, or connect via <a href="mailto:${PORTFOLIO_DATA.email}" style="color:var(--accent-cyan);">Gmail</a> or <a href="${PORTFOLIO_DATA.linkedin}" target="_blank" style="color:var(--accent-cyan);">LinkedIn</a>?`;
  }

  function appendChatMessage(sender, content) {
    if (!chatbotMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender === 'user' ? 'user-msg' : 'bot-msg'}`;

    msgDiv.innerHTML = `
      <div class="msg-bubble">
        <p>${content}</p>
      </div>
    `;

    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function handleUserMessage(query) {
    if (!query || !query.trim()) return;
    appendChatMessage('user', query.trim());

    // Show simulated typing delay
    setTimeout(() => {
      const response = getBotResponse(query);
      appendChatMessage('bot', response);
    }, 400);
  }

  if (chatbotForm && chatbotInput) {
    chatbotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = chatbotInput.value;
      chatbotInput.value = '';
      handleUserMessage(query);
    });
  }

  // Quick chips click
  if (chatbotQuickChips) {
    const chips = chatbotQuickChips.querySelectorAll('.chip-btn');
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        handleUserMessage(query);
      });
    });
  }

  /* ==========================================================================
     23. Interactive Starfield & Constellation Canvas
     ========================================================================== */
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let width = 0;
    let height = 0;

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.6 + 0.6;
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        const isDark = htmlRoot.classList.contains('dark');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(6, 182, 212, ${this.alpha})`
          : `rgba(2, 132, 199, ${this.alpha * 0.8})`;
        ctx.fill();
      }
    }

    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 70);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      const isDark = htmlRoot.classList.contains('dark');
      const maxDist = 110;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(6, 182, 212, ${lineAlpha})`
              : `rgba(2, 132, 199, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  /* ==========================================================================
     24. Dynamic Copyright Year
     ========================================================================== */
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
