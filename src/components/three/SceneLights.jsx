import React from 'react'

export default function SceneLights(){
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5,5,5]} intensity={1} />
    </>
  )
}
