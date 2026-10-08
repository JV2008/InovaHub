"use client";

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
  { label: "Início", href: "#" },
  { label: "Destaques", href: "#" },
  { label: "Explorar", href: "#" },
  { label: "Publicar Projeto", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            {logoIcon}
            <span className="text-lg font-semibold text-slate-900">InovaHub</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block"
          >
            Entrar / Cadastrar
          </a>
          <button
            type="button"
            className="hidden rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 sm:block"
          >
            Publicar Projeto
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-sm font-semibold text-white"
            aria-label="Menu do usuário"
          >
            U
          </button>
        </div>
      </div>
    </header>
  );
}
