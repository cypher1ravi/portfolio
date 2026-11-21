export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ravindrachaubey.vercel.app",
  name: "Ravindra Chaubey",
  shortName: "Ravindra",
  role: "Full Stack Web Developer",
  roles: ["Full Stack Developer", "React Developer", "Web Designer", "Problem Solver"],
  title: "Ravindra Chaubey — Full Stack Web Developer",
  description:
    "Ravindra Chaubey is a full stack web developer in Ahmedabad, India, who builds fast, responsive and accessible web apps with React, Node.js, Express and MongoDB.",
  keywords: [
    "Ravindra Chaubey",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "MERN Stack Developer",
    "Frontend Developer Ahmedabad",
    "Web Developer India",
    "Portfolio",
  ],
  email: "ravindra.offi@gmail.com",
  location: "Ahmedabad, Gujarat, India",
  hometown: "Singrauli, Madhya Pradesh",
  resume: "/resume/ravindra-chaubey-cv.pdf",
  photo: "/images/avatar.svg",
  socials: {
    github: "https://github.com/cypher1ravi",
    linkedin: "https://www.linkedin.com/in/ravindrachaubey",
  },
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    role: "Full Stack Web Developer",
    company: "Adsolut Media",
    location: "Ahmedabad, India",
    period: "Jun 2024 — Present",
    points: [
      "Designed and built a display ad-serving platform end to end that delivers banner ads across multiple publisher websites, handling 20M+ requests a day with peaks of 1.4M per hour.",
      "Built the Node.js services with Fastify and Express behind a Traefik reverse proxy, with a real-time data pipeline on Google Pub/Sub, BigQuery and Redis; everything runs in Docker on bare-metal servers, monitored with Grafana.",
      "Designed and built an admin and publisher analytics dashboard end to end on the MERN stack with role-based access control (RBAC), combining data from multiple APIs.",
      "Designed and built the company's own single sign-on (SSO) authentication service end to end on the MERN stack, giving users one login across the company's apps.",
      "Work with the team on code reviews, bug fixes and new features across several company websites.",
    ],
  },
  {
    role: "IT Intern",
    company: "Reliance Power",
    location: "Shasan, Singrauli, India",
    period: "Oct 2023 — May 2024",
    points: [
      "Built responsive internal web apps with HTML, CSS and JavaScript.",
      "Resolved IT and service issues quickly for staff across the site.",
      "Diagnosed and fixed hardware and software problems for end users.",
      "Gave hands-on technical support for computers, software and peripherals.",
    ],
  },
];

export const services = [
  {
    title: "Web Design",
    text: "Responsive, carefully crafted interfaces that fit your brand and work on every screen size.",
    icon: "design",
  },
  {
    title: "Web Development",
    text: "Fast, maintainable websites built with modern tooling, from first idea to production deploy.",
    icon: "code",
  },
  {
    title: "Web Apps",
    text: "Full stack applications with clean APIs, real data and interfaces people enjoy using.",
    icon: "app",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "CSS", level: 85 },
      { name: "Tailwind CSS", level: 70 },
      { name: "React.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 50 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 50 },
      { name: "MySQL", level: 55 },
    ],
  },
  {
    title: "DevOps & Deployment",
    skills: [
      { name: "Vercel / Netlify / AWS", level: 50 },
      { name: "Docker", level: 60 },
    ],
  },
];


export type Project = {
  title: string;
  tag: string;
  text: string;
  /** Public URL. Company projects have none and render without a link. */
  live?: string;
  /** Tech used, shown as chips when there is no public URL. */
  stack?: string[];
  /** One headline number, e.g. traffic handled. */
  metric?: string;
  /** Set for work done at a company, e.g. "Adsolut Media". */
  company?: string;
};

export const projects: Project[] = [
  {
    title: "Display Ad-Serving Platform",
    tag: "Ad tech · Built end to end",
    company: "Adsolut Media",
    text: "Serves banner ads across multiple publisher websites in real time. Node.js services built with Fastify and Express sit behind a Traefik reverse proxy, stream live events through Google Pub/Sub into BigQuery and use Redis for fast lookups, all running in Docker on bare-metal servers and monitored in Grafana.",
    stack: ["Node.js", "Fastify", "Express", "Traefik", "Redis", "Google Pub/Sub", "BigQuery", "Docker", "Bare metal", "Grafana"],
    metric: "20M+ requests / day · 1.4M peak / hour",
  },
  {
    title: "Admin & Publisher Analytics Dashboard",
    tag: "Analytics · Built end to end",
    company: "Adsolut Media",
    text: "A dashboard where admins and publishers track performance. Role-based access control decides who sees what, and the back end pulls and combines data from multiple APIs.",
    stack: ["MongoDB", "Express", "React", "Node.js", "RBAC", "REST APIs"],
  },
  {
    title: "Single Sign-On (SSO) Service",
    tag: "Authentication · Built end to end",
    company: "Adsolut Media",
    text: "The company's own single sign-on service. One login gives users access to the company's apps, so they don't sign in separately to each one and access is managed in one place.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Uptime Monitor & Status Page",
    tag: "Monitoring · Serverless",
    text: "Checks my sites every minute from Cloudflare's network, keeps 90 days of history and sends a Telegram alert only when a site goes down or comes back. The public status page shows live uptime and response times.",
    stack: ["Cloudflare Workers", "Cron Triggers", "D1 (SQLite)", "Hono", "TypeScript", "Telegram Bot API"],
    live: "https://uptime-monitor.ravindrachaubey.workers.dev",
  },
  {
    title: "Pulse Analytics",
    tag: "Analytics · Privacy-first",
    text: "Cookie-free web analytics running on this portfolio. A 1 KB tracker sends page views to a Cloudflare Worker that stores them without IP addresses, plus a stats API for visitors, pages, referrers and countries.",
    stack: ["Cloudflare Workers", "D1 (SQLite)", "Hono", "TypeScript", "Web Crypto"],
    live: "https://github.com/cypher1ravi/pulse-analytics",
  },
  {
    title: "Folify",
    tag: "Portfolio builder",
    text: "A tool that generates a personal portfolio website from your details, with no code required.",
    live: "https://folify-gen.vercel.app/",
  },
];
