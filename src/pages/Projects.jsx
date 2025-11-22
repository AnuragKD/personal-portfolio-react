import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

export default function Projects(){
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p=>(
          <div key={p.id} className="p-4 border rounded">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.short}</p>
            <div className="mt-4 flex justify-between items-center">
              <Link to={`/projects/${p.id}`} className="text-blue-600">View</Link>
              <div className="text-sm text-gray-500">{p.tech.join(' • ')}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
