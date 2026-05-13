import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  ExternalLink,
  Gauge,
  GraduationCap,
  Layers,
  LifeBuoy,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ShoppingCart,
  X,
} from 'lucide-react'
import { MotionSection } from './components/MotionSection'
import { AnimatedCounter } from './components/AnimatedCounter'
import { SectionHeading } from './components/SectionHeading'
import { Platforms } from './components/Platforms'
import { SectorsMarquee } from './components/SectorsMarquee'
import {
  certification,
  education,
  experience,
  heroBadges,
  navigation,
  stack,
} from './data/portfolioData'

const experienceIconMap = {
  ShoppingCart,
  Layers,
  LifeBuoy,
  Gauge,
  BadgeCheck,
  Briefcase,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

/* ─────────────── HEADER ─────────────── */
function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav" aria-label="Navegación principal">
      <div className="container nav-inner">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)} aria-label="Inicio">
          <span className="brand-mark">JA</span>
          <span className="brand-name">
            <strong>Jesús Alcaraz</strong>
            <small>Full Stack · E-commerce</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Secciones">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contacto">
          Contactar
          <ArrowRight size={15} strokeWidth={2.4} />
        </a>

        <button
          type="button"
          className="nav-burger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="nav-mobile"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-mobile-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-mobile-link strong" href="#contacto" onClick={() => setOpen(false)}>
              Contactar
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.35 })

  return (
    <section id="inicio" className="hero" ref={heroRef}>
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container hero-content">
        <motion.span
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Madrid · ES
        </motion.span>

        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.05}
        >
          Jesús Alcaraz —{' '}
          <span className="hero-title-accent">
            desarrollador full stack
          </span>{' '}
          especializado en e-commerce.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.15}
        >
          Construyo, mantengo y optimizo tiendas online en{' '}
          <strong>PrestaShop, Shopify y WordPress</strong>. Foco en módulos a
          medida, rendimiento e incidencias en producción.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.25}
        >
          <a className="btn btn-primary" href="#plataformas">
            Ver especialidades
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
          <a className="btn btn-ghost" href="#contacto">
            Contactar
            <ArrowUpRight size={17} strokeWidth={2.2} />
          </a>
        </motion.div>

        <motion.ul
          className="hero-badges"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.35}
          aria-label="Credenciales clave"
        >
          {heroBadges.map((badge, index) => (
            <motion.li
              key={badge.label}
              className={`hero-badge hero-badge-${badge.tone}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {typeof badge.value === 'number' ? (
                <AnimatedCounter
                  value={badge.value}
                  prefix={badge.prefix}
                  suffix={badge.suffix}
                  duration={badge.duration}
                  delay={0.55 + index * 0.08}
                  className="hero-badge-value"
                  start={heroInView}
                />
              ) : (
                <span className="hero-badge-value">{badge.value}</span>
              )}
              <span className="hero-badge-label">{badge.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

/* ─────────────── PLATFORMS SECTION ─────────────── */
function PlatformsSection() {
  return (
    <MotionSection id="plataformas" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="01 — Plataformas"
          title={<>Tres plataformas, una <em>misma profundidad técnica.</em></>}
          description="Pulsa una tarjeta para ver el detalle de cada plataforma. PrestaShop como especialización principal, con experiencia consolidada en Shopify y WordPress."
        />
        <Platforms />
      </div>
    </MotionSection>
  )
}

/* ─────────────── SECTORS ─────────────── */
function Sectors() {
  return (
    <MotionSection id="sectores" className="section section-sectors">
      <div className="container">
        <SectionHeading
          eyebrow="02 — Sectores e-commerce"
          title="No todas las tiendas venden igual"
          description="He participado en sectores muy distintos, adaptando desarrollo, rendimiento, contenidos e integraciones a cada modelo de negocio."
        />
        <SectorsMarquee />
      </div>
    </MotionSection>
  )
}

/* ─────────────── EXPERIENCE ─────────────── */
function Experience() {
  return (
    <MotionSection id="experiencia" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="03 — Experiencia laboral"
          title="Cinco años en una sola empresa, con más de 300 tiendas detrás."
        />

        <div className="exp">
          <motion.aside
            className="card exp-aside"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="exp-role-icon"><Briefcase size={22} /></div>
            <span className="exp-tag">Jornada completa</span>
            <h3 className="exp-role">{experience.role}</h3>
            <div className="exp-company">{experience.company}</div>
            <div className="exp-period">{experience.period}</div>
            <div className="exp-location">
              <MapPin size={13} strokeWidth={2.2} /> {experience.location}
            </div>
            <p>{experience.intro}</p>
          </motion.aside>

          <div className="exp-blocks">
            {experience.blocks.map((block, index) => {
              const Icon = experienceIconMap[block.icon] || Briefcase
              return (
                <motion.article
                  className="card exp-block"
                  key={block.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="exp-block-icon">
                    <Icon size={18} strokeWidth={1.9} />
                  </span>
                  <h4>{block.title}</h4>
                  <p>{block.text}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

/* ─────────────── EDUCATION & CERTIFICATION ─────────────── */
function Formacion() {
  return (
    <MotionSection id="formacion" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="04 — Formación"
          title={<>Certificación oficial y una <em>base poco habitual.</em></>}
          description="Acreditación oficial en PrestaShop, formación técnica full stack y una base previa en Administración y Finanzas que da visión de negocio."
        />

        <div className="formacion">
          <motion.article
            className="card cert"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cert-seal">
              <BadgeCheck size={28} strokeWidth={2.2} />
            </div>
            <span className="cert-label">Certificación oficial</span>
            <h2 className="cert-title">{certification.title}</h2>
            <div className="cert-issuer">{certification.issuer}</div>
            <p className="cert-description">{certification.description}</p>
            <div className="cert-tags">
              {certification.tags.map((tag) => (
                <span key={tag} className="chip chip-mono">{tag}</span>
              ))}
            </div>
          </motion.article>

          <motion.div
            className="card edu"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="edu-head">
              <span className="edu-head-icon"><GraduationCap size={22} /></span>
              <div>
                <small>Educación</small>
                <h2>Formación técnica y de negocio</h2>
              </div>
            </div>
            <div className="edu-list">
              {education.map((item) => (
                <article className="edu-item" key={item.center}>
                  <h3>{item.title}</h3>
                  <div className="edu-center">{item.center}</div>
                  <div className="edu-period">{item.period}</div>
                  <p>{item.detail}</p>
                  {item.highlight && (
                    <span className="edu-highlight">{item.highlight}</span>
                  )}
                  {item.honors && (
                    <div className="edu-honors">
                      <span className="edu-honors-label">Matrículas de Honor</span>
                      <div className="edu-honors-chips">
                        {item.honors.map((h) => (
                          <span key={h} className="chip edu-honors-chip">{h}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  )
}

/* ─────────────── STACK ─────────────── */
function Stack() {
  return (
    <MotionSection id="stack" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="05 — Tecnologías"
          title="El stack con el que trabajo a diario."
          description="Sin descripciones largas. Solo las piezas que uso en producción."
        />

        <div className="stack">
          {stack.map((group, index) => (
            <motion.div
              className="stack-row"
              key={group.title}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stack-row-head">
                <span className="stack-row-num">/ {String(index + 1).padStart(2, '0')}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="stack-chips">
                {group.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

/* ─────────────── CONTACT ─────────────── */
function Contact() {
  return (
    <MotionSection id="contacto" className="contact">
      <div className="container contact-inner">
        <div className="contact-heading">
          <span className="section-eyebrow">06 — Contacto</span>
          <h2>
            ¿Buscas un desarrollador full stack con experiencia real en{' '}
            <span className="accent">tiendas online</span>?
          </h2>
          <p>
            Escríbeme si quieres hablar sobre desarrollo e-commerce, PrestaShop, Shopify, WordPress o nuevas oportunidades profesionales.
          </p>
        </div>

        <div className="contact-actions">
          <motion.a
            className="card contact-action"
            href="mailto:jesusalca19@gmail.com"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="contact-action-icon"><Mail size={20} /></span>
            <span className="contact-action-text">
              <strong>Enviar email</strong>
              <small>jesusalca19@gmail.com</small>
            </span>
            <ArrowUpRight className="contact-action-arrow" size={20} />
          </motion.a>

          <motion.a
            className="card contact-action"
            href="https://www.linkedin.com/in/jesusalca/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="contact-action-icon"><Linkedin size={20} /></span>
            <span className="contact-action-text">
              <strong>LinkedIn</strong>
              <small>linkedin.com/in/jesusalca</small>
            </span>
            <ExternalLink className="contact-action-arrow" size={20} />
          </motion.a>

          <div className="contact-location">
            <MapPin size={16} />
            <span>Madrid, España</span>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-watermark" aria-hidden="true">ALCARAZ</div>
      <div className="container footer-inner">
        <div className="footer-top">
          <a className="footer-brand" href="#inicio" aria-label="Volver al inicio">
            <span className="brand-mark">JA</span>
            <span className="footer-brand-meta">
              <strong>Jesús Alcaraz</strong>
              <small>Full Stack Developer · E-commerce</small>
            </span>
          </a>

          <a className="footer-mailto" href="mailto:jesusalca19@gmail.com">
            <span>
              <small>Escríbeme</small>
              <strong>jesusalca19@gmail.com</strong>
            </span>
            <ArrowUpRight size={18} strokeWidth={2.2} />
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-col-title">Sitio</span>
            <a href="#plataformas">Plataformas</a>
            <a href="#sectores">Sectores</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#formacion">Formación</a>
            <a href="#stack">Stack</a>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Conectar</span>
            <a href="mailto:jesusalca19@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/jesusalca/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Especialización</span>
            <span className="footer-col-meta">PrestaShop · Shopify · WordPress</span>
            <span className="footer-col-meta">Rendimiento · SEO técnico</span>
            <span className="footer-col-meta">Soporte y producción</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Jesús Alcaraz</p>
          <p className="footer-location"><MapPin size={13} strokeWidth={2.2} /> Madrid, España</p>
          <a className="footer-up" href="#inicio">
            Volver arriba
            <ArrowUp size={14} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────── APP ─────────────── */
export default function App() {
  return (
    <div className="site">
      <a href="#contenido" className="skip">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <PlatformsSection />
        <Sectors />
        <Experience />
        <Formacion />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
