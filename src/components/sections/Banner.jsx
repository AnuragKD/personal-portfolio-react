import { useState, useEffect } from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Button from '../ui/Button'
import Label from '../ui/Label'
import AnimateIn from '../element/AnimateIn'

// ─── Utility ────────────────────────────────────────────────
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ─── Sub-components ─────────────────────────────────────────

/** Parallax radial gradient background with abstract image */
const HeroBg = () => {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Small optimization, only track scroll while near top
      if (window.scrollY < window.innerHeight * 1.5) {
        setOffsetY(window.scrollY)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white">
      {/* Parallax Image */}
      <div 
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center origin-top pointer-events-none transition-transform duration-[50ms] ease-linear"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
          transform: `translateY(${offsetY * 0.35}px)`
        }}
      />
      
      {/* Gradient Color Tint */}
      <div className="absolute inset-0 bg-primary-color/20 mix-blend-color pointer-events-none" />
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] pointer-events-none" />
      
      {/* Dotted radial mask */}
      <div
        aria-hidden="true"
        className="absolute inset-0 h-full w-full pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 55%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 55%, transparent 100%)'
        }}
      />
      
      {/* Bottom fade to match next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  )
}

/** Small badge above the heading */
const HeroBadge = () => (
  <AnimateIn variant="fade-down" delay={120} duration={700}>
    <Label name="messageprogramming">Developer</Label>
  </AnimateIn>
)

/** Main heading */
const HeroHeading = () => (
  <AnimateIn variant="blur-in" delay={280} duration={950}>
    <h1 className="relative inline z-10 text-gray-900 drop-shadow-sm">
      Crafting Interfaces<br />With Code &amp; Creativity
    </h1>
  </AnimateIn>
)

/** Sub-tagline paragraph */
const HeroTagline = () => (
  <AnimateIn variant="fade-up" delay={460} duration={700}>
    <p className="mt-5 max-w-lg mx-auto text-gray-500 text-sm md:text-base leading-relaxed font-[Inter]">
      Frontend Developer with 1+ year of professional experience building scalable web applications using React.js and Next.js.
    </p>
  </AnimateIn>
)

/** Primary + secondary CTA buttons */
const HeroCTA = () => (
  <AnimateIn variant="scale-up" delay={620} duration={650}>
    <div className="pt-8 flex justify-center gap-3 flex-wrap relative z-10">
      <Button
        variant="secondary"
        onClick={() => scrollTo('projects')}
        aria-label="View my projects"
      >
        View My Work
      </Button>
      <Button
        variant="primary"
        onClick={() => scrollTo('contact')}
        aria-label="Go to contact form"
      >
        Get In Touch
      </Button>
    </div>
  </AnimateIn>
)

/** Scroll-hint arrow at the bottom */
const HeroScrollHint = () => (
  <AnimateIn variant="fade-up" delay={900} duration={700} className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10'>
    <button
      onClick={() => scrollTo('about')}
      aria-label="Scroll to About section"
      className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary-color transition-colors duration-200 group"
    >
      <span className="text-xs font-[Inter] tracking-widest uppercase shadow-sm bg-white/50 px-2 rounded-full backdrop-blur-sm">Scroll</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 animate-bounce mt-0.5"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </button>
  </AnimateIn>
)

// ─── Section ────────────────────────────────────────────────
const Banner = () => (
  
  <Section id="home" className="h-fit min-h-[100dvh] flex items-center relative">
    <HeroBg />

    <Container className="relative z-10 text-center">
      <HeroBadge />
      <div className="block mt-1">
        <HeroHeading />
      </div>
      <HeroTagline />
      <HeroCTA />
    </Container>

    <HeroScrollHint />
    <SectionBorder />
  </Section>
)

export default Banner