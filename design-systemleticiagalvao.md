# Design System — Clínica Dra. Letícia Galvão

---

## 1. Identidade Visual

### Essência da Marca
A marca transmite **sofisticação acessível**, **confiança clínica** e **beleza natural personalizada**. O posicionamento central é: *"O nosso padrão de beleza, é o seu!"* — reforçando individualidade e resultado natural.

### Tom & Personalidade
- **Elegante** sem ser inalcançável
- **Profissional** com calor humano
- **Confiável** — autoridade técnica com empatia
- **Feminina** sem ser infantil — sofisticação adulta

---

## 2. Paleta de Cores

### Cores Primárias
| Token | Hex | Uso |
|---|---|---|
| `--color-primary` | `#C4A882` | Dourado/bege quente — cor âncora da marca, fundos de destaque, cards |
| `--color-primary-light` | `#D9C9AD` | Variação clara do primário, backgrounds de seções |
| `--color-primary-dark` | `#A68B64` | Variação escura, hover states |

### Cores Neutras
| Token | Hex | Uso |
|---|---|---|
| `--color-neutral-white` | `#FFFFFF` | Backgrounds principais, cards sobrepostos |
| `--color-neutral-offwhite` | `#F5F0EB` | Background alternativo, seções suaves |
| `--color-neutral-warm-gray` | `#E8E0D6` | Bordas suaves, separadores |
| `--color-neutral-dark` | `#2C2C2C` | Texto principal, títulos |
| `--color-neutral-black` | `#1A1A1A` | Footer, contrastes fortes |

### Cores de Acentuação
| Token | Hex | Uso |
|---|---|---|
| `--color-accent-gold` | `#B8965A` | Detalhes decorativos, ícones, linhas de destaque |
| `--color-accent-rose` | `#C4828A` | CTAs secundários, elementos femininos sutis |

### Gradientes
| Token | Valor | Uso |
|---|---|---|
| `--gradient-hero` | `linear-gradient(135deg, rgba(196,168,130,0.15) 0%, rgba(255,255,255,0.8) 50%, rgba(196,168,130,0.1) 100%)` | Overlay do hero, glassmorphism |
| `--gradient-section` | `linear-gradient(180deg, #F5F0EB 0%, #FFFFFF 100%)` | Transição entre seções |

---

## 3. Tipografia

### Família Tipográfica
| Token | Fonte | Fallback | Uso |
|---|---|---|---|
| `--font-display` | `'Playfair Display'` | `Georgia, serif` | Títulos principais, hero, seções (H1, H2) |
| `--font-body` | `'Montserrat'` | `'Helvetica Neue', sans-serif` | Corpo de texto, descrições, navegação |
| `--font-accent` | `'Cormorant Garamond'` | `Georgia, serif` | Citações, taglines, elementos editoriais |

### Escala Tipográfica
| Token | Tamanho | Peso | Uso |
|---|---|---|---|
| `--text-hero` | `48px / 3rem` | `700 (Bold)` | Título principal do hero |
| `--text-h1` | `40px / 2.5rem` | `700 (Bold)` | Títulos de seção (SOBRE MIM, CONTATO) |
| `--text-h2` | `28px / 1.75rem` | `600 (SemiBold)` | Subtítulos |
| `--text-h3` | `20px / 1.25rem` | `600 (SemiBold)` | Nomes de serviços, cards |
| `--text-body` | `16px / 1rem` | `400 (Regular)` | Texto corrido |
| `--text-small` | `14px / 0.875rem` | `400 (Regular)` | Legendas, cargos da equipe |
| `--text-caption` | `12px / 0.75rem` | `500 (Medium)` | Labels, tags |

### Características Tipográficas
- Títulos em **caixa alta** (uppercase) com `letter-spacing: 0.05em`
- Sublinhado decorativo dourado abaixo dos títulos de seção (3px, `--color-accent-gold`)
- Corpo de texto com `line-height: 1.7` para leitura confortável

---

## 4. Espaçamento & Layout

### Sistema de Espaçamento (8px base)
| Token | Valor | Uso |
|---|---|---|
| `--space-xs` | `4px` | Micro espaçamentos internos |
| `--space-sm` | `8px` | Padding mínimo |
| `--space-md` | `16px` | Padding padrão de cards |
| `--space-lg` | `24px` | Gap entre elementos |
| `--space-xl` | `32px` | Margem entre blocos |
| `--space-2xl` | `48px` | Separação entre seções |
| `--space-3xl` | `64px` | Padding vertical de seções |
| `--space-4xl` | `96px` | Espaçamento hero |

### Grid
- **Max-width container**: `1200px`
- **Grid de serviços**: 3 colunas com gap de `24px`
- **Grid da equipe**: 1 fileira de 4 colunas, centralizado
- **Layout sobre mim**: 2 colunas (texto 55% | imagem 45%)

### Breakpoints
| Token | Valor |
|---|---|
| `--bp-mobile` | `480px` |
| `--bp-tablet` | `768px` |
| `--bp-desktop` | `1024px` |
| `--bp-wide` | `1280px` |

---

## 5. Componentes

### 5.1 Navegação
- **Estilo**: Horizontal, uppercase, espaçamento generoso
- **Fonte**: `--font-body`, peso 500, `--text-small`
- **Indicador ativo**: Linha superior dourada (3px)
- **Background**: Branco sólido com sombra sutil

### 5.2 Hero Section
- **Layout vertical**: Título → Foto principal → Texto (nesta ordem)
- **Título**: Display font, caixa alta, posicionado acima da foto
- **Foto principal**: Imagem da Dra. Letícia entre o título e o texto, com overlay glassmorphism
- **Card central**: Fundo branco semi-transparente (`rgba(255,255,255,0.85)`)
- **Backdrop-filter**: `blur(8px)`
- **Texto/Subtítulo**: Body font, peso 400, tom elegante, posicionado abaixo da foto

### 5.3 Cards de Serviço
- **Background**: `--color-neutral-offwhite` ou `--color-primary-light`
- **Border**: `1px solid --color-neutral-warm-gray`
- **Border-radius**: `0px` (cantos retos — estética sofisticada)
- **Padding**: `24px`
- **Título**: `--font-body`, uppercase, peso 700, `--text-h3`
- **Descrição**: `--font-body`, peso 400, `--text-body`
- **Hover**: Sombra sutil + borda dourada esquerda

### 5.4 Cards da Equipe
- **Imagem**: Retrato profissional, aspect-ratio `3:4`
- **Background card**: Branco com sombra suave
- **Nome**: Uppercase, bold
- **Cargo**: Regular, `--text-small`, cinza médio
- **Layout**: Imagem acima, texto abaixo centralizado

### 5.5 Seção de Contato
- **Background**: `--color-neutral-black` com texto branco
- **Grid**: 3 colunas (Endereço | Contato | Agendamento)
- **CTA WhatsApp**: Botão com borda branca, hover com fundo branco e texto escuro
- **Mapa**: Integrado abaixo

### 5.6 Botões
| Variante | Background | Texto | Border | Border-radius |
|---|---|---|---|---|
| Primário | `--color-primary` | `#FFFFFF` | none | `0px` |
| Secundário | transparent | `--color-neutral-dark` | `2px solid --color-neutral-dark` | `0px` |
| WhatsApp | transparent | `#FFFFFF` | `1px solid #FFFFFF` | `0px` |
| Ghost | transparent | `--color-primary-dark` | none | `0px` |

---

## 6. Iconografia & Elementos Decorativos

- **Estilo de ícones**: Line icons, peso fino (1.5px stroke)
- **Detalhes dourados**: Elementos decorativos dourados físicos (folhagens, vasos) — replicar digitalmente com `--color-accent-gold`
- **Linhas decorativas**: Sublinhados finos dourados sob títulos
- **Sem emojis** no site principal (apenas no Instagram)
- **Fotografia**: Tom quente, iluminação natural, fundo neutro bege/branco

---

## 7. Presença Digital

### Instagram (@draleticiagalvao)
- **Seguidores**: ~45.9k
- **Conteúdo**: Antes/depois, bastidores, educacional
- **Bio**: "Preenchimento Estratégico ®"
- **Highlights**: Clínica, Caixinha, Mentora, Noronha, McAMWC 2025
- **Tom**: Mais pessoal e próximo que o site

### Website
- **Seções**: Página Inicial, Sobre Mim, Nossa Equipe, Nossos Serviços, Contato
- **Estilo**: Clean, editorial, poucos elementos visuais competindo

---

## 8. Dados da Marca

| Campo | Valor |
|---|---|
| **Nome comercial** | Clínica Dra. Letícia Galvão Estética Avançada |
| **Proprietária** | Dra. Letícia Galvão |
| **Formação** | Biomédica Esteta, MBA em Cosmetologia |
| **Localização** | R. Otávio Carneiro, 143 — Icaraí, Niterói, RJ — CEP 24230-190 |
| **Telefone** | (21) 99934-2373 |
| **Email** | leticiagalvaoestetica@gmail.com |
| **Instagram** | @draleticiagalvao (verificado) |
| **Início de carreira** | 2011 |
| **Clínica inaugurada** | 2017 |
| **Pacientes atendidos** | +5.000 |
| **Slogan** | "O nosso padrão de beleza, é o seu!" |

### Equipe
| Nome | Cargo |
|---|---|
| Dra. Juliana Travassos | Farmacêutica Esteta |
| Dra. Thainá Galvão | Bióloga Esteta |
| Josi Souza | Esteticista e Massoterapeuta |
| Raiça Galvão | Podóloga |

### Serviços Oferecidos
Harmonização Facial e Corporal, Toxina Botulínica, Ácido Hialurônico, Bioestimulador de Colágeno, Ulthera, Intradermoterapia, Microagulhamento, Skinbooster, Fios de PDO, Designer de Sobrancelhas, Micropigmentação Labial, Lash Lifting, Brow Lamination, Hidragloss, Massagem Relaxante e Modeladora, Drenagem Linfática, Limpeza de Pele, Peeling de Diamante, Podologia, Podologia Especializada em Diabéticos, Tratamento de Melasma, Rinomodelação, NCTF, Duoblend, Harmonyca

---

---

# JSON Prompt para PRD

```json
{
  "design_system": {
    "brand": {
      "name": "Clínica Dra. Letícia Galvão Estética Avançada",
      "slogan": "O nosso padrão de beleza, é o seu!",
      "tagline": "Venha viver essa experiência conosco!",
      "bio_instagram": "Preenchimento Estratégico ®",
      "personality": ["elegante", "profissional", "confiável", "feminina", "sofisticada"],
      "tone_of_voice": "Sofisticação acessível com calor humano. Autoridade técnica sem distanciamento. Linguagem acolhedora e feminina sem ser infantil.",
      "positioning": "Clínica de estética avançada com foco em harmonização facial personalizada e resultados naturais. Referência em Icaraí/Niterói com projeção nacional via cursos e mentoria."
    },
    "colors": {
      "primary": {
        "default": "#C4A882",
        "light": "#D9C9AD",
        "dark": "#A68B64"
      },
      "neutral": {
        "white": "#FFFFFF",
        "offwhite": "#F5F0EB",
        "warm_gray": "#E8E0D6",
        "dark": "#2C2C2C",
        "black": "#1A1A1A"
      },
      "accent": {
        "gold": "#B8965A",
        "rose": "#C4828A"
      },
      "gradients": {
        "hero_overlay": "linear-gradient(135deg, rgba(196,168,130,0.15) 0%, rgba(255,255,255,0.8) 50%, rgba(196,168,130,0.1) 100%)",
        "section_transition": "linear-gradient(180deg, #F5F0EB 0%, #FFFFFF 100%)"
      }
    },
    "typography": {
      "font_display": {
        "family": "Playfair Display",
        "fallback": "Georgia, serif",
        "usage": "Títulos principais, hero, seções H1/H2"
      },
      "font_body": {
        "family": "Montserrat",
        "fallback": "Helvetica Neue, sans-serif",
        "usage": "Corpo de texto, navegação, descrições"
      },
      "font_accent": {
        "family": "Cormorant Garamond",
        "fallback": "Georgia, serif",
        "usage": "Citações, taglines, elementos editoriais"
      },
      "scale": {
        "hero": { "size": "3rem", "weight": 700 },
        "h1": { "size": "2.5rem", "weight": 700 },
        "h2": { "size": "1.75rem", "weight": 600 },
        "h3": { "size": "1.25rem", "weight": 600 },
        "body": { "size": "1rem", "weight": 400 },
        "small": { "size": "0.875rem", "weight": 400 },
        "caption": { "size": "0.75rem", "weight": 500 }
      },
      "style_rules": {
        "titles_uppercase": true,
        "title_letter_spacing": "0.05em",
        "body_line_height": 1.7,
        "decorative_underline": {
          "color": "#B8965A",
          "thickness": "3px",
          "width": "60px"
        }
      }
    },
    "spacing": {
      "base_unit": "8px",
      "scale": {
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px"
      }
    },
    "layout": {
      "max_width": "1200px",
      "grid_services": { "columns": 3, "gap": "24px" },
      "grid_team": { "columns": 4, "rows": 1, "alignment": "center" },
      "layout_about": { "text_width": "55%", "image_width": "45%" },
      "breakpoints": {
        "mobile": "480px",
        "tablet": "768px",
        "desktop": "1024px",
        "wide": "1280px"
      }
    },
    "components": {
      "border_radius": "0px",
      "buttons": {
        "primary": {
          "background": "#C4A882",
          "text": "#FFFFFF",
          "border": "none",
          "border_radius": "0px"
        },
        "secondary": {
          "background": "transparent",
          "text": "#2C2C2C",
          "border": "2px solid #2C2C2C",
          "border_radius": "0px"
        },
        "whatsapp_cta": {
          "background": "transparent",
          "text": "#FFFFFF",
          "border": "1px solid #FFFFFF",
          "border_radius": "0px"
        }
      },
      "cards": {
        "service": {
          "background": "#F5F0EB",
          "border": "1px solid #E8E0D6",
          "border_radius": "0px",
          "padding": "24px",
          "hover": "box-shadow + left border gold"
        },
        "team": {
          "image_aspect_ratio": "3:4",
          "background": "#FFFFFF",
          "shadow": "0 2px 12px rgba(0,0,0,0.08)",
          "text_align": "left"
        }
      },
      "hero": {
        "style": "fullwidth_image_with_glassmorphism_card",
        "layout_order": ["titulo", "foto_principal", "texto"],
        "foto_principal_position": "entre_titulo_e_texto",
        "card_background": "rgba(255,255,255,0.85)",
        "backdrop_filter": "blur(8px)"
      },
      "navigation": {
        "style": "horizontal_uppercase",
        "font_weight": 500,
        "active_indicator": "top_line_gold_3px"
      },
      "footer_contact": {
        "background": "#1A1A1A",
        "text_color": "#FFFFFF",
        "grid_columns": 3
      }
    },
    "photography": {
      "tone": "warm",
      "lighting": "natural, soft",
      "backgrounds": ["bege neutro", "branco", "ambiente clínica"],
      "style": "profissional editorial com calor humano",
      "dress_code_team": "tons neutros, bege, branco, preto"
    },
    "iconography": {
      "style": "line icons",
      "stroke_weight": "1.5px",
      "decorative_elements": ["gold accent lines", "gold leaf motifs"],
      "no_emojis_on_website": true
    }
  },
  "business_data": {
    "owner": "Dra. Letícia Galvão",
    "age": 31,
    "education": [
      "Técnica em Estética e Cosmetologia (Senac, 2011-2012)",
      "Biomédica habilitada em patologia clínica e estética",
      "Especialista em Harmonização Facial e Corporal",
      "MBA em Cosmetologia"
    ],
    "career_start": 2011,
    "clinic_founded": 2017,
    "patients_served": "5000+",
    "roles": ["CEO Clínica", "Speaker Galderma", "Mentora/Instrutora de cursos"],
    "location": {
      "address": "R. Otávio Carneiro, 143",
      "neighborhood": "Icaraí",
      "city": "Niterói",
      "state": "RJ",
      "zip": "24230-190",
      "country": "Brasil"
    },
    "contact": {
      "phone": "(21) 99934-2373",
      "email": "leticiagalvaoestetica@gmail.com",
      "whatsapp": "(21) 99934-2373",
      "instagram": "@draleticiagalvao",
      "instagram_clinic": "@clinicadraleticiagalvao",
      "instagram_group": "@grupodraleticiagalvao",
      "linktree": "linktr.ee/draleticiagalvao"
    },
    "team": [
      { "name": "Dra. Juliana Travassos", "role": "Farmacêutica Esteta" },
      { "name": "Dra. Thainá Galvão", "role": "Bióloga Esteta" },
      { "name": "Josi Souza", "role": "Esteticista e Massoterapeuta" },
      { "name": "Raiça Galvão", "role": "Podóloga" }
    ],
    "services": [
      "Harmonização Facial e Corporal",
      "Toxina Botulínica",
      "Ácido Hialurônico",
      "Bioestimulador de Colágeno",
      "Ulthera",
      "Intradermoterapia",
      "Microagulhamento",
      "Skinbooster",
      "Fios de PDO",
      "Rinomodelação",
      "NCTF",
      "Duoblend",
      "Harmonyca",
      "Designer de Sobrancelhas",
      "Micropigmentação Labial",
      "Lash Lifting",
      "Brow Lamination",
      "Hidragloss",
      "Massagem Relaxante e Modeladora",
      "Drenagem Linfática",
      "Limpeza de Pele",
      "Peeling de Diamante",
      "Podologia",
      "Podologia Especializada em Diabéticos",
      "Tratamento de Melasma"
    ],
    "specialties_highlight": [
      "Harmonização Facial Personalizada com foco em resultado natural",
      "Rinomodelação",
      "Toxina Botulínica / Full Face",
      "Bioestimuladores de colágeno (Sculptra, Radiesse, PDO)"
    ],
    "website_sections": ["Página Inicial", "Sobre Mim", "Nossa Equipe", "Nossos Serviços", "Contato"],
    "instagram_stats": {
      "followers": "45.9k",
      "posts": 1421,
      "following": 1874,
      "verified": true
    }
  }
}
```
