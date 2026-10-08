# Especificação Técnica - Página Explorar Projetos

## 1. Análise Geral

- **Tipo de página**: Listagem/Discovery de projetos
- **Objetivo**: Permitir que usuários descubram, busquem, filtrem e explorem projetos inovadores cadastrados na plataforma
- **Estrutura geral**: Layout em página única com header global, breadcrumb, área de busca e filtros, grid de cards de projetos, paginação e footer
- **Hierarquia visual**:
  - Header/navegação global
  - Breadcrumb
  - Área de busca e ordenação
  - Filtros aplicados (chips)
  - Sidebar de filtros à esquerda
  - Grid de cards de projetos
  - Paginação
  - Footer
- **Quantidade de seções**: 7 seções principais visíveis na página
- **Orientação**: Vertical com layout em grid horizontal na área de conteúdo
- **Dispositivo**: Desktop (layout otimizado para telas largas)
- **Largura aparente**: Estimativa visual: container centralizado com largura máxima de 1200-1280px
- **Sidebar**: Sim (sidebar de filtros à esquerda)
- **Navbar**: Sim (header superior)
- **Footer**: Sim
- **Cards**: Sim (cards de projetos em grid)
- **Modais**: Não
- **Tabelas**: Não
- **Formulários**: Não (busca e filtros, mas não formulário tradicional)

## 2. Estrutura Hierárquica

```text
Página Explorar Projetos
├── Header (Navegação Global)
│   ├── Logo InovaHub
│   ├── Links de Navegação (Início, Explorar, Oportunidades, Indicadores, Sobre)
│   ├── Botão Publicar Projeto
│   └── Ações do Usuário (Dashboard + Avatar)
│
├── Breadcrumb
│   └── Início > Explorar Projetos
│
├── Área de Busca e Ordenação
│   ├── Campo de Busca
│   │   └── Placeholder: "Buscar por título, problema, tecnologia (ex: IoT, React, Python) ou ODS..."
│   ├── Filtros Aplicados (chips)
│   │   ├── Chip ODS 9 • Indústria & Inovação (removível)
│   │   └── Chip MVP Funcional (removível)
│   └── Ordenação
│       └── Select: "Mais recentes"
│
├── Layout Principal
│   ├── Sidebar de Filtros (esquerda)
│   │   ├── Título "Filtros" + Resetar
│   │   ├── Seção Objetivo ONU (ODS)
│   │   │   ├── Checkbox: Indústria & Inovação (selecionado)
│   │   │   ├── Checkbox: Educação de Qualidade
│   │   │   ├── Checkbox: Trabalho Decente & Cresc.
│   │   │   ├── Checkbox: Cidades Sustentáveis
│   │   │   ├── Checkbox: Consumo Responsável
│   │   │   └── Checkbox: Parcerias e Conexões
│   │   ├── Seção Estágio de Maturidade
│   │   │   ├── Checkbox: Ideação & Conceito
│   │   │   ├── Checkbox: Protótipo / Wireframe
│   │   │   ├── Checkbox: MVP Funcional (selecionado)
│   │   │   ├── Checkbox: Validação de Mercado
│   │   │   └── Checkbox: Em Escala / Rollout
│   │   └── Seção Oportunidades & Perfis
│   │       ├── Checkbox: Frontend (React / Vue)
│   │       ├── Checkbox: Backend & Cloud (Node/Go)
│   │       ├── Checkbox: Cientista de Dados / IA
│   │       ├── Checkbox: UI/UX Designer
│   │       ├── Checkbox: Mentoria Técnica Especializada
│   │       └── Checkbox: Parceria Corporativa / Fundo
│   │
│   └── Área de Conteúdo (direita)
│       ├── Status: "Exibindo 6 projetos ativos na rede"
│       ├── Grid de Cards de Projetos
│       │   ├── Card: EdgeSensor:...
│       │   │   ├── Badges ODS 9, MVP Funcional
│       │   │   ├── Imagem do projeto
│       │   │   ├── Título truncado
│       │   │   ├── Descrição curta
│       │   │   ├── Tags de tecnologias
│       │   │   ├── Vagas abertas
│       │   │   ├── Colaboradores
│       │   │   ├── Criador + tempo
│       │   │   └── Link Ver Detalhes
│       │   ├── Card: STEM Bridge: Labs...
│       │   ├── Card: LogiVerde: Otimização...
│       │   ├── Card: OpenPatents: P&D...
│       │   ├── Card: CooperativaTech:...
│       │   └── Card: MicroGrid AI: Inteligência...
│       └── Paginação
│           └── Página 1 de 4 (24 projetos totais)
│
└── Footer
    ├── Logo e descrição da plataforma
    ├── Links Rápidos
    ├── Comunidade & Código
    └── Copyright
```

## 3. Elementos Visuais e Componentes

### 3.1 Header (Navegação Global)

#### 3.1.1 Identidade da Marca
- **Logo**: Texto "InovaHub" com ícone de logo à esquerda
- **Links de navegação**:
  - Início
  - Explorar (ativo/destacado)
  - Oportunidades
  - Indicadores
  - Sobre
- **Ações do usuário**:
  - Botão "+ Publicar Projeto" (primário laranja)
  - Link "Dashboard"
  - Avatar circular do usuário (lado direito)

#### 3.1.2 Estilo do Header
- **Fundo**: Branco
- **Borda**: Sutil na parte inferior
- **Posicionamento**: Fixo ou sticky no topo
- **Alinhamento**: Distribuído entre esquerda (logo+navegação) e direita (ações)

### 3.2 Breadcrumb
- **Separador**: ">" entre níveis
- **Itens**: Início > Explorar Projetos
- **Estilo**: Texto pequeno, cor cinza, com ícone de casa no primeiro item
- **Clique**: Apenas "Início" é link; "Explorar Projetos" é texto atual

### 3.3 Área de Busca e Ordenação

#### 3.3.1 Campo de Busca
- **Tipo**: Input de texto com ícone de busca
- **Placeholder**: "Buscar por título, problema, tecnologia (ex: IoT, React, Python) ou ODS..."
- **Estilo**: Input grande, fundo branco, borda cinza claro, cantos arredondados
- **Largura**: Largura total disponível

#### 3.3.2 Filtros Aplicados (Chips)
- **Chip ODS 9 • Indústria & Inovação**:
  - Cor de fundo: Laranja claro
  - Texto: Laranja escuro
  - Ícone de remoção (X)
- **Chip MVP Funcional**:
  - Cor de fundo: Azul claro
  - Texto: Azul escuro
  - Ícone de remoção (X)
- **Ação**: "Limpar todos os filtros"
- **Estilo**: Pills pequenas, com botão de remoção

#### 3.3.3 Ordenação
- **Label**: "Ordenar por:"
- **Select**: "Mais recentes"
- **Estilo**: Select com seta indicadora, borda sutil
- **Posicionamento**: Direita, ao lado da área de busca

### 3.4 Sidebar de Filtros

#### 3.4.1 Cabeçalho
- **Título**: "Filtros"
- **Ação**: "Resetar" (link texto)
- **Estilo**: Título médio, negrito, link de resetar à direita

#### 3.4.2 Seção Objetivo ONU (ODS)
- **Título**: "Objetivo ONU (ODS)"
- **Contador**: "6 metas" à direita
- **Checkboxes**:
  - ☑ Indústria & Inovação (selecionado, laranja)
  - ☐ Educação de Qualidade
  - ☐ Trabalho Decente & Cresc.
  - ☐ Cidades Sustentáveis
  - ☐ Consumo Responsável
  - ☐ Parcerias e Conexões
- **Estilo**: Checkbox customizado, label à direita

#### 3.4.3 Seção Estágio de Maturidade
- **Título**: "Estágio de Maturidade"
- **Checkboxes**:
  - ☐ Ideação & Conceito
  - ☐ Protótipo / Wireframe
  - ☑ MVP Funcional (selecionado, laranja)
  - ☐ Validação de Mercado
  - ☐ Em Escala / Rollout

#### 3.4.4 Seção Oportunidades & Perfis
- **Título**: "Oportunidades & Perfis"
- **Checkboxes**:
  - ☐ Frontend (React / Vue)
  - ☐ Backend & Cloud (Node/Go)
  - ☐ Cientista de Dados / IA
  - ☐ UI/UX Designer
  - ☐ Mentoria Técnica Especializada
  - ☐ Parceria Corporativa / Fundo

#### 3.4.5 Estilo da Sidebar
- **Largura**: Estimativa visual: 250-280px
- **Fundo**: Branco ou transparente
- **Separadores**: Linhas sutis entre seções
- **Scroll**: Estimativa visual: scrollável se necessário

### 3.5 Grid de Projetos

#### 3.5.1 Status
- **Texto**: "Exibindo 6 projetos ativos na rede"
- **Estilo**: Texto pequeno, cor verde, com ícone de círculo verde
- **Posição**: Topo da área de conteúdo

#### 3.5.2 Card de Projeto

##### Estrutura do Card
- **Badges superiores**:
  - Badge ODS (ex: ODS 9) — fundo laranja
  - Badge estágio (ex: MVP Funcional) — fundo azul claro
  - Badge adicional (ex: Validação) — fundo verde
- **Imagem**: Thumbnail do projeto (capa superior)
- **Título**: Nome do projeto (texto truncado com "...")
- **Descrição**: Texto curto sobre o projeto
- **Tags de tecnologias**: Pills pequenas com nomes de tecnologias
- **Vagas abertas**: Badge com ícone de usuário + quantidade
- **Criador**: Avatar + nome + tempo relativo
- **Link**: "Ver Detalhes →"

##### Exemplos de Cards Visíveis

**Card 1: EdgeSensor**
- Badges: ODS 9, MVP Funcional
- Título: "EdgeSensor:..."
- Descrição: "Rede de sensores de baixo custo com microcontroladores ESP32 para..."
- Tags: C++/FreeRTOS, Python, MQTT
- Vagas: Backend Go (Urgente), Designer UI/UX
- Colaboradores: 14
- Criador: Dra. Helena Vaz, há 2 dias

**Card 2: STEM Bridge: Labs**
- Badges: ODS 4, Ideação
- Título: "STEM Bridge: Labs..."
- Descrição: "Plataforma aberta que digitaliza bancadas de experimentos físicos..."
- Tags: React, Node.js, WebRTC
- Vagas: Frontend React, Mentoria Pedagógica
- Colaboradores: 6
- Criador: Lucas Andrade, há 4 dias

**Card 3: LogiVerde: Otimização...**
- Badges: ODS 9, Validação
- Título: "LogiVerde: Otimização..."
- Descrição: "Algoritmo genético para cálculo de rotas e balanceamento de recarga..."
- Tags: TensorFlow, FastAPI, PostgreSQL
- Vagas: Cientista de Dados (Urgente), Dev DevOps / Docker
- Colaboradores: 21
- Criador: Carlos Meneses, há 1 dia

**Card 4: OpenPatents: P&D...**
- Badges: ODS 17, MVP Funcional
- Título: "OpenPatents: P&D..."
- Descrição: "Hub unificado de transferência tecnológica conectando todos..."
- Tags: Next.js 14, Tailwind, Supabase
- Vagas: Conexão com Empresas, Especialista Jurídico PI
- Colaboradores: 9
- Criador: Prof. Beatriz Lins, há 3 dias

**Card 5: CooperativaTech:...**
- Badges: ODS 8, Protótipo
- Título: "CooperativaTech:..."
- Descrição: "Micro-SaaS para cooperativas de reciclagem garantirem remuneração..."
- Tags: Flutter, NestJS, PIX API
- Vagas: Desenvolvedor Mobile, Designer UI/UX
- Colaboradores: 8
- Criador: Tiago Pataxó, há 5 dias

**Card 6: MicroGrid AI: Inteligência...**
- Badges: ODS 9, Em Escala
- Título: "MicroGrid AI: Inteligência..."
- Descrição: "Gestão descentralizada de microrredes de energia solar..."
- Tags: Rust, PyTorch, TimescaleDB
- Vagas: Rust Embedded Dev (Urgente), Mentoria em Regulamentação Elétrica
- Colaboradores: 38
- Criador: Engª Mariana Prado, há 6 horas

#### 3.5.3 Estilo dos Cards
- **Fundo**: Branco
- **Borda**: Sutil cinza claro
- **Border radius**: Estimativa visual: 12-16px
- **Sombra**: Sutil
- **Hover**: Estimativa visual: sombra mais pronunciada ou borda mais escura
- **Largura**: Estimativa visual: 350-400px por card
- **Grid**: 3 colunas em desktop

### 3.6 Paginação
- **Informação**: "Página 1 de 4 (24 projetos totais)"
- **Controles**:
  - Botão anterior (<)
  - Números de página: 1, 2, 3, 4
  - Botão próxima (>)
- **Estilo**: 
  - Página ativa: fundo laranja, texto branco
  - Páginas inativas: fundo branco, texto cinza, borda sutil
  - Botões de navegação: texto cinza, hover com fundo cinza claro
- **Posicionamento**: Centro, abaixo do grid de projetos

### 3.7 Sidebar de Informação (Não identificável visualmente)
- **Elemento**: Card com ícone de gráfico e texto "Taxa de Conexão 84% dos projetos recebem apoio em até 14 dias."
- **Posição**: Rodapé da sidebar de filtros
- **Estilo**: Card com fundo azul claro ou roxo, texto escuro

### 3.8 Footer
- **Logo**: InovaHub com descrição da plataforma
- **Descrição**: Texto sobre plataforma colaborativa alinhada ao ODS 9
- **Badge**: "Compromisso com o ODS 9: Indústria, Inovação e Infraestrutura (ONU)"
- **Links organizados em colunas**:
  - Links Rápidos: Explorar Projetos, Mural de Vagas e Oportunidades, Publicar Ideia ou Desafio, Indicadores ONU & Metas ODS, Termos de Uso & Privacidade
  - Comunidade & Código: Repositório no GitHub, Documentação Hackathon
- **Copyright**: "© 2025 InovaHub Hackathon Team. Todos os direitos reservados."
- **Badges**: "ODS 9 • ODS 4 • ODS 8 • ODS 17" no canto inferior direito
- **Fundo**: Branco ou azul muito claro
- **Borda superior**: Sutil

## 4. Guia de Estilo Visual

### 4.1 Paleta de Cores
- **Cor primária**: Laranja (#F97316 ou similar) - botões, badges ODS 9, links de ação
- **Cor de fundo principal**: Azul muito claro ou branco
- **Cor de texto principal**: Cinza muito escuro/preto (#0F172A ou similar)
- **Cor de texto secundário**: Cinza médio (#64748B ou similar)
- **Cor de sucesso**: Verde (#10B981 ou similar) - status ativo
- **Cores de badges ODS**:
  - ODS 9: Laranja
  - ODS 4: Azul claro
  - ODS 8: Amarelo/dourado
  - ODS 17: Azul escuro/roxo
- **Cor de fundo de cards**: Branco
- **Cor de bordas**: Cinza claro (#E2E8F0 ou similar)

### 4.2 Tipografia
- **Fonte**: Estimativa visual: Inter, SF Pro, ou fonte sans-serif moderna
- **Tamanhos estimados**:
  - Título do projeto no card: 15-16px
  - Título de seção: 14-15px
  - Corpo de texto: 13-14px
  - Labels: 12-13px
  - Placeholders: 13-14px
- **Pesos**:
  - Títulos: Semibold/negrito (600-700)
  - Corpo: Regular (400)
  - Labels: Medium (500)

### 4.3 Espaçamento e Layout
- **Container principal**: Centralizado, largura máxima de 1200-1280px
- **Padding horizontal**: Estimativa visual: 40-60px
- **Gap entre seções**: Estimativa visual: 30-40px vertical
- **Grid de projetos**: 3 colunas em desktop
- **Gap entre cards**: Estimativa visual: 20-24px
- **Sidebar width**: Estimativa visual: 250-280px
- **Border radius**: 
  - Cards: 12-16px
  - Botões: 8-12px
  - Inputs: 8-12px
  - Badges/pills: 6-8px
- **Sombras**: Sutil, espalhada, cor cinza clara

### 4.4 Ícones
- **Estilo**: Linha fina ou preenchido suave
- **Tamanho**: 14-18px
- **Cores**: Cinza para ícones decorativos, laranja para ações principais, verde para sucesso

### 4.5 Componentes Específicos

#### 4.5.1 Badges/Pills
- **Forma**: Totalmente arredondados (border-radius: 6-8px)
- **Padding**: Pequeno horizontal e vertical
- **Fonte**: Pequena, medium
- **Cores de fundo**: Cores pastéis com texto escuro correspondente

#### 4.5.2 Cards de Projeto
- **Borda**: 1px sólida cinza claro
- **Fundo**: Branco
- **Padding**: Generoso interno
- **Imagem**: Largura total, altura estimada: 150-180px
- **Conteúdo**: Padding de 12-16px

#### 4.5.3 Checkboxes
- **Estilo**: Quadrado com borda, quando selecionado preenchido com cor de marca
- **Tamanho**: Estimativa visual: 16-18px
- **Cores**: Borda cinza, quando selecionado fundo laranja com check branco

#### 4.5.4 Chips de Filtro Aplicado
- **Forma**: Pills arredondadas
- **Fundo**: Cor do filtro (laranja para ODS 9)
- **Texto**: Cor escura correspondente
- **Ícone de remoção**: X pequeno
- **Ação**: Clique no X remove o filtro

## 5. Comportamentos e Estados

### 5.1 Estados de Interação
- **Cards de projeto**: Hover com sombra sutil ou elevação
- **Checkboxes**: Hover com borda mais escura
- **Chips de filtro**: Hover no X com cor mais escura
- **Links**: Hover com sublinhado ou mudança de cor
- **Botões de paginação**: Hover com fundo cinza claro
- **Select**: Hover com borda mais escura

### 5.2 Filtros
- **Checkboxes**: Estado padrão não selecionado
- **Filtros aplicados**: Exibidos como chips removíveis
- **Limpar filtros**: Remove todos os filtros ativos
- **Contador**: "6 metas" ao lado do título da seção ODS

### 5.3 Busca
- **Campo de busca**: Estado vazio com placeholder
- **Filtros aplicados**: Visíveis quando há filtros ativos
- **Resultados**: "Exibindo 6 projetos ativos na rede"

### 5.4 Paginação
- **Página ativa**: Destacada com cor de marca
- **Páginas inativas**: Clique alterna para página selecionada
- **Botões anterior/próxima**: Desabilitados quando na primeira/última página

### 5.5 Acessibilidade
- **Contraste**: Estimativa visual: adequado entre texto e fundo
- **Foco**: Estados de foco visíveis
- **Labels**: Presentes para todos os filtros
- **Navegação por teclado**: Estimativa visual: suportada
- **ARIA**: Estimativa visual: labels e roles apropriados

## 6. Responsividade

### 6.1 Desktop (>1024px)
- Layout atual: sidebar à esquerda + grid de 3 colunas
- Sidebar visível com todos os filtros
- Header completo com todos os links
- Breadcrumb visível
- Paginação completa

### 6.2 Tablet (768px - 1024px)
- Estimativa visual: sidebar pode colapsar ou empilhar
- Grid de projetos: 2 colunas
- Header pode simplificar
- Filtros aplicados empilhados

### 6.3 Mobile (<768px)
- Estimativa visual: sidebar em drawer ou accordion
- Grid de projetos: 1 coluna
- Header com menu hamburger
- Campo de busca em largura total
- Filtros aplicados empilhados horizontalmente com scroll
- Paginação simplificada

## 7. Observações Técnicas

- **Busca textual**: Suporta busca por título, problema, tecnologia e ODS
- **Múltiplos filtros**: Combinação de ODS, estágio e perfis desejados
- **Filtros aplicados visíveis**: Chips mostram filtros ativos com possibilidade de remoção individual
- **Ordenação**: Select com opção "Mais recentes" (outras opções não visíveis)
- **Contagem de resultados**: Exibição clara do número de projetos visíveis
- **Paginação**: Sistema completo com navegação por páginas
- **Cards informativos**: Ricos em informações técnicas (tecnologias, vagas, colaboradores)
- **Contexto de projeto**: Forte alinhamento com ODS e estágios de maturidade
- **Tom de comunicação**: Profissional, técnico mas acessível
- **Call-to-action claro**: Botão "Ver Detalhes" em cada card
- **Indicadores visuais**: Badges coloridos facilitam identificação rápida de ODS e estágio
- **Transparência**: Exibição de vagas abertas e colaboradores
- **Conexão com criadores**: Exibição de avatar, nome e tempo de publicação

---

*Análise baseada na imagem: docs/prototipo/Explorar.jpeg*
*Data da análise: 2026-10-08*
