import { useEffect, useRef, useState } from 'react'
import {
  animate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion'

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1.2,
  delay = 0,
  className = '',
  start = false,
}) {
  const count = useMotionValue(0)
  const shouldReduceMotion = useReducedMotion()
  const hasAnimated = useRef(false)
  const [displayValue, setDisplayValue] = useState(0)

  const finalText = `${prefix}${value}${suffix}`
  const digitCount = Math.max(String(Math.abs(value)).length, 1)

  useMotionValueEvent(count, 'change', (latest) => {
    const rounded = Math.round(latest)
    const clamped =
      value >= 0
        ? Math.min(value, Math.max(0, rounded))
        : Math.max(value, Math.min(0, rounded))

    setDisplayValue(clamped)
  })

  useEffect(() => {
    if (shouldReduceMotion) {
      count.set(value)
      setDisplayValue(value)
      hasAnimated.current = true
      return undefined
    }

    if (!start || hasAnimated.current) {
      return undefined
    }

    hasAnimated.current = true
    count.set(0)
    setDisplayValue(0)

    const controls = animate(count, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    })

    return () => controls.stop()
  }, [count, delay, duration, shouldReduceMotion, start, value])

  return (
    <span className={className}>
      <span
        className="animated-counter-visual"
        style={{ '--counter-digits': `${digitCount}ch` }}
        aria-hidden="true"
      >
        {prefix ? <span className="animated-counter-prefix">{prefix}</span> : null}
        <span className="animated-counter-number">{displayValue}</span>
        {suffix ? <span className="animated-counter-suffix">{suffix}</span> : null}
      </span>
      <span className="sr-only">{finalText}</span>
    </span>
  )
}
