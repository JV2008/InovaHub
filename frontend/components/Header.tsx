"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const logoIcon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#EA580C" />
    <path
      d="M16 10C13.24 10 11 12.24 11 15C11 17.76 13.24 20 16 20C18.76 20 21 17.76 21 15C21 12.24 18.76 10 16 10ZM16 18C14.34 18 13 16.66 13 15C13 13.34 14.34 12 16 12C17.66 12 19 13.34 19 15C19 16.66 17.66 18 16 18Z"
      fill="white"
    />
    <path
      d="M10 15C10 13.34 11.34 12 13 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M22 15C22 16.66 20.66 18 19 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13 19C13 20.66 14.34 22 16 22"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Explorar", href: "/explorar" },
  { label: "Destaques", href: "/explorar#projetos" },
];

export default function Header() {
  const [isPublishOpen, setIsPublishOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [publishNotice, setPublishNotice] = useState(false);

  const handlePublish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setIsPublishOpen(false);
    setPublishNotice(true);
    window.setTimeout(() => setPublishNotice(false), 3500);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              {logoIcon}
              <span className="text-lg font-semibold text-slate-900">InovaHub</span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setIsPublishOpen(true)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                Publicar Projeto
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block"
            >
              Entrar / Cadastrar
            </Link>
            <button
              type="button"
              onClick={() => setIsPublishOpen(true)}
              className="hidden rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 sm:block"
            >
              Publicar Projeto
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsUserMenuOpen((open) => !open)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-sm font-semibold text-white"
                aria-label="Menu do usuário"
                aria-expanded={isUserMenuOpen}
              >
                U
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 top-11 z-50 w-48 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
                  <Link
                    href="/"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Entrar ou cadastrar
                  </Link>
                  <Link
                    href="/explorar"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Explorar projetos
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {publishNotice && (
        <div role="status" aria-live="polite" className="fixed right-4 top-20 z-50 rounded-lg border border-emerald-200 bg-white px-4 py-3 text-sm text-emerald-800 shadow-lg">
          Formulário concluído nesta demonstração local; o projeto não foi enviado a um servidor.
        </div>
      )}

      {isPublishOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsPublishOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="publish-project-title"
            className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="publish-project-title" className="text-xl font-semibold text-slate-900">
                  Publicar projeto
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Preencha os dados para visualizar o fluxo de publicação.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsPublishOpen(false)}
                className="rounded-md px-2 py-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Fechar formulário"
              >
                ×
              </button>
            </div>
            <form className="mt-5 space-y-4" onSubmit={handlePublish}>
              <div>
                <label htmlFor="publish-title" className="block text-sm font-medium text-slate-700">
                  Nome do projeto
                </label>
                <input
                  id="publish-title"
                  name="title"
                  required
                  className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="publish-description" className="block text-sm font-medium text-slate-700">
                  Descrição
                </label>
                <textarea
                  id="publish-description"
                  name="description"
                  required
                  rows={4}
                  className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
              >
                Publicar
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
