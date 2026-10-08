# Separação dos Cards por Categoria — InovaHub

Este documento organiza os **30 cards do projeto InovaHub** (extraídos de [kb/cards.md](file:///c:/Users/joaov/Desktop/InovaHub/kb/cards.md)) divididos nas 5 áreas operacionais essenciais do time:

1. **Docs** (Documentação, Pesquisa & Metodologia)
2. **Frontend Funcionais** (Componentes, Telas, Regras de Negócio e Requisitos Funcionais)
3. **Não Funcionais** (Design System, Usabilidade, Responsividade, Acessibilidade e Performance)
4. **Infra ou Arquitetura** (Setup, Boilerplate, Persistência/Estado, CI/CD e Deploy)
5. **Testes** (Validação de Formulários, Compatibilidade Cross-Browser e Homologação Final)

---

## Quadro Geral de Distribuição

| Categoria | Qtd | Cards Correspondentes | Responsável / Papel Típico |
| :--- | :---: | :--- | :--- |
| 📄 **Docs** | 5 | `#01`, `#02`, `#03`, `#04`, `#29` | Planejamento, Produto & Documentação |
| 💻 **Frontend Funcionais** | 14 | `#07`, `#08`, `#10`, `#11`, `#12`, `#13`, `#14`, `#15`, `#16`, `#17`, `#18`, `#19`, `#20`, `#21` | Devs Frontend (Features & Telas) |
| ⚡ **Não Funcionais** | 4 | `#06`, `#23`, `#25`, `#26` | UI/UX Designer, Frontend & Otimização |
| 🏗️ **Infra ou Arquitetura** | 4 | `#05`, `#09`, `#22`, `#28` | Tech Lead, DevOps & Arquitetura Frontend |
| 🧪 **Testes & QA** | 3 | `#24`, `#27`, `#30` | QA, Validação & Apresentação |
| **Total** | **30** | — | — |

---

## 1. 📄 Docs (Documentação & Planejamento)

Cards focados no embasamento teórico, alinhamento ao ODS 9, especificação de requisitos e entrega documental do Hackathon.

### Card #01 — Benchmarking e Análise de Plataformas Concorrentes
- **Título**: `docs: Benchmarking e Análise de Plataformas Concorrentes`
- **Labels**: `documentation`, `research`, `planning`
- **Prioridade**: `Alta`
- **Descrição**: Realizar o benchmarking e mapeamento de pelo menos 5 plataformas correlatas (ex: GitHub, Product Hunt, Devpost, OpenIDEO, Instructables) para identificar diferenciais competitivos e orientar o posicionamento do InovaHub no Hackathon.
- **Critérios de Aceitação**:
  - [ ] Mapear funcionalidades existentes em cada plataforma de referência.
  - [ ] Identificar pontos fortes e limitações das soluções de mercado.
  - [ ] Definir a proposta única de valor do InovaHub (foco no ODS 9 e ponte projeto + necessidade + interesse).
  - [ ] Registrar os resultados e diferenciais na documentação do projeto.

### Card #02 — Mapeamento de Personas e Proposta de Valor
- **Título**: `docs: Mapeamento de Personas e Proposta de Valor`
- **Labels**: `ux`, `documentation`, `planning`
- **Prioridade**: `Alta`
- **Descrição**: Estruturar as personas do público-alvo (criadores de projetos, voluntários/colaboradores técnicos e empresas/instituições parceiras) detalhando dores, necessidades e a proposta de valor específica para cada perfil.
- **Critérios de Aceitação**:
  - [ ] Detalhar o perfil dos criadores de projetos (estudantes, pesquisadores e startups).
  - [ ] Detalhar o perfil dos colaboradores (devs, designers e mentores).
  - [ ] Mapear o perfil de empresas e instituições interessadas em inovação.
  - [ ] Sintetizar o Canvas da Proposta de Valor vinculada ao ODS 9.

### Card #03 — Especificação de Requisitos Funcionais e Não Funcionais
- **Título**: `docs: Especificação de Requisitos Funcionais e Não Funcionais`
- **Labels**: `documentation`, `requirements`
- **Prioridade**: `Alta`
- **Descrição**: Documentar e validar a lista completa de Requisitos Funcionais (RF01 a RF10) e Não Funcionais (RNF01 a RNF10) alinhados às regras do Hackathon e escopo do MVP.
- **Critérios de Aceitação**:
  - [ ] Revisar requisitos de cadastro, pesquisa, filtros e detalhes de projetos.
  - [ ] Mapear requisitos de demonstração de interesse e dashboard.
  - [ ] Definir metas mensuráveis para requisitos não funcionais (tempo de resposta, compatibilidade e acessibilidade).
  - [ ] Validar alinhamento com a equipe e atualizar `docs/Requisitos Funcionais.md`.

### Card #04 — Elaboração das Histórias de Usuário e Critérios de Aceitação
- **Título**: `docs: Elaboração das Histórias de Usuário e Critérios de Aceitação`
- **Labels**: `documentation`, `agile`
- **Prioridade**: `Alta`
- **Descrição**: Criar e refinar as Histórias de Usuário (User Stories) para todas as jornadas principais da plataforma, definindo critérios de aceitação objetivos no padrão Gherkin/Checklist.
- **Critérios de Aceitação**:
  - [ ] Estruturar as HUs do visitante/explorador (descoberta, busca e filtro).
  - [ ] Estruturar as HUs do criador de projeto (publicação e gestão).
  - [ ] Estruturar as HUs do colaborador interessado (demonstração de interesse e proposta de apoio).
  - [ ] Documentar histórias com identificação, prioridade e valor de negócio em `docs/`.

### Card #29 — Elaboração do README Completo e Registro do Uso de IA
- **Título**: `docs: Elaboração do README Completo e Registro do Uso de Inteligência Artificial`
- **Labels**: `documentation`, `readme`, `hackathon`
- **Prioridade**: `Alta`
- **Descrição**: Redigir a documentação oficial do repositório no `README.md` com apresentação do projeto, problema, ODS 9, prints das telas, instruções de execução local, lista da equipe e a seção obrigatória de registro de uso de IA.
- **Critérios de Aceitação**:
  - [ ] Adicionar apresentação executiva, proposta de valor e link do deploy.
  - [ ] Listar tecnologias utilizadas e guia de instalação passo a passo.
  - [ ] Inserir registro transparente do uso de ferramentas de IA (finalidades, ferramentas e validações).
  - [ ] Confirmar lista de membros da equipe e créditos.

---

## 2. 💻 Frontend Funcionais (Telas, Componentes & RFs)

Cards responsáveis pelas telas visíveis do usuário, navegação, apresentação dos projetos e fluxos de interação definidos nos Requisitos Funcionais (RF01 a RF10).

### Card #07 — Desenvolvimento do Header/Navbar e Rodapé Responsivos
- **Título**: `feat: Desenvolvimento do Header/Navbar e Footer Globais Responsivos`
- **Labels**: `frontend`, `components`, `navigation`
- **Prioridade**: `Alta`
- **Descrição**: Construir os componentes reutilizáveis de navegação superior (Navbar) e rodapé (Footer), garantindo navegação fluida entre rotas e menu hambúrguer para dispositivos móveis.
- **Critérios de Aceitação**:
  - [ ] Criar Navbar com logotipo do InovaHub e links: Início, Explorar, Oportunidades, Indicadores e Sobre.
  - [ ] Adicionar botão de destaque "Publicar Projeto".
  - [ ] Implementar menu responsivo retrátil para telas pequenas (mobile drawer/hambúrguer).
  - [ ] Criar Footer com informações do projeto, links institucionais e menção ao ODS 9.

### Card #08 — Criação de Biblioteca de Componentes Base Reutilizáveis de UI
- **Título**: `feat: Criação de Biblioteca de Componentes Base Reutilizáveis de UI`
- **Labels**: `frontend`, `components`, `ui/ux`
- **Prioridade**: `Média`
- **Descrição**: Desenvolver os componentes básicos de interface que serão utilizados em todas as páginas: Botões (variantes primária, secundária, outline), Inputs, Textareas, Badges/Tags (ODS, tecnologias) e Modais.
- **Critérios de Aceitação**:
  - [ ] Criar componente `Button` com estados hover, active, focus e loading.
  - [ ] Criar componentes `Input` e `Select` com suporte a label e mensagem de erro.
  - [ ] Criar componente `Badge` para exibição de categorias, status e ODS.
  - [ ] Criar componente `Modal` acessível para diálogos e formulários rápidos.

### Card #10 — Implementação da Página Inicial (Home / Landing Page)
- **Título**: `feat: Implementação da Página Inicial (Home / Landing Page)`
- **Labels**: `frontend`, `page`, `ui/ux`
- **Requisito**: `RF02`
- **Prioridade**: `Alta`
- **Descrição**: Desenvolver a página principal com Hero Section chamativa, proposta de valor do InovaHub, resumo de impacto, carrossel/grid de projetos em destaque e call to action (CTA) para explorar e publicar projetos.
- **Critérios de Aceitação**:
  - [ ] Implementar Hero Section com headline impactante e botões de ação ("Explorar Projetos" e "Publicar Ideia").
  - [ ] Adicionar seção explicando o fluxo: Ideia → Publicação → Conexão → Impacto.
  - [ ] Exibir seção de projetos inovadores em destaque.
  - [ ] Incluir banner de conscientização do ODS 9 e parcerias sustentáveis.

### Card #11 — Implementação da Página de Exploração de Projetos
- **Título**: `feat: [RF02] Implementação da Página de Exploração de Projetos`
- **Labels**: `frontend`, `page`, `RF02`
- **Requisito**: `RF02`
- **Prioridade**: `Alta`
- **Descrição**: Construir a tela de catálogo/listagem de projetos (`/explorar`), exibindo os cards dos projetos com título, breve descrição, tags de tecnologia, ODS correspondente e indicador de necessidades em aberto.
- **Critérios de Aceitação**:
  - [ ] Criar grid responsivo de cards de projeto (ProjectCard).
  - [ ] Exibir foto/thumbnail ou avatar temático do projeto.
  - [ ] Mostrar badges com ODS relacionado e estágio do projeto (Ideação, MVP, Validação).
  - [ ] Adicionar link/botão no card direcionando para a página de detalhes do projeto.
  - [ ] Tratar estado de lista vazia (Empty State com ilustração amigável).

### Card #12 — Pesquisa de Projetos por Palavras-Chave
- **Título**: `feat: [RF03] Implementação da Pesquisa de Projetos por Palavras-Chave`
- **Labels**: `frontend`, `search`, `RF03`
- **Requisito**: `RF03`
- **Prioridade**: `Alta`
- **Descrição**: Implementar mecanismo de busca em tempo real na tela de exploração que filtre os projetos por correspondência em título, descrição, problema ou tecnologias utilizadas.
- **Critérios de Aceitação**:
  - [ ] Adicionar input de busca com ícone de lupa e botão para limpar termo.
  - [ ] Implementar busca case-insensitive e tolerante a termos parciais.
  - [ ] Atualizar dinamicamente a contagem de resultados encontrados.
  - [ ] Garantir performance fluida (debounce ou busca reativa instantânea).

### Card #13 — Implementação de Filtros por Categoria, Área e ODS
- **Título**: `feat: [RF04] Implementação de Filtros por Categoria, Área e ODS`
- **Labels**: `frontend`, `filters`, `RF04`
- **Requisito**: `RF04`
- **Prioridade**: `Alta`
- **Descrição**: Desenvolver barra lateral ou cabeçalho de filtros para refinamento dos projetos por: Categoria de Inovação, ODS Relacionada (destaque ODS 9) e Tipo de Necessidade (Dev, Design, Financiamento, etc.).
- **Critérios de Aceitação**:
  - [ ] Criar seletores de filtro por ODS e Categorias temáticas.
  - [ ] Permitir combinação simultânea de múltiplos filtros + termo de busca.
  - [ ] Adicionar botão "Limpar Filtros" para restaurar a listagem completa.
  - [ ] Exibir tags ativas com possibilidade de remoção individual de cada filtro.

### Card #14 — Desenvolvimento da Página de Detalhes do Projeto
- **Título**: `feat: [RF05] Desenvolvimento da Página de Detalhes do Projeto`
- **Labels**: `frontend`, `page`, `RF05`
- **Requisito**: `RF05`
- **Prioridade**: `Alta`
- **Descrição**: Criar a tela de detalhes (`/projetos/[id]`) que exibe todas as informações aprofundadas do projeto: problema atacado, solução proposta, tecnologias, estágio, necessidades urgentes de apoio e dados do criador.
- **Critérios de Aceitação**:
  - [ ] Renderizar detalhes completos a partir do ID da URL com rota dinâmica no Next.js.
  - [ ] Apresentar seções estruturadas: Visão Geral, ODS Impactado, Tecnologias e Necessidades.
  - [ ] Exibir bloco com informações e canais de contato do idealizador/equipe.
  - [ ] Posicionar botão fixo ou em destaque "Demonstrar Interesse / Quero Colaborar".

### Card #15 — Desenvolvimento do Modal e Fluxo de Demonstração de Interesse
- **Título**: `feat: [RF06] Desenvolvimento do Modal e Fluxo de Demonstração de Interesse`
- **Labels**: `frontend`, `interaction`, `RF06`
- **Requisito**: `RF06`
- **Prioridade**: `Alta`
- **Descrição**: Construir o formulário interativo para que interessados manifestem seu interesse em colaborar com um projeto específico, escolhendo o tipo de contribuição e enviando uma mensagem.
- **Critérios de Aceitação**:
  - [ ] Criar modal ou formulário contextual acionado pelo botão "Quero Colaborar".
  - [ ] Campos do formulário: Nome, E-mail, Tipo de Apoio (Desenvolvimento, Design, Mentoria, Divulgação, Recursos) e Mensagem de apresentação.
  - [ ] Validar preenchimento dos campos obrigatórios antes do envio.
  - [ ] Apresentar feedback visual de sucesso (Toast / Mensagem de confirmação).

### Card #16 — Formulário de Cadastro e Publicação de Projetos
- **Título**: `feat: [RF01] Implementação do Formulário de Cadastro e Publicação de Projetos`
- **Labels**: `frontend`, `forms`, `RF01`
- **Requisito**: `RF01`
- **Prioridade**: `Alta`
- **Descrição**: Criar a página e formulário completo para publicação de novos projetos de inovação (`/publicar`), coletando dados essenciais para conexão com colaboradores.
- **Critérios de Aceitação**:
  - [ ] Implementar campos: Título, Resumo, Descrição detalhada do Problema & Solução.
  - [ ] Seletor de ODS prioritário (com destaque para ODS 9), tecnologias e estágio.
  - [ ] Inclusão de necessidades de colaboração e informações de contato.
  - [ ] Validação de campos obrigatórios com mensagens de alerta.
  - [ ] Adicionar o projeto cadastrado à lista ativa da plataforma (via state/localStorage).

### Card #17 — Implementação do Mural de Oportunidades de Colaboração
- **Título**: `feat: [RF09] Implementação do Mural de Oportunidades de Colaboração`
- **Labels**: `frontend`, `opportunities`, `RF09`
- **Requisito**: `RF09`
- **Prioridade**: `Média`
- **Descrição**: Desenvolver a tela de Oportunidades (`/oportunidades`), servindo como mural de vagas e demandas específicas abertas pelos projetos (ex: "Buscamos dev React", "Necessitamos de mentoria em ODS").
- **Critérios de Aceitação**:
  - [ ] Criar lista/grid com cards de oportunidades e badges de área de atuação.
  - [ ] Exibir link direto para o projeto responsável pela oportunidade.
  - [ ] Permitir filtrar oportunidades por área técnica ou nível de dedicação.
  - [ ] Integrar botão de candidatura/interesse direto na oportunidade.

### Card #18 — Desenvolvimento do Dashboard do Usuário
- **Título**: `feat: [RF08] Desenvolvimento do Dashboard do Usuário`
- **Labels**: `frontend`, `dashboard`, `RF08`
- **Requisito**: `RF08`
- **Prioridade**: `Média`
- **Descrição**: Criar a área do Dashboard (`/dashboard`) para que o usuário acompanhe o status dos seus projetos publicados, visualizações acumuladas e lista de interesses/mensagens recebidas de colaboradores.
- **Critérios de Aceitação**:
  - [ ] Cards de métricas rápidas: Total de Projetos, Conexões Recebidas, Oportunidades Ativas.
  - [ ] Tabela ou lista com os projetos publicados pelo usuário logado/ativo.
  - [ ] Seção para visualização das mensagens e perfis de colaboradores que demonstraram interesse.
  - [ ] Ações rápidas: Editar projeto, Adicionar nova oportunidade, Encerrar vaga.

### Card #19 — Implementação da Página de Perfil do Usuário
- **Título**: `feat: [RF07] Implementação da Página de Gerenciamento de Perfil`
- **Labels**: `frontend`, `profile`, `RF07`
- **Requisito**: `RF07`
- **Prioridade**: `Média`
- **Descrição**: Criar a tela de Perfil (`/perfil`), permitindo ao usuário visualizar suas informações pessoais, bio, habilidades técnicas, links profissionais (LinkedIn, GitHub) e histórico de colaborações.
- **Critérios de Aceitação**:
  - [ ] Exibir dados cadastrais: Nome, Função, Bio, Instituição/Empresa e Habilidades.
  - [ ] Modo de edição de perfil com salvamento em estado local / localStorage.
  - [ ] Abas para visualizar "Meus Projetos" e "Projetos em que tenho Interesse".
  - [ ] Feedback visual de atualização de perfil com sucesso.

### Card #20 — Página de Indicadores de Impacto e Métricas ODS
- **Título**: `feat: [RF10] Implementação da Página de Indicadores de Impacto e Métricas ODS`
- **Labels**: `frontend`, `metrics`, `RF10`
- **Requisito**: `RF10`
- **Prioridade**: `Média`
- **Descrição**: Desenvolver a página de Indicadores de Impacto (`/impacto`), apresentando números consolidados da plataforma com gráficos ou contadores dinâmicos sobre projetos impulsionados e alinhamento ao ODS 9.
- **Critérios de Aceitação**:
  - [ ] Contadores de impacto em destaque: Projetos cadastrados, Conexões viabilizadas, Colaboradores ativos.
  - [ ] Gráfico ou visualização de distribuição de projetos por ODS.
  - [ ] Seção de cases/histórias de sucesso e conexões que geraram resultados.
  - [ ] Layout atraente e limpo para apresentação em pitch de avaliação.

### Card #21 — Página "Sobre o Projeto" e Contexto ODS 9
- **Título**: `feat: Implementação da Página "Sobre o Projeto" e Contexto ODS 9`
- **Labels**: `frontend`, `ods9`, `institutional`
- **Prioridade**: `Média`
- **Descrição**: Construir a página institucional (`/sobre`) explicando o propósito do InovaHub, o desafio do Hackathon, o alinhamento central com a meta da ONU (ODS 9 — Indústria, Inovação e Infraestrutura) e a equipe desenvolvedora.
- **Critérios de Aceitação**:
  - [ ] Explicar com clareza o problema dos projetos inovadores isolados e a solução proposta.
  - [ ] Detalhar a relação direta com o ODS 9 e metas globais de inovação sustentável.
  - [ ] Apresentar os membros da equipe desenvolvedora e seus papéis no projeto.
  - [ ] Link de acesso ao repositório público do GitHub e documentações.

---

## 3. ⚡ Não Funcionais (Qualidade, UX & Performance)

Cards vinculados aos Requisitos Não Funcionais (RNF01 a RNF06) focados em Design System, responsividade, acessibilidade digital e velocidade de carregamento.

### Card #06 — Criação do Design System, Paleta de Cores e Tipografia
- **Título**: `ui: Criação do Design System, Paleta de Cores e Tipografia`
- **Labels**: `ui/ux`, `styling`, `frontend`
- **Requisito Relacionado**: `RNF02` (Facilidade de Uso e Identidade Consistente)
- **Prioridade**: `Alta`
- **Descrição**: Definir a identidade visual do InovaHub com foco em modernidade, tecnologia e inovação (ODS 9), configurando tokens no Tailwind CSS (cores primárias, secundárias, neutras, dark/light hints e tipografia Inter/Sans).
- **Critérios de Aceitação**:
  - [ ] Configurar paleta de cores temática de inovação no `tailwind.config`.
  - [ ] Definir escalas tipográficas legíveis e espaçamentos consistentes.
  - [ ] Estabelecer estilo de sombras, bordas e efeitos de superfície/cards.
  - [ ] Garantir contraste visual compatível com acessibilidade (WCAG AA).

### Card #23 — Garantia de Responsividade para Mobile, Tablet e Desktop
- **Título**: `style: [RNF01] Garantia de Responsividade para Mobile, Tablet e Desktop`
- **Labels**: `ui/ux`, `responsive`, `RNF01`
- **Requisito**: `RNF01`
- **Prioridade**: `Alta`
- **Descrição**: Revisar e adaptar todas as páginas e componentes para visualização fluida em diferentes resoluções (Mobile: 375px+, Tablet: 768px+, Desktop: 1024px+ e telas ultrawide).
- **Critérios de Aceitação**:
  - [ ] Testar e ajustar quebra de colunas nos grids de projetos.
  - [ ] Verificar usabilidade e tamanho de botões e toques em telas móveis.
  - [ ] Eliminar qualquer rolagem horizontal indesejada (overflow-x).
  - [ ] Validar comportamento nos DevTools com simulação de múltiplos aparelhos.

### Card #25 — Auditoria de Acessibilidade Digital e Contraste Visual
- **Título**: `a11y: [RNF06] Auditoria de Acessibilidade Digital e Contraste Visual`
- **Labels**: `accessibility`, `a11y`, `RNF06`
- **Requisito**: `RNF06`
- **Prioridade**: `Média`
- **Descrição**: Assegurar boas práticas de acessibilidade digital (WCAG 2.1) em toda a interface do InovaHub, incluindo contraste de cores adequado, suporte a navegação por teclado e atributos ARIA.
- **Critérios de Aceitação**:
  - [ ] Garantir contraste mínimo adequado entre texto e fundo em todos os elementos.
  - [ ] Garantir navegação sequencial por tecla `Tab` com foco visível (`focus-visible`).
  - [ ] Incluir atributos `alt` informativos em imagens e ícones decorativos com `aria-hidden`.
  - [ ] Validar formulários com labels explícitos associados aos inputs.

### Card #26 — Otimização de Performance, Carregamento Rápido e SEO
- **Título**: `perf: [RNF03] Otimização de Performance, Carregamento e SEO`
- **Labels**: `performance`, `seo`, `RNF03`
- **Requisito**: `RNF03`
- **Prioridade**: `Alta`
- **Descrição**: Otimizar o tempo de carregamento de todas as páginas para atingir tempo inferior a 3 segundos (RNF03), configurando metadados OpenGraph, tags semânticas HTML5 e lazy loading de imagens.
- **Critérios de Aceitação**:
  - [ ] Configurar títulos `<title>` e `<meta name="description">` em todas as rotas.
  - [ ] Utilizar o componente `next/image` ou otimização de imagens estáticas.
  - [ ] Otimizar bundles e imports para evitar código desnecessário.
  - [ ] Validar métricas de carregamento com tempo menor que 3 segundos no Lighthouse.

---

## 4. 🏗️ Infra ou Arquitetura (Setup, Dados & Deploy)

Cards relacionados à configuração de base do repositório, modelagem de dados TypeScript, arquitetura de persistência local para o MVP e publicação contínua.

### Card #05 — Setup Inicial do Repositório, Commits e Boilerplate Next.js
- **Título**: `chore: Setup Inicial do Repositório, Padrão de Commits e Boilerplate Next.js`
- **Labels**: `setup`, `frontend`, `ci-cd`
- **Prioridade**: `Alta`
- **Descrição**: Configurar a estrutura base da aplicação Next.js no repositório, garantindo configuração de TypeScript, ESLint, Tailwind CSS e estabelecendo a convenção de commits da equipe (`tipo: descrição`).
- **Critérios de Aceitação**:
  - [ ] Inicializar projeto Next.js com App Router e Tailwind CSS no diretório `frontend`.
  - [ ] Configurar `.gitignore` e linting sem erros ou warnings.
  - [ ] Documentar padrão de commits da equipe no README.
  - [ ] Validar build e execução local via `npm run dev`.

### Card #09 — Modelagem da Estrutura de Dados e Mock de Projetos
- **Título**: `feat: Modelagem da Estrutura de Dados e Mock de Projetos Inovadores`
- **Labels**: `frontend`, `data`, `mock`
- **Prioridade**: `Alta`
- **Descrição**: Criar a tipagem TypeScript (`Project`, `Opportunity`, `Interest`) e uma base de dados mockada realista com pelo menos 8 a 10 projetos inovadores vinculados ao ODS 9 e demais ODS correlatos.
- **Critérios de Aceitação**:
  - [ ] Definir interfaces TypeScript para projetos (id, título, descrição, problema, solução, tags, ODS, necessidades, autor, métricas).
  - [ ] Criar dataset de dados mockados ricos com conteúdo realista para demonstração.
  - [ ] Criar funções utilitárias ou serviço para listar, filtrar e buscar projetos.
  - [ ] Disponibilizar dados mockados para consumo imediato nos componentes.

### Card #22 — Persistência Local e Gestão de Estado de Dados (localStorage)
- **Título**: `feat: Persistência Local e Gestão de Estado de Dados (localStorage)`
- **Labels**: `frontend`, `state`, `storage`
- **Requisito Relacionado**: `RNF09` / `RNF10` (Integridade e Escalabilidade)
- **Prioridade**: `Alta`
- **Descrição**: Garantir que novos projetos publicados e manifestações de interesse feitas durante a navegação sejam salvos no `localStorage` do navegador, permitindo demonstração dinâmica completa sem necessidade de backend complexo.
- **Critérios de Aceitação**:
  - [ ] Criar contexto/hook (ex: `useProjects`) integrando dados mockados com `localStorage`.
  - [ ] Salvar novos projetos cadastrados e recuperá-los automaticamente na listagem e na busca.
  - [ ] Persistir mensagens de interesse no dashboard do usuário.
  - [ ] Fornecer botão discreto de "Resetar dados de demonstração" caso necessário.

### Card #28 — Configuração do Deploy Contínuo e Publicação na Vercel
- **Título**: `deploy: Configuração do Deploy Contínuo e Publicação na Vercel`
- **Labels**: `deployment`, `vercel`, `ci-cd`
- **Requisito Relacionado**: `RNF04` (Disponibilidade)
- **Prioridade**: `Alta`
- **Descrição**: Configurar a integração contínua do repositório GitHub com a plataforma Vercel, gerando o link oficial de produção e garantindo builds automáticos a cada atualização na branch principal.
- **Critérios de Aceitação**:
  - [ ] Conectar repositório GitHub ao projeto na Vercel.
  - [ ] Configurar variáveis de ambiente e comandos de build (`next build`).
  - [ ] Validar deploy de produção sem erros de compilação.
  - [ ] Adicionar o link de produção no topo do `README.md` e na descrição do repositório.

---

## 5. 🧪 Testes (QA, Validações & Entrega)

Cards focados na garantia da qualidade funcional, prevenção de dados corrompidos, suporte a navegadores múltiplos e validação dos critérios de avaliação do Hackathon.

### Card #24 — Validação de Formulários e Prevenção de Erros
- **Título**: `test: [RNF06/RNF10] Validação de Formulários e Prevenção de Erros`
- **Labels**: `validation`, `forms`, `RNF06`
- **Requisito**: `RNF06`, `RNF10`
- **Prioridade**: `Alta`
- **Descrição**: Implementar validações robustas nos formulários de cadastro de projetos e demonstração de interesse, evitando envios vazios, formatos inválidos de contato ou perda acidental de dados.
- **Critérios de Aceitação**:
  - [ ] Validar campos obrigatórios com mensagens de erro inline e acessíveis.
  - [ ] Validar formato de e-mail e links inseridos (GitHub, repositórios, sites).
  - [ ] Desabilitar botão de submissão durante envio para evitar cliques duplos.
  - [ ] Manter estado do formulário em caso de erro para não perder dados digitados.

### Card #27 — Testes de Compatibilidade entre Navegadores
- **Título**: `test: [RNF07] Testes de Compatibilidade entre Navegadores`
- **Labels**: `testing`, `cross-browser`, `RNF07`
- **Requisito**: `RNF07`
- **Prioridade**: `Média`
- **Descrição**: Executar testes funcionais e visuais nas três plataformas de navegação exigidas no RNF07: Google Chrome, Microsoft Edge e Mozilla Firefox.
- **Critérios de Aceitação**:
  - [ ] Testar fluxo de navegação e busca no Google Chrome.
  - [ ] Testar renderização de formulários e modais no Microsoft Edge.
  - [ ] Testar estilos e transições de layout no Mozilla Firefox.
  - [ ] Corrigir qualquer anomalia visual ou comportamento inconsistente entre engines.

### Card #30 — Validação Final dos Critérios do Hackathon e Pitch
- **Título**: `chore: Validação Final dos Critérios do Hackathon, Roteiro do Pitch e Demonstração`
- **Labels**: `hackathon`, `review`, `presentation`
- **Prioridade**: `Alta`
- **Descrição**: Conduzir a auditoria final de todos os entregáveis do Hackathon: conferência de cards criados, histórico de commits significativos, execução do fluxo ponta a ponta e roteiro para apresentação/pitch aos jurados.
- **Critérios de Aceitação**:
  - [ ] Validar o fluxo completo: Home → Explorar → Detalhes → Demonstrar Interesse → Publicar.
  - [ ] Conferir se o projeto possui mais de 30 commits significativos e cards organizados no GitHub Projects.
  - [ ] Preparar roteiro de apresentação destacando o diferencial e conexão com o ODS 9.
  - [ ] Realizar teste cego de navegação para garantir experiência sem falhas.
