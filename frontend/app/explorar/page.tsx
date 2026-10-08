"use client";

import { useState } from "react";
import Header from "@/components/Header";

const breadcrumbItems = [
  { label: "Início", href: "#" },
  { label: "Explorar Projetos", href: "#" },
];

const odsOptions = [
  "Indústria & Inovação",
  "Educação de Qualidade",
  "Trabalho Decente & Cresc.",
  "Cidades Sustentáveis",
  "Consumo Responsável",
  "Parcerias e Conexões",
];

const maturityOptions = [
  "Ideação & Conceito",
  "Protótipo / Wireframe",
  "MVP Funcional",
  "Validação de Mercado",
  "Em Escala / Rollout",
];

const profileOptions = [
  "Frontend (React / Vue)",
  "Backend & Cloud (Node/Go)",
  "Cientista de Dados / IA",
  "UI/UX Designer",
  "Mentoria Técnica Especializada",
  "Parceria Corporativa / Fundo",
];

const activeFilters = [
  { label: "ODS 9 • Indústria & Inovação", color: "bg-orange-50 text-orange-700" },
  { label: "MVP Funcional", color: "bg-blue-50 text-blue-700" },
];

const projects = [
  {
    title: "EdgeSensor: Monitoramento Industrial com IoT",
    description:
      "Rede de sensores de baixo custo com microcontroladores ESP32 para telemetria e monitoramento ambiental.",
    image: "/placeholder-edge.jpg",
    badges: [
      { label: "ODS 9", color: "bg-orange-50 text-orange-700" },
      { label: "MVP Funcional", color: "bg-blue-50 text-blue-700" },
    ],
    technologies: ["C++/FreeRTOS", "Python", "MQTT"],
    vacancies: ["Backend Go (Urgente)", "Designer UI/UX"],
    collaborators: 14,
    creator: { name: "Dra. Helena Vaz", time: "há 2 dias" },
  },
  {
    title: "STEM Bridge: Laboratórios Virtuais",
    description:
      "Plataforma aberta que digitaliza bancadas de experimentos físicos para ensino remoto e híbrido.",
    image: "/placeholder-stem.jpg",
    badges: [
      { label: "ODS 4", color: "bg-sky-50 text-sky-700" },
      { label: "Ideação", color: "bg-emerald-50 text-emerald-700" },
    ],
    technologies: ["React", "Node.js", "WebRTC"],
    vacancies: ["Frontend React", "Mentoria Pedagógica"],
    collaborators: 6,
    creator: { name: "Lucas Andrade", time: "há 4 dias" },
  },
  {
    title: "LogiVerde: Otimização de Rotas Sustentáveis",
    description:
      "Algoritmo genético para cálculo de rotas e balanceamento de recarga em frotas urbanas.",
    image: "/placeholder-logi.jpg",
    badges: [
      { label: "ODS 9", color: "bg-orange-50 text-orange-700" },
      { label: "Validação", color: "bg-emerald-50 text-emerald-700" },
    ],
    technologies: ["TensorFlow", "FastAPI", "PostgreSQL"],
    vacancies: ["Cientista de Dados (Urgente)", "Dev DevOps / Docker"],
    collaborators: 21,
    creator: { name: "Carlos Meneses", time: "há 1 dia" },
  },
  {
    title: "OpenPatents: P&D Aberto",
    description:
      "Hub unificado de transferência tecnológica conectando pesquisadores a oportunidades de patenteamento.",
    image: "/placeholder-patents.jpg",
    badges: [
      { label: "ODS 17", color: "bg-indigo-50 text-indigo-700" },
      { label: "MVP Funcional", color: "bg-blue-50 text-blue-700" },
    ],
    technologies: ["Next.js 14", "Tailwind", "Supabase"],
    vacancies: ["Conexão com Empresas", "Especialista Jurídico PI"],
    collaborators: 9,
    creator: { name: "Prof. Beatriz Lins", time: "há 3 dias" },
  },
  {
    title: "CooperativaTech: Micro-SaaS para Reciclagem",
    description:
      "Micro-SaaS para cooperativas de reciclagem garantirem remuneração justa e rastreabilidade.",
    image: "/placeholder-coop.jpg",
    badges: [
      { label: "ODS 8", color: "bg-amber-50 text-amber-700" },
      { label: "Protótipo", color: "bg-blue-50 text-blue-700" },
    ],
    technologies: ["Flutter", "NestJS", "PIX API"],
    vacancies: ["Desenvolvedor Mobile", "Designer UI/UX"],
    collaborators: 8,
    creator: { name: "Tiago Pataxó", time: "há 5 dias" },
  },
  {
    title: "MicroGrid AI: Inteligência Energética Distribuída",
    description:
      "Gestão descentralizada de microrredes de energia solar com previsão de carga e balanceamento inteligente.",
    image: "/placeholder-micro.jpg",
    badges: [
      { label: "ODS 9", color: "bg-orange-50 text-orange-700" },
      { label: "Em Escala", color: "bg-emerald-50 text-emerald-700" },
    ],
    technologies: ["Rust", "PyTorch", "TimescaleDB"],
    vacancies: ["Rust Embedded Dev (Urgente)", "Mentoria em Regulamentação Elétrica"],
    collaborators: 38,
    creator: { name: "Engª Mariana Prado", time: "há 6 horas" },
  },
];

export default function ExplorarPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Mais recentes");
  const [page, setPage] = useState(1);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
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

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Buscar por título, problema, tecnologia (ex: IoT, React, Python) ou ODS..."
                className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-sm font-medium text-slate-600">
                Ordenar por:
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-8 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              >
                <option>Mais recentes</option>
                <option>Mais relevantes</option>
                <option>Mais colaboradores</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {activeFilters.map((filter) => (
              <span
                key={filter.label}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${filter.color}`}
              >
                {filter.label}
                <button type="button" className="rounded-full p-0.5 transition-colors hover:bg-black/5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </span>
            ))}
            <button type="button" className="text-xs font-medium text-slate-600 underline underline-offset-2 hover:text-slate-900">
              Limpar todos os filtros
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-col gap-6 lg:flex-row">
            <aside className="w-full lg:w-64 xl:w-72">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-900">Filtros</h2>
                  <button type="button" className="text-xs font-medium text-slate-500 hover:text-slate-900">
                    Resetar
                  </button>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-semibold text-slate-900">Objetivo ONU (ODS)</h3>
                    <span className="text-xs text-slate-500">6 metas</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {odsOptions.map((option) => (
                      <label key={option} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={option === "Indústria & Inovação"}
                          className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <h3 className="text-xs font-semibold text-slate-900">Estágio de Maturidade</h3>
                  <div className="mt-3 space-y-2">
                    {maturityOptions.map((option) => (
                      <label key={option} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={option === "MVP Funcional"}
                          className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <h3 className="text-xs font-semibold text-slate-900">Oportunidades & Perfis</h3>
                  <div className="mt-3 space-y-2">
                    {profileOptions.map((option) => (
                      <label key={option} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="M7 16l4-8 4 5 4-9" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-900">Taxa de Conexão</p>
                      <p className="text-xs text-slate-600">84% dos projetos recebem apoio em até 14 dias.</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-emerald-700">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                Exibindo {projects.length} projetos ativos na rede
              </div>

              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <article key={project.title} className="flex flex-col rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md">
                    <div className="relative h-44 w-full overflow-hidden rounded-t-xl bg-slate-200">
                      <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                        {project.badges.map((badge) => (
                          <span
                            key={badge.label}
                            className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${badge.color}`}
                          >
                            {badge.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="line-clamp-1 text-sm font-semibold text-slate-900">{project.title}</h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">{project.description}</p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3 space-y-2">
                        <p className="text-xs font-medium text-slate-700">Vagas abertas:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.vacancies.map((vacancy) => (
                            <span
                              key={vacancy}
                              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                                vacancy.includes("Urgente")
                                  ? "bg-red-50 text-red-700"
                                  : "bg-blue-50 text-blue-700"
                              }`}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                              </svg>
                              {vacancy}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                              {project.creator.name
                                .split(" ")
                                .map((name) => name[0])
                                .slice(0, 2)
                                .join("")}
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-900">{project.creator.name}</p>
                              <p className="text-xs text-slate-500">{project.creator.time}</p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M23 21v-2a4 4 0 00-3-3.87" />
                              <path d="M16 3.13a4 4 0 010 7.75" />
                            </svg>
                            {project.collaborators}
                          </span>
                        </div>
                        <a
                          href="#"
                          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-orange-600 transition-colors hover:text-orange-500"
                        >
                          Ver Detalhes
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <nav aria-label="Paginação" className="mt-8 flex items-center justify-center gap-2">
                <button
                  type="button"
                  disabled={page === 1}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-600 transition-colors hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                {[1, 2, 3, 4].map((pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setPage(pageNumber)}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                      page === pageNumber
                        ? "bg-orange-600 text-white"
                        : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={page === 4}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-600 transition-colors hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
              <p className="mt-3 text-center text-sm text-slate-500">Página {page} de 4 (24 projetos totais)</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
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
                Plataforma colaborativa alinhada ao ODS 9 que transforma projetos e pesquisas isoladas em oportunidades reais
                de inovação e desenvolvimento conjunto entre empresas, desenvolvedores e universidades.
              </p>
              <span className="mt-4 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
                Compromisso com o ODS 9: Indústria, Inovação e Infraestrutura (ONU)
              </span>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">Links Rápidos</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    Explorar Projetos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    Mural de Vagas e Oportunidades
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    Publicar Ideia ou Desafio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    Indicadores ONU & Metas ODS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    Termos de Uso & Privacidade
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">Comunidade & Código</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    Repositório no GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    Documentação Hackathon
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:text-right">
              <p className="text-xs text-slate-500">ODS 9 • ODS 4 • ODS 8 • ODS 17</p>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <p className="text-center text-xs text-slate-500">© 2025 InovaHub Hackathon Team. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
