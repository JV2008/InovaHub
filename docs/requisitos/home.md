# Especificação Técnica - Tela de Login

## 1. Análise Geral

- **Tipo de página**: Autenticação / Login
- **Objetivo**: Permitir que usuários acessem a plataforma InovaHub para gerenciar iniciativas e colaborar
- **Estrutura geral**: Layout dividido em dois painéis (split-screen) com painel promocional à esquerda e formulário de login à direita
- **Hierarquia visual**: 
  - Painel esquerdo: Identificação da marca → Proposta de valor → Projeto em destaque → Estatísticas
  - Painel direito: Abas de navegação → Título de boas-vindas → Opções de login social → Formulário de e-mail/senha → Ação principal → Links secundários
- **Quantidade de seções**: 2 seções principais (painel promocional + formulário)
- **Orientação**: Horizontal (desktop)
- **Dispositivo**: Desktop (layout otimizado para telas largas)
- **Largura aparente**: Estimativa visual: container centralizado com largura aproximada de 900-1000px
- **Sidebar**: Não
- **Navbar**: Não
- **Footer**: Não
- **Cards**: Sim (card de projeto em destaque no painel esquerdo)
- **Modais**: Não
- **Tabelas**: Não
- **Formulários**: Sim (formulário de login com e-mail e senha)

## 2. Estrutura Hierárquica

```text
Página de Login
├── Container Principal (split-screen)
│   ├── Painel Esquerdo (Promocional)
│   │   ├── Cabeçalho da Marca
│   │   │   ├── Logo InovaHub (ícone + texto)
│   │   │   └── Badge ODS 9 • Indústria & Inovação
│   │   ├── Conteúdo Principal
│   │   │   ├── Título: "Acelere a tecnologia de impacto real."
│   │   │   └── Subtítulo: Descrição do ecossistema de inovação
│   │   ├── Card de Projeto em Destaque
│   │   │   ├── Imagem do projeto
│   │   │   ├── Título do projeto
│   │   │   ├── Evento e status
│   │   │   ├── Barra de progresso
│   │   │   └── Percentual concluído
│   │   └── Rodapé do Painel
│   │       ├── Estatística: +1,420 Soluções Aceleradas
│   │       └── Badges ODS 4, ODS 8, ODS 17
│   │
│   └── Painel Direito (Formulário)
│       ├── Abas de Navegação
│       │   ├── Aba: "Entrar na Conta" (ativa)
│       │   └── Aba: "Criar Nova Conta"
│       ├── Cabeçalho do Formulário
│       │   ├── Título: "Boas-vindas de volta"
│       │   └── Subtítulo: Instrução de acesso
│       ├── Login Social
│       │   ├── Botão: Entrar com GitHub
│       │   └── Botão: Entrar com Google
│       ├── Divisor: "OU UTILIZE E-MAIL"
│       ├── Campo de E-mail
│       │   ├── Label: "E-mail ou Usuário"
│       │   └── Input com ícone @ e placeholder
│       ├── Campo de Senha
│       │   ├── Label: "Senha"
│       │   ├── Input com ícone de cadeado e senha mascarada
│       │   ├── Ícone de mostrar/ocultar senha
│       │   └── Link: "Esqueceu sua senha?"
│       ├── Botão de Ação Principal
│       │   └── "Entrar no InovaHub →"
│       └── Links Secundários
│           ├── "← Voltar à Página Inicial"
│           └── "Explorar Projetos sem Login 🔍"
```

## 3. Elementos Visuais e Componentes

### 3.1 Painel Esquerdo (Promocional)

#### 3.1.1 Identidade da Marca
- **Logo**: Ícone quadrado arredondado com símbolo de rede/conexão em laranja, seguido do texto "InovaHub" em preto
- **Badge ODS**: 
  - Texto: "ODS 9 • Indústria & Inovação"
  - Estilo: Fundo claro com ícone de círculo laranja

#### 3.1.2 Proposta de Valor
- **Título Principal**: "Acelere a tecnologia de impacto real." (fonte grande, negrito, preto)
- **Descrição**: Texto sobre conexão com ecossistema de inovação aberta e impulso de projetos sustentáveis alinhados aos ODS
- **Alinhamento**: Esquerda
- **Espaçamento**: Margens generosas entre elementos

#### 3.1.3 Card de Projeto em Destaque
- **Tipo**: Card com fundo branco/translúcido, cantos arredondados, sombra sutil
- **Conteúdo**:
  - Imagem thumbnail do projeto (lado esquerdo)
  - Título: "Projeto HidroSolar Smart Grid"
  - Subtítulo: "Hackathon Brasil 2025 • Em validação"
  - Indicador de progresso: "Meta de Captação & Parcerias"
  - Barra de progresso horizontal com preenchimento laranja
  - Texto de status: "84% Concluído" (cor verde)

#### 3.1.4 Estatísticas e ODS
- **Estatística**: Ícone de check + "+1,420 Soluções Aceleradas"
- **Badges ODS**: "ODS 4 • ODS 8 • ODS 17"
- **Posição**: Rodapé do painel esquerdo
- **Alinhamento**: Distribuído entre esquerda e centro

### 3.2 Painel Direito (Formulário de Login)

#### 3.2.1 Abas de Navegação
- **Componente**: Abas superiores para alternar entre login e cadastro
- **Aba ativa**: "Entrar na Conta" (fundo branco, borda sutil)
- **Aba inativa**: "Criar Nova Conta" (fundo azul claro)
- **Estilo**: Cantos superiores arredondados, layout limpo

#### 3.2.2 Cabeçalho do Formulário
- **Título**: "Boas-vindas de volta" (fonte grande, negrito, preto)
- **Subtítulo**: "Acesse sua plataforma para gerenciar iniciativas e colaborar." (fonte menor, cor cinza)

#### 3.2.3 Login Social
- **Componente**: Dois botões lado a lado
- **Botão GitHub**:
  - Texto: "Entrar com GitHub"
  - Ícone: Logo do GitHub
  - Estilo: Fundo cinza claro, cantos arredondados, borda sutil
- **Botão Google**:
  - Texto: "Entrar com Google"
  - Ícone: Logo do Google
  - Estilo: Fundo cinza claro, cantos arredondados, borda sutil
- **Espaçamento**: Gap entre os botões

#### 3.2.4 Divisor de Seção
- **Texto**: "OU UTILIZE E-MAIL"
- **Estilo**: Texto centralizado, cor cinza clara, linha divisória sutil acima e abaixo
- **Alinhamento**: Centralizado

#### 3.2.5 Campo de E-mail
- **Label**: "E-mail ou Usuário" (acima do campo)
- **Input**:
  - Ícone esquerdo: @ (cinza)
  - Placeholder: "nome@inovahub.org"
  - Fundo: Cinza muito claro
  - Cantos: Arredondados
  - Borda: Sutil, cinza claro
- **Estado**: Vazio, sem foco aparente

#### 3.2.6 Campo de Senha
- **Label**: "Senha" (acima do campo)
- **Input**:
  - Ícone esquerdo: Cadeado (cinza)
  - Valor: Senha mascarada (bolinhas)
  - Ícone direito: Olho (mostrar/ocultar senha)
  - Fundo: Cinza muito claro
  - Cantos: Arredondados
- **Link secundário**: "Esqueceu sua senha?"
  - Cor: Laranja
  - Posição: Direita, alinhado com o campo

#### 3.2.7 Botão de Ação Principal
- **Texto**: "Entrar no InovaHub →"
- **Cor de fundo**: Laranja vibrante (#F97316 ou similar)
- **Cor do texto**: Branco
- **Estilo**: Largura total, cantos arredondados, sem borda
- **Sombra**: Não aparente
- **Hover**: Estimativa visual: possível escurecimento do laranja

#### 3.2.8 Links Secundários (Rodapé do Formulário)
- **Link esquerdo**: "← Voltar à Página Inicial"
  - Cor: Azul escuro/cinza escuro
  - Ícone: Seta para esquerda
- **Link direito**: "Explorar Projetos sem Login 🔍"
  - Cor: Azul escuro/cinza escuro
  - Ícone: Lupa
- **Alinhamento**: Distribuído entre esquerda e direita

## 4. Guia de Estilo Visual

### 4.1 Paleta de Cores
- **Cor primária**: Laranja (#F97316 ou similar) - botões, ícones de destaque, links de ação
- **Cor de fundo principal**: Azul claro muito suave (#F8FAFC ou similar)
- **Cor de fundo do painel direito**: Branco puro
- **Cor de texto principal**: Preto/Cinza muito escuro (#0F172A ou similar)
- **Cor de texto secundário**: Cinza médio (#64748B ou similar)
- **Cor de fundo de inputs**: Cinza muito claro (#F1F5F9 ou similar)
- **Cor de sucesso**: Verde (#10B981 ou similar) - indicador de conclusão
- **Cor de divisores**: Cinza claro

### 4.2 Tipografia
- **Fonte**: Estimativa visual: Inter, SF Pro, ou fonte sans-serif moderna do sistema
- **Tamanhos estimados**:
  - Título principal (painel esquerdo): 32-40px
  - Título do formulário: 24-28px
  - Subtítulos/descrições: 14-16px
  - Labels: 14px
  - Placeholders: 14px
  - Texto de botões: 16px
- **Pesos**:
  - Títulos: Negrito (700)
  - Corpo: Regular (400)
  - Subtítulos: Regular/Medium (400-500)

### 4.3 Espaçamento e Layout
- **Container principal**: Centralizado, com sombra sutil ao redor
- **Gap entre painéis**: Nenhum (divisão direta)
- **Padding interno**: Estimativa visual: 40-60px nos painéis
- **Border radius**: 
  - Cards: 16-20px
  - Botões: 8-12px
  - Inputs: 8-12px
  - Container principal: 24-32px
- **Sombras**: Sutil, espalhada, cor cinza clara

### 4.4 Ícones
- **Estilo**: Linha fina ou preenchido suave
- **Tamanho**: 16-20px
- **Cores**: Cinza para ícones de campo, preto para ícones de marca, laranja para ícones de destaque

## 5. Comportamentos e Estados

### 5.1 Estados de Interação
- **Inputs vazios**: Fundo cinza claro, borda sutil
- **Inputs com foco**: Estimativa visual: borda azul ou laranja, sombra sutil
- **Botões sociais**: Hover com fundo ligeiramente mais escuro
- **Botão primário**: Hover com laranja mais escuro
- **Links**: Hover com sublinhado ou mudança de cor

### 5.2 Validação
- **Campo de e-mail**: Placeholder sugere formato válido
- **Campo de senha**: Mascaramento padrão, toggle de visibilidade
- **Link "Esqueceu sua senha?"**: Disponível para recuperação

### 5.3 Acessibilidade
- **Contraste**: Estimativa visual: adequado entre texto e fundo
- **Foco**: Estados de foco visíveis (estimativa visual)
- **Labels**: Presentes para todos os campos
- **Navegação por teclado**: Estimativa visual: suportada

## 6. Responsividade

### 6.1 Desktop (>1024px)
- Layout atual: dois painéis lado a lado
- Painel esquerdo: aproximadamente 40-50% da largura
- Painel direito: aproximadamente 50-60% da largura

### 6.2 Tablet (768px - 1024px)
- Estimativa visual: possível empilhamento vertical ou redução do painel esquerdo

### 6.3 Mobile (<768px)
- Estimativa visual: layout empilhado, painel promocional acima do formulário

## 7. Observações Técnicas

- **Navegação sem login**: Disponibilizada via link "Explorar Projetos sem Login"
- **Integração social**: Suporte a GitHub e Google OAuth
- **Contexto de marca**: Forte alinhamento com ODS (Objetivos de Desenvolvimento Sustentável)
- **Tom de comunicação**: Profissional, inovador, orientado a impacto social
- **Call-to-action claro**: Botão de entrada em destaque com cor de marca

---

*Análise baseada na imagem: docs/prototype/login.jpeg*
*Data da análise: 2026-10-08*
