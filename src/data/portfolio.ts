import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Phone,
  ServerCog,
  Trophy,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const titles = [
  "Software Developer",
  "Full Stack Engineer",
  "Backend Engineer",
  "Competitive Programmer",
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Ayushraj6202", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayush-raj-469737246/", icon: Linkedin },
  { label: "Email", href: "mailto:ayushrajsde@gmail.com", icon: Mail },
];

export const experience = [
  {
    company: "Nucleus Software",
    role: "Software Developer",
    duration: "Jul 2025 - Present",
    tech: ["Java", "Quarkus", "React", "TypeScript", "Redux", "Tailwind CSS"],
    points: [
      "Engineered an internal AI-powered coding platform by extending Continue.dev and building a centralized Quarkus orchestration service integrating 5+ self-hosted LLMs and MCP servers.",
      "Simplified developer onboarding by abstracting model and tool configurations, enabling plug-and-play adoption for 500+ developers across the organization.",
      "Developed telemetry infrastructure to monitor enterprise AI adoption, supporting 80K+ lines of AI-assisted code generated daily.",
      "Designed a host microfrontend enabling dynamic loading of 150+ microfrontends based on user roles and service availability.",
    ],
  },
];

export const projects = [
  {
    name: "Khetalpura Dairy",
    duration: "Sept 2024 - Oct 2024",
    description: "Full-stack commerce and operations platform for dairy product workflows.",
    details: [
      "JWT authentication with seller and user flows.",
      "Product and order management with Redux state orchestration.",
      "Role-based access control across operational surfaces.",
    ],
    stack: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Ayushraj6202/Dairy",
    live: "https://khetalpura-dairy.netlify.app/",
  },
  {
    name: "Codeforces Analytics",
    duration: "2024",
    description: "Competitive programming analytics console powered by the Codeforces API.",
    details: [
      "Contest statistics, submission insights, and rating visualization.",
      "Interactive rating graphs for performance pattern discovery.",
      "Tag-based analytics for topic-level strength mapping.",
    ],
    stack: ["React", "Codeforces API", "Charts", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Ayushraj6202/CF-ANALYSER",
    live: "https://codeforces-stats.netlify.app/",
  },
];

export const skillGroups = [
  { name: "Languages", icon: Code2, skills: ["C++", "C", "Java", "JavaScript", "TypeScript", "Python"] },
  { name: "Frontend", icon: Globe2, skills: ["React", "Redux", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", icon: ServerCog, skills: ["Java", "Quarkus", "Express.js", "REST APIs", "Microservices"] },
  { name: "Database", icon: Database, skills: ["MongoDB", "MySQL"] },
  { name: "Tools", icon: BriefcaseBusiness, skills: ["Git", "Postman", "Docker", "MCP", "LLM Integrations"] },
  { name: "Other", icon: Award, skills: ["Competitive Programming", "DSA", "System Design"] },
];

export const achievements = [
  { label: "Codeforces Expert", value: "1643", detail: "Max rating", icon: Trophy },
  { label: "LeetCode Knight", value: "5.36", detail: "Top percentile", suffix: "%", icon: Award },
  { label: "CodeChef 4 Star", value: "1839", detail: "Max rating", icon: Trophy },
  { label: "Meta Hacker Cup", value: "R2", detail: "Round achievements", icon: Award },
  { label: "Codeforces Round 957 Div 3", value: "213", detail: "Global rank", icon: Trophy },
  { label: "CodeChef Starter 97", value: "74", detail: "Among 22,297 participants", icon: Trophy },
];

export const codingProfiles = [
  {
    platform: "Codeforces",
    rating: "Expert · 1643",
    summary: "Problem solving under contest pressure with strong algorithmic fundamentals.",
    href: "https://codeforces.com/profile/ayush_raj14",
  },
  {
    platform: "LeetCode",
    rating: "Knight · Top 5.36%",
    summary: "Interview-grade DSA practice across arrays, graphs, DP, and systems thinking.",
    href: "https://leetcode.com/u/ayush_raj_14/",
  },
  {
    platform: "CodeChef",
    rating: "4 Star · 1839",
    summary: "Consistent competitive programming performance across rated contests.",
    href: "https://www.codechef.com/users/ayush_raj14",
  },
  {
    platform: "GitHub",
    rating: "Engineering archive",
    summary: "Projects spanning full-stack products, analytics tooling, and backend systems.",
    href: "https://github.com/Ayushraj6202",
  },
];

export const contactItems = [
  { label: "LinkedIn", value: "Connect professionally", href: "https://www.linkedin.com/in/ayush-raj-469737246/", icon: Linkedin },
  { label: "Email", value: "ayushrajsde@gmail.com", href: "mailto:ayushrajsde@gmail.com", icon: Mail, copy: "ayushrajsde@gmail.com" },
  { label: "Phone", value: "+91 70044 34221", href: "tel:+917004434221", icon: Phone, copy: "+917004434221" },
];

export const resumeUrl = "https://drive.google.com/file/d/131POaFCC74qA8uVDnU3s2PdUo0sWrTpY/view";
