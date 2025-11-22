import React from 'react'
// import { motion } from 'framer-motion'

export default function HeroSimple(){
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-50">
      <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity: 1 }} className="text-5xl font-bold">
        Hi, I'm Anurag K D
      </motion.h1>
      <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} className="mt-4 text-lg text-gray-600">
        Frontend Developer — I build interactive web experiences
      </motion.p>
    </section>
  )
}
