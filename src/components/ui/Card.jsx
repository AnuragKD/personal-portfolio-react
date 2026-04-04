/**
 * Reusable Card component
 * Variants:
 *  - "default"  : white bg, light border, subtle shadow  (light sections)
 *  - "dark"     : translucent white on dark bg            (dark sections)
 *  - "outline"  : transparent with colored border         (Skills)
 *  - "timeline" : used for Experience timeline cards
 */
export default function Card({
  children,
  variant = 'default',
  className = '',
  hover = true,
  ...props
}) {
  const variants = {
    default: 'bg-white border border-gray-100 shadow-sm',
    dark: 'bg-white/5 border border-white/10',
    outline: 'border bg-transparent',
    timeline: 'bg-white border border-gray-100 shadow-sm',
  }

  const hoverStyles = hover
    ? variant === 'dark'
      ? 'hover:-translate-y-1 hover:border-white/25 hover:shadow-xl hover:shadow-black/30'
      : 'hover:-translate-y-1 hover:shadow-md hover:shadow-gray-200/80 hover:border-gray-200'
    : ''

  return (
    <div
      className={`rounded-2xl transition-all duration-300 ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
