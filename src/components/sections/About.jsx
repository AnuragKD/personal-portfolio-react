import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Icon from '../Icon'
import Buttonhex from '../ui/Buttonhex'
import Button from '../ui/Button'
import Label from '../ui/Label'
import AnimateIn from '../element/AnimateIn'
import CvIcon from '../../assets/icons/cv.png'
import ProfileImg from '../../assets/images/anurag.png'

// ─── Sub-components ─────────────────────────────────────────

/** Left column — badge, heading, bio, CTA */
const AboutText = () => (
  <AnimateIn variant="fade-right" delay={100} duration={750} className="w-full relative flex-1 min-w-0">
    <Label name="messageprogramming" className="!mx-0">Who I Am</Label>

    <AnimateIn variant="fade-up" delay={180} duration={600}>
      <h3 className="mb-1 text-gray-500 font-normal text-base md:text-lg font-[Inter]">
        Hey, I'm Anurag
      </h3>
    </AnimateIn>

    <AnimateIn variant="blur-in" delay={260} duration={800}>
      <h2 className="mb-4">
        Frontend &amp; <br />React Developer
      </h2>
    </AnimateIn>

    <AnimateIn variant="fade-up" delay={360} duration={650}>
      <p className="mb-6 max-w-md">
        I have{' '}
        <strong className="text-primary-color font-semibold">1.6 years</strong>{' '}
        of experience specializing in React. I love crafting modern web designs with smooth
        animations and have a sharp eye for detail.
      </p>
    </AnimateIn>

    <AnimateIn variant="scale-up" delay={460} duration={600}>
      <a href="/resume.pdf" download="Anurag_CV.pdf" aria-label="Download CV">
        <Button variant="secondary">Download CV</Button>
      </a>
    </AnimateIn>
  </AnimateIn>
)

/** Single stat badge card */
const StatItem = ({ value, label, iconName, align = 'left' }) => (
  <li
    className={`flex gap-2 md:gap-4 w-fit items-center
      bg-primary-color/10 border border-primary-color/30
      px-3 md:px-4 py-2 rounded-2xl
      ${align === 'right' ? 'flex-row-reverse lg:flex-row' : 'flex-row-reverse'}`}
  >
    <div className={`flex flex-col ${align === 'right' ? 'items-start lg:items-end text-start lg:text-end' : 'items-start text-start'}`}>
      <h4 className="font-[BricolageGrotesque] text-lg md:text-xl xl:text-2xl leading-tight">{value}</h4>
      <p className="small-para">{label}</p>
    </div>
    <Icon name={iconName} className="w-8 md:w-10 lg:w-12 h-auto opacity-50 shrink-0" />
  </li>
)

/** Profile photo with decorative tilted card layers */
const ProfileCard = () => (
  <AnimateIn
    variant="scale-up"
    delay={200}
    duration={900}
    className="w-full md:w-[40%] flex justify-center items-center -order-1 md:order-none mb-8 md:mb-0"
  >
    <div className="relative flex w-[55%] sm:w-[45%] md:w-[70%] lg:w-[60%] mt-6">
      {/* Decorative tilted back cards */}
      <div className="z-0 absolute inset-0 -rotate-6 origin-bottom-right w-full h-fit flex p-2 border border-gray-300 bg-blue-400/10 rounded-xl shadow-lg" aria-hidden="true">
        <div className="w-full aspect-4/5 rounded-xl" />
      </div>
      <div className="z-0 absolute inset-0 rotate-6 origin-bottom-right w-full h-fit flex p-2 border border-gray-300 bg-primary-color/10 rounded-xl shadow-lg" aria-hidden="true">
        <div className="w-full aspect-4/5 rounded-xl" />
      </div>

      {/* Main card */}
      <div className="relative z-1 w-full h-fit flex flex-col gap-3 p-2 border border-gray-300 bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl">
        {/* Top decorative SVG bar */}
        <div className="flex h-fit w-full rounded-xl overflow-hidden">
          <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="1688" height="120" viewBox="0 0 1688 120" fill="none" aria-hidden="true">
            <path
              className="fill-primary-color/80"
              d="M1241.38 24.043C1241.35 24.043 1241.31 24.0586 1241.28 24.0859L1224.08 41.2812C1224.04 41.3242 1224.03 41.3906 1224.06 41.4453C1224.08 41.4961 1224.12 41.5313 1224.19 41.5352H1224.17C1224.17 41.5391 1224.19 41.5391 1224.19 41.5391C1224.19 41.5391 1224.2 41.5391 1224.2 41.5352H1224.21L1670.56 41.5391C1670.6 41.5391 1670.65 41.5234 1670.67 41.4961C1670.67 41.4922 1670.67 41.4922 1670.67 41.4922L1687.87 24.2969C1687.92 24.2539 1687.92 24.1914 1687.9 24.1367C1687.88 24.0781 1687.83 24.043 1687.76 24.043H1241.38ZM1255.76 0H1193.4C1193.4 0 1193.4 0 1193.38 0C1193.33 0 1193.29 0.0195315 1193.26 0.0546875L1122.24 71.0586L1121.31 72H878.654L877.705 71.0586L830.705 24.0586C830.673 24.0195 830.615 24 830.564 24H257.388C257.337 24 257.287 24.0195 257.251 24.0547L233.306 48H17.4038C17.3999 48 17.3921 48 17.3882 48C17.3374 48 17.2905 48.0195 17.2515 48.0547L0.0561478 65.2539C0.00146082 65.3086 -0.0141649 65.3906 0.0131791 65.4609C0.0444291 65.5352 0.114741 65.582 0.18896 65.582L761.306 65.5781L809.255 113.523C809.294 113.563 809.333 113.582 809.384 113.582C809.396 113.582 809.404 113.582 809.404 113.578L1142.56 113.582C1142.61 113.582 1142.67 113.559 1142.7 113.523L1255.9 0.328125C1255.95 0.273437 1255.97 0.191407 1255.94 0.117188C1255.92 0.0468755 1255.85 0 1255.76 0ZM15.978 89.4219V96.1562H758.583L781.595 119.172L786.365 114.41L761.373 89.4219H15.978Z"
              fill="black"
            />
          </svg>
        </div>
        {/* Profile image */}
        <img
          className="w-full aspect-5/6 object-center object-contain rounded-xl border border-gray-200"
          src={ProfileImg}
          alt="Anurag — Frontend Developer"
        />
      </div>
    </div>
  </AnimateIn>
)

/** Social links hub (hex buttons) */
const SocialHub = () => (
  <AnimateIn variant="scale-up" delay={300} duration={800} className="order-3 lg:order-2 w-full lg:w-fit flex flex-col justify-center mb-4 lg:mb-0">
    {/* Row 1 — CV */}
    <div className="flex gap-2 items-center w-fit mx-auto">
      <Buttonhex className="hidden md:flex" aria-hidden="true" />
      <a href="/resume.pdf" download="Anurag_CV.pdf" className="block focus:outline-none">
        <Buttonhex aria-label="Download CV">
          <img src={CvIcon} alt="CV icon" />
        </Buttonhex>
      </a>
      <Buttonhex className="hidden md:flex" aria-hidden="true" />
    </div>
    {/* Row 2 — Social */}
    <div className="flex gap-2 items-center w-fit mx-auto -mt-3">
      <Buttonhex className="hidden md:flex" aria-hidden="true" />
      <a href="https://linkedin.com/in/anurag" target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
        <Buttonhex aria-label="LinkedIn profile">
          <Icon name="linkedin" className="w-8 h-auto text-gray-700" />
        </Buttonhex>
      </a>
      <a href="https://github.com/anurag" target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
        <Buttonhex aria-label="GitHub profile">
          <Icon name="github" className="w-8 h-auto text-gray-700" />
        </Buttonhex>
      </a>
      <Buttonhex className="hidden md:flex" aria-hidden="true" />
    </div>
    {/* Row 3 — decoration */}
    <div className="flex gap-2 items-center w-fit mx-auto -mt-3">
      <Buttonhex className="hidden md:flex" aria-hidden="true" />
      <Buttonhex className="hidden md:flex" aria-hidden="true" />
      <Buttonhex className="hidden md:flex" aria-hidden="true" />
    </div>
  </AnimateIn>
)

/** Bottom stats strip */
const StatsRow = () => {
  const leftStats = [
    { value: '1.5+', label: 'Experience', iconName: 'experience' },
    { value: '5+',   label: 'Projects',   iconName: 'project'    },
  ]
  const rightStats = [
    { value: '100+', label: 'Clients', iconName: 'client', align: 'right' },
  ]

  return (
    <div className="relative flex mt-12 md:mt-16 flex-wrap gap-4 md:gap-6 lg:gap-10 flex-1 justify-center items-center">
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full
          bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)]
          bg-[size:40px_40px]
          mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#F7F7F7_60%,transparent_100%)]"
      />

      {/* Left stats */}
      <AnimateIn variant="fade-right" delay={100} duration={650} tag="ul"
        className="z-1 order-2 lg:order-1 lg:flex-1 flex flex-wrap flex-row lg:flex-col items-start justify-center gap-3 md:gap-5">
        {leftStats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </AnimateIn>

      {/* Social hub center */}
      <SocialHub />

      {/* Right stats */}
      <AnimateIn variant="fade-left" delay={100} duration={650} tag="ul"
        className="z-1 order-2 lg:order-3 lg:flex-1 flex flex-wrap flex-row lg:flex-col items-start lg:items-end justify-center gap-3 md:gap-5">
        {rightStats.map((s) => (
          <StatItem key={s.label} {...s} align={s.align} />
        ))}
      </AnimateIn>
    </div>
  )
}

// ─── Section ────────────────────────────────────────────────
const About = () => (
  <Section id="about">
    <Container>
      <div className="relative flex flex-col py-6 md:py-10">
        {/* Top row — text + profile image */}
        <div className="relative z-1 flex flex-row flex-wrap justify-between gap-6 items-center">
          <AboutText />
          <ProfileCard />
        </div>

        {/* Bottom row — stats strip */}
        <StatsRow />
      </div>
    </Container>
    <SectionBorder />
  </Section>
)

export default About