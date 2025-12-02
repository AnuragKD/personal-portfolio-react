import React, { Suspense, lazy } from 'react'
import Banner from '../components/sections/banner'
import Separator from '../components/element/Separator'

// import HeroSimple from '../components/simple/HeroSimple'
// import { useMode } from '../context/ModeContext'

const Hero3D = lazy(() => import('../components/three/Hero3D'))

export default function Home(){
  // const { mode } = useMode()
  return (
    <>
      {/* {mode === 'simple' ? <HeroSimple /> :
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading 3D...</div>}>
          <Hero3D />
        </Suspense>
      } */}
      <Separator/>
      <Banner/>
    </>
  )
}
