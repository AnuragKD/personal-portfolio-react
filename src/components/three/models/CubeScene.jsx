import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshStandardMaterial } from 'three'

export default function CubeScene(){
  const ref = useRef()
  useFrame((state, delta) => {
    if(ref.current){
      ref.current.rotation.y += 0.5 * delta
      ref.current.rotation.x += 0.2 * delta
    }
  })
  return (
    <mesh ref={ref} position={[0,0,0]}>
      <boxGeometry args={[1.8,1.8,1.8]} />
      <meshStandardMaterial color={'#00aaff'} metalness={0.4} roughness={0.2} />
    </mesh>
  )
}
