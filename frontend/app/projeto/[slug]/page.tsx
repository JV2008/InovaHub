"use client";

import { useState } from "react";
import Header from "@/components/Header";

const breadcrumbItems = [
  { label: "Início", href: "#" },
  { label: "Explorar Projetos", href: "#" },
  { label: "EcoSensors IoT", href: "#" },
];

const projectBadges = [
  { label: "MVP Funcional", color: "bg-emerald-50 text-emerald-700" },
  { label: "ODS 9 • Indústria & Infraestrutura", color: "bg-orange-50 text-orange-700" },
  { label: "Eficiência Energética 4.0", color: "bg-sky-50 text-sky-700" },
];

const tabs = [
  { label: "Visão Geral", id: "overview" },
  { label: "Stack & Repositórios", id: "stack" },
  { label: "Vagas e Necessidades", id: "vacancies", badge: 3 },
  { label: "Contato com o Criador", id: "contact" },
];

const contactChannels = [
  {
    label: "E-mail Institucional",
    value: "lucas.silveira@inovahub.usp.br",
    actionLabel: "Copiar",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
      </svg>
    ),
  },
  {
    label: "WhatsApp Comercial",
    value: "+55 (16) 99821-3342",
    actionLabel: "Conversar",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

const externalLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Lattes", href: "#" },
];

const footerLinks = {
  Navegação: ["Início", "Destaques", "Explorar Projetos", "Publicar Solução"],
  "Recursos do Hackathon": ["Repositório GitHub", "Documentação Técnica", "ODS da ONU", "Guia de Mentoria"],
  "Termos & Legal": ["Termos de Uso", "Política de Privacidade", "Propriedade Intelectual", "Código de Conduta"],
};

const project = {
  title: "EcoSensors IoT — Monitoramento Industrial Sustentável",
  description:
    "Rede descentralizada de sensores inteligentes com telemetria via LoRaWAN e IA para auditoria contínua de consumo térmico, emissões e desperdício em plantas industriais pesadas.",
  badges: projectBadges,
  media: {
    type: "image",
    alt: "Painel industrial com sensores e telas de monitoramento",
  },
  deploy: {
    title: "Deploy no Vercel",
    subtitle: "Demonstração ao Vivo",
    description:
      "Painel analítico em tempo real com streaming de telemetria MQTT simulada e telemetria de fábrica.",
    url: "ecosensors-pilot.vercel.app",
  },
  repository: {
    title: "Repositório Open-Source",
    license: "Licença MIT • Firmware & UI",
    description:
      "Firmware para ESP32-S3 em C++, pipeline de ingestão Python e dashboard Next.js com Tailwind.",
    url: "github.com/inovahub/ecosensors-iot",
    stars: 142,
  },
  overview: {
    title: "Canal Aberto de Diálogo Técnico & Parcerias ODS 9",
    description:
      "Lucas Silveira costuma responder propostas de mentoria, pilotos industriais e códigos em menos de 24 horas.",
    activeBadge: "Ativo hoje no InovaHub",
  },
  creator: {
    name: "Lucas Silveira",
    role: "Engenheiro de Computação & Pesquisador",
    location: "USP São Carlos • Lab. Automação Sustentável",
    bio: "Pesquisador focado em redes IoT com restrições energéticas e inteligência distribuída para o setor fabril. Idealizador do projeto EcoSensors, vencedor do Hackathon de Inovação Aberta e membro atuante da comunidade ODS 9.",
    tags: ["#SistemasEmbarcados", "#ODS9", "#TinyML", "#Industria4_0"],
    verified: true,
  },
  contact: {
    title: "Enviar Mensagem Direta ao Criador",
    subtitle:
      "Sua mensagem chegará diretamente à caixa de prioridade de Lucas Silveira e no chat integrado do InovaHub.",
    avgResponse: "~24h",
  },
  partnership: {
    title: "Inovação Aberta & Parcerias (ODS 17)",
    description: "Lucas aceita pilotos não-comerciais para validação científica de testes.",
  },
};

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500">
            <a href="#" className="transition-colors hover:text-slate-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </a>
            {breadcrumbItems.map((item, index) => (
              <span key={item.label} className="flex items-center gap-2">
                <span className="text-slate-300">/</span>
                {index === breadcrumbItems.length - 1 ? (
                  <span className="font-medium text-slate-900">{item.label}</span>
                ) : (
                  <a href={item.href} className="transition-colors hover:text-slate-700">
                    {item.label}
                  </a>
                )}
              </span>
            ))}
          </nav>

          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-2">
              {project.badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">{project.title}</h1>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-slate-600">{project.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
                Salvar
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Compartilhar
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Falar com Criador
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <div className="aspect-video w-full bg-slate-200" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
                      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{project.deploy.title}</h3>
                    <p className="text-xs text-slate-500">{project.deploy.subtitle}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.deploy.description}</p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-orange-600 transition-colors hover:text-orange-500"
                >
                  {project.deploy.url}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{project.repository.title}</h3>
                    <p className="text-xs text-slate-500">{project.repository.license}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.repository.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 transition-colors hover:text-orange-500"
                  >
                    {project.repository.url}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  <div className="flex items-center gap-1 text-sm font-medium text-slate-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    {project.repository.stars}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-8 border-b border-slate-200">
            <nav className="flex gap-1" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                  {tab.badge ? (
                    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">
                      {tab.badge}
                    </span>
                  ) : null}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === "overview" && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{project.overview.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.overview.description}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {project.overview.activeBadge}
                </span>
              </div>
            </div>
          )}

          {activeTab === "stack" && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Stack & Repositórios</h3>
              <p className="mt-2 text-sm text-slate-600">Conteúdo da seção de stack e repositórios.</p>
            </div>
          )}

          {activeTab === "vacancies" && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Vagas e Necessidades</h3>
              <p className="mt-2 text-sm text-slate-600">Conteúdo da seção de vagas e necessidades.</p>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Contato com o Criador</h3>
              <p className="mt-2 text-sm text-slate-600">Conteúdo da seção de contato.</p>
            </div>
          )}
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-lg font-semibold text-slate-700">
                    LS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-slate-900">{project.creator.name}</h3>
                      {project.creator.verified && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-sky-600">
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-slate-600">{project.creator.role}</p>
                    <p className="text-xs text-slate-500">{project.creator.location}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{project.creator.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.creator.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{project.contact.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{project.contact.subtitle}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    Tempo médio: {project.contact.avgResponse}
                  </span>
                </div>

                <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                        Seu Nome Completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ex.: Dra. Marina Duarte"
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                        E-mail Corporativo ou Acadêmico <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="marina@industria.com.br"
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="institution" className="block text-sm font-medium text-slate-700">
                        Sua Instituição / Empresa ou GitHub <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="institution"
                        name="institution"
                        type="text"
                        placeholder="Ex.: Ambev Tech / Polo Industrial Campin"
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-slate-700">
                        Motivo do Contato <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        <option value="">Selecione a finalidade...</option>
                        <option value="mentoria">Mentoria</option>
                        <option value="piloto">Piloto Industrial</option>
                        <option value="parceria">Parceria</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                      Mensagem para Lucas Silveira <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Olá Lucas, estou acompanhando a evolução do EcoSensors no InovaHub e temos interesse em avaliar um piloto na nossa linha de envase térmico..."
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                    <p className="mt-1 text-right text-xs text-slate-500">Mínimo 30 caracteres</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                    />
                    <label htmlFor="consent" className="text-sm text-slate-600">
                      Desejo receber uma cópia autenticada e protocolo por e-mail
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Enviar Mensagem Direta
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                  <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    Comunicação protegida e auditada pelo InovaHub
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-slate-900">Canais Diretos de Contato</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-medium text-slate-500">{channel.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{channel.value}</p>
                  <button
                    type="button"
                    onClick={channel.label.includes("E-mail") ? handleCopy : undefined}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-orange-600 transition-colors hover:text-orange-500"
                  >
                    {channel.icon}
                    {copied && channel.label.includes("E-mail") ? "Copiado!" : channel.actionLabel}
                  </button>
                </div>
              ))}
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{project.partnership.title}</h3>
                <p className="text-sm text-slate-600">{project.partnership.description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#EA580C" />
                  <path
                    d="M16 10C13.24 10 11 12.24 11 15C11 17.76 13.24 20 16 20C18.76 20 21 17.76 21 15C21 12.24 18.76 10 16 10ZM16 18C14.34 18 13 16.66 13 15C13 13.34 14.34 12 16 12C17.66 12 19 13.34 19 15C19 16.66 17.66 18 16 18Z"
                    fill="white"
                  />
                  <path d="M10 15C10 13.34 11.34 12 13 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M22 15C22 16.66 20.66 18 19 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M13 19C13 20.66 14.34 22 16 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-base font-semibold text-slate-900">InovaHub</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Plataforma colaborativa de aceleração e fomento tecnológico alinhada aos ODS 9, Indústria, Inovação e Infraestrutura,
                conectando talentos, academia e ecossistemas produtivos sustentáveis.
              </p>
              <span className="mt-4 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
                ODS 9 • INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA
              </span>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
                <ul className="mt-4 space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
            <p className="text-sm text-slate-500">© 2025 InovaHub. Plataforma de Inovação Aberta e Sustentabilidade. Todos os direitos reservados.</p>
            <span className="text-xs font-medium text-slate-500">Parceria Global SDG 17</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
