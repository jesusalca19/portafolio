import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Armchair,
  Boxes,
  Briefcase,
  CalendarDays,
  Dumbbell,
  Gauge,
  GraduationCap,
  HeartPulse,
  LifeBuoy,
  Monitor,
  PawPrint,
  PlugZap,
  SearchCheck,
  Shirt,
  SlidersHorizontal,
  Sparkles,
  Store,
  Utensils,
  WandSparkles,
  Wrench,
} from 'lucide-react'

const sectors = [
  { label: 'Moda y complementos', icon: Shirt, tone: 'cyan' },
  { label: 'Cosmética y belleza', icon: Sparkles, tone: 'violet' },
  { label: 'Alimentación', icon: Utensils, tone: 'emerald' },
  { label: 'Hogar y decoración', icon: Armchair, tone: 'cyan' },
  { label: 'Recambios y automoción', icon: Wrench, tone: 'violet' },
  { label: 'Electrónica e informática', icon: Monitor, tone: 'emerald' },
  { label: 'Salud y bienestar', icon: HeartPulse, tone: 'cyan' },
  { label: 'Deporte y fitness', icon: Dumbbell, tone: 'violet' },
  { label: 'B2B y distribución', icon: Briefcase, tone: 'emerald' },
  { label: 'Formación y servicios', icon: GraduationCap, tone: 'cyan' },
  { label: 'Mascotas', icon: PawPrint, tone: 'violet' },
  { label: 'Productos personalizados', icon: WandSparkles, tone: 'emerald' },
]

const projectTypes = [
  { label: 'Multitienda', icon: Store, tone: 'violet' },
  { label: 'Catálogos amplios', icon: Boxes, tone: 'cyan' },
  { label: 'Integraciones externas', icon: PlugZap, tone: 'emerald' },
  { label: 'Campañas estacionales', icon: CalendarDays, tone: 'violet' },
  { label: 'Personalización de producto', icon: SlidersHorizontal, tone: 'cyan' },
  { label: 'SEO técnico', icon: SearchCheck, tone: 'emerald' },
  { label: 'Rendimiento', icon: Gauge, tone: 'violet' },
  { label: 'Soporte en producción', icon: LifeBuoy, tone: 'cyan' },
]

function MarqueeChip({ item }) {
  const Icon = item.icon

  return (
    <li className={`sector-chip sector-chip-${item.tone}`}>
      <span className="sector-chip-icon" aria-hidden="true">
        <Icon size={15} strokeWidth={2} />
      </span>
      <span>{item.label}</span>
    </li>
  )
}

function StaticRow({ items, label }) {
  return (
    <ul className="sector-marquee-static" aria-label={label}>
      {items.map((item) => (
        <MarqueeChip key={item.label} item={item} />
      ))}
    </ul>
  )
}

function MarqueeRow({ items, direction = 'left', duration = 34, label }) {
  const reduce = useReducedMotion()
  const [isPaused, setIsPaused] = useState(false)

  if (reduce) {
    return <StaticRow items={items} label={label} />
  }

  return (
    <div
      className={`sector-marquee-row sector-marquee-row-${direction}`}
      aria-label={label}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onTouchCancel={() => setIsPaused(false)}
    >
      <div
        className="sector-marquee-track"
        style={{
          '--duration': `${duration}s`,
          animationPlayState: isPaused ? 'paused' : undefined,
        }}
      >
        {[0, 1].map((group) => (
          <ul
            className="sector-marquee-list"
            key={group}
            aria-hidden={group === 1}
          >
            {items.map((item) => (
              <MarqueeChip key={`${group}-${item.label}`} item={item} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export function SectorsMarquee() {
  return (
    <motion.div
      className="sector-showcase"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="sector-showcase-frame" aria-hidden="true" />
      <div className="sector-marquee-stack">
        <MarqueeRow items={sectors} label="Sectores ecommerce" duration={42} />
        <MarqueeRow
          items={projectTypes}
          label="Tipos de proyecto ecommerce"
          direction="right"
          duration={32}
        />
      </div>
    </motion.div>
  )
}
