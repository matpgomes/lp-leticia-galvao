import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Phone, MapPin, Menu, X, ChevronDown, Star, Calendar, FileText,
  Syringe, Smile, Award, Shield, Droplets, Sparkles, Eye,
  ArrowUp, Check, Clock, Heart, ExternalLink, Play, MessageCircle
} from 'lucide-react'
import './App.css'

/* ───────────────────────── constants ───────────────────────── */

const WHATSAPP_LINK = 'https://wa.me/5521999342373?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'
const PHONE_NUMBER = '(21) 99934-2373'
const ADDRESS = 'R. Otavio Carneiro, 143 — Icarai, Niteroi, RJ'
const INSTAGRAM_URL = 'https://www.instagram.com/clinicadraleticiagalvao/'

const PROCEDURES = [
  { title: 'Harmonizacao Facial', desc: 'Tratamento personalizado para realcar sua beleza natural com tecnicas avancadas de preenchimento e contorno.', icon: 'Smile' },
  { title: 'Toxina Botulinica', desc: 'Suavizacao de linhas de expressao com aplicacao precisa e resultado natural.', icon: 'Syringe' },
  { title: 'Bioestimuladores', desc: 'Estimulo a producao natural de colageno para firmeza e rejuvenescimento da pele.', icon: 'Shield' },
  { title: 'Skinbooster', desc: 'Hidratacao profunda e luminosidade com microinjecoes de acido hialuronico.', icon: 'Droplets' },
  { title: 'Rinomodelacao', desc: 'Correcao e harmonizacao do nariz sem cirurgia, com resultados imediatos.', icon: 'Sparkles' },
  { title: 'Lash & Brow', desc: 'Lash lifting, brow lamination e designer de sobrancelhas para um olhar marcante.', icon: 'Eye' },
]

const TESTIMONIALS = [
  { name: 'Sueli Coura Monzato', text: 'Excelente experiencia na Clinica da Dra. Leticia Galvao. Desde o atendimento ate os procedimentos, tudo e feito com extremo profissionalismo, cuidado e atencao aos detalhes. Resultados naturais e de alto padrao. Recomendo de olhos fechados!', date: '2 meses atras' },
  { name: 'Thalita Camilo', text: 'Adoro tudo na clinica. Desde o atendimento da Eloa, sempre muito simpatica e acolhedora, ate as doutoras maravilhosas, Dra. Leticia e Dra. Thaina, que sao extremamente atenciosas, cuidadosas e realizam um trabalho impecavel. Recomendo com certeza!', date: '1 mes atras' },
  { name: 'Aline Carvalho', text: 'Clinica humanizada, com tratamento de excelencia, alem de profissionais super competentes e com o melhor chocolate quente da vida. Super recomendo!', date: '2 meses atras' },
  { name: 'Marcelle Chianello', text: 'Experiencia maravilhosa! Profissionais educados e simpaticos, sempre atendendo com excelencia. Sou atendida mensalmente pela Raica, que alem de uma maravilhosa podologa, e gentil e carinhosa. Sempre indico os servicos da clinica, nota 1.000!', date: '8 meses atras' },
  { name: 'Diretora Roberta', text: 'A minha experiencia foi e sempre e a melhor na clinica da Dr Leticia, resultado natural e elegante. A clinica e muito agradavel, as meninas da recepcao sao super educadas e atenciosas, as doutoras maravilhosas, muito queridas. Eu adoro ser cuidada por elas.', date: '1 ano atras' },
]

const STEPS = [
  { icon: 'Phone', badge: '01', text: 'Entre em contato pelo WhatsApp ou telefone' },
  { icon: 'Calendar', badge: '02', text: 'Agende sua avaliacao personalizada' },
  { icon: 'FileText', badge: '03', text: 'Receba seu plano de tratamento exclusivo' },
  { icon: 'Award', badge: '04', text: 'Conquiste o resultado que voce merece' },
]

const FAQ_ITEMS = [
  { q: 'Quais procedimentos a clinica oferece?', a: 'Oferecemos harmonizacao facial e corporal, toxina botulinica, acido hialuronico, bioestimuladores de colageno, Ulthera, rinomodelacao, skinbooster, fios de PDO, micropigmentacao, lash lifting, drenagem linfatica, entre outros.' },
  { q: 'Os procedimentos sao seguros?', a: 'Sim! Todos os procedimentos sao realizados por profissionais habilitados, com produtos de alta qualidade e em ambiente clinico adequado, seguindo todos os protocolos de seguranca.' },
  { q: 'Como funciona a primeira consulta?', a: 'Na primeira consulta, realizamos uma avaliacao completa do seu rosto e/ou corpo, entendemos seus objetivos e elaboramos um plano de tratamento personalizado.' },
  { q: 'Qual o tempo de recuperacao?', a: 'A maioria dos procedimentos tem recuperacao rapida, permitindo retorno as atividades normais no mesmo dia ou em poucos dias, dependendo do tratamento.' },
  { q: 'Os resultados sao naturais?', a: 'Sim! Nosso foco e em resultados naturais e harmoniosos. A Dra. Leticia e especialista em realcar a beleza individual de cada paciente.' },
  { q: 'Quais formas de pagamento sao aceitas?', a: 'Aceitamos cartoes de credito e debito, PIX e dinheiro. Consulte condicoes especiais de parcelamento.' },
  { q: 'Onde fica a clinica?', a: 'Estamos na R. Otavio Carneiro, 143 — Icarai, Niteroi, RJ. Facil acesso e com estacionamento proximo.' },
  { q: 'Como agendar uma consulta?', a: 'Voce pode agendar pelo WhatsApp (21) 99934-2373 ou pelo botao de agendamento aqui no site. Respondemos rapidamente!' },
]

const RESULTS = [
  { before: '/img/resultado-1.jpeg', after: '/img/resultado-2.jpeg', label: 'Harmonizacao Facial' },
  { before: '/img/resultado-3.jpeg', after: '/img/resultado-4.jpeg', label: 'Rinomodelacao' },
]

const VIDEOS_ATENDIMENTO = [
  { src: '/video/video-1.mp4' },
  { src: '/video/video-2.mp4' },
  { src: '/video/video-3.mp4' },
]

const IG_POSTS = [
  { src: '/img/ig-1.jpg', url: INSTAGRAM_URL },
  { src: '/img/ig-2.jpg', url: INSTAGRAM_URL },
  { src: '/img/ig-3.jpg', url: INSTAGRAM_URL },
  { src: '/img/ig-4.jpg', url: INSTAGRAM_URL },
  { src: '/img/ig-5.jpg', url: INSTAGRAM_URL },
  { src: '/img/ig-6.jpg', url: INSTAGRAM_URL },
]

const TEAM = [
  { name: 'Dra. Juliana Travassos', role: 'Farmaceutica Esteta', img: '/img/equipe-juliana.avif' },
  { name: 'Dra. Thaina Galvao', role: 'Biologa Esteta', img: '/img/equipe-thaina.avif' },
  { name: 'Josi Souza', role: 'Esteticista e Massoterapeuta', img: '/img/equipe-josi.avif' },
  { name: 'Raica Galvao', role: 'Podologa', img: '/img/equipe-raica.avif' },
]

const BIO_STATS = [
  { value: 5000, suffix: '+', label: 'Pacientes Atendidos' },
  { value: 5.0, suffix: '', label: 'Avaliacao Google' },
  { value: 13, suffix: '+', label: 'Anos de Experiencia' },
]

/* ───────────────────── icon map helper ───────────────────── */

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Smile, Syringe, Shield, Droplets, Sparkles, Eye, Phone, Calendar, FileText, Award,
}

/* ───────────────────── sub-components ───────────────────── */

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="section-header reveal">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-title-line" />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [state, setState] = useState<'idle' | 'loading' | 'playing'>('idle')

  const handlePlay = useCallback(() => {
    if (!videoRef.current) return
    setState('loading')
    videoRef.current.play().then(() => setState('playing')).catch(() => setState('idle'))
  }, [])

  const handlePause = useCallback(() => {
    if (!videoRef.current) return
    videoRef.current.pause()
    setState('idle')
  }, [])

  return (
    <div className={`video-card video-card--${state}`} onClick={state === 'playing' ? handlePause : handlePlay}>
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        playsInline
        loop
        className="video-card__video"
      />
      {state !== 'playing' && (
        <div className="video-card__overlay">
          <div className="video-card__play-btn">
            <Play size={32} />
          </div>
        </div>
      )}
      {state === 'loading' && (
        <div className="video-card__overlay">
          <div className="video-card__spinner" />
        </div>
      )}
    </div>
  )
}

function AnimatedCounter({ target, suffix = '', decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const duration = 2000
          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(eased * target)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </span>
  )
}

/* ───────────────────────── App ───────────────────────── */

function App() {
  const [loaded, setLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    const t = setTimeout(() => setLoaded(true), 2000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100)
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!loaded) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [loaded])

  useEffect(() => {
    const container = testimonialRef.current
    if (!container) return
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 24
        : 320
      const idx = Math.round(scrollLeft / cardWidth)
      setActiveTestimonial(Math.min(idx, TESTIMONIALS.length - 1))
    }
    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [loaded])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const scrollTestimonialTo = (idx: number) => {
    const container = testimonialRef.current
    if (!container || !container.firstElementChild) return
    const cardWidth = (container.firstElementChild as HTMLElement).offsetWidth + 24
    container.scrollTo({ left: cardWidth * idx, behavior: 'smooth' })
    setActiveTestimonial(idx)
  }

  return (
    <>
      {/* PRELOADER */}
      <div className={`preloader ${loaded ? 'preloader--hidden' : ''}`}>
        <div className="preloader__content">
          <img src="/img/logo.png" alt="Clinica Dra. Leticia Galvao" className="preloader__logo" />
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
        <div className="navbar__inner">
          <a href="#hero" className="navbar__brand" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
            <img src="/img/logo.png" alt="Clinica Dra. Leticia Galvao" className="navbar__logo" />
          </a>

          <div className="navbar__links">
            <button onClick={() => scrollTo('procedimentos')}>Procedimentos</button>
            <button onClick={() => scrollTo('resultados')}>Resultados</button>
            <button onClick={() => scrollTo('bio')}>Sobre</button>
            <button onClick={() => scrollTo('equipe')}>Equipe</button>
            <button onClick={() => scrollTo('mapa')}>Contato</button>
          </div>

          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="navbar__cta">
            Agende sua Consulta
          </a>

          <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
          <button onClick={() => scrollTo('procedimentos')}>Procedimentos</button>
          <button onClick={() => scrollTo('resultados')}>Resultados</button>
          <button onClick={() => scrollTo('bio')}>Sobre</button>
          <button onClick={() => scrollTo('equipe')}>Equipe</button>
          <button onClick={() => scrollTo('mapa')}>Contato</button>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="navbar__mobile-cta">
            Agende sua Consulta
          </a>
        </div>

        {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
      </nav>

      {/* HERO */}
      <section id="hero" className={`hero ${loaded ? 'hero--loaded' : ''}`}>
        <div className="hero__container">
          <div className="hero__heading">
            <span className="hero__label">Estetica Avancada</span>
            <h1 className="hero__title">
              O nosso padrao<br />de beleza,{' '}
              <em>e o seu!</em>
            </h1>
          </div>

          <div className="hero__image">
            <div className="hero__image-frame">
              <img src="/img/hero-foto.avif" alt="Dra. Leticia Galvao" />
            </div>
            <div className="hero__image-accent" />
          </div>

          <div className="hero__text">
            <p className="hero__tagline">Venha viver essa experiencia conosco</p>
            <p className="hero__subtitle">
              Tratamentos personalizados com foco em resultado natural.
              Mais de 5.000 pacientes transformados desde 2017.
            </p>
            <div className="hero__actions">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hero__cta">
                <MessageCircle size={20} />
                Agende sua Consulta
              </a>
            </div>
            <div className="hero__badge">
              <div className="hero__badge-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#B8965A" stroke="#B8965A" />
                ))}
              </div>
              <span className="hero__badge-score">5.0</span>
              <div className="hero__badge-info">
                <span className="hero__badge-label">Avaliacao Google</span>
                <span className="hero__badge-count">47+ avaliacoes</span>
              </div>
            </div>
          </div>
        </div>

        <button className="hero__scroll" onClick={() => scrollTo('resultados')} aria-label="Rolar para baixo">
          <ChevronDown size={28} />
        </button>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="section resultados">
        <div className="section__container">
          <SectionHeader
            label="Transformacoes"
            title="Resultados Reais"
            subtitle="Confira algumas das transformacoes realizadas em nossa clinica."
          />
          <div className="resultados__grid">
            {RESULTS.map((r, i) => (
              <div className="resultados__pair reveal reveal--scale" key={i} style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}>
                <span className="resultados__label">{r.label}</span>
                <div className="resultados__images">
                  <div className="resultados__img-wrapper">
                    <span className="resultados__tag">Antes</span>
                    <span className="resultados__tag resultados__tag--after">Depois</span>
                    <img src={r.before} alt={`${r.label} — Antes e Depois`} loading="lazy" />
                  </div>
                  <div className="resultados__img-wrapper">
                    <span className="resultados__tag">Antes</span>
                    <span className="resultados__tag resultados__tag--after">Depois</span>
                    <img src={r.after} alt={`${r.label} — Antes e Depois`} loading="lazy" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDIMENTOS */}
      <section id="procedimentos" className="section procedimentos">
        <div className="section__container">
          <SectionHeader label="Tratamentos" title="Nossos Procedimentos" />
          <div className="procedimentos__grid">
            {PROCEDURES.map((proc, i) => {
              const IconComp = ICON_MAP[proc.icon]
              return (
                <div className="proc-card reveal" key={i} style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}>
                  <div className="proc-card__icon">
                    {IconComp && <IconComp size={28} />}
                  </div>
                  <h3 className="proc-card__title">{proc.title}</h3>
                  <p className="proc-card__desc">{proc.desc}</p>
                  <div className="proc-card__accent" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="section depoimentos">
        <div className="section__container">
          <SectionHeader label="Depoimentos" title="O Que Dizem Nossos Pacientes" />
          <div className="depoimentos__carousel" ref={testimonialRef}>
            {TESTIMONIALS.map((t, i) => (
              <div className="testimonial-card reveal" key={i} style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}>
                <span className="testimonial-card__quote">&ldquo;</span>
                <div className="testimonial-card__stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="#B8965A" stroke="#B8965A" />
                  ))}
                </div>
                <p className="testimonial-card__text"><em>{t.text}</em></p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__date">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="depoimentos__dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`depoimentos__dot ${activeTestimonial === i ? 'depoimentos__dot--active' : ''}`}
                onClick={() => scrollTestimonialTo(i)}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section id="atendimento-videos" className="section videos-section">
        <div className="section__container">
          <SectionHeader
            label="Experiencia"
            title="Nosso Atendimento"
            subtitle="Veja como e a experiencia em nossa clinica."
          />
          <div className="videos__grid">
            {VIDEOS_ATENDIMENTO.map((v, i) => (
              <div className="reveal" key={i} style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}>
                <VideoCard src={v.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASSOS */}
      <section id="passos" className="section passos">
        <div className="section__container">
          <SectionHeader label="Como Funciona" title="Agende em 4 Passos" />
          <div className="passos__grid">
            {STEPS.map((step, i) => {
              const IconComp = ICON_MAP[step.icon]
              return (
                <div className="step-card reveal" key={i} style={{ '--reveal-delay': `${i * 100}ms` } as React.CSSProperties}>
                  <span className="step-card__number">{step.badge}</span>
                  <div className="step-card__icon">
                    {IconComp && <IconComp size={24} />}
                  </div>
                  <p className="step-card__text">{step.text}</p>
                  {i < STEPS.length - 1 && <div className="step-card__connector" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BIO */}
      <section id="bio" className="section bio">
        <div className="section__container">
          <div className="bio__inner">
            <div className="bio__photo-col reveal reveal--left">
              <div className="bio__photo-frame">
                <img src="/img/equipe-leticia.avif" alt="Dra. Leticia Galvao" />
                <div className="bio__photo-accent" />
              </div>
            </div>

            <div className="bio__text-col reveal reveal--right" style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
              <span className="section-label">Sobre</span>
              <span className="bio__specialty">Biomedica Esteta</span>
              <h2 className="bio__name">Dra. Leticia Galvao</h2>
              <p className="bio__credential">Especialista em Harmonizacao Facial | MBA em Cosmetologia</p>
              <p className="bio__paragraph">
                Com mais de 13 anos de experiencia na area da estetica, iniciei minha carreira em 2011 como tecnica em estetica e cosmetologia. Desde entao, me especializei em harmonizacao facial personalizada, sempre buscando o resultado mais natural possivel para cada paciente.
              </p>
              <p className="bio__paragraph">
                Em 2017 fundei minha clinica em Icarai, Niteroi, onde junto com uma equipe excepcional, ja transformamos a autoestima de mais de 5.000 pacientes. Sou speaker Galderma e mentora de profissionais da area.
              </p>

              <div className="bio__stats">
                {BIO_STATS.map((s, i) => (
                  <div className="bio__stat" key={i}>
                    <span className="bio__stat-value">
                      <AnimatedCounter
                        target={s.value}
                        suffix={s.suffix}
                        decimals={s.value % 1 !== 0 ? 1 : 0}
                      />
                    </span>
                    <span className="bio__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="section equipe">
        <div className="section__container">
          <SectionHeader label="Nossa Equipe" title="Profissionais Dedicados" />
          <div className="equipe__grid">
            {TEAM.map((member, i) => (
              <div className="equipe__card reveal" key={i} style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}>
                <div className="equipe__photo">
                  <img src={member.img} alt={member.name} loading="lazy" />
                </div>
                <h3 className="equipe__name">{member.name}</h3>
                <p className="equipe__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section id="instagram" className="section instagram">
        <div className="section__container">
          <div className="instagram__header reveal">
            <div className="instagram__avatar">
              <img src="/img/equipe-leticia.avif" alt="@clinicadraleticiagalvao" />
            </div>
            <div className="instagram__info">
              <div className="instagram__handle-row">
                <span className="instagram__handle">@clinicadraleticiagalvao</span>
                <span className="instagram__verified" title="Verificado">&#10003;</span>
              </div>
              <span className="instagram__bio">Estetica Avancada em Niteroi/RJ</span>
              <span className="instagram__followers">Siga-nos no Instagram</span>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram__follow-btn"
            >
              Seguir no Instagram
            </a>
          </div>

          <div className="instagram__grid">
            {IG_POSTS.map((post, i) => (
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram__post reveal reveal--scale"
                key={i}
                style={{ '--reveal-delay': `${i * 50}ms` } as React.CSSProperties}
              >
                <img src={post.src} alt={`Post Instagram ${i + 1}`} loading="lazy" />
                <div className="instagram__post-overlay">
                  <Heart size={28} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="agendamento" className="section cta-section">
        <div className="section__container">
          <div className="cta-card reveal reveal--scale">
            <span className="cta-card__label">Agendamento</span>
            <h2 className="cta-card__title">Pronta para sua transformacao?</h2>
            <p className="cta-card__subtitle">Agende sua avaliacao e descubra o melhor tratamento para voce</p>
            <ul className="cta-card__checklist">
              {[
                'Avaliacao personalizada',
                'Plano de tratamento exclusivo',
                'Profissionais especializados',
                'Ambiente acolhedor e seguro',
                'Resultados naturais e harmoniosos',
              ].map((item, i) => (
                <li key={i}>
                  <Check size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-card__btn">
              <MessageCircle size={20} />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section id="mapa" className="section mapa-section">
        <div className="section__container">
          <SectionHeader label="Localizacao" title="Como Chegar" />
          <div className="mapa__address reveal">
            <MapPin size={22} />
            <span>{ADDRESS} — CEP 24230-190</span>
          </div>
          <div className="mapa__embed reveal reveal--scale" style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
            <iframe
              title="Localizacao da Clinica"
              src="https://maps.google.com/maps?q=R.+Otavio+Carneiro,+143+-+Icarai,+Niteroi+-+RJ,+24230-190,+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section faq-section">
        <div className="section__container">
          <SectionHeader label="Duvidas" title="Perguntas Frequentes" />
          <div className="faq__list">
            {FAQ_ITEMS.map((item, i) => (
              <div className={`faq__item ${openFaq === i ? 'faq__item--open' : ''}`} key={i}>
                <button className="faq__question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <ChevronDown size={20} className={`faq__chevron ${openFaq === i ? 'faq__chevron--rotated' : ''}`} />
                </button>
                <div className="faq__answer" style={{ maxHeight: openFaq === i ? '500px' : '0' }}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__col footer__col--brand">
            <img src="/img/logo.png" alt="Clinica Dra. Leticia Galvao" className="footer__logo" />
            <span className="footer__credential">Biomedica Esteta | MBA em Cosmetologia</span>
            <span className="footer__slogan">O nosso padrao de beleza, e o seu!</span>
          </div>

          <div className="footer__col">
            <h4>Contato</h4>
            <a href="tel:+5521999342373" className="footer__link">
              <Phone size={16} /> {PHONE_NUMBER}
            </a>
            <span className="footer__link">
              <MapPin size={16} /> {ADDRESS}
            </span>
            <span className="footer__link">
              <Clock size={16} /> Seg-Sex: 9h-19h | Sab: 9h-14h
            </span>
          </div>

          <div className="footer__col">
            <h4>Navegacao</h4>
            <button onClick={() => scrollTo('procedimentos')}>Procedimentos</button>
            <button onClick={() => scrollTo('resultados')}>Resultados</button>
            <button onClick={() => scrollTo('bio')}>Sobre</button>
            <button onClick={() => scrollTo('equipe')}>Equipe</button>
            <button onClick={() => scrollTo('mapa')}>Contato</button>
          </div>

          <div className="footer__col">
            <h4>Social</h4>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <ExternalLink size={16} /> @draleticiagalvao
            </a>
            <a href="mailto:leticiagalvaoestetica@gmail.com" className="footer__social-link">
              <ExternalLink size={16} /> leticiagalvaoestetica@gmail.com
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Clinica Dra. Leticia Galvao &mdash; Todos os direitos reservados</p>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      {loaded && (
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Agendar pelo WhatsApp"
        >
          <span className="whatsapp-float__ring" />
          <MessageCircle size={28} />
          <span className="whatsapp-float__text">Agendar</span>
        </a>
      )}

      {/* SCROLL TO TOP */}
      <button
        className={`scroll-top ${showScrollTop ? 'scroll-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={22} />
      </button>
    </>
  )
}

export default App
