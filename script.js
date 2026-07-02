
/* ========================================================================= */
/* 1. VERBATIM RESUME DATA CONTEXT MATRIX                                    */
/* ========================================================================= */
const PORTFOLIO_DATA = {
  // Structured from technical skills segment
  skills: [
    "JavaScript", "Java", "HTML5", "CSS3", "React.js",
    "Node.js", "Express.js", "REST APIs", "MongoDB", "SQL", "Git", "GitHub", "VS Code"
  ],

  // Full analytics of Academic Projects
  projects: [
    {
      title: "AI-Powered Resume & Interview Assistant (Final Year Project)",
      shortDesc: "Developed a MERN-based web application for creating ATS-friendly, professional resumes.",
      longDesc: `<ul>
                        <li style="margin-bottom:8px;">Developed a MERN-based web application for creating ATS-friendly, professional resumes.</li>
                        <li style="margin-bottom:8px;">Implemented dynamic resume templates with real-time editing using React.</li>
                        <li style="margin-bottom:8px;">Integrated AI-powered suggestions for resume improvement and PDF downloads.</li>
                        <li style="margin-bottom:8px;">Integrated AI-based features to generate interview questions and provide answer evaluation with feedback.</li>
                        <li style="margin-bottom:8px;">Designed mock interview simulations to help users practice and improve communication skills.</li>
                        <li style="margin-bottom:8px;">Used MongoDB for efficient storage of user profiles and resume data.</li>
                    </ul>`,
      tags: ["MERN Stack", "React.js", "AI Integration", "MongoDB"],
      github: "https://ai-resume-interview-ass.vercel.app/"
    },
    {
      title: "Hotel Booking System (Training Project)",
      shortDesc: "Developed a full-stack Hotel Booking System using the MERN stack.",
      longDesc: `<ul>
                        <li style="margin-bottom:8px;">Developed a full-stack Hotel Booking System using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                        <li style="margin-bottom:8px;">Implemented hotel search, room availability checking, and online booking functionalities.</li>
                        <li style="margin-bottom:8px;">Designed responsive user interfaces with React for seamless hotel browsing and reservation management.</li>
                        <li style="margin-bottom:8px;">Developed secure user authentication and authorization using JWT.</li>
                        <li style="margin-bottom:8px;">Integrated booking management features, including reservation history, booking status, and cancellation options.</li>
                        <li style="margin-bottom:8px;">Used MongoDB for efficient storage and management of hotel, room, user, and booking data.</li>
                    </ul>`,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      github: "https://github.com/amitmaurya7084/Hotel_Boooking"
    }
  ],

  // Research Section
  research: [
    {
      title: "Research Paper Publication Certificate",
      publisher: "Scopus Indexed Journal (2026)]",
      summary: "Official academic credential certifying full structural publication analytics tracking complex methodologies within a globally indexed Scopus journal node[cite: 2].",
      link: "https://publisherjee.com/volume-11-issue-4-2026/"
    }
  ],

  // Complete breakdown of experience logs and credentials list
  credentials: [
    {
      title: "MERN Stack Training",
      provider: "Analyze Infotech (Oct 2025)",
      type: "training",
      details: "Building responsive and scalable web applications with MERN and focus on RESTful API integration and database management.",
      link: "./assets/analyseInfo.jpeg"
    },
    {
      title: "Java Development with AI - Trainee",
      provider: "HCL Tech (Mar 2025)",
      type: "training",
      details: "The learning objective of this program is to Develop Application, by writing, debugging and executing the code, specialization in Java Suite.",
      link: "./assets/HCL_CERTI.jpg"
    },

    {
      title: "Frontend Development Training",
      provider: "Digital Navik",
      type: "certification",
      details: "Validation validating expertise across responsive layout builds, semantic web layers, and UI processing rules.",
      link: "./assets/HCL_CERTI.jpg"
    },
    {
      title: "JavaScript for Beginners Certification",
      provider: "Simplilearn",
      type: "certification",
      details: "Core validation covering logical expressions, functional arrays, scope tracking, and basic DOM trees.",
      link: "./assets/JS_simplilearn.jpg"
    },

  ],

  // Verbatim Education Logs
  education: [
    {
      degree: "B. Tech / Information Technology",
      specialization: "BIET, Lucknow",
      timeline: "June '17 - June '26",
      score: "CGPA: 7.7"
    },
    {
      degree: "MD Inter College, Varanasi (12th)",
      specialization: "Intermediate ",
      timeline: "Class of 2022",
      score: "Percentage: 69.33%"
    },
    {
      degree: "MD Inter College, Varanasi (10th)",
      specialization: "High School",
      timeline: "Class of 2020",
      score: "Percentage: 79.66%"
    }
  ],

  // Verbatim Achievements List
  achievements: [
    "Acquired Research Paper Publication Certificate indexed inside Scopus Indexed Journal data layers (2026).",
    "Successfully executed full corporate MERN stack application and API management pipelines at Analyze Infotech.",
    "Completed algorithmic compilation and code execution sequences inside industrial Java AI programs at HCL Tech."
  ]
};

/* ========================================================================= */
/* 2. AUTOMATED ARCHITECTURAL INJECTION                                      */
/* ========================================================================= */

// Inject Skills list
const skillsContainer = document.getElementById('skills-container');
PORTFOLIO_DATA.skills.forEach(skill => {
  skillsContainer.innerHTML += `<span class="skill-pill">${skill}</span>`;
});

// Inject Projects Grid
const projectsContainer = document.getElementById('projects-container');
PORTFOLIO_DATA.projects.forEach((proj, idx) => {
  projectsContainer.innerHTML += `
                <div class="glass-card" onclick="viewProjectDetails(${idx})">
                    <div style="margin-bottom: 12px;">
                        ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                    <h3 style="margin-bottom:10px; font-size:18px;">${proj.title}</h3>
                    <p style="color: var(--text-secondary); font-size:13.5px;">${proj.shortDesc}</p>
                    <p style="color: #38bdf8; font-size:12px; margin-top:15px; font-weight:600;">Click to view full resume bullet analysis &rarr;</p>
                </div>`;
});

// Inject Publications
const researchContainer = document.getElementById('research-container');
PORTFOLIO_DATA.research.forEach(paper => {
  researchContainer.innerHTML += `
                <div class="glass-card" style="cursor:default;">
                    <h3 style="font-size:18px; margin-bottom:8px;">${paper.title}</h3>
                    <p style="color: #818cf8; font-size:13px; margin-bottom:12px;">${paper.publisher}</p>
                    <p style="color: var(--text-secondary); font-size:14px; margin-bottom:15px;">${paper.summary}</p>
                    <a href="${paper.link}" target="_blank" class="link" style="color:#38bdf8; text-decoration:none; font-size:14px; font-weight:700;">Verify Repository Hub &rarr;</a>
                </div>`;
});

// Inject Experiences & Certifications
const certsContainer = document.getElementById('certs-container');
PORTFOLIO_DATA.credentials.forEach(cred => {
  certsContainer.innerHTML += `
                <div class="glass-card cert-item ${cred.type}" style="cursor:default;">
                    <span class="tech-tag" style="background:rgba(129,140,248,0.15); color:#818cf8;">${cred.type}</span>
                    <h3 style="font-size:17px; margin-top:12px; margin-bottom:6px;">${cred.title}</h3>
                    <p style="color: var(--text-secondary); font-size:13px; margin-bottom:10px;"><strong>Entity:</strong> ${cred.provider}</p>
                    <p style="color: var(--text-secondary); font-size:13.5px;">${cred.details}</p>
                    <a href="${cred.link}" target="_blank" class="link" style="color:#38bdf8; text-decoration:none; font-size:25px; ">Download Certificate &rarr;</a>
                </div>`;
});

// Inject Education Matrix
const eduContainer = document.getElementById('education-container');
PORTFOLIO_DATA.education.forEach(edu => {
  eduContainer.innerHTML += `
                <div class="timeline-node">
                    <h3 style="font-size:18px;">${edu.degree}</h3>
                    <p style="color:#38bdf8; font-size:14px; margin:4px 0;">${edu.specialization}</p>
                    <p style="color: var(--text-secondary); font-size:13px;">Timeline: ${edu.timeline} | <strong>${edu.score}</strong></p>
                </div>`;
});

// Inject Achievements metrics
const achContainer = document.getElementById('achievements-container');
let achHtml = '<ul style="padding-left:15px; color:var(--text-secondary); font-size:14px; line-height:1.7;">';
PORTFOLIO_DATA.achievements.forEach(ach => {
  achHtml += `<li style="margin-bottom:12px;">${ach}</li>`;
});
achHtml += '</ul>';
achContainer.innerHTML = achHtml;

/* ========================================================================= */
/* 3. CONTEXT ARCHITECTURE INTERACTION LOGIC                                  */
/* ========================================================================= */

// Typing layout parameters
const strings = ["JavaScript.", "React.js Interfaces.", "Node.js Server.", "Express.js", "MongoDB Datastores."];
let strIdx = 0, charIdx = 0, isDeleting = false;
function type() {
  const current = strings[strIdx];
  const textEl = document.getElementById("typing-text");
  if (isDeleting) {
    textEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
  } else {
    textEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
  }
  let typeSpeed = isDeleting ? 40 : 80;
  if (!isDeleting && charIdx === current.length) {
    typeSpeed = 2000; isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false; strIdx = (strIdx + 1) % strings.length;
    typeSpeed = 500;
  }
  setTimeout(type, typeSpeed);
}
type();

// Project analysis model pop-ups
function viewProjectDetails(index) {
  const proj = PORTFOLIO_DATA.projects[index];
  document.getElementById('modal-title').innerText = proj.title;
  document.getElementById('modal-meta').innerText = `Tech Stack Blueprint: ${proj.tags.join(', ')}`;
  document.getElementById('modal-desc').innerHTML = proj.longDesc;
  document.getElementById('modal-extra').innerHTML = `<a href="${proj.github}" target="_blank" class="cta-btn" style="padding:10px 20px; font-size:13px; text-decoration:none;">Live Project &rarr;</a>`;
  document.getElementById('details-modal').classList.add('active');
}

function closeModal() {
  document.getElementById('details-modal').classList.remove('active');
}

// Real-time tab configuration engine
function filterCerts(category) {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const cards = document.querySelectorAll('.cert-item');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

function openResume() {
  alert("Amit resume_2.pdf");
}
/* ========================================================================= */
/* 4. MOBILE NAVBAR HAMBURGER LOGIC                                          */
/* ========================================================================= */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Toggle menu jab hamburger par click ho
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('toggle');
});

// Menu close kar do jab koi link click ho (Smooth UX)
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('toggle');
  });
});
