import { useState } from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionBorder from '../element/Sectionborder'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Label from '../ui/Label'
import AnimateIn from '../element/AnimateIn'
import projects from '../../data/projects'

const TechPill = ({ tech }) => (
  <span className="text-xs px-2.5 py-1 rounded-full border bg-gray-50 text-gray-600 border-gray-200 font-[Inter]">
    {tech}
  </span>
)

const ProjectCard = ({ project, index }) => {
  return (
    <AnimateIn variant="scale-up" delay={index * 100} duration={700} className="h-full">
      <Card variant="default" hover={true} className="flex flex-col overflow-hidden group h-full">
        {/* Image */}
        <div className="relative w-full aspect-video bg-gray-50 overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              <span className="text-gray-200 text-6xl font-bold font-[BricolageGrotesque] select-none">{project.title[0]}</span>
              <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] bg-[size:18px_18px]" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3 className="text-gray-900 text-lg font-semibold font-[BricolageGrotesque]">{project.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1 font-[Inter]">{project.short}</p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tech.map((tech) => <TechPill key={tech} tech={tech} />)}
          </div>
          <div className="flex gap-2 pt-2 mt-auto">
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-sm py-2 px-4 rounded-full bg-primary-color text-white border border-transparent hover:bg-black transition-all duration-200 font-[Inter]">
              Live ↗
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-sm py-2 px-4 rounded-full bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:text-black transition-all duration-200 font-[Inter]">
              GitHub
            </a>
          </div>
        </div>
      </Card>
    </AnimateIn>
  )
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  
  // Conditionally subset projects list
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <Section id="projects" className="h-fit flex items-center relative overflow-hidden">
      
      {/* Decorative Background Orbs */}
      <div className="absolute -top-[5%] -right-[15%] w-[60%] h-[60%] rounded-full bg-primary-color/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[50%] -left-[10%] w-[40%] h-[50%] rounded-full bg-primary-color/5 blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10 w-full py-16">
        <AnimateIn variant="fade-down" delay={0} duration={600} className="flex justify-center">
          <Label name="messageprogramming" className="!mx-0">Projects</Label>
        </AnimateIn>
        <AnimateIn variant="blur-in" delay={80} duration={700}>
          <h2 className="text-gray-900 text-center mb-3 mt-1">My Work</h2>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={160} duration={600}>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12 text-sm leading-relaxed font-[Inter]">
            A selection of projects I've built — from interactive 3D experiences to polished UI systems.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > 3 && (
          <AnimateIn variant="fade-up" delay={300} duration={600}>
            <div className="pt-10 flex justify-center">
              <Button variant="primary" onClick={() => setShowAll(!showAll)}>
                {showAll ? "View Less" : "View All Projects"}
              </Button>
            </div>
          </AnimateIn>
        )}
      </Container>
      <SectionBorder />
    </Section>
  )
}

export default Projects