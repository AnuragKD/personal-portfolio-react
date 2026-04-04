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

/** Dotted radial gradient background */
const HeroBg = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 z-0 h-full w-full bg-white
      bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
      bg-size-[16px_16px]
      mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#F7F7F7_55%,transparent_100%)]"
  />
)

/** Small badge above the heading */
const HeroBadge = () => (
  <AnimateIn variant="fade-down" delay={120} duration={700}>
    <Label name="messageprogramming">Developer</Label>
  </AnimateIn>
)

/** Main heading */
const HeroHeading = () => (
  <AnimateIn variant="blur-in" delay={280} duration={950}>
    <h1 className="relative inline z-1">
      Crafting Interfaces<br />With Code &amp; Creativity
    </h1>
  </AnimateIn>
)

/** Sub-tagline paragraph */
const HeroTagline = () => (
  <AnimateIn variant="fade-up" delay={460} duration={700}>
    <p className="mt-5 max-w-lg mx-auto text-gray-400 text-sm md:text-base leading-relaxed font-[Inter]">
      I build fast, accessible, and beautiful web experiences using React and modern tooling.
    </p>
  </AnimateIn>
)

/** Primary + secondary CTA buttons */
const HeroCTA = () => (
  <AnimateIn variant="scale-up" delay={620} duration={650}>
    <div className="pt-8 flex justify-center gap-3 flex-wrap">
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
  <AnimateIn variant="fade-up" delay={900} duration={700} className='absolute bottom-8 left-1/2 -translate-x-1/2'>
    <button
      onClick={() => scrollTo('about')}
      aria-label="Scroll to About section"
      className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary-color transition-colors duration-200 group"
    >
      <span className="text-xs font-[Inter] tracking-widest uppercase">Scroll</span>
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
  <Section id="home" className="h-fit min-h-[90dvh] flex items-center">
    <HeroBg />

    <Container className="z-1 text-center">
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