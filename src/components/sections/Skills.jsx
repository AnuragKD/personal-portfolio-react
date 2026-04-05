import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Label from '../ui/Label'
import AnimateIn from '../element/AnimateIn'
import skills from '../../data/skills'

const MarqueeRow = ({ items, reverse = false, speed = 40 }) => {
  // duplicate items to ensure infinite seamless scrolling
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items]
  
  return (
    <div className="relative flex overflow-hidden w-full select-none group mask-image-fade">
      <div 
        className={`flex w-max shrink-0 items-center justify-center gap-4 py-3 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedItems.map((item, i) => (
          <div key={`${item.name}-${i}`} className="group/card flex items-center gap-2.5 px-6 py-3 rounded-full border border-gray-200 bg-white/60 backdrop-blur-md text-gray-700 shadow-sm transition-all duration-300 hover:border-primary-color hover:text-primary-color hover:-translate-y-1 hover:shadow-md cursor-default">
            <span className="text-xl leading-none grayscale transition-all duration-300 group-hover/card:grayscale-0">{item.icon}</span>
            <span className="font-[Inter] font-medium whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  const frontendSkills = skills.find(s => s.category === 'Frontend')?.items || []
  const backendSkills = skills.find(s => s.category === 'Backend')?.items || []
  const toolSkills = skills.find(s => s.category === 'Tools')?.items || []

  // Combine backend and tools into the second row to balance sizes
  const row2Skills = [...backendSkills, ...toolSkills]

  return (
    <Section id="skills" className="h-fit flex items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full
          bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)]
          bg-[size:40px_40px]"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 40%, transparent 100%)'
        }}
      />
      <Container className="z-1 w-full py-20 pb-28">
        <AnimateIn variant="fade-down" delay={0} duration={600}>
          <div className="flex justify-center">
            <Label name="messageprogramming" className="!mx-0">Skills</Label>
          </div>
        </AnimateIn>
        
        <AnimateIn variant="blur-in" delay={80} duration={700}>
          <h2 className="text-gray-900 text-center mb-4">Core Technologies</h2>
        </AnimateIn>
        
        <AnimateIn variant="fade-up" delay={160} duration={600}>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-16 text-sm md:text-base leading-relaxed font-[Inter]">
            The tools and frameworks I use to engineer robust, high-performance web applications and beautiful digital experiences.
          </p>
        </AnimateIn>

        {/* Break out of container to span full viewport width using 100vw trick */}
        <div className="flex flex-col gap-6 relative">
          <AnimateIn variant="fade-left" delay={300} duration={800} className="w-full">
            <MarqueeRow items={frontendSkills} speed={55} />
          </AnimateIn>
          
          <AnimateIn variant="fade-right" delay={400} duration={800} className="w-full">
            <MarqueeRow items={row2Skills} reverse={true} speed={60} />
          </AnimateIn>
        </div>
      </Container>
      <SectionBorder />
    </Section>
  )
}

export default Skills
