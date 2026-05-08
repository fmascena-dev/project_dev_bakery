# 🥐 DevBakery

> Projeto front-end completo de uma padaria artesanal fictícia, desenvolvido com HTML5, CSS3 e JavaScript puro (Vanilla JS). Sem frameworks, sem dependências externas (exceto Google Fonts via CDN).

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Demonstração](#demonstração)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Páginas](#páginas)
- [Funcionalidades](#funcionalidades)
- [Design e Estilo](#design-e-estilo)
- [Formulários](#formulários)
- [JavaScript](#javascript)
- [Acessibilidade](#acessibilidade)
- [Boas Práticas Aplicadas](#boas-práticas-aplicadas)
- [Como Executar](#como-executar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Sobre o Projeto

A **DevBakery** é um projeto front-end completo que simula o site institucional de uma padaria artesanal. O objetivo é demonstrar boas práticas de desenvolvimento web moderno utilizando apenas as tecnologias fundamentais da web: HTML, CSS e JavaScript.

O projeto cobre desde a página inicial com apresentação da marca até formulários funcionais com validação, modais de feedback e uma experiência de usuário polida com animações suaves e suporte a modo escuro.

## Demonstração

Abra o arquivo `index.html` diretamente no navegador ou sirva a pasta com um servidor local (ver [Como Executar](#como-executar)).

### Capturas de tela

| Página | Descrição |
| --- | --- |
| `index.html` | Página inicial com hero, produtos, sobre e depoimentos |
| `contato.html` | Formulário de contato com mapa e informações |
| `pedidos.html` | Formulário de pedidos especiais com múltiplos campos |
| `feedback.html` | Avaliação por estrelas e comentários |
| `cadastro.html` | Cadastro completo com busca de CEP automática |

## Estrutura de Arquivos

```text
projeto_padaria/
│
├── index.html          # Página inicial
├── contato.html        # Página de contato
├── pedidos.html        # Página de pedidos especiais
├── feedback.html       # Página de feedback / avaliação
├── cadastro.html       # Página de cadastro de usuário
├── README.md           # Esta documentação
│
├── css/
│   └── style.css       # Folha de estilos global (todas as páginas)
│
└── js/
    └── main.js         # Script JavaScript global (todas as páginas)
```

> Arquitetura intencional de **arquivo único** por tipo: um CSS e um JS compartilhados por todas as páginas, evitando duplicação e facilitando manutenção.

## Páginas

### `index.html` — Página Inicial

A vitrine da DevBakery. Composta pelas seções:

| Seção | Conteúdo |
| --- | --- |
| **Hero** | Chamada principal com título, descrição, dois CTAs e estatísticas animadas (clientes, anos, produtos) |
| **Produtos** | Grid de 6 cards de produtos com imagem, categoria, descrição e preço |
| **Sobre** | História da padaria com imagem, distintivo de anos e cards de diferenciais |
| **Depoimentos** | Três cards de avaliação de clientes com estrelas e foto |
| **CTA Banner** | Faixa de chamada para pedidos especiais e contato |
| **Footer** | Logo, links, endereço, horário e redes sociais |

### `contato.html` — Contato

Página dividida em duas colunas:

- **Coluna esquerda:** informações de contato (endereço, telefone, e-mail, horário) e placeholder de mapa
- **Coluna direita:** formulário de contato

**Campos do formulário:**

| Campo | Tipo | Validação |
| --- | --- | --- |
| Nome Completo | `text` | `required` |
| E-mail | `email` | `required` |
| Telefone | `tel` | `pattern` com máscara automática |
| Assunto | `select` | `required` — 7 opções |
| Mensagem | `textarea` | `required` |

### `pedidos.html` — Pedidos Especiais

Formulário dividido em três seções (fieldsets):

### Dados Pessoais

| Campo | Tipo |
| --- | --- |
| Nome Completo | `text` (required) |
| Telefone | `tel` com máscara |
| E-mail | `email` |

### Detalhes do Pedido

| Campo | Tipo | Opções |
| --- | --- | --- |
| Tipo de Produto | `radio` | Bolo, Torta, Pães, Doces, Salgados, Outro |
| Sabor / Recheio | `select` com `optgroup` | 12 opções em 3 grupos |
| Tamanho | `radio` | Pequeno (10 p.), Médio (20 p.), Grande (30 p.), Extra Grande (50+ p.) |
| Data de Entrega | `date` | `required` — mínimo 3 dias a partir de hoje (definido via JS) |

### Informações Adicionais

| Campo | Tipo |
| --- | --- |
| Observações Especiais | `textarea` |
| Orçamento Máximo | `number` |
| Forma de Entrega | `select` — Retirada / Entrega |

### `feedback.html` — Feedback

Página com três cards informativos e o formulário de avaliação.

**Campos do formulário:**

| Campo | Tipo | Validação |
| --- | --- | --- |
| Nome Completo | `text` | `required` |
| E-mail | `email` | `required` |
| Produto / Serviço | `select` com `optgroup` | `required` — 10 opções |
| Avaliação Geral | Star rating (radios estilizados) | `required` — 1 a 5 estrelas |
| O que mais gostou | `checkbox` estilizado | 6 opções opcionais |
| Comentário | `textarea` | opcional |
| Indicaria a DevBakery | `select` | 4 opções |

> A avaliação por estrelas atualiza dinamicamente um texto descritivo conforme a nota selecionada (ex.: "🤩 Excelente — Adoramos você!").

### `cadastro.html` — Cadastro

O formulário mais completo do projeto, com sidebar de benefícios e indicador de etapas (steps bar).

**Barra de etapas:** indicador visual de progresso com 4 passos que atualiza automaticamente conforme o usuário interage com cada fieldset.

**1. Dados Pessoais:**

| Campo | Tipo | Notas |
| --- | --- | --- |
| Nome Completo | `text` | required |
| E-mail | `email` | required |
| Telefone | `tel` | máscara automática |
| Data de Nascimento | `date` | usado para brinde de aniversário |
| Senha | `password` | required, mínimo 8 caracteres |

**2. Endereço:**

| Campo | Tipo | Notas |
| --- | --- | --- |
| CEP | `text` | máscara `00000-000`, busca automática via ViaCEP |
| Rua | `text` | preenchido automaticamente pelo CEP |
| Número | `text` | |
| Complemento | `text` | |
| Bairro | `text` | preenchido automaticamente pelo CEP |
| Cidade | `text` | preenchida automaticamente pelo CEP |
| Estado (UF) | `select` | todos os 27 estados + DF, pré-selecionado automaticamente pelo CEP |

**3. Preferências:**

Checkboxes estilizados com 8 categorias de produtos: Pães Artesanais, Croissants, Bolos, Tortas, Doces, Salgados, Sem Glúten e Vegano.

**4. Termos:**

Dois toggles switch estilizados:

- Aceite de promoções e novidades (opcional)
- Aceite dos Termos de Uso e Política de Privacidade (`required`)

## Funcionalidades

### Modo Escuro / Claro

- Alternância via botão 🌙 / ☀️ na navbar
- Preferência salva no `localStorage` com a chave `devbakery-theme`
- Na inicialização, respeita a preferência do sistema operacional (`prefers-color-scheme`) caso não haja preferência salva
- Transição suave em todos os elementos via `transition: background, color`

### Menu Mobile (Hamburger)

- Ativado abaixo de 768px
- Animação de abertura com `slideDown` via CSS
- Fecha ao clicar em qualquer link, ao pressionar ESC ou ao clicar fora do menu
- Ícone do hambúrguer anima para um "X" quando aberto

### Navbar com Scroll

- A navbar tem `position: fixed` e aplica a classe `.scrolled` ao rolar a página
- A classe adiciona um leve blur e sombra mais pronunciada
- Link ativo é destacado automaticamente pela função `setActiveNavLink()` baseada no `window.location.pathname`

### Animações de Scroll Reveal

- Elementos com as classes `.reveal`, `.reveal-left` e `.reveal-right` começam invisíveis
- São observados via `IntersectionObserver` com `threshold: 0.1`
- Ao entrarem na viewport, recebem a classe `.visible` e animam suavemente
- Suporte a `transition-delay` inline para animações em sequência (staggered)

### Modais de Confirmação

Cada formulário tem seu próprio modal de sucesso. Comportamento:

1. Usuário submete o formulário
2. O botão entra no estado de carregamento (animação shimmer de 1,2s simulando requisição)
3. O formulário é resetado
4. O modal aparece centralizado com animação spring
5. O modal fecha ao clicar no botão, no overlay ou pressionar ESC

### Inputs Customizados

**Radio e Checkbox estilizados:** os inputs nativos ficam ocultos (`display: none`). Cliques no elemento `.radio-option` / `.checkbox-option` pai marcam o input programaticamente e atualizam a classe `.selected` / `.checked` via JavaScript.

**Toggle Switch:** para os aceites de termos, usando `<input type="checkbox">` oculto com um elemento `.toggle-switch` estilizado como um interruptor deslizante.

### Máscaras de Input

Implementadas via evento `input` sem dependências externas:

- **Telefone:** formata automaticamente para `(XX) XXXXX-XXXX`
- **CEP:** formata automaticamente para `XXXXX-XXX`

### Busca de CEP (ViaCEP)

No formulário de cadastro, ao digitar o CEP e clicar em "Buscar" (ou pressionar Enter no campo):

1. Faz uma requisição `fetch` para `https://viacep.com.br/ws/{cep}/json/`
2. Preenche automaticamente: rua, bairro, cidade e estado
3. Exibe um toast de sucesso ou erro conforme o resultado
4. O botão fica desabilitado durante a requisição

### Contador de Estatísticas

Os números na seção de estatísticas do hero animam de `0` até o valor final ao entrarem na viewport, utilizando `IntersectionObserver` e `setInterval`.

### Sistema de Toast

Notificações temporárias no canto inferior direito da tela. Suporta 4 tipos: `success`, `error`, `warning`, `info`. Desaparecem automaticamente após 3,5 segundos.

## Design e Estilo

### Paleta de Cores

#### Modo Claro

| Variável | Valor | Uso |
| --- | --- | --- |
| `--primary` | `#8B4513` | Cor principal (marrom sela) |
| `--secondary` | `#D2691E` | Cor secundária (chocolate) |
| `--accent` | `#F5A623` | Destaque (âmbar / mel) |
| `--bg` | `#FFF8F0` | Fundo principal |
| `--bg-secondary` | `#FEF0DC` | Fundo de seções alternadas |
| `--bg-card` | `#FFFFFF` | Fundo de cards |
| `--text` | `#3D2B1F` | Texto principal |
| `--text-light` | `#7A5C4F` | Texto secundário |
| `--border` | `#E8D5C4` | Bordas |

#### Modo Escuro

| Variável | Valor | Uso |
| --- | --- | --- |
| `--primary` | `#E8924A` | Cor principal |
| `--bg` | `#1A0F08` | Fundo principal |
| `--bg-card` | `#2D1A0E` | Fundo de cards |
| `--text` | `#F5E6D3` | Texto principal |
| `--border` | `#4A2F1E` | Bordas |

### Tipografia

| Fonte | Uso | Pesos |
| --- | --- | --- |
| **Playfair Display** | Títulos (h1–h5), logo, preços | 400, 500, 600, 700 |
| **Inter** | Corpo do texto, labels, botões | 300, 400, 500, 600 |

Carregadas via Google Fonts com um único `@import` no topo do CSS.

### Animações CSS

| Nome | Uso |
| --- | --- |
| `fadeInLeft` | Hero — seção de conteúdo |
| `fadeInRight` | Hero — seção visual |
| `fadeInUp` | Elementos genéricos |
| `slideDown` | Menu mobile ao abrir |
| `pulse` | Indicador verde no hero badge |
| `float` | Cards flutuantes do hero |
| `popIn` | Ícone do modal ao abrir |
| `shimmer` | Botão de submit durante carregamento |

### Layout

- **CSS Grid** para layouts de duas colunas (hero, about, contact, cadastro)
- **CSS Grid `auto-fill`** com `minmax` para grids responsivos de cards
- **Flexbox** para componentes internos (navbar, buttons, cards, footer)
- **`position: sticky`** no sidebar de benefícios do cadastro

### Responsividade

| Breakpoint | Comportamento |
| --- | --- |
| `> 768px` | Layout completo de desktop |
| `≤ 768px` | Menu hamburger, layouts em coluna única, hero reorganizado |
| `≤ 480px` | Grids de produtos e cards em coluna única, radio/checkbox em coluna |

## Formulários

### Validação

Todos os formulários usam o atributo `novalidate` para desabilitar a validação nativa do browser, delegando o controle para o JavaScript via `form.checkValidity()` e `form.reportValidity()`. Isso permite personalização futura do feedback visual.

### Campos Obrigatórios

Marcados com `required` no HTML e com `aria-required="true"` para leitores de tela. Um asterisco vermelho (`*`) visual é adicionado via `<span class="required-star">`.

### Feedback Visual de Validação

- Input com valor válido e preenchido: borda verde (`border-color: #22c55e`)
- Input com valor inválido após interação: borda vermelha (`border-color: #ef4444`)
- Feito com seletores CSS nativos: `:valid:not(:placeholder-shown)` e `:invalid:not(:placeholder-shown):not(:focus)`

### Modais por Página

| Página | ID do Modal | Mensagem |
| --- | --- | --- |
| contato | `modalContato` | Confirmação de envio de mensagem |
| pedidos | `modalPedido` | Confirmação de pedido recebido |
| feedback | `modalFeedback` | Agradecimento pela avaliação |
| cadastro | `modalCadastro` | Boas-vindas e desconto de 10% |

## JavaScript

O arquivo `js/main.js` é estruturado em funções independentes, todas inicializadas no evento `DOMContentLoaded`:

```text
initTheme()          → Modo escuro/claro
initMobileMenu()     → Menu hamburger
initNavbarScroll()   → Classe .scrolled na navbar
setActiveNavLink()   → Destaque do link atual
initScrollReveal()   → Animações ao scroll
initCustomInputs()   → Radio / checkbox / toggle customizados
initForms()          → Submit + modal de sucesso
animateCounters()    → Contadores de estatísticas
initMasks()          → Máscaras de telefone e CEP
```

Funções globais (usadas via `onclick` inline nas páginas):

```text
showModal(id)        → Exibe o modal pelo ID
closeModal(id)       → Fecha o modal pelo ID
showToast(msg, type) → Exibe notificação temporária
```

---

## Acessibilidade

O projeto aplica práticas de acessibilidade recomendadas pela especificação WAI-ARIA e pelas diretrizes WCAG:

- **Tags semânticas:** `<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<address>`, `<fieldset>`, `<legend>`
- **Atributos ARIA:** `aria-label`, `aria-labelledby`, `aria-required`, `aria-expanded`, `aria-current`, `aria-modal`, `aria-hidden`, `role`
- **Navegação por teclado:** modal fecha com `ESC`; todos os elementos interativos são focáveis
- **`aria-describedby`:** campos com dicas extras referenciam o elemento de dica pelo ID
- **Contraste:** a paleta foi escolhida respeitando contraste adequado em ambos os modos
- **Ordem de leitura:** estrutura HTML reflete a ordem lógica de leitura
- **Breadcrumb:** nas páginas internas, com `aria-current="page"` no item atual

## Boas Práticas Aplicadas

**HTML:**

- DOCTYPE correto e `lang="pt-BR"` declarado
- `<meta charset>`, `<meta viewport>` e `<meta description>` em todas as páginas
- `<link rel="icon">` com SVG inline em todas as páginas
- `autocomplete` nos campos de formulário para facilitar o preenchimento
- `<fieldset>` e `<legend>` para agrupar campos relacionados semanticamente
- `<optgroup>` nos selects com muitas opções para melhor organização

**CSS:**

- Variáveis CSS (`custom properties`) centralizadas para todo o design system
- Seletor `[data-theme="dark"]` para modo escuro sem JavaScript extra
- `clamp()` para tipografia fluída e responsiva
- `transition` suave em todos os elementos interativos
- Scrollbar personalizada com `::-webkit-scrollbar`
- Nenhum `!important` utilizado

**JavaScript:**

- Zero dependências externas
- Funções pequenas e com responsabilidade única
- `IntersectionObserver` para animações de scroll (mais performático que `scroll` event)
- `passive: true` no listener de scroll da navbar
- Delegação de eventos onde aplicável
- `localStorage` para persistência do tema

## Como Executar

### Opção 1 — Abrir diretamente no navegador

Clique duas vezes no arquivo `index.html`. Funciona para todas as páginas exceto a busca de CEP (que requer servidor por causa do CORS).

### Opção 2 — Live Server (VS Code)

1. Instale a extensão **Live Server** no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione **"Open with Live Server"**

> A busca de CEP via ViaCEP requer um servidor local (Opções 2, 3 ou 4) pois navegadores bloqueiam requisições `fetch` em `file://` por política de CORS.

## Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
| --- | --- | --- |
| HTML5 | — | Estrutura semântica |
| CSS3 | — | Estilização, animações, responsividade |
| JavaScript ES6+ | — | Interatividade, validação, API |
| Google Fonts | CDN | Tipografia (Playfair Display + Inter) |
| ViaCEP API | REST | Preenchimento automático de endereço |

> Nenhum framework CSS (Bootstrap, Tailwind) ou biblioteca JS (jQuery, React) foi utilizado. Projeto 100% vanilla.

## Autor

Desenvolvido como projeto de estudo de front-end com foco em:

- Componentização sem frameworks
- Design system com CSS Variables
- Acessibilidade e semântica HTML
- UX com feedback visual imediato
- Progressive Enhancement

---

*© 2024 DevBakery — Feito com 🧡 e muito fermento.*
