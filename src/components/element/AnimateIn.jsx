import useInView from '../../hooks/useInView'

/**
 * AnimateIn — wraps children in a div that plays a CSS animation
 * the moment it scrolls into view.
 *
 * Props:
 *  variant   — "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "blur-in"
 *  delay     — delay in ms (default 0)
 *  duration  — duration in ms (default 650)
 *  className — extra class names passed to the wrapper
 *  threshold — IntersectionObserver threshold (default 0.1)
 *  tag       — HTML tag to render (default "div")
 */
export default function AnimateIn({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 650,
  className = '',
  threshold = 0.1,
  tag: Tag = 'div',
}) {
  const [ref, isVisible] = useInView({ threshold, rootMargin: '0px 0px -50px 0px' })

  return (
    <Tag
      ref={ref}
      className={`${isVisible ? `anim-${variant}` : 'anim-hidden'} ${className}`}
      style={{
        '--anim-delay': `${delay}ms`,
        '--anim-dur': `${duration}ms`,
      }}
    >
      {children}
    </Tag>
  )
}
