import { motion, useReducedMotion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function MotionSection({ id, className = '', children }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  )
}
