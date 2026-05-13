import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ChevronDown,
  Check,
  Layers,
  ShoppingCart,
  Store,
} from 'lucide-react'
import { platforms } from '../data/portfolioData'

const iconMap = { Store, ShoppingCart, Layers }

const smoothEase = [0.16, 1, 0.3, 1]
const closeEase = [0.32, 0, 0.67, 0]

const panelVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: closeEase },
      opacity: { duration: 0.16, ease: closeEase },
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.46, ease: smoothEase },
      opacity: { duration: 0.24, delay: 0.06, ease: smoothEase },
    },
  },
}

const panelContentVariants = {
  collapsed: {
    opacity: 0,
    transition: { duration: 0.14, ease: closeEase },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.1, ease: smoothEase },
  },
}

const groupRevealVariants = {
  collapsed: {
    opacity: 0,
    y: 6,
    transition: { duration: 0.16, ease: closeEase },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: smoothEase },
  },
}

const detailVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.22, ease: closeEase },
      opacity: { duration: 0.14, ease: closeEase },
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.32, ease: smoothEase },
      opacity: { duration: 0.2, delay: 0.04, ease: smoothEase },
    },
  },
}

const bulletListVariants = {
  collapsed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
  open: {
    transition: { staggerChildren: 0.028, delayChildren: 0.06 },
  },
}

const bulletVariants = {
  collapsed: {
    opacity: 0,
    y: 4,
    transition: { duration: 0.1, ease: closeEase },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: smoothEase },
  },
}

const reducedPanelVariants = {
  collapsed: { height: 0, opacity: 0, transition: { duration: 0 } },
  open: { height: 'auto', opacity: 1, transition: { duration: 0 } },
}

const reducedFadeVariants = {
  collapsed: { opacity: 0, y: 0, transition: { duration: 0 } },
  open: { opacity: 1, y: 0, transition: { duration: 0 } },
}

export function Platforms() {
  const [openId, setOpenId] = useState(null)
  const [openGroupId, setOpenGroupId] = useState(null)
  const reduce = useReducedMotion()
  const activePanelVariants = reduce ? reducedPanelVariants : panelVariants
  const activeFadeVariants = reduce ? reducedFadeVariants : panelContentVariants
  const activeGroupVariants = reduce ? reducedFadeVariants : groupRevealVariants

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
    setOpenGroupId(null)
  }

  const toggleGroup = (groupId) => {
    setOpenGroupId((current) => (current === groupId ? null : groupId))
  }

  return (
    <div className="platforms">
      {platforms.map((platform, index) => {
        const Icon = iconMap[platform.icon] || Store
        const isOpen = openId === platform.id
        const panelId = `platform-panel-${platform.id}`
        const totalCapabilities = platform.groups.reduce(
          (total, group) => total + group.items.length,
          0,
        )

        return (
          <motion.article
            key={platform.id}
            className={`platform-card platform-${platform.accent} ${isOpen ? 'is-open' : ''}`}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: smoothEase }}
          >
            <button
              type="button"
              className="platform-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(platform.id)}
            >
              <span className="platform-icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.9} />
              </span>

              <div className="platform-head">
                <span className="platform-eyebrow">{platform.lead}</span>
                <h3 className="platform-title">{platform.title}</h3>
                <p className="platform-summary">{platform.summary}</p>

                <div className="platform-chips">
                  {platform.chips.map((chip) => (
                    <span key={chip} className="chip chip-mono">{chip}</span>
                  ))}
                </div>
              </div>

              <span className="platform-action" aria-hidden="true">
                <span className="platform-action-label">{isOpen ? 'Cerrar' : 'Expandir'}</span>
                <span className="platform-chevron">
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.04 : 1 }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 420, damping: 34, mass: 0.7 }
                    }
                    style={{ display: 'inline-flex' }}
                  >
                    <ChevronDown size={18} strokeWidth={2.2} />
                  </motion.span>
                </span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  className="platform-panel"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={activePanelVariants}
                  role="region"
                  aria-label={`Detalle de capacidades en ${platform.title}`}
                >
                  <div className="platform-panel-clip">
                    <motion.div
                      className="platform-panel-inner"
                      variants={activeFadeVariants}
                    >
                      <motion.div
                        className="platform-panel-header"
                        variants={activeGroupVariants}
                      >
                        <div>
                          <span className="platform-panel-kicker">Capacidades principales</span>
                          <p>{platform.groups.length} áreas técnicas, {totalCapabilities} capacidades</p>
                        </div>
                        <span className="platform-panel-count">{totalCapabilities}</span>
                      </motion.div>

                      <div className="platform-accordion">
                        {platform.groups.map((group, groupIndex) => {
                          const groupId = `${platform.id}-${groupIndex}`
                          const isGroupOpen = openGroupId === groupId
                          const groupPanelId = `platform-group-${groupId}`

                          return (
                            <motion.div
                              className={`platform-group ${isGroupOpen ? 'is-open' : ''}`}
                              key={group.title}
                              variants={activeGroupVariants}
                            >
                              <button
                                type="button"
                                className="platform-group-trigger"
                                aria-expanded={isGroupOpen}
                                aria-controls={groupPanelId}
                                onClick={() => toggleGroup(groupId)}
                              >
                                <span className="platform-group-index">
                                  {String(groupIndex + 1).padStart(2, '0')}
                                </span>
                                <span className="platform-group-copy">
                                  <span className="platform-group-title">{group.title}</span>
                                  <span className="platform-group-meta">
                                    {group.items.length} capacidades
                                  </span>
                                </span>
                                <span className="platform-group-toggle" aria-hidden="true">
                                  <motion.span
                                    animate={{ rotate: isGroupOpen ? 180 : 0 }}
                                    transition={
                                      reduce
                                        ? { duration: 0 }
                                        : { type: 'spring', stiffness: 460, damping: 34, mass: 0.65 }
                                    }
                                    style={{ display: 'inline-flex' }}
                                  >
                                    <ChevronDown size={16} strokeWidth={2.4} />
                                  </motion.span>
                                </span>
                              </button>

                              <AnimatePresence initial={false}>
                                {isGroupOpen && (
                                  <motion.div
                                    id={groupPanelId}
                                    className="platform-group-panel"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={reduce ? reducedPanelVariants : detailVariants}
                                  >
                                    <div className="platform-group-panel-clip">
                                      <motion.ul
                                        className="platform-group-list"
                                        variants={reduce ? undefined : bulletListVariants}
                                      >
                                        {group.items.map((item) => (
                                          <motion.li
                                            key={item}
                                            variants={reduce ? reducedFadeVariants : bulletVariants}
                                          >
                                            <span className="platform-bullet" aria-hidden="true">
                                              <Check size={11} strokeWidth={2.6} />
                                            </span>
                                            <span>{item}</span>
                                          </motion.li>
                                        ))}
                                      </motion.ul>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        )
      })}
    </div>
  )
}
