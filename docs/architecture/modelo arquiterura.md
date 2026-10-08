# Estrutura de Páginas da Plataforma InovaHub

## 1. Home (/)

### Objetivo
Apresentar a proposta da plataforma e incentivar a exploração de projetos.

### Seções
- Header/Navbar
- Banner Principal (Hero)
- Sobre o InovaHub
- Como Funciona
- Projetos em Destaque
- Indicadores de Impacto
- Chamada para Ação (CTA)
- Rodapé

### Funcionalidades
- Navegação para todas as páginas
- Botão "Explorar Projetos"
- Botão "Publicar Projeto"

---

## 2. Explorar Projetos (/projetos)

### Objetivo
Permitir a descoberta de projetos disponíveis.

### Componentes
- Barra de pesquisa
- Filtros por categoria
- Filtros por ODS
- Lista de projetos
- Paginação (opcional)

### Funcionalidades
- Buscar projetos
- Filtrar resultados
- Acessar detalhes do projeto

---

## 3. Detalhes do Projeto (/projetos/:id)

### Objetivo
Apresentar todas as informações sobre um projeto.

### Componentes
- Nome do projeto
- Descrição completa
- Área de atuação
- Necessidades do projeto
- Informações do criador
- Botão "Tenho Interesse"

### Funcionalidades
- Visualizar detalhes
- Demonstrar interesse

---

## 4. Demonstrar Interesse (/interesse)

### Objetivo
Registrar potenciais colaboradores.

### Componentes
- Nome
- E-mail
- Área de conhecimento
- Mensagem

### Funcionalidades
- Envio do interesse
- Confirmação de cadastro

---

## 5. Publicar Projeto (/publicar)

### Objetivo
Permitir o cadastro de novos projetos.

### Componentes
- Título
- Categoria
- ODS Relacionada
- Descrição
- Necessidades
- Contato

### Funcionalidades
- Cadastro de projeto
- Validações de formulário

---

## 6. Dashboard (/dashboard)

### Objetivo
Acompanhar informações dos projetos publicados.

### Componentes
- Resumo de projetos
- Quantidade de interessados
- Oportunidades criadas
- Estatísticas

### Funcionalidades
- Monitorar atividade
- Visualizar conexões realizadas

---

## 7. Perfil do Usuário (/perfil)

### Objetivo
Gerenciar informações pessoais.

### Componentes
- Foto de perfil
- Nome
- E-mail
- Área de atuação
- Habilidades

### Funcionalidades
- Editar perfil
- Atualizar informações

---

## 8. Oportunidades (/oportunidades)

### Objetivo
Exibir oportunidades de colaboração disponíveis.

### Componentes
- Lista de vagas
- Filtros
- Detalhes da oportunidade

### Funcionalidades
- Visualizar oportunidades
- Candidatar-se

---

## 9. Impacto e Métricas (/impacto)

### Objetivo
Demonstrar os resultados da plataforma.

### Componentes
- Total de projetos
- Total de colaboradores
- Total de conexões realizadas
- Gráficos estatísticos

### Funcionalidades
- Visualização de indicadores
- Ranking de projetos

---

## 10. Sobre o Projeto (/sobre)

### Objetivo
Apresentar a plataforma e sua relação com os ODS.

### Componentes
- Missão
- Visão
- Objetivos
- ODS 9
- Equipe do projeto

### Funcionalidades
- Informações institucionais
- Apresentação do impacto social

---

# Estrutura de Navegação

Home
├── Explorar Projetos
│   └── Detalhes do Projeto
│       └── Demonstrar Interesse
│
├── Publicar Projeto
│
├── Dashboard
│
├── Perfil
│
├── Oportunidades
│
├── Impacto e Métricas
│
└── Sobre

# Estrutura de Pastas React

src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   ├── SearchBar.jsx
│   └── ImpactCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ExploreProjects.jsx
│   ├── ProjectDetails.jsx
│   ├── InterestForm.jsx
│   ├── PublishProject.jsx
│   ├── Dashboard.jsx
│   ├── Profile.jsx
│   ├── Opportunities.jsx
│   ├── Impact.jsx
│   └── About.jsx
│
├── data/
│   └── projects.json
│
├── routes/
│   └── Router.jsx
│
├── services/
│
├── App.jsx
└── main.jsx