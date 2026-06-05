import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import profilePhoto from "../assets/foto.jpeg";

const projects = [
  {
    title: "RED-G Workout",
    description: "Dashboard de alta performance focado em gestão de treinos e evolução física. Possui interface Cyberpunk com métricas circulares e controle de macros.",
    stack: ["React 19", "Vite", "Tailwind CSS 4", "Lucide React"],
    link: "https://santri-workout.vercel.app",
    github: "https://github.com/Gleysson369/santri-workout",
  },
  {
    title: "Convite Online",
    description: "Plataforma de convites digitais interativos com sistema de autenticação de usuários e gerenciamento de lista de presença em tempo real.",
    stack: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://convite-swart.vercel.app/",
    github: "https://github.com/Gleysson369",
  },
  {
    title: "Meu Gestor Financeiro WEB",
    description: "Versão WEB avançada do ecossistema Meu Gestor Financeiro, com dashboards interativos, exportação de fluxo de caixa e gestão compartilhada para casais via Firebase.",
    stack: ["React 18", "Vite", "Tailwind CSS", "Firebase", "Chart.js"],
    link: "https://meu-gestor-financeiro-web.vercel.app",
    github: "https://github.com/Gleysson369/Meu-Gestor-Financeiro-WEB",
  },
];

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </IconWrapper>
  );
}

const experiences = [
  {
    company: "Santri Soluções",
    role: "Especialista em Suporte ao Cliente",
    period: "Fevereiro de 2024 - Presente",
    description: "Suporte técnico especializado para o setor de logística. Implantação do sistema Matcom e otimização de processos de vendas, estoque e logística."
  },
  {
    company: "PostoAki",
    role: "Analista de Dados e Coordenador de Projetos",
    period: "Janeiro de 2021 - Maio de 2023",
    description: "Análise de dados em PostgreSQL, criação de dashboards no Metabase e melhorias em UX/UI de sistemas corporativos."
  },
  {
    company: "GfK",
    role: "Especialista em Suporte de TI",
    period: "Outubro de 2015 - Janeiro de 2018",
    description: "Suporte técnico a usuários e manutenção preventiva de equipamentos e sistemas."
  }
];

const skillCategories = [
  {
    title: "Front-End Development",
    icon: <LayersIcon />,
    skills: ["React", "JavaScript", "HTML5", "CSS3/Tailwind", "Flutter"]
  },
  {
    title: "Data & Back-end",
    icon: <CodeIcon />,
    skills: ["Python", "SQL", "PostgreSQL", "Metabase", "Firebase", "Spring Boot"]
  },
  {
    title: "UX & Ferramentas",
    icon: <BriefcaseIcon />,
    skills: ["Figma", "UX Research", "Git", "Vite", "Métodos Ágeis"]
  }
];

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function IconWrapper({ children, className = "w-5 h-5" }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </span>
  );
}

function ChevronDownIcon({ className = "w-7 h-7" }) {
  return (
    <IconWrapper className={className}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </IconWrapper>
  );
}

function MailIcon({ className = "w-4 h-4" }) {
  return (
    <IconWrapper className={className}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    </IconWrapper>
  );
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <IconWrapper className={className}>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full"
        aria-hidden="true"
      >
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.41-4.04-1.41-.55-1.38-1.34-1.74-1.34-1.74-1.1-.74.08-.72.08-.72 1.21.09 1.85 1.23 1.85 1.23 1.08 1.83 2.82 1.3 3.5 1 .11-.77.42-1.29.76-1.58-2.67-.3-5.47-1.32-5.47-5.9 0-1.3.47-2.37 1.23-3.2-.12-.3-.53-1.5.12-3.13 0 0 1.01-.32 3.3 1.22a11.57 11.57 0 0 1 6 0c2.29-1.54 3.3-1.22 3.3-1.22.65 1.63.24 2.83.12 3.13.77.83 1.23 1.9 1.23 3.2 0 4.59-2.8 5.59-5.48 5.89.43.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    </IconWrapper>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <IconWrapper className={className}>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full"
        aria-hidden="true"
      >
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.52 4.8 5.79V21h-4v-5.72c0-1.36-.03-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3V21h-4Z" />
      </svg>
    </IconWrapper>
  );
}

function ExternalLinkIcon({ className = "w-4 h-4" }) {
  return (
    <IconWrapper className={className}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M14 3h7v7" />
        <path d="M10 14L21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </svg>
    </IconWrapper>
  );
}

function CodeIcon({ className = "w-5 h-5" }) {
  return (
    <IconWrapper className={className}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    </IconWrapper>
  );
}

function BriefcaseIcon({ className = "w-5 h-5" }) {
  return (
    <IconWrapper className={className}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M2 13h20" />
      </svg>
    </IconWrapper>
  );
}

function UserIcon({ className = "w-6 h-6" }) {
  return (
    <IconWrapper className={className}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </IconWrapper>
  );
}

function LayersIcon({ className = "w-5 h-5" }) {
  return (
    <IconWrapper className={className}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M12 2l10 5-10 5L2 7l10-5Z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    </IconWrapper>
  );
}

function RocketIcon({ className = "w-4 h-4" }) {
  return (
    <IconWrapper className={className}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M4.5 16.5c-1.5 1-2 3.5-2 3.5s2.5-.5 3.5-2l2-2-1.5-1.5-2 2Z" />
        <path d="M14 10l-4 4" />
        <path d="M15 3c3.5 0 6 2.5 6 6 0 4-2.5 7-5.5 9.5L5.5 8.5C8 5.5 11 3 15 3Z" />
        <circle cx="15" cy="9" r="1.5" />
      </svg>
    </IconWrapper>
  );
}

function FullSection({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`min-h-screen snap-start flex items-center justify-center px-6 md:px-10 lg:px-16 ${className}`}
    >
      <motion.div
        className="w-full max-w-7xl"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function PortfolioTeslaStyle() {
  return (
    <div className="bg-[#f8fafc] text-white min-h-screen scroll-smooth">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#020617]/80 border-b border-primary-500/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">
              Dev & Data Analyst
            </p>
            <h1 className="text-lg font-semibold text-white">
              Gleysson Souza
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#inicio" className="hover:text-primary-400 transition-colors">
              Início
            </a>
            <a href="#sobre" className="hover:text-primary-400 transition-colors">
              Sobre
            </a>
            <a href="#projetos" className="hover:text-primary-400 transition-colors">
              Experiência
            </a>
            <a href="#projetos" className="hover:text-primary-400 transition-colors">
              Projetos
            </a>
            <a href="#habilidades" className="hover:text-primary-400 transition-colors">
              Habilidades
            </a>
            <a href="#contato" className="hover:text-primary-400 transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="snap-y proximity h-screen overflow-y-auto">
        <FullSection
          id="inicio"
          className="bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_28%),linear-gradient(to_bottom,#020617,#0f172a)]"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center pt-20">
            <div className="space-y-6 mt-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-[10px] md:text-sm text-primary-300 font-medium uppercase tracking-wider">
                <RocketIcon className="w-4 h-4" />
                Front-End | Data Analyst | IT Support
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
                  Transformando dados em{" "}
                  <span className="block sm:inline text-primary animate-blink-fade">
                    experiências.
                  </span>
                </h2>
                <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
                  Profissional em transição de carreira para tecnologia, unindo sólida experiência em suporte técnico e análise de dados para criar soluções digitais intuitivas e eficientes.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full px-6 h-11 text-sm bg-primary-500 hover:bg-primary-600 text-black font-semibold"
                >
                  <a href="#projetos">Ver projetos</a>
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  className="rounded-full px-6 h-11 text-sm bg-primary-500/10 hover:bg-primary-500/20 text-primary-300 border border-primary-500/20"
                >
                  <a href="#contato">Falar comigo</a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 blur-3xl bg-primary-500/10 rounded-full" />
                <Card className="relative border-primary-500/10 bg-primary-500/5 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden">
                  <CardContent className="p-8 md:p-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.5em] text-primary-200/50">
                        Destaque
                      </span>
                      <CodeIcon className="w-5 h-5 text-primary-300/70" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-primary-400 text-2xl md:text-3xl font-semibold">
                        Foco em Resolução de Problemas
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        Desenvolvimento de sistemas robustos e interfaces fluidas, sempre com o usuário final e a eficiência operacional em mente.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-black/30 border border-primary-500/10 p-4">
                        <p className="text-xs text-primary-200/50 uppercase tracking-[0.25em]">
                          Ecosistema
                        </p>
                        <p className="text-white/70 mt-2 text-lg font-medium">
                          Full Stack Java
                        </p>
                      </div>

                      <div className="rounded-2xl bg-black/30 border border-primary-500/10 p-4">
                        <p className="text-xs text-primary-200/50 uppercase tracking-[0.25em]">
                          Foco Principal
                        </p>
                        <p className="text-white/70 mt-2 text-lg font-medium">
                          Soluções SaaS
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#sobre"
              className="animate-bounce text-primary-300/60 hover:text-primary-400 transition-colors"
              aria-label="Ir para a seção Sobre"
            >
              <ChevronDownIcon className="w-7 h-7" />
            </a>
          </div>
        </FullSection>

        <FullSection id="sobre" className="bg-[#0f172a]">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold">
                Perfil Profissional
              </p>
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Soluções robustas com <span className="text-primary">foco em processos reais.</span>
              </h3>
              <div className="space-y-2 pt-4">
                <p className="text-primary-300 font-medium italic">"Minha missão é simplificar a complexidade através do código."</p>
                <div className="text-sm text-white/50 space-y-1">
                  <p>📍 Aparecida de Goiânia, GO</p>
                  <p>🎓 ADS - IPOG (2023-2026)</p>
                </div>
              </div>
            </div>

            <Card className="rounded-[2rem] border-primary-500/10 bg-primary-500/5 backdrop-blur-xl">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="shrink-0 rounded-2xl overflow-hidden border-2 border-primary-500/20 w-24 h-24 md:w-32 md:h-32 shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-500 hover:border-primary-500/50">
                    <img 
                      src={profilePhoto} 
                      alt="Gleysson Souza" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                    <div className="space-y-4 text-white/70 leading-relaxed [&_strong]:text-primary">
                      <p>
                        Com uma trajetória consolidada em <strong>suporte técnico estratégico</strong> e <strong>Customer Experience</strong>, desenvolvi uma visão analítica apurada para a resolução de problemas complexos e a otimização de fluxos operacionais.
                      </p>
                      <p>
                        Minha experiência na <strong>Santri Soluções</strong> e <strong>PostoAki</strong> foi o catalisador para minha transição ao desenvolvimento, onde hoje utilizo <strong>React</strong>, <strong>Python</strong> e <strong>SQL</strong> para converter dados em interfaces intuitivas e soluções de alto impacto para logística e gestão.
                      </p>
                      <p>
                        Meu objetivo é unir princípios de <strong>UX Design</strong> à engenharia de software para construir aplicações que não apenas atendam requisitos técnicos, mas que entreguem uma experiência de uso excepcional e valor real ao negócio.
                      </p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </FullSection>

        <FullSection id="experiencia" className="bg-[#020617]">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Carreira</p>
              <h3 className="text-3xl md:text-5xl font-semibold text-white">Trajetória Profissional</h3>
            </div>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-8 border-l border-primary/20 pb-8 last:pb-0">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_#10b981]" />
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-primary/60">{exp.period}</span>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-sm font-medium text-primary-300/80">{exp.company}</p>
                    <p className="text-white/60 leading-relaxed text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FullSection>

        <FullSection id="projetos" className="!h-auto snap-none bg-slate-950 py-32">
          <div className="space-y-40">
            {projects.map((project, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <h4 className="text-4xl font-bold tracking-tight">{project.title}</h4>
                  <p className="text-white/60 text-lg leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary-300">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button asChild className="rounded-full bg-primary text-black font-bold px-8 h-11 hover:scale-105 transition-transform border-none">
                      <a href={project.link} target="_blank" rel="noreferrer">Acessar Projeto</a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full border-primary/40 text-primary px-8 h-11 hover:bg-primary/10 transition-colors">
                      <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    </Button>
                  </div>
                </div>

                <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl group hover:border-primary/40 transition-all duration-500">
                    <div className="flex items-center gap-2 px-5 py-4 bg-[#1a1a1a] border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                      </div>
                      <div className="mx-auto bg-black/40 rounded-lg px-3 py-1 text-[10px] text-white/30 w-full max-w-[200px] text-center font-mono truncate">
                        {project.link.replace("https://", "")}
                      </div>
                    </div>
                    <div className="aspect-video bg-[#050505] overflow-hidden">
                      <iframe src={project.link} title={project.title} className="w-full h-full border-none opacity-100" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FullSection>

        <FullSection id="habilidades" className="bg-[#030712]">
          <div className="space-y-12">
            <div className="space-y-4 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Habilidades</p>
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Stack Técnica & <span className="text-primary">Certificações.</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Conhecimentos sólidos em desenvolvimento web e análise de dados, complementados por certificações em UX e metodologias modernas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => (
                <Card key={idx} className="rounded-[2rem] border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:border-primary/30 transition-all duration-500 group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="rounded-2xl bg-primary/10 p-3 text-primary group-hover:scale-110 transition-transform">
                        {category.icon}
                      </div>
                      <h4 className="text-white text-lg font-bold tracking-tight">{category.title}</h4>
                    </div>
              
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full px-4 py-1.5 border border-white/5 bg-white/5 text-[11px] font-bold uppercase tracking-wider text-white/50 group-hover:text-primary group-hover:border-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-12 border-t border-white/10 grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Educação</p>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-[0_0_10px_#10b981]" />
                    <div className="space-y-1">
                      <h5 className="font-bold text-white leading-tight">Análise e Desenvolvimento de Sistemas</h5>
                      <p className="text-xs text-primary-300/70 uppercase tracking-wider mt-1">IPOG • 2023 - 2026 (Cursando)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Instituições & Formações</p>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-primary/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shadow-[0_0_10px_#10b981]" />
                    <div className="space-y-2">
                      <h5 className="font-bold text-white leading-tight">Alura - Formação Tech & UX Design</h5>
                      <Button asChild variant="link" size="xs" className="h-auto p-0 text-primary hover:text-primary/80">
                        <a href="https://cursos.alura.com.br/user/gleysson-flavio/fullCertificate/ef83845fe1e7a03dd542e0eac4fc60e9" target="_blank" rel="noreferrer">
                          Ver Certificado Completo <ExternalLinkIcon className="ml-1 w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Certificações Udemy</p>
                <div className="space-y-3">
                  {[
                    { t: "SQL Fundamentals", d: "Jun 2022" },
                    { t: "Customer Experience Fundamentals", d: "Jan 2024" },
                    { t: "Time Management & Productivity", d: "Set 2024" },
                    { t: "High-Performance Leadership (Soft Skills)", d: "Set 2024" },
                    { t: "Customer Success Foundations", d: "Fev 2024" },
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                      <span className="font-medium text-white/80">{cert.t}</span>
                      <span className="text-white/40 font-mono italic">{cert.d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FullSection>

        <FullSection
            id="contato"
            className="bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_30%),linear-gradient(to_top,#020617,#0f172a)]"
          >
            <div className="text-center max-w-4xl mx-auto space-y-10">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-primary/50">
                  Contato
                </p>
                <h3 className="text-4xl md:text-7xl font-semibold tracking-tighter text-white">
                  Vamos tomar um <span className="text-primary">café?</span>
                </h3>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                  Estou aberto a oportunidades como <strong>Desenvolvedor Front-End Júnior</strong>, <strong>Analista de Dados</strong> ou <strong>Estágio</strong>.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                {/* WhatsApp - Destaque Principal */}
                <Button
                  asChild
                  className="rounded-full h-14 px-8 gap-3 bg-primary text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <a href="https://wa.me/5562982649977" target="_blank" rel="noreferrer">
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>

                {/* Email */}
                <Button
                  asChild
                  variant="secondary"
                  className="rounded-full h-14 px-8 gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all"
                >
                  <a href="mailto:flavio.gleysson@gmail.com">
                    <MailIcon className="w-5 h-5" />
                    Email
                  </a>
                </Button>

                {/* LinkedIn */}
                <Button
                  asChild
                  variant="secondary"
                  className="rounded-full h-14 px-8 gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all"
                >
                  <a href="https://www.linkedin.com/in/gleysson-souza" target="_blank" rel="noreferrer">
                    <LinkedinIcon className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>

                {/* GitHub */}
                <Button
                  asChild
                  variant="secondary"
                  className="rounded-full h-14 px-8 gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all"
                >
                  <a href="https://github.com/Gleysson369" target="_blank" rel="noreferrer">
                    <GithubIcon className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
              </div>

              <div className="pt-20 opacity-20 text-[10px] uppercase tracking-[1em]">
                Gleysson Souza • {new Date().getFullYear()}
              </div>
            </div>
          </FullSection>

            {/* Rodapé Final */}
          <footer className="bg-[#020617] border-t border-white/5 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

              {/* Lado Esquerdo: Logo e Nome */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
                  {/* Chamada para o seu icons.svg */}
                  <img 
                    src="/icons.svg" 
                    alt="RED-G Logo" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-tighter text-lg leading-none">
                    RED-G
                  </span>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse">                    Software Studio
                  </span>
                </div>
              </div>

              {/* Centro: Copyright */}
              <div className="text-white/30 text-sm font-medium">
                © {new Date().getFullYear()} — Desenvolvido por Gleysson Souza
              </div>

              {/* Lado Direito: Status do Sistema */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                  Disponível para Projetos
                </span>
              </div>

            </div>
          </footer>
      </main>
    </div>
  );
}