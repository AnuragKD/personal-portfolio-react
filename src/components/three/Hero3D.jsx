import React from 'react'
import { Canvas } from '@react-three/fiber'
import CubeScene from './models/CubeScene'
import SceneLights from './SceneLights'

export default function Hero3D(){
  return (
    <div className="h-screen w-full bg-transparent">
      <Canvas>
        <SceneLights />
        <CubeScene />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white drop-shadow-lg">
          <h1 className="text-4xl font-bold">Hi, I'm Anurag K D</h1>
          <p className="mt-2">Frontend Developer — 3D mode active</p>
        </div>
      </div>
    </div>
  )
}
