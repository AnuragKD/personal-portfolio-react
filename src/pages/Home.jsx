import React, { Suspense, lazy } from 'react'
import HeroSimple from '../components/simple/HeroSimple'
// import { useMode } from '../context/ModeContext'

const Hero3D = lazy(() => import('../components/three/Hero3D'))

export default function Home(){
  // const { mode } = useMode()
  return (
    <div>
      {/* {mode === 'simple' ? <HeroSimple /> :
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading 3D...</div>}>
          <Hero3D />
        </Suspense>
      } */}

      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <p className="mt-4 text-gray-600">A small showcase of projects. Visit Projects page for more.</p>
      </section>
    </div>
  )
}
