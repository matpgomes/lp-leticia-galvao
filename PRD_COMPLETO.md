# PRD — Template Landing Page de Vendas (Completo)

> Documento de referência unificado para replicação em massa da estrutura de landing page.
> Inclui: Design System, Estrutura de Seções, Sistema de Animações, Ordenação de Conversão, Componentes Interativos, SEO e Checklist.
> Para criar uma nova LP, basta: substituir o **Design System** (cores, fontes) + **imagens/conteúdo** + **dados de contato**.

---

## 1. Visão Geral

### Propósito

Landing page de alta conversão para profissionais de saúde, beleza e estética. Otimizada para mobile, SEO e velocidade. Funil: Atenção → Prova Social → Autoridade → Conversão (WhatsApp).

### Stack Técnico

| Tecnologia | Versão | Função |
|---|---|---|
| React | 19.x | Framework UI |
| Preact | 10.x | Alias do React (bundle ~50% menor) |
| Vite | 8.x | Build tool + dev server |
| TypeScript | 5.x | Tipagem |
| Lucide React | 1.x | Biblioteca de ícones |
| CSS Puro | — | Estilos via custom properties (sem Tailwind) |

### Arquitetura

- **SPA** (Single Page Application) — tudo em `src/App.tsx` (~945 linhas)
- **Design Tokens** via CSS custom properties em `src/index.css`
- **Estilos** em `src/App.css` (~2048 linhas)
- **SEO/Structured Data** em `index.html`
- **Build otimizado** com Critical CSS inline via plugin customizado em `vite.config.ts`
- **Preact alias** para bundle menor (configurado em `vite.config.ts`)

### Arquivos Principais

```
src/
├── App.tsx          → Todos os componentes e lógica
├── App.css          → Todos os estilos
├── index.css        → Design tokens + reset CSS
├── main.tsx         → Entry point React
index.html           → SEO, meta tags, structured data JSON-LD
vite.config.ts       → Build config, critical CSS plugin, Preact alias
package.json         → Dependências
public/              → Imagens, vídeos, favicons
```

---

## 2. Ordenação das Seções (Fluxo de Conversão)

A página segue um funil de vendas visual. Cada seção tem um papel no convencimento e a ordem foi pensada para guiar a visitante da curiosidade até o agendamento:

```
PRELOADER (2s)
    ↓
NAVBAR (fixo, acompanha scroll)
    ↓
HERO ← Primeira impressão: proposta de valor + CTA + credibilidade (badge Google)
    ↓
RESULTADOS ← Prova visual: galeria de transformações (before/after)
    ↓
PROCEDIMENTOS ← Amplitude: mostra todos os tratamentos disponíveis
    ↓
DEPOIMENTOS ← Prova social: reviews reais do Google
    ↓
VÍDEOS DE ATENDIMENTO ← Prova de experiência: vídeos 9:16 do consultório
    ↓
PASSOS ← Simplificação: mostra que agendar é fácil (4 passos)
    ↓
BIO ← Autoridade: quem é o profissional + stats numéricos
    ↓
INSTAGRAM ← Presença social: posts do feed
    ↓
CARD CTA ← Conversão final: checklist + botão WhatsApp
    ↓
MAPA ← Localização: Google Maps embed
    ↓
FAQ ← Quebra de objeções: perguntas frequentes
    ↓
FOOTER ← Contato, links, social
    ↓
WHATSAPP FLOAT (fixo, sempre visível)
SCROLL TO TOP (fixo, aparece após 400px)
```

### Lógica da Ordem (Funil de Convencimento)

| # | Seção | Papel no Funil |
|---|---|---|
| 1 | **Hero** | Captura atenção imediata com proposta clara |
| 2 | **Resultados** | Prova que funciona com fotos reais |
| 3 | **Procedimentos** | Mostra que há opções além do principal |
| 4 | **Depoimentos** | Valida com voz de quem já fez |
| 5 | **Vídeos** | Mostra o ambiente real (transparência) |
| 6 | **Passos** | Remove a barreira de "como faço?" |
| 7 | **Bio** | Constrói confiança na profissional |
| 8 | **Instagram** | Reforço social + canal ativo |
| 9 | **CTA Final** | Fecha a conversão com resumo de benefícios |
| 10 | **Mapa + FAQ** | Resolvem dúvidas restantes |

### Seções Opcionais (Expansão)

Seções que podem ser adicionadas conforme o projeto:

| Seção | Posição Ideal | Papel |
|---|---|---|
| **VSL (Vídeo de Vendas)** | Entre Hero e Resultados | Aprofunda com vídeo — quem não lê, assiste |
| **CrioHD / Tecnologia** | Entre VSL e Resultados | Convence quem quer detalhes técnicos |
| **Parceiros / Marcas** | Após Bio | Associação de autoridade com marcas |
| **Blog / Conteúdo** | Antes do FAQ | SEO + educação |

---

## 3. Design System (Variáveis Substituíveis)

Todas as variáveis estão em `src/index.css` dentro de `:root`. Para trocar o visual da LP, basta alterar estes valores.

### 3.1 Paleta de Cores

```css
:root {
  /* ── Primary Palette (COR PRINCIPAL — trocar para cada marca) ── */
  --color-gold: #B8956B;           /* Accent principal */
  --color-gold-light: #D4BC94;     /* Accent claro (hovers, destaques) */
  --color-gold-dark: #9A7B56;      /* Accent escuro (textos, labels) */

  /* ── Secondary (COR SECUNDÁRIA — complementar) ── */
  --color-rose: #C9A9A6;           /* Secundária */
  --color-rose-light: #E2D0CE;     /* Secundária clara */
  --color-rose-dark: #A88B88;      /* Secundária escura */

  /* ── Neutrals (raramente precisam mudar) ── */
  --color-black: #1A1A1A;
  --color-text-primary: #2D2926;   /* Títulos, textos fortes */
  --color-text-body: #5C5856;      /* Corpo do texto */
  --color-text-muted: #767069;     /* Textos secundários */
  --color-white: #FFFFFF;

  /* ── Backgrounds (ajustar tom conforme a marca) ── */
  --bg-ivory: #FDFBF8;            /* Fundo principal */
  --bg-cream: #F8F5F0;            /* Seções alternadas */
  --bg-warm: #F3EDE5;             /* Fundo mais quente */
  --bg-warm-deep: #EBE3D8;        /* Fundo mais profundo */

  /* ── Functional (manter fixos) ── */
  --color-whatsapp: #25D366;
  --color-card-bg: rgba(255, 255, 255, 0.85);
  --color-border: rgba(184, 149, 107, 0.15);       /* ⚠️ Ajustar RGB para cor primária */
  --color-border-strong: rgba(184, 149, 107, 0.3);  /* ⚠️ Ajustar RGB para cor primária */
}
```

### 3.2 Gradientes

```css
:root {
  --gradient-gold: linear-gradient(135deg, var(--color-gold-light) 0%, var(--color-gold) 50%, var(--color-gold-dark) 100%);
  --gradient-hero: linear-gradient(160deg, var(--bg-ivory) 0%, var(--bg-cream) 40%, var(--bg-warm) 100%);
  --gradient-section: linear-gradient(180deg, var(--bg-ivory) 0%, var(--bg-cream) 100%);
}
```

### 3.3 Tipografia

```css
:root {
  /* ── Fontes (trocar para cada marca) ── */
  --font-heading: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* ── Escala tipográfica (Major Third 1.25x — geralmente não precisa mudar) ── */
  --text-xs:   0.75rem;    /* 12px */
  --text-sm:   0.875rem;   /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.25rem;    /* 20px */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  1.875rem;   /* 30px */
  --text-4xl:  2.25rem;    /* 36px */
  --text-5xl:  3rem;       /* 48px */
  --text-6xl:  3.75rem;    /* 60px */
}
```

**Pesos carregados do Google Fonts:**
- Inter: 300, 400, 500, 600, 700
- Playfair Display: 400, 500, 600, 700 (normal + italic)

### 3.4 Espaçamento

```css
:root {
  /* Grid de 8px (não precisa mudar) */
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.25rem;   /* 20px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px — padding padrão de seção */
  --space-32: 8rem;      /* 128px */
}
```

### 3.5 Radius, Shadows, Transitions

```css
:root {
  /* ── Radius ── */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;    /* Pílulas e círculos */

  /* ── Shadows (layered, sutis) ── */
  --shadow-sm:   0 1px 3px rgba(45,41,38,0.04), 0 1px 2px rgba(45,41,38,0.02);
  --shadow-md:   0 4px 16px rgba(45,41,38,0.06), 0 1px 4px rgba(45,41,38,0.03);
  --shadow-lg:   0 12px 40px rgba(45,41,38,0.08), 0 4px 12px rgba(45,41,38,0.04);
  --shadow-xl:   0 20px 60px rgba(45,41,38,0.1), 0 8px 20px rgba(45,41,38,0.05);
  --shadow-gold: 0 8px 32px rgba(184,149,107,0.15); /* ⚠️ Ajustar RGB para cor primária */

  /* ── Transitions ── */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;

  /* ── Layout ── */
  --container-max: 1200px;
  --container-narrow: 800px;
  --navbar-height: 72px;  /* 64px no mobile */
}
```

### 3.6 Breakpoints Responsivos

| Breakpoint | Alvo | Mudanças principais |
|---|---|---|
| `> 1024px` | Desktop | Layouts completos (3-4 colunas) |
| `≤ 1024px` | Tablet | 2 colunas, hero 1:1, font sizes reduzidos |
| `≤ 768px` | Mobile | 1 coluna, navbar mobile, hero stacked, carousels horizontais |
| `≤ 400px` | Small mobile | Hero h1 menor, steps 1 coluna, stats empilhados |

---

## 4. Estrutura de Seções (Especificação Detalhada)

### 4.1 Preloader

| Atributo | Valor |
|---|---|
| **Propósito** | Branding enquanto carrega |
| **Posição** | `position: fixed` fullscreen, z-index 99999 |
| **Elementos** | Logo (imagem .webp, height 48px) |
| **Animação** | Logo com breathing (opacity pulse), fade-out após load ou max 3s |
| **Background** | `var(--bg-ivory)` |

**Conteúdo necessário:**
- 1x Logo (formato .webp, qualquer dimensão — exibido em height 48px)

---

### 4.2 Navbar

| Atributo | Valor |
|---|---|
| **Propósito** | Navegação + CTA de conversão |
| **Posição** | `position: fixed`, top, z-index 9999 |
| **Altura** | 72px desktop / 64px mobile |
| **Background** | Transparente → glassmorphism on scroll (`rgba(bg, 0.92)` + `blur(20px)`) |
| **Trigger** | `scrollY > 100` → adiciona classe `navbar--scrolled` |

**Layout Desktop:**
```
[ Logo ]                    [ Link1  Link2  Link3  Link4 ]  [ CTA Button ]
```

**Layout Mobile:**
```
[ Hamburger ☰ ]     [ Logo ]
```
- Menu lateral slide-in (300px width, esquerda)
- Overlay escuro com blur ao abrir

**Elementos:**
- Logo (imagem, height 36px)
- 4 links de navegação (âncoras para seções)
- 1 botão CTA (`btn-cta--sm`) → link WhatsApp
- Mobile: menu overlay com links + CTA + telefone

**Links de navegação (configuráveis):**
```js
const links = [
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Resultados',    href: '#resultados' },
  { label: 'Sobre',         href: '#bio' },
  { label: 'Contato',       href: '#mapa' },
]
```

**Interações:**
- Scroll > 100px: ativa glassmorphism
- Hover em links: underline animado (gold, width 0→100%)
- Mobile: hamburger abre menu lateral

---

### 4.3 Hero

| Atributo | Valor |
|---|---|
| **ID** | `#hero` |
| **Propósito** | Primeira impressão + CTA principal |
| **Altura** | `min-height: 100vh` (100dvh) |
| **Background** | Gradient 3 tons (ivory → cream → warm) + círculo radial decorativo |

**Layout Desktop (grid 1.1fr / 0.9fr):**
```
┌──────────────────────┬──────────────────┐
│  BRAND TEXT (label)   │                  │
│  H1 Título Principal │   FOTO           │
│  Subtítulo           │   (max 460px)    │
│  [BOTÃO CTA]         │                  │
│  [Badge Google 5★]   │                  │
└──────────────────────┴──────────────────┘
              ↓ (scroll indicator)
```

**Layout Mobile (1 coluna):**
```
┌──────────────────────┐
│     FOTO (260px)     │
│   BRAND TEXT          │
│   H1 Título           │
│   Subtítulo           │
│   [BOTÃO CTA]         │
│   [Badge Google 5★]   │
└──────────────────────┘
```

**Por que esse layout?**
- O conteúdo à esquerda fica dividido em `--top` (brand + título) e `--bottom` (subtítulo + CTA + badge)
- A imagem ocupa as 2 linhas (row: 1/3), centralizada verticalmente
- Isso permite que o título e a foto fiquem alinhados no topo, e o CTA + badge fiquem abaixo do título mas ao lado da foto
- Grid CSS: `grid-template-columns: 1.1fr 0.9fr` — texto ocupa levemente mais espaço que a foto

**Elementos:**
1. **Brand text** — Label uppercase com barra gold à esquerda
2. **H1** — Título principal com `<em>` em itálico/gold
3. **Subtítulo** — 2 linhas descritivas, max-width 480px
4. **CTA Button** — `btn-cta` com link WhatsApp, uppercase
5. **Badge Google** — Card branco com: ícone Google SVG + título + certificação + estrela 5.0
6. **Foto principal** — `srcSet` com 455w e 910w, `border-radius: 24px`, `box-shadow: xl`
7. **Scroll indicator** — Chevron animado flutuando (apenas desktop)

**Conteúdo necessário:**
- 1x Foto principal (2 tamanhos: 455w e 910w, formato .webp, aspect ~4:5)
- Texto do brand, H1, subtítulo
- Texto e dados do badge (nota, certificação)

---

### 4.4 Resultados (Before/After)

| Atributo | Valor |
|---|---|
| **ID** | `#resultados` |
| **Propósito** | Prova visual de resultados reais |
| **Background** | `var(--gradient-section)` (ivory → cream) |

**Layout:**
```
        [ Section Label ]
        [ Section Title ]
        [ Subtítulo ]

┌──────────────┬──────────────┬──────────────┐
│  SLIDER 1    │  SLIDER 2    │  SLIDER 3    │  ← Grid 3 colunas (1fr)
│  Before|After│  Before|After│  Before|After│
│  [Label]     │  [Label]     │  [Label]     │
└──────────────┴──────────────┴──────────────┘
```

**Mobile:** 1 coluna empilhada.

**Componente BeforeAfterSlider:**
- Aspect ratio 1:1 (quadrado)
- Imagem "after" como fundo, "before" com clip-path sobreposta
- Divisor vertical branco (2px) + handle circular (40px, branco, borda gold)
- Labels "Before" / "After" com fade baseado na posição
- Drag: mouse + touch, posição 0-100%

**Conteúdo necessário:**
- N pares de imagens before/after (.webp, 640x640px, quadradas)
- 1 label por par (nome do procedimento)

---

### 4.5 Procedimentos (Cards)

| Atributo | Valor |
|---|---|
| **ID** | `#procedimentos` |
| **Propósito** | Apresentar serviços oferecidos |
| **Background** | Padrão (ivory) |

**Layout:**
```
       [ Section Label ]
       [ Section Title ]

┌──────────┬──────────┬──────────┐
│  [Icon]  │  [Icon]  │  [Icon]  │  ← Grid 3 colunas desktop
│  Title   │  Title   │  Title   │  ← 2 colunas tablet
│  Desc    │  Desc    │  Desc    │  ← 1 coluna mobile
├──────────┼──────────┼──────────┤
│  [Icon]  │  [Icon]  │  [Icon]  │
│  Title   │  Title   │  Title   │
│  Desc    │  Desc    │  Desc    │
└──────────┴──────────┴──────────┘
```

**Card:**
- Background branco, border sutil (gold 15% opacity)
- Border-radius: 16px, Padding: 32px 24px
- Ícone: 56x56px, bg cream, cor gold → hover: bg gold, cor branco
- Título: font-heading, 18px, weight 500
- Descrição: font-body, 14px, text-body
- Hover: translateY(-4px) + shadow-lg + fundo dourado; ícone rotaciona -5° e escala 1.1x

**Conteúdo necessário por card:**
- Ícone (Lucide icon name), Título (string), Descrição (1-2 frases)

---

### 4.6 Depoimentos (Carousel)

| Atributo | Valor |
|---|---|
| **ID** | `#depoimentos` |
| **Propósito** | Prova social — reviews de clientes |
| **Background** | Padrão (ivory) |

**Layout:**
```
       [ Section Label ]
       [ Section Title ]

  ◀ ┌────────────┐┌────────────┐┌────────────┐ ▶
    │ ★★★★★      ││ ★★★★★      ││ ★★★★★      │
    │ "Texto..." ││ "Texto..." ││ "Texto..." │   ← Scroll horizontal
    │ Nome  Data ││ Nome  Data ││ Nome  Data │
    └────────────┘└────────────┘└────────────┘
                    ● ○ ○ ○ ○                     ← Dots
```

**Comportamento:**
- Scroll snap horizontal (`scroll-snap-type: x mandatory`)
- Cards: 33.33% width desktop / 85% mobile
- Autoplay: 4s (pausa ao interagir, retoma após 6s)
- Drag com mouse (cursor: grab), Touch: scroll nativo + snap
- Dots de navegação clicáveis
- Desktop 1280px+: viram grid 2x2 (não mais scroll)

**Card:**
- Background branco, border sutil, border-radius 16px
- Aspas decorativas (::before, `\201C`, 64px, gold light, opacity 0.4)
- 5 estrelas gold (ícone Star filled)
- Texto: itálico, 14px
- Meta: nome (bold) + data, separados por border-top

**Conteúdo necessário por depoimento:**
- Nome (string), Texto (1-2 frases), Data (string)

---

### 4.7 Vídeos de Atendimento

| Atributo | Valor |
|---|---|
| **ID** | `#atendimento-videos` |
| **Propósito** | Mostrar experiência real no atendimento |
| **Background** | `var(--bg-cream)` |

**Layout:**
```
       [ Section Label ]
       [ Section Title ]
       [ Subtítulo ]

┌───────────────┬───────────────┐
│  VIDEO 1      │  VIDEO 2      │  ← Grid 2 colunas (configurável)
│  9:16         │  9:16         │  ← Aspect ratio vertical
│  ▶ Play       │  ▶ Play       │
└───────────────┴───────────────┘
```

**Mobile:** Scroll horizontal com snap centralizado.

**Responsivo dos cards:**

| Breakpoint | Largura do card | Comportamento |
|---|---|---|
| Default | `min(280px, 70vw)` | Scroll com snap |
| 768px- | `min(240px, 65vw)`, snap: center | Padding centralizado |
| 480px- | `min(220px, 70vw)` | Botão play menor |
| 1024px+ | 260px fixo | Sem snap, overflow visível |
| 1280px+ | 280px fixo | Grid centrado |
| 1440px+ | 320px fixo | Mais espaço |

**Conteúdo necessário:**
- 2-3 vídeos (formato .mp4, aspect ratio 9:16)
- posterTime opcional (segundos, default 0.5)

---

### 4.8 Passos (Steps)

| Atributo | Valor |
|---|---|
| **ID** | `#passos` |
| **Propósito** | Simplificar a jornada de conversão |
| **Background** | `var(--bg-cream)` |

**Layout Desktop (4 colunas com linha conectora):**
```
       [ Section Label ]
       [ Section Title ]

  ──────────────────────────────────────── (linha 1px, gold border)
     ⬤           ⬤           ⬤           ⬤
   [Icon]       [Icon]       [Icon]       [Icon]
   1o Passo     2o Passo     3o Passo     4o Passo
   Texto        Texto        Texto        Texto
```

**Mobile:** 2 colunas (sem linha conectora). Small mobile: 1 coluna.

**Step:**
- Ícone: círculo 88px, branco, border gold, ícone gold
- Hover: bg gold, ícone branco, rotação -8°, escala 1.1x
- Badge: pill preto com texto "1o Passo"
- Texto: 14px, max-width 200px

**Linha Conectora (CSS puro com `:has()`):**
```css
.steps-grid::before {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1.2s var(--ease-out);
}
.steps-grid:has(.revealed)::before {
  transform: scaleX(1);
}
```

**Conteúdo necessário por step:**
- Ícone (Lucide icon), Badge text, Descrição (1 frase)

---

### 4.9 Bio

| Atributo | Valor |
|---|---|
| **ID** | `#bio` |
| **Propósito** | Construir autoridade e confiança |
| **Background** | `var(--gradient-section)` |

**Layout Desktop (grid 0.85fr / 1.15fr):**
```
┌──────────────────┬───────────────────────────┐
│                  │  SPECIALTY LABEL           │
│   FOTO           │  Nome Completo (H2)        │
│   (com borda     │  Credencial                │
│    offset)       │  Parágrafo 1               │
│                  │  Parágrafo 2               │
│                  │  ┌─────┬──────┬──────┐     │
│                  │  │+500 │ 5.0  │ 47+  │     │
│                  │  │procs│google│avali.│     │
│                  │  └─────┴──────┴──────┘     │
└──────────────────┴───────────────────────────┘
```

**Mobile:** 1 coluna, foto centralizada (300px), texto centrado.

**Contadores numéricos:** Animação de contagem de 0 até o valor final em 2s com easing quadrático — cada stat tem seu próprio IntersectionObserver.

**Conteúdo necessário:**
- 1x Foto profissional (.webp, ~400x500px)
- Specialty label, nome, credencial
- 2 parágrafos de bio
- 3 stats (número + label)

---

### 4.10 Instagram Widget

| Atributo | Valor |
|---|---|
| **ID** | `#instagram` |
| **Propósito** | Prova social + direcionar para rede social |
| **Background** | `var(--bg-cream)` |

**Layout:**
```
┌──────────────────────────────────────────────┐
│  [Avatar] @handle                   [Seguir] │
│           Bio text                           │
├──────────┬──────────┬──────────┐             │
│  Post 1  │  Post 2  │  Post 3  │             │
├──────────┼──────────┼──────────┤  ← Grid 3x2│
│  Post 4  │  Post 5  │  Post 6  │  (2x mobile)│
└──────────┴──────────┴──────────┘             │
```

**Elementos:**
- Avatar: 52px circle, borda gradient gold, padding 2px
- Handle: bold, link externo com ícone
- Botão "Seguir no Instagram": gradient gold, branco, border-radius 10px
- Posts: aspect-ratio 1:1, hover: scale(1.05) + overlay escuro + ícone coração

**Conteúdo necessário:**
- 6 imagens de posts (.jpg, quadradas ~400x400px)
- Avatar, Handle, URL do perfil, Bio curta

---

### 4.11 Card CTA

| Atributo | Valor |
|---|---|
| **ID** | `#agendamento` |
| **Propósito** | Push final de conversão |

**Layout:**
```
         ┌─ gradient gold top bar (3px) ──────┐
         │     Título (H2)                     │
         │     Subtítulo                       │
         │     ✓ Item checklist 1              │
         │     ✓ Item checklist 2              │
         │     ✓ Item checklist 3              │
         │     ✓ Item checklist 4              │
         │     ✓ Item checklist 5              │
         │     [ BOTÃO CTA WHATSAPP ]          │
         └─────────────────────────────────────┘
```

**Card:** Max-width 520px, centered, background branco, border-radius 24px, shadow-lg.
**Barra gold no topo:** Animação `shimmer` infinita (gradiente deslizante, 4s por ciclo).

**Conteúdo necessário:**
- Título (H2), Subtítulo, 3-6 itens de checklist, Texto do botão CTA

---

### 4.12 Mapa

| Atributo | Valor |
|---|---|
| **ID** | `#mapa` |
| **Propósito** | Mostrar localização física (confiança) |

**Layout:**
```
       [ Section Label ]
       [ Section Title ]
       [ 📍 Endereço completo ]

┌──────────────────────────────────────┐
│          Google Maps Embed           │
│          (aspect-ratio 16:9)         │
└──────────────────────────────────────┘
```

**Conteúdo necessário:**
- Endereço completo
- URL do Google Maps embed

---

### 4.13 FAQ (Accordion)

| Atributo | Valor |
|---|---|
| **ID** | `#faq` |
| **Propósito** | Quebrar objeções comuns |
| **Background** | `var(--bg-cream)` |

**Comportamento:**
- Max-width: 800px (container-narrow), centrado
- Single-open: apenas 1 item aberto por vez
- Animação: max-height 0→500px com transition
- Chevron rotaciona 180° ao abrir
- Pergunta aberta: cor gold-dark

**Conteúdo necessário:**
- Array de objetos `{ q: "pergunta", a: "resposta" }`, recomendado 7-10 perguntas

---

### 4.14 Footer

| Atributo | Valor |
|---|---|
| **ID** | `#footer` |
| **Background** | `var(--color-text-primary)` (escuro) |
| **Cor texto** | `rgba(255, 255, 255, 0.75)` |

**Layout Desktop (grid 1.3fr / 1fr / 0.8fr / 0.8fr):**
```
┌─────────────┬───────────────┬──────────┬──────────┐
│  Logo       │  CONTATO      │  LINKS   │  SOCIAL  │
│  Nome       │  📞 Telefone  │  Link 1  │  IG      │
│  Credencial │  📍 Endereço  │  Link 2  │          │
│             │  🕐 Horário   │  Link 3  │          │
└─────────────┴───────────────┴──────────┴──────────┘
         © 2026 Nome — Todos os direitos reservados
```

**Mobile:** 1 coluna, texto centrado.

---

### 4.15 WhatsApp Float Button

| Atributo | Valor |
|---|---|
| **Posição** | Fixed, bottom-right, z-index 9998 |
| **Tamanho** | Círculo 60px (54px mobile), verde WhatsApp (#25D366) |
| **Aparece** | Junto com fim do preloader (2s), fade + scale |
| **Animação** | `pulseRing` — anel verde expansivo, 2s loop |
| **Desktop hover** | Expande para pill com label |
| **Mobile** | Sempre círculo (sem expansão) |

### 4.16 Scroll to Top

| Atributo | Valor |
|---|---|
| **Posição** | Fixed, bottom-right (acima do WA), z-index 9997 |
| **Aparece** | `scrollY > 400` |
| **Entrada** | opacity 0→1 + translateY 20px→0 |
| **Clique** | `window.scrollTo({ top: 0, behavior: 'smooth' })` |

**Hierarquia vertical (bottom-right):**
```
        ┌──────┐
        │  ↑   │  ← Scroll to Top (z-index 9997)
        └──────┘
        ┌──────┐
        │  WA  │  ← WhatsApp Float (z-index 9998)
        └──────┘
────────────────── bottom da tela
```

---

## 5. Sistema de Animações

### 5.1 Sistema de Reveal on Scroll

Todas as animações de entrada são disparadas por scroll. Cada elemento é observado individualmente por um `IntersectionObserver` global. Quando o elemento entra no viewport, ele recebe a classe `revealed` e a transição acontece uma única vez.

#### Configuração Técnica

| Parâmetro | Valor |
|---|---|
| **Duração** | 0.8s |
| **Easing** | `cubic-bezier(0.16, 1, 0.3, 1)` — ease-out suave |
| **Propriedades animadas** | `opacity` e `transform` (GPU-accelerated) |
| **Threshold** | 12% do elemento visível |
| **Root margin** | -30px inferior (dispara ligeiramente após entrar na tela) |

#### Classes CSS de Reveal

```css
/* Estado inicial (invisível) */
.reveal {
  opacity: 0;
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

/* Direções de entrada */
.reveal--up    { transform: translateY(18px); }   /* sobe de baixo */
.reveal--left  { transform: translateX(-24px); }   /* vem da esquerda */
.reveal--right { transform: translateX(24px); }    /* vem da direita */
.reveal--scale { transform: scale(0.96); }         /* cresce de dentro */

/* Estado final (visível) */
.revealed {
  opacity: 1 !important;
  transform: none !important;
}
```

| Classe | Efeito | Uso |
|---|---|---|
| `reveal--up` | Desliza de baixo para cima (18px) | Textos, cards, itens de lista |
| `reveal--left` | Desliza da esquerda para direita (24px) | Imagens à esquerda (bio) |
| `reveal--right` | Desliza da direita para esquerda (24px) | Conteúdo à direita (bio) |
| `reveal--scale` | Escala de 0.96 para 1 | Cards de resultado, posts, vídeo |

#### IntersectionObserver Global

```javascript
// Criado uma vez, após loaded = true
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed')  // Anima
      observer.unobserve(entry.target)         // Nunca mais observa
    }
  })
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -30px 0px'
})

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
```

---

### 5.2 Stagger (Efeito Cascata)

Vários elementos animam em sequência usando `transition-delay` inline no JSX:

```tsx
// Exemplo: 4 cards de resultado, 70ms entre cada
{RESULTS.map((r, i) => (
  <div className="reveal reveal--scale"
       style={{ transitionDelay: `${i * 0.07}s` }}>
    ...
  </div>
))}
```

**Tabela de delays por seção:**

| Seção | Tipo | Delay entre items | Total (último item) |
|---|---|---|---|
| **SectionHeader** | label → título → sub | 80ms | 160ms |
| **Resultados** | cards | 70ms | 210ms |
| **Procedimentos** | 6 cards | 70ms | 350ms |
| **Depoimentos** | 4 cards | 70ms | 210ms |
| **Vídeos** | 3 cards | 80ms | 160ms |
| **Passos** | 4 cards | 100ms | 300ms |
| **Bio stats** | 3 blocos | 70ms | 140ms |
| **Instagram posts** | 6 posts | 50ms | 250ms |
| **CTA checklist** | 5 items | 60ms | 240ms |
| **FAQ items** | 9 perguntas | 40ms | 320ms |

---

### 5.3 Animações do Hero (Keyframes CSS)

O Hero **não usa** o sistema de reveal. As animações são baseadas em keyframes CSS que disparam automaticamente no carregamento da página, após o preloader.

| Elemento | Keyframe | Delay |
|---|---|---|
| Brand text | `fadeSlideDown` | 0.2s |
| H1 | `fadeSlideUp` | 0.4s |
| Subtítulo | `fadeIn` | 0.7s |
| CTA | `fadeSlideUp` | 0.9s |
| Badge Google | `fadeSlideUp` | 1.1s |
| Foto | `fadeSlideLeft` | 0.5s |
| Scroll indicator | `bounce` (loop infinito) | — |

---

### 5.4 Animações por Seção (Mapa Completo)

| Seção | Elemento | Tipo | Detalhes |
|---|---|---|---|
| **Hero** | Conteúdo | keyframe | fadeSlideUp/Down (ver tabela acima) |
| **Resultados** | Título | reveal--up | stagger 80ms |
| **Resultados** | Cards | reveal--scale | stagger 70ms |
| **Procedimentos** | Título | reveal--up | stagger 80ms |
| **Procedimentos** | Cards (6) | reveal--up | stagger 70ms |
| **Depoimentos** | Título | reveal--up | stagger 80ms |
| **Depoimentos** | Cards (4) | reveal--up | stagger 70ms |
| **Vídeos** | Título | reveal--up | stagger 80ms |
| **Vídeos** | Cards (3) | reveal--up | stagger 80ms |
| **Passos** | Título | reveal--up | stagger 80ms |
| **Passos** | Cards (4) | reveal--up | stagger 100ms |
| **Passos** | Linha conectora | CSS `:has()` | scaleX 0→1, 1.2s |
| **Bio** | Imagem | reveal--left | — |
| **Bio** | Conteúdo | reveal--right | 100ms delay |
| **Bio** | Stats (3) | reveal--scale | stagger 70ms |
| **Bio** | Contadores | requestAnimationFrame | 2s, easing quadrático |
| **Instagram** | Header | reveal--up | — |
| **Instagram** | Posts (6) | reveal--scale | stagger 50ms |
| **Card CTA** | Card | reveal--scale | — |
| **Card CTA** | Checklist (5) | reveal--up | stagger 60ms |
| **Mapa** | Título | reveal--up | stagger 80ms |
| **Mapa** | Endereço | reveal--up | — |
| **Mapa** | Iframe | reveal--scale | 100ms delay |
| **FAQ** | Título | reveal--up | stagger 80ms |
| **FAQ** | Items (9) | reveal--up | stagger 40ms |

---

### 5.5 Animações Permanentes (Loop Infinito)

Estas animações rodam continuamente, independente do scroll:

| Elemento | Animação | Duração |
|---|---|---|
| Preloader (logo) | `breathing` — pulsa opacidade e escala | 2s loop |
| Barra do CTA card | `shimmer` — gradiente deslizante | 4s loop |
| Botão WhatsApp flutuante | `pulseRing` — anel verde expansivo | 2s loop |
| Spinner do vídeo | `spin` — rotação 360° | 1s loop |
| Scroll indicator (hero) | `bounce` — salta 8px | 2s loop |

---

### 5.6 Keyframes de Animação (Definições)

```css
@keyframes fadeIn         { to { opacity: 1 } }
@keyframes fadeSlideUp    { to { opacity: 1; transform: translateY(0) } }
@keyframes fadeSlideDown  { to { opacity: 1; transform: translateY(0) } }
@keyframes fadeSlideLeft  { to { opacity: 1; transform: translateX(0) } }
@keyframes fadeScale      { to { opacity: 1; transform: scale(1) } }
@keyframes scaleIn        { to { opacity: 1; transform: scale(1) } }
@keyframes heroFloat      { /* bounce Y -8px, infinite */ }
@keyframes preloader-breathe { /* opacity pulse, infinite */ }
@keyframes preloader-expand  { /* scaleX 0→1 */ }
@keyframes preloader-fade    { /* opacity→0, visibility hidden */ }
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes pulseRing {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.2); opacity: 0; }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes breathing {
  0%, 100% { opacity: 0.7; transform: scale(0.98); }
  50% { opacity: 1; transform: scale(1.02); }
}
```

---

### 5.7 Sequência de Entrada (Preloader → Conteúdo)

```
t=0.0s  → Preloader visível (logo breathing)
          Página força scroll para top (scrollRestoration = 'manual')

t=2.0s  → Preloader fade-out
          IntersectionObserver é criado e observa todos os .reveal
          WhatsApp float aparece (fade + scale)
          Hero começa animações de keyframe:

t=2.2s  → Brand text desliza de cima (fadeSlideDown)
t=2.3s  → Conteúdo desliza de baixo (fadeSlideUp)
t=2.4s  → H1 desliza de baixo
t=2.5s  → Imagem desliza da direita (fadeSlideLeft)
t=2.7s  → Subtítulo faz fade-in
t=2.7s  → CTA desliza de baixo
t=2.9s  → CTA completamente visível
t=3.0s  → Badge Google desliza de baixo

          Scroll indicator já está bouncing

t=???   → Usuário começa a scrollar
          Elementos .reveal animam conforme entram no viewport
          Cada um anima apenas uma vez
```

---

### 5.8 Interações de Hover

| Elemento | Efeito |
|---|---|
| **Cards de procedimento** | translateY(-4px) + shadow-lg + fundo gold; ícone rotaciona -5° e escala 1.1x |
| **Ícones dos passos** | Rotação -8°, escala 1.1x, bg gold |
| **Posts do Instagram** | Imagem escala 1.05x + overlay escuro + ícone coração |
| **Botão play (vídeo)** | Escala 1.08x + rosa mais forte |
| **Links da navbar** | Underline animado (gold, width 0→100%) |
| **WhatsApp float** | Expande width com label (desktop) |
| **Scroll to top** | Sobe 2px |

---

## 6. Componentes Interativos Reutilizáveis

### 6.1 useReveal() Hook

```tsx
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  // IntersectionObserver com threshold 0.15
  // Dispara uma vez e desconecta
  return { ref, visible }
}
```

### 6.2 BeforeAfterSlider

| Prop | Tipo | Descrição |
|---|---|---|
| `before` | string | URL da imagem "antes" |
| `after` | string | URL da imagem "depois" |
| `alt` | string | Alt text descritivo |
| `label` | string | Nome do procedimento |

- Drag: mouse + touch
- Clip-path para reveal
- Labels com fade baseado na posição
- Handle circular branco/gold

### 6.3 VideoCard (Lazy)

| Prop | Tipo | Descrição |
|---|---|---|
| `src` | string | URL do vídeo .mp4 |
| `posterTime` | number? | Segundo para extrair thumbnail (default: 0.5) |

**Ciclo de Vida (3 estados):**

```
ESTADOS:
                                  clique
  ┌────────┐    handlePlay()    ┌──────────┐    video.play()    ┌──────────┐
  │  IDLE  │ ──────────────→ │  LOADING │ ──────────────→   │ PLAYING  │
  └────────┘                   └──────────┘                    └──────────┘
      ↑                            │                               │
      │         play() falha       │      video.ended / paused     │
      ├────────────────────────────┘                               │
      └────────────────────────────────────────────────────────────┘
```

**Sistema de Poster Automático:**
1. Cria `<video>` offscreen (não visível)
2. Aguarda `loadeddata` → faz seek para 0.1s
3. Aguarda `seeked` → desenha frame no canvas → converte para data URL (JPEG 80%)
4. Cleanup: remove listeners, pausa e limpa vídeo temporário

**Botão Play — Glass-morphism:**
```css
.video-card__play-circle {
  width: 72px; height: 72px;
  border-radius: 9999px;
  background: rgba(196, 149, 154, 0.35);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### 6.4 Testimonials Carousel

- Autoplay 4s com pause/resume
- Mouse drag com scroll snap
- Dots de navegação
- Layout measurements cacheados (performance)

### 6.5 FAQ Accordion

- Single-open (apenas 1 item expandido)
- max-height animation (0 ↔ 500px)
- Chevron rotation (0 ↔ 180°)

### 6.6 SectionHeader (Reutilizável)

Componente padrão de cabeçalho de seção com 3 elementos em stagger:

```tsx
<SectionHeader
  label="Label"       // reveal--up, delay 0ms
  title="Título"      // reveal--up, delay 80ms
  subtitle="Sub"      // reveal--up, delay 160ms
/>
```

---

## 7. Performance

### 7.1 Otimizações de Animação

- Apenas `opacity` e `transform` são animadas — ambas rodam na GPU sem causar reflow/repaint
- `will-change: opacity, transform` aplicado nos elementos `.reveal` para hint de composição
- Um único `IntersectionObserver` global observa todos os elementos (não um por seção)
- Observers são desconectados após o reveal (animação roda uma única vez)
- Contadores usam `requestAnimationFrame` para sincronizar com o refresh rate da tela
- `@media (prefers-reduced-motion: reduce)` desativa todas as animações

### 7.2 Otimizações de Build

1. **Preconnect**: Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`)
2. **Preload**: Logo (fetchpriority high), Hero image (srcset), Font stylesheet
3. **Critical CSS**: Plugin customizado no Vite que inline CSS above-the-fold
4. **Async CSS**: CSS não-crítico carregado via `onload` trick
5. **Module preload**: JS entry com `<link rel="modulepreload">`
6. **Preact alias**: React → Preact para bundle ~50% menor
7. **Lazy loading**: Vídeos e imagens abaixo do fold via IntersectionObserver
8. **WebP**: Todas as imagens em formato .webp
9. **Responsive images**: srcSet com múltiplos tamanhos para hero

---

## 8. SEO & Meta Tags

### 8.1 Meta Tags (index.html)

```html
<html lang="pt-BR">
<title>{TITULO} | {NOME} — {SUBTITULO}</title>
<meta name="description" content="{DESCRICAO_145_CHARS}" />
<link rel="canonical" href="{URL_CANONICA}" />

<!-- Open Graph -->
<meta property="og:title" content="{NOME} — {TITULO}" />
<meta property="og:description" content="{DESCRICAO_CURTA}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{URL}" />
<meta property="og:image" content="{URL}/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="pt_BR" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{NOME} — {TITULO}" />
<meta name="twitter:description" content="{DESCRICAO_CURTA}" />
<meta name="twitter:image" content="{URL}/og-image.jpg" />
```

### 8.2 Structured Data (JSON-LD)

4 schemas obrigatórios:

1. **MedicalBusiness** — Dados do negócio (nome, telefone, endereço, geo, horário, rating)
2. **Person** — Dados do profissional (nome, cargo, redes sociais)
3. **FAQPage** — Todas as perguntas do FAQ (array de Question/Answer)
4. **MedicalProcedure** — Array de procedimentos (nome, descrição, provider)

### 8.3 Arquivos SEO

- `robots.txt` — Allow all, sitemap reference
- `sitemap.xml` — URL canônica com lastmod

---

## 9. Pontos de Conversão (CTAs)

| Local | Tipo | Texto | Link |
|---|---|---|---|
| **Navbar** | Botão (sm) | "Agende sua Consulta" | WhatsApp |
| **Hero** | Botão (full) | "AGENDE SUA CONSULTA" | WhatsApp |
| **Mobile Menu** | Botão (full) | "AGENDE SUA CONSULTA" | WhatsApp |
| **Card CTA** | Botão (full) | "AGENDAR PELO WHATSAPP" | WhatsApp |
| **WhatsApp Float** | Circle/Pill | Ícone WA + "Agendar Consulta" | WhatsApp |

**Distribuição estratégica:**
```
  TOPO ─────────── Navbar CTA (sempre visível)
    │
    │──── Hero CTA
    │
    │     ... seções de prova social ...
    │
    │──── Card CTA (após toda a jornada)
    │
  BASE ─────────── WhatsApp Float (sempre visível)
```

O visitante nunca fica a mais de ~2 scrolls de um ponto de conversão.

**Link WhatsApp padrão:**
```
https://wa.me/{DDI}{DDD}{NUMERO}?text={MENSAGEM_ENCODED}
```

---

## 10. Inventário de Assets

### 10.1 Imagens por Seção

| Seção | Arquivo | Formato | Dimensão | Obrigatório |
|---|---|---|---|---|
| **Logo** | `logo.webp` | .webp | qualquer (exibido em 28-48px height) | ✅ |
| **Hero** | `hero-foto-455w.webp` | .webp | 455px width | ✅ |
| **Hero** | `hero-foto-910w.webp` | .webp | 910px width (2x) | ✅ |
| **Before/After** | `ba[N]-before.webp` | .webp | 640x640px (1:1) | ✅ (por par) |
| **Before/After** | `ba[N]-after.webp` | .webp | 640x640px (1:1) | ✅ (por par) |
| **Bio** | `bio-foto.webp` | .webp | ~400x500px | ✅ |
| **Instagram** | `ig-post-[1-6].jpg` | .jpg | ~400x400px (1:1) | ✅ (6 posts) |
| **Favicon** | `favicon.png` | .png | 32x32px | ✅ |
| **Favicon** | `favicon-192.png` | .png | 192x192px | ✅ |
| **OG Image** | `og-image.jpg` | .jpg | 1200x630px | ✅ |

### 10.2 Vídeos

| Seção | Formato | Aspect Ratio | Quantidade |
|---|---|---|---|
| **Vídeos Atendimento** | .mp4 | 9:16 (vertical) | 2-3 recomendados |

### 10.3 Ícones

Todos os ícones vêm da biblioteca **Lucide React**:
```
Phone, MapPin, Menu, X, ChevronDown, Star,
Calendar, FileText, Syringe, Smile,
ArrowRight, Check, Clock, Award, Shield
```

SVGs customizados inline: Google "G" logo, WhatsApp logo, Instagram logo, Play button, Coração, External link.

---

## 11. Constantes Configuráveis (App.tsx)

No topo de `App.tsx`, trocar:

```tsx
const WHATSAPP_LINK = 'https://wa.me/55XXXXXXXXXXX?text=Olá! Gostaria de agendar uma consulta.'
const PHONE = '(XX) XXXXX-XXXX'
const ADDRESS = 'Endereço completo'
const INSTAGRAM_URL = 'https://www.instagram.com/handle'
```

**Arrays de conteúdo a substituir:**
- `PROCEDURES[]` — 6 objetos `{ title, desc, icon }`
- `RESULTS[]` — 3 objetos `{ before, after, alt, label }`
- `TESTIMONIALS[]` — 5 objetos `{ name, text, date }`
- `VIDEOS_ATENDIMENTO[]` — 2-3 objetos `{ src, posterTime? }`
- `STEPS[]` — 4 objetos `{ icon, badge, text }`
- `FAQ_ITEMS[]` — 7-10 objetos `{ q, a }`
- `IG_POSTS[]` — 6 objetos `{ type: 'image', src, url }`

---

## 12. Responsividade — Comportamento Estrutural

### Mobile (≤768px)

- **Hero**: empilha em 1 coluna (foto → top → bottom)
- **Bio**: empilha (imagem em cima, conteúdo embaixo)
- **Procedimentos**: 1 coluna
- **Passos**: 2 colunas, **linha conectora removida**
- **Footer**: 1 coluna
- **Navbar**: hamburger → menu lateral (slide da esquerda, 300px)
- **Depoimentos**: scroll horizontal com snap
- **Vídeos**: scroll horizontal com snap centralizado
- **Pseudo-elements decorativos**: removidos (bordas offset da bio)

### Tablet (≤1024px)

- **Hero**: empilha mas com mais espaço
- **Procedimentos**: 2 colunas
- **Footer**: 2 colunas
- **Vídeos**: overflow visível, sem snap

### Desktop (≥1280px)

- **Depoimentos**: viram grid 2x2 (não mais scroll)
- **Vídeos**: grid centrado com cards maiores

---

## 13. Checklist de Replicação

### Passo 1: Clonar o projeto
```bash
cp -r lp-template lp-novo-cliente
cd lp-novo-cliente
```

### Passo 2: Design System (`src/index.css`)
- [ ] Trocar `--color-gold` / `--color-gold-light` / `--color-gold-dark` (cor primária)
- [ ] Trocar `--color-rose` / `--color-rose-light` / `--color-rose-dark` (cor secundária)
- [ ] Ajustar backgrounds se necessário (`--bg-ivory`, `--bg-cream`, `--bg-warm`)
- [ ] Ajustar RGB em `--color-border` e `--color-border-strong` para a nova cor primária
- [ ] Ajustar RGB em `--shadow-gold` para a nova cor primária
- [ ] Trocar `--font-heading` e `--font-body` se usar outras fontes

### Passo 3: Fontes (`index.html`)
- [ ] Atualizar URL do Google Fonts se trocar as fontes

### Passo 4: Imagens (`public/`)
- [ ] Substituir logo (.webp)
- [ ] Substituir foto hero (455w + 910w, .webp)
- [ ] Substituir pares before/after (.webp, 640x640)
- [ ] Substituir foto bio (.webp, ~400x500)
- [ ] Substituir 6 fotos Instagram (`ig-1.jpg` até `ig-6.jpg`, quadradas)
- [ ] Substituir vídeos (.mp4, 9:16)
- [ ] Substituir favicons (.png 32px + 192px)
- [ ] Substituir og-image.jpg (1200x630)

### Passo 5: Conteúdo (`src/App.tsx`)
- [ ] Atualizar constantes (WHATSAPP_LINK, PHONE, ADDRESS, INSTAGRAM_URL)
- [ ] Atualizar paths das imagens
- [ ] Atualizar Hero (brand text, H1, subtítulo, badge)
- [ ] Atualizar PROCEDURES[] (títulos, descrições, ícones)
- [ ] Atualizar RESULTS[] (paths, labels)
- [ ] Atualizar TESTIMONIALS[] (nomes, textos, datas)
- [ ] Atualizar VIDEOS_ATENDIMENTO[] (paths)
- [ ] Atualizar STEPS[] (textos)
- [ ] Atualizar Bio (specialty, nome, credencial, textos, stats)
- [ ] Atualizar IG_POSTS[] (paths, types)
- [ ] Atualizar Instagram handle e bio
- [ ] Atualizar CardCTA (título, subtítulo, checklist items)
- [ ] Atualizar FAQ_ITEMS[] (perguntas e respostas)
- [ ] Atualizar Footer (nome, credencial, horário, copyright)

### Passo 6: SEO (`index.html`)
- [ ] Atualizar `<title>` e `<meta description>`
- [ ] Atualizar `<link rel="canonical">`
- [ ] Atualizar Open Graph tags
- [ ] Atualizar Twitter Cards
- [ ] Atualizar preload paths das imagens
- [ ] Atualizar JSON-LD MedicalBusiness
- [ ] Atualizar JSON-LD Person
- [ ] Atualizar JSON-LD FAQPage
- [ ] Atualizar JSON-LD MedicalProcedure

### Passo 7: Config (`vite.config.ts`)
- [ ] Atualizar `server.port` se necessário
- [ ] Atualizar `server.allowedHosts` para o novo domínio

### Passo 8: Arquivos SEO
- [ ] Atualizar `robots.txt` (URL do sitemap)
- [ ] Atualizar `sitemap.xml` (URLs)

### Passo 9: Testar
- [ ] `npm install && npm run dev`
- [ ] Verificar todas as seções no desktop
- [ ] Verificar todas as seções no mobile (DevTools)
- [ ] Testar links WhatsApp
- [ ] Testar sliders before/after
- [ ] Testar carousel de depoimentos
- [ ] Testar vídeos (play/pause)
- [ ] Testar FAQ accordion
- [ ] Testar menu mobile
- [ ] `npm run build && npm run preview` (verificar build de produção)
