
import { SkillCategory, Project, Experience, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Muhammad Khalid",
  title: "DevOps / DevSecOps Engineer",
  location: "Islamabad",
  email: "dev.engineerkhalid@gmail.com",
  linkedin: "https://www.linkedin.com/in/engr-muhammad-khalid-675a61266/",
  fiverr: "https://www.fiverr.com/sellers/techkhalid_",
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
    title: "Phi POS",
    description: "Smart point-of-sale for modern stores. A high-performance, secure checkout ecosystem.",
    problem: "Modern retailers required a workspace that is fast to prepare, secure by default, and reliable under heavy transaction loads.",
    solution: "Engineered a containerized deployment strategy with automated 'workspace preparation' scripts. Implemented a blue-green deployment model to ensure zero-downtime during v1.0.0 rollout.",
    impact: "Achieved sub-second transaction processing and 100% data integrity for multi-vendor retail environments.",
    tags: ["Secure", "Fast", "Reliable"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "naxi-optimization",
    title: "Naxi E-commerce Cloud",
    description: "Start E-commerce with Naxi from today. A platform providing everything needed to start selling and reach customers everywhere.",
    problem: "Scaling dropshipping operations globally while maintaining low latency and high availability for thousands of SKUs.",
    solution: "Architected the Naxi 360 ecosystem on AWS, utilizing App Runner for microservices and CloudFront for global content delivery. Automated dropshipping sync pipelines.",
    impact: "Successfully launched a multi-tenant platform with integrated dropshipping support, reaching customers everywhere with optimized performance.",
    tags: ["E-commerce", "Naxi 360", "Dropshipping", "AWS"],
    link: "https://naxi.ae",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
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
    location: "Islamabad",
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
