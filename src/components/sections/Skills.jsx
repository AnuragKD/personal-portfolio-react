import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Label from '../ui/Label'
import Card from '../ui/Card'
import AnimateIn from '../element/AnimateIn'
import skills from '../../data/skills'

const categoryColors = {
  Frontend: {
    border: 'border-green-500/25', bg: 'bg-green-500/5',
    badge: 'bg-green-500/10 text-green-300 border-green-500/20',
    dot: 'bg-green-400', label: 'text-green-400',
  },
  Backend: {
    border: 'border-blue-500/25', bg: 'bg-blue-500/5',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    dot: 'bg-blue-400', label: 'text-blue-400',
  },
  Tools: {
    border: 'border-amber-500/25', bg: 'bg-amber-500/5',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    dot: 'bg-amber-400', label: 'text-amber-400',
  },
}

const SkillCard = ({ skill, index }) => {
  const colors = categoryColors[skill.category] || categoryColors.Tools
  return (
    <AnimateIn variant="fade-up" delay={index * 120} duration={700}>
      <Card
        variant="outline"
        hover={true}
        className={`flex flex-col gap-4 p-5 h-full ${colors.border} ${colors.bg} hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1`}
      >
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
          <h4 className={`font-semibold text-xs uppercase tracking-widest ${colors.label} font-[Inter]`}>
            {skill.category}
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item) => (
            <span
              key={item.name}
              className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border ${colors.badge} transition-transform duration-200 hover:scale-105 cursor-default font-[Inter]`}
            >
              <span className="text-base leading-none">{item.icon}</span>
              {item.name}
            </span>
          ))}
        </div>
      </Card>
    </AnimateIn>
  )
}

const Skills = () => {
  return (
    <Section id="skills" className="h-fit flex items-center bg-black-bg">
      <Container className="z-1 w-full py-16">
        <AnimateIn variant="fade-down" delay={0} duration={600}>
          <Label name="messageprogramming">Skills</Label>
        </AnimateIn>
        <AnimateIn variant="blur-in" delay={80} duration={700}>
          <h2 className="text-white text-center mb-3">What I Work With</h2>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={160} duration={600}>
          <p className="text-white/50 text-center max-w-xl mx-auto mb-12 text-sm leading-relaxed font-[Inter]">
            Technologies and tools I use to build fast, accessible, and beautiful digital experiences.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </Container>
      <SectionBorder />
    </Section>
  )
}

export default Skills
