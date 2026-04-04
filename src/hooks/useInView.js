import { useEffect, useRef, useState } from 'react'

/**
 * useInView — fires when the element enters the viewport.
 * Returns [ref, isVisible].
 *
 * @param {object} options
 * @param {string} options.threshold — 0–1, how much of element visible before firing
 * @param {string} options.rootMargin — IntersectionObserver rootMargin
 * @param {boolean} options.once — if true, stop observing after first trigger (default true)
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) obs.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, isVisible]
}
