import { useState } from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Label from '../ui/Label'
import Card from '../ui/Card'
import Button from '../ui/Button'
import AnimateIn from '../element/AnimateIn'
import experience from '../../data/experience'

const TimelineDot = ({ isLast }) => (
  <div className="flex flex-col items-center shrink-0" style={{ minWidth: '28px' }}>
    <div className="w-3.5 h-3.5 rounded-full bg-primary-color border-2 border-primary-color ring-4 ring-primary-color/20 z-10 mt-1" />
    {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-primary-color/40 to-transparent mt-1 min-h-[40px]" />}
  </div>
)

const ExperienceCard = ({ exp, isLast, index }) => {
  return (
    <AnimateIn variant="fade-right" delay={index * 120} duration={700}>
      <div className="flex gap-5 group">
        <TimelineDot isLast={isLast} />
        <div className={`flex flex-col ${isLast ? 'pb-0' : 'pb-10'} flex-1`}>
          <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
            <div>
              <h3 className="text-gray-900 text-lg font-semibold font-[BricolageGrotesque] leading-snug">{exp.role}</h3>
              <p className="text-primary-color text-sm font-medium font-[Inter]">{exp.company}</p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-xs text-gray-400 font-[Inter]">{exp.duration}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary-color/10 text-primary-color border border-primary-color/20 font-[Inter]">
                {exp.type}
              </span>
            </div>
          </div>
          <Card variant="default" hover={true} className="p-5 group-hover:border-primary-color/20">
            <p className="text-gray-500 text-sm leading-relaxed mb-4 font-[Inter]">{exp.description}</p>
            <ul className="flex flex-col gap-2">
              {exp.Highlights?.map((h, i) => (
                <li key={i} className="flex gap-2 items-start text-sm text-gray-500 font-[Inter]">
                  <span className="text-primary-color mt-0.5 shrink-0">▸</span>
                  {h}
                </li>
              ))}
              {exp.highlights?.map((h, i) => (
                <li key={`lc-${i}`} className="flex gap-2 items-start text-sm text-gray-500 font-[Inter]">
                  <span className="text-primary-color mt-0.5 shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </AnimateIn>
  )
}

const Experience = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedExp = showAll ? experience : experience.slice(0, 2)

  return (
    <Section id="experience" className="h-fit flex items-center relative overflow-hidden">
      
      {/* Decorative Background Orbs */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-color/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] -right-[10%] w-[30%] h-[40%] rounded-full bg-primary-color/5 blur-[100px] pointer-events-none z-0" />

      {/* Dotted radial mask */}
      <div
        aria-hidden="true"
        className="absolute inset-0 h-full w-full pointer-events-none bg-[radial-gradient(#dbdbdb_1px,transparent_1px)] bg-[size:16px_16px]"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 55%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 55%, transparent 100%)'
        }}
      />

      <Container className="relative z-10 w-full py-16">
        <AnimateIn variant="fade-down" delay={0} duration={600} className="flex justify-center">
          <Label name="experience" className="!mx-0">Experience</Label>
        </AnimateIn>
        <AnimateIn variant="blur-in" delay={80} duration={700}>
          <h2 className="text-gray-900 text-center mb-3 mt-1">My Journey</h2>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={160} duration={600}>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-14 text-sm leading-relaxed">
            A record of the roles where I've grown as a developer and delivered real impact.
          </p>
        </AnimateIn>

        <div className="max-w-2xl mx-auto">
          {displayedExp.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} isLast={index === displayedExp.length - 1} index={index} />
          ))}
        </div>

        {experience.length > 2 && (
          <AnimateIn variant="fade-up" delay={300} duration={600}>
            <div className="pt-10 flex justify-center">
              <Button variant="secondary" onClick={() => setShowAll(!showAll)}>
                {showAll ? "View Less" : "View All Experience"}
              </Button>
            </div>
          </AnimateIn>
        )}
      </Container>
      <SectionBorder />
    </Section>
  )
}

export default Experience
