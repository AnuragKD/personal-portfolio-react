import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

export default function ProjectDetail(){
  const { id } = useParams()
  const p = projects.find(x=> String(x.id) === id)
  if(!p) return <div className="p-8">Project not found. <Link to="/projects">Back</Link></div>
  return (
    <section className="container mx-auto py-12">
      <Link to="/projects" className="text-sm text-blue-600">← Back to projects</Link>
      <h1 className="text-3xl font-bold mt-4">{p.title}</h1>
      <p className="mt-4 text-gray-700">{p.description}</p>
      <div className="mt-6">
        <strong>Tech:</strong> {p.tech.join(', ')}
      </div>
      <div className="mt-6">
        <a href={p.live} target="_blank" rel="noreferrer" className="text-blue-600">Live Demo</a>
        {' · '}
        <a href={p.github} target="_blank" rel="noreferrer" className="text-blue-600">Source</a>
      </div>
    </section>
  )
}
