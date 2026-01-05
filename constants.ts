
import { SkillCategory, Project, Experience, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Muhammad Khalid",
  title: "DevOps / DevSecOps Engineer",
  location: "Peshawar, Pakistan",
  email: "softengr.ks@gmail.com",
  linkedin: "https://www.linkedin.com/in/engr-muhammad-khalid-675a61266/",
  tagline: "Architecting resilient, secure, and cost-optimized cloud infrastructure.",
  summary: "Highly skilled DevOps/DevSecOps Engineer with a focus on AWS architecture and automation. Expert at reducing cloud costs (30–50%) and implementing robust CI/CD pipelines. Lead Engineer for complex POS deployments and cloud migrations."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cloud & Platform",
    skills: ["AWS (App Runner, CloudFront, S3)", "EC2", "VPC", "CloudWatch", "Linux (System Admin)"]
  },
  {
    title: "Automation & CI/CD",
    skills: ["GitHub Actions", "Jenkins", "GitOps", "Bash", "Python", "Selenium"]
  },
  {
    title: "Containers & IaC",
    skills: ["Docker", "Kubernetes", "Terraform", "Ansible", "Helm"]
  },
  {
    title: "Security & Observability",
    skills: ["Prometheus", "Grafana", "HashiCorp Vault", "DevSecOps", "SAST/DAST"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "phi-pos-platform",
    title: "Phi POS - Smart Retail",
    description: "A professional, high-performance point-of-sale system designed for modern retail environments.",
    problem: "Retailers needed a secure, reliable, and fast checkout solution with modern workspace management.",
    solution: "Led the DevOps strategy for a secure deployment pipeline. Engineered a cloud-synced architecture ensuring sub-second transaction times and data integrity.",
    impact: "Successful launch of v1.0.0 with 99.9% availability and streamlined store operations for multiple vendors.",
    tags: ["Secure", "Fast", "Reliable", "Cloud-Native"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "naxi-optimization",
    title: "Naxi E-commerce Cloud",
    description: "Cloud architecture and cost optimization for a high-scale dropshipping and e-commerce platform.",
    problem: "Scaling issues during flash sales and high AWS overhead for a platform with thousands of dynamic product pages.",
    solution: "Serverless migration using AWS App Runner and aggressive edge caching with CloudFront. Automated image optimization pipelines via S3 triggers.",
    impact: "50% monthly cost reduction and 40% faster page loads for global customers.",
    tags: ["AWS", "E-commerce", "S3+CloudFront", "Scalability"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "blockchain-storage",
    title: "Web3 Decentralized Storage",
    description: "Secure file storage system using Ethereum and IPFS.",
    problem: "Centralized storage risks and lack of immutable audit trails.",
    solution: "Built smart contracts for metadata and integrated IPFS with MetaMask for secure user access.",
    impact: "Immutable storage solution with 100% decentralized data availability.",
    tags: ["Ethereum", "IPFS", "Blockchain"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Phi Horizon Tech And Services PVT LTD",
    title: "DevOps / AWS Hybrid Lead",
    location: "Peshawar, Pakistan",
    period: "Nov 2025 - Present",
    description: [
      "Designing multi-region AWS architectures for Next.js & Nest.js microservices.",
      "Achieved 50% cost optimization through strategic migration to serverless and edge services.",
      "Orchestrating POS project workflows using Jira (EPICs, Sprints, QA coordination).",
      "Standardizing Dockerization and GitHub Actions CI/CD across all development teams."
    ]
  },
  {
    company: "Freelance / Online",
    title: "Python & Automation Engineer",
    location: "Remote",
    period: "Jan 2023 - Aug 2025",
    description: [
      "Developed custom Flask APIs and automation scripts for web scraping and data processing.",
      "Implemented automated testing suites using Selenium and Python.",
      "Optimized backend logic for high-concurrency data science workloads."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "DevOps Engineer Certification",
    issuer: "Innovasta",
    date: "Nov 2025",
    description: "Intensive training in Linux System Admin, Docker, AWS infrastructure, and Web Server Virtualization."
  }
];
