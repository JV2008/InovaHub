# Especificação Técnica - Página Individual do Projeto

## 1. Análise Geral

- **Tipo de página**: Detalhes de projeto / Showcase de iniciativa
- **Objetivo**: Apresentar um projeto inovador com informações completas, demonstrar tecnologias utilizadas, facilitar contato com o criador e oportunidades de colaboração
- **Estrutura geral**: Layout em página única com header fixo, breadcrumb, seção hero do projeto, grid principal com mídia + cards informativos, seções de conteúdo expansíveis por abas, perfil do criador, formulário de contato e footer
- **Hierarquia visual**: 
  - Header/navegação global
  - Breadcrumb
  - Hero do projeto (badges + título + descrição + ações)
  - Grid de conteúdo principal (mídia em destaque + cards laterais)
  - Navegação por abas/pills
  - Conteúdo da seção ativa
  - Perfil do criador
  - Formulário de mensagem direta
  - Canais de contato
  - Seção de parcerias
  - Footer
- **Quantidade de seções**: 8 seções principais visíveis na página
- **Orientação**: Vertical com layout em grid horizontal na área principal
- **Dispositivo**: Desktop (layout otimizado para telas largas)
- **Largura aparente**: Estimativa visual: container centralizado com largura máxima de 1200-1280px
- **Sidebar**: Não
- **Navbar**: Sim (header superior)
- **Footer**: Sim
- **Cards**: Sim (múltiplos cards informativos na lateral direita)
- **Modais**: Não
- **Tabelas**: Não
- **Formulários**: Sim (formulário de mensagem direta com múltiplos campos)

## 2. Estrutura Hierárquica

```text
Página Individual do Projeto
├── Header (Navegação Global)
│   ├── Logo InovaHub
│   ├── Links de Navegação (Início, Destaques, Explorar, Publicar Projeto)
│   ├── Link Entrar / Cadastrar
│   └── Ações (Publicar Projeto + Avatar do usuário)
│
├── Breadcrumb
│   └── Início > Explorar Projetos > EcoSensors IoT
│
├── Hero do Projeto
│   ├── Badges de Classificação
│   │   ├── Badge MVP Funcional
│   │   ├── Badge ODS 9 • Indústria & Infraestrutura
│   │   └── Badge Eficiência Energética 4.0
│   ├── Título do Projeto
│   ├── Descrição do Projeto
│   └── Ações do Projeto
│       ├── Botão Salvar
│       ├── Botão Compartilhar
│       └── Botão Falar com Criador
│
├── Grid de Conteúdo Principal
│   ├── Coluna Esquerda (Mídia)
│   │   └── Imagem/Visual do Projeto
│   │
│   └── Coluna Direita (Cards Informativos)
│       ├── Card Deploy no Vercel
│       │   ├── Ícone e título
│       │   ├── Descrição
│       │   └── Link externo
│       └── Card Repositório Open-Source
│           ├── Ícone e título
│           ├── Licença e descrição
│           ├── Estatística (142)
│           └── Link para GitHub
│
├── Navegação por Abas/Pills
│   ├── Visão Geral
│   ├── Stack & Repositórios
│   ├── Vagas e Necessidades (3)
│   └── Contato com o Criador
│
├── Conteúdo da Aba Ativa
│   └── Canal Aberto de Diálogo Técnico & Parcerias ODS 9
│       └── Descrição do canal
│
├── Seção do Criador
│   ├── Avatar e Nome
│   ├── Cargo/Verificação
│   ├── Localização
│   └── Biografia
│
├── Formulário de Mensagem Direta
│   ├── Título e instrução
│   ├── Campo Nome Completo
│   ├── Campo E-mail Corporativo/Acadêmico
│   ├── Campo Sua Instituição/Empresa
│   ├── Campo Motivo do Contato (select)
│   ├── Campo Mensagem (textarea)
│   ├── Checkbox de consentimento
│   ├── Botão Enviar Mensagem Direta
│   └── Aviso de comunicação protegida
│
├── Canais Diretos de Contato
│   ├── E-mail Institucional (com botão copiar)
│   ├── WhatsApp Comercial (com botão conversar)
│   └── Links Externos
│       ├── LinkedIn
│       ├── GitHub
│       └── Lattes
│
├── Seção Inovação Aberta & Parcerias (ODS 17)
│   └── Descrição da iniciativa de parcerias
│
└── Footer
    ├── Logo e descrição da plataforma
    ├── Links de Navegação
    ├── Links de Recursos
    ├── Links Legais
    ├── Informações de copyright
    └── Badge Parceria Global SDG 17
```

## 3. Elementos Visuais e Componentes

### 3.1 Header (Navegação Global)

#### 3.1.1 Identidade da Marca
- **Logo**: Ícone laranja quadrado arredondado com símbolo de rede, seguido do texto "InovaHub"
- **Links de navegação**: 
  - Início
  - Destaques
  - Explorar
  - Publicar Projeto
- **Ações do usuário**:
  - Link "Entrar / Cadastrar"
  - Botão "+ Publicar Projeto" (outline/borda)
  - Avatar circular do usuário (lado direito)

#### 3.1.2 Estilo do Header
- **Fundo**: Branco ou transparente sobre fundo claro
- **Borda**: Sutil na parte inferior ou sem borda
- **Posicionamento**: Fixo ou sticky no topo
- **Alinhamento**: Distribuído entre esquerda (logo+navegação) e direita (ações)

### 3.2 Breadcrumb
- **Separador**: ">" entre níveis
- **Itens**: Início > Explorar Projetos > EcoSensors IoT
- **Estilo**: Texto pequeno, cor cinza, com ícone de casa no primeiro item
- **Clique**: Apenas "Início" e "Explorar Projetos" são links; o item atual é texto

### 3.3 Hero do Projeto

#### 3.3.1 Badges de Classificação
- **Badge MVP Funcional**: Fundo verde/azul claro, texto escuro
- **Badge ODS 9**: Fundo laranja claro, texto laranja escuro, ícone de alvo
- **Badge Eficiência Energética 4.0**: Fundo azul claro, texto azul, ícone de raio
- **Estilo**: Pills arredondadas, fonte pequena, ícone + texto
- **Alinhamento**: Esquerda, acima do título

#### 3.3.2 Título
- **Texto**: "EcoSensors IoT — Monitoramento Industrial Sustentável"
- **Estilo**: Fonte grande, negrito, cor escura
- **Tamanho**: Estimativa visual: 28-32px
- **Separador**: "—" entre nome e subtítulo

#### 3.3.3 Descrição
- **Texto**: Descrição sobre rede descentralizada de sensores inteligentes com telemetria via LoRaWAN e IA para auditoria de consumo térmico, emissões e desperdício
- **Estilo**: Fonte regular, cor cinza médio, largura limitada
- **Tamanho**: Estimativa visual: 14-15px

#### 3.3.4 Ações do Projeto
- **Botão Salvar**:
  - Estilo: Outline/borda, ícone de bookmark
  - Texto: "Salvar"
- **Botão Compartilhar**:
  - Estilo: Outline/borda, ícone de compartilhar
  - Texto: "Compartilhar"
- **Botão Falar com Criador**:
  - Estilo: Primário laranja, ícone de chat
  - Texto: "Falar com Criador"
  - Cor de fundo: Laranja
  - Cor do texto: Branco
- **Alinhamento**: Esquerda, abaixo da descrição
- **Espaçamento**: Gap entre botões

### 3.4 Grid de Conteúdo Principal

#### 3.4.1 Coluna Esquerda - Mídia
- **Tipo**: Imagem/vídeo em destaque do projeto
- **Conteúdo**: Imagem de ambiente industrial com painel de controle e ecrãs
- **Estilo**: Largura total da coluna, cantos arredondados, sombra sutil
- **Border radius**: Estimativa visual: 12-16px

#### 3.4.2 Coluna Direita - Cards Informativos

##### Card: Deploy no Vercel
- **Ícone**: Foguete
- **Título**: "Deploy no Vercel"
- **Subtítulo**: "Demonstração ao Vivo"
- **Descrição**: "Painel analítico em tempo real com streaming de telemetria MQTT simulada e telemetria de fábrica."
- **Link**: "ecosensors-pilot.vercel.app" com ícone de external link
- **Estilo**: Card branco, borda sutil, padding interno, cantos arredondados

##### Card: Repositório Open-Source
- **Ícone**: Código/terminal
- **Título**: "Repositório Open-Source"
- **Licença**: "Licença MIT • Firmware & UI"
- **Descrição**: "Firmware para ESP32-S3 em C++, pipeline de ingestão Python e dashboard Next.js com Tailwind."
- **Link**: URL do GitHub com ícone de external link
- **Estatística**: "142" com ícone de estrela
- **Estilo**: Card branco, borda sutil, padding interno, cantos arredondados

### 3.5 Navegação por Abas/Pills
- **Tipo**: Abas horizontais com estilo de pills/pills
- **Abas**:
  - Visão Geral
  - Stack & Repositórios
  - Vagas e Necessidades (3) — com badge numérico
  - Contato com o Criador
- **Estilo**: 
  - Aba ativa: fundo escuro, texto branco
  - Abas inativas: fundo transparente ou claro, texto cinza
  - Cantos arredondados
  - Hover: mudança sutil de cor
- **Separador**: Linha sutil abaixo das abas

### 3.6 Conteúdo da Aba Ativa
- **Título da seção**: "Canal Aberto de Diálogo Técnico & Parcerias ODS 9"
- **Descrição**: Texto explicando que Lucas Silveira costuma responder propostas de mentoria, pilotos industriais e códigos em menos de 24 horas
- **Badge**: "Ativo hoje no InovaHub" com indicador verde
- **Estilo**: Fundo branco, padding generoso, texto alinhado à esquerda

### 3.7 Seção do Criador

#### 3.7.1 Perfil
- **Avatar**: Foto circular do criador
- **Nome**: "Lucas Silveira"
- **Badge de verificação**: Ícone de check azul + "Verificado"
- **Cargo**: "Engenheiro de Computação & Pesquisador"
- **Localização**: "USP São Carlos • Lab. Automação Sustentável"
- **Biografia**: Texto descritivo sobre experiência em redes IoT, eficiência energética, mentor do Hackathon, etc.

#### 3.7.2 Tags/Habilidades
- **Tags**: 
  - #SistemasEmbarcados
  - #ODS9
  - #TinyML
  - #Industria4_0
- **Estilo**: Pills pequenas, fundo cinza claro, texto cinza escuro

### 3.8 Formulário de Mensagem Direta

#### 3.8.1 Cabeçalho
- **Título**: "Enviar Mensagem Direta ao Criador"
- **Subtítulo**: "Sua mensagem chegará diretamente à caixa de prioridade de Lucas Silveira e no chat integrado do InovaHub."
- **Tempo médio**: Badge "Tempo médio: ~24h" no canto superior direito

#### 3.8.2 Campos do Formulário
- **Layout**: Grid 2 colunas para campos lado a lado
- **Campos**:
  1. **Seu Nome Completo** (obrigatório)
     - Label com asterisco vermelho
     - Placeholder: "Ex.: Dra. Marina Duarte"
  2. **E-mail Corporativo ou Acadêmico** (obrigatório)
     - Label com asterisco vermelho
     - Placeholder: "marina@industria.com.br"
  3. **Sua Instituição / Empresa ou GitHub** (obrigatório)
     - Label com asterisco vermelho
     - Placeholder: "Ex.: Ambev Tech / Polo Industrial Campin"
  4. **Motivo do Contato** (obrigatório)
     - Select/dropdown
     - Placeholder: "Selecione a finalidade..."
  5. **Mensagem para Lucas Silveira** (obrigatório)
     - Textarea
     - Placeholder: "Olá Lucas, estou acompanhando a evolução do EcoSensors no InovaHub e temos interesse em avaliar um piloto na nossa linha de envase térmico..."
     - Contador: "Mínimo 30 caracteres"

#### 3.8.3 Consentimento
- **Checkbox**: "Desejo receber uma cópia autenticada e protocolo por e-mail"
- **Estilo**: Checkbox customizado, texto pequeno

#### 3.8.4 Ação
- **Botão**: "Enviar Mensagem Direta"
- **Estilo**: Fundo laranja, texto branco, ícone de seta
- **Largura**: Largura total
- **Aviso**: "Comunicação protegida e auditada pelo InovaHub" com ícone de cadeado

### 3.9 Canais Diretos de Contato

#### 3.9.1 Lista de Canais
- **E-mail Institucional**:
  - Endereço: "lucas.silveira@inovahub.usp.br"
  - Botão: "Copiar" (com ícone)
- **WhatsApp Comercial**:
  - Número: "+55 (16) 99821-3342"
  - Botão: "Conversar" (com ícone)
- **Links Externos**:
  - LinkedIn
  - GitHub
  - Lattes
- **Estilo**: Lista horizontal com ícones, botões secundários

### 3.10 Seção Inovação Aberta & Parcerias (ODS 17)
- **Título**: "Inovação Aberta & Parcerias (ODS 17)"
- **Descrição**: "Lucas aceita pilotos não-comerciais para validação científica de testes."
- **Estilo**: Card com borda sutil, ícone de ODS, texto informativo

### 3.11 Footer
- **Logo**: InovaHub com descrição da plataforma
- **Descrição**: Texto sobre plataforma colaborativa de aceleração e fomento tecnológico alinhada aos ODS
- **Badge**: "ODS 9 • INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA"
- **Links organizados em colunas**:
  - Navegação: Início, Destaques, Explorar Projetos, Publicar Solução
  - Recursos do Hackathon: Repositório GitHub, Documentação Técnica, ODS da ONU, Guia de Mentoria
  - Termos & Legal: Termos de Uso, Política de Privacidade, Propriedade Intelectual, Código de Conduta
- **Copyright**: "© 2025 InovaHub. Plataforma de Inovação Aberta e Sustentabilidade. Todos os direitos reservados."
- **Badge**: "Parceria Global SDG 17" no canto inferior direito
- **Fundo**: Azul muito claro ou branco
- **Borda superior**: Sutil

## 4. Guia de Estilo Visual

### 4.1 Paleta de Cores
- **Cor primária**: Laranja (#F97316 ou similar) - botões principais, ícones de destaque, links de ação
- **Cor de fundo principal**: Branco ou azul muito claro
- **Cor de texto principal**: Cinza muito escuro/preto (#0F172A ou similar)
- **Cor de texto secundário**: Cinza médio (#64748B ou similar)
- **Cor de sucesso/verificação**: Verde (#10B981 ou similar)
- **Cor de badges ODS**: 
  - ODS 9: Laranja
  - ODS 17: Azul/roxo
- **Cor de fundo de cards**: Branco
- **Cor de bordas**: Cinza claro (#E2E8F0 ou similar)

### 4.2 Tipografia
- **Fonte**: Estimativa visual: Inter, SF Pro, ou fonte sans-serif moderna
- **Tamanhos estimados**:
  - Título do projeto: 28-32px
  - Título de seção: 18-20px
  - Corpo de texto: 14-15px
  - Labels: 13-14px
  - Placeholders: 13-14px
- **Pesos**:
  - Títulos: Semibold/negrito (600-700)
  - Corpo: Regular (400)
  - Labels: Medium (500)

### 4.3 Espaçamento e Layout
- **Container principal**: Centralizado, largura máxima de 1200-1280px
- **Padding horizontal**: Estimativa visual: 40-60px
- **Gap entre seções**: Estimativa visual: 40-60px vertical
- **Grid principal**: 2 colunas (esquerda ~60%, direita ~40%)
- **Border radius**: 
  - Cards: 12-16px
  - Botões: 8-12px
  - Inputs: 8-12px
  - Badges/pills: 9999px (totalmente arredondado)
- **Sombras**: Sutil, espalhada, cor cinza clara

### 4.4 Ícones
- **Estilo**: Linha fina ou preenchido suave
- **Tamanho**: 16-20px
- **Cores**: Cinza para ícones decorativos, azul para verificação, laranja para ações principais, verde para sucesso

### 4.5 Componentes Específicos

#### 4.5.1 Badges/Pills
- **Forma**: Totalmente arredondados (border-radius: 9999px)
- **Padding**: Pequeno horizontal e vertical
- **Fonte**: Pequena, medium
- **Cores de fundo**: Cores pastéis com texto escuro correspondente

#### 4.5.2 Cards Informativos
- **Borda**: 1px sólida cinza claro
- **Fundo**: Branco
- **Padding**: Generoso interno
- **Hover**: Estimativa visual: sombra sutil ou borda mais escura

#### 4.5.3 Botões
- **Primário**: Laranja, texto branco, padding horizontal generoso
- **Secundário/Outline**: Borda cinza claro, fundo transparente ou branco
- **Tamanho**: Altura estimada: 36-40px

## 5. Comportamentos e Estados

### 5.1 Estados de Interação
- **Botões primários**: Hover com laranja mais escuro
- **Botões outline**: Hover com fundo cinza claro
- **Cards**: Hover com sombra sutil ou elevação
- **Links**: Hover com sublinhado ou mudança de cor
- **Aba ativa**: Fundo escuro, texto branco
- **Aba inativa**: Hover com fundo ligeiramente mais escuro

### 5.2 Formulário
- **Campos obrigatórios**: Marcados com asterisco vermelho
- **Validação**: Estimativa visual: borda vermelha para erro, verde para sucesso
- **Checkbox**: Estado padrão não marcado
- **Select**: Dropdown com seta indicadora
- **Textarea**: Altura estimada: 100-120px

### 5.3 Acessibilidade
- **Contraste**: Estimativa visual: adequado entre texto e fundo
- **Foco**: Estados de foco visíveis
- **Labels**: Presentes para todos os campos
- **Navegação por teclado**: Estimativa visual: suportada
- **ARIA**: Estimativa visual: labels e roles apropriados

## 6. Responsividade

### 6.1 Desktop (>1024px)
- Layout atual: grid de 2 colunas na área principal
- Header completo com todos os links visíveis
- Breadcrumb visível
- Formulário em grid 2 colunas

### 6.2 Tablet (768px - 1024px)
- Estimativa visual: grid empilhado ou coluna única
- Header pode simplificar (esconder links menos importantes)
- Cards informativos empilhados abaixo da mídia

### 6.3 Mobile (<768px)
- Estimativa visual: layout empilhado verticalmente
- Header com menu hamburger
- Hero com badges empilhadas
- Grid principal em coluna única
- Formulário em coluna única
- Canais de contato empilhados

## 7. Observações Técnicas

- **Navegação estruturada**: Breadcrumb clara para navegação hierárquica
- **Contexto de projeto**: Rico, com múltiplas formas de engajamento (visualizar, contatar, colaborar)
- **Integração social**: Links para GitHub, LinkedIn, Lattes, WhatsApp
- **Tom de comunicação**: Profissional, técnico mas acessível, orientado a colaboração científica/industrial
- **Call-to-action múltiplo**: Salvar, Compartilhar, Falar com Criador, Enviar Mensagem
- **Verificação de criador**: Badge de verificação aumenta confiança
- **Contextualização ODS**: Forte alinhamento com ODS 9 e ODS 17
- **Transparência**: Tempo médio de resposta, status ativo, canais diretos
- **Deploy demonstrável**: Link para Vercel permite ver funcionamento real
- **Código aberto**: Repositório GitHub com estatísticas

---

*Análise baseada na imagem: docs/prototipo/Pagina_individual_projeto.jpeg*
*Data da análise: 2026-10-08*
