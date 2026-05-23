import { useEffect, useState } from 'react'
import Icon from '../Icon'
import SiteLogo from "../../assets/images/site-logo.png";

/**
 * SplashScreen — full-page animated loader.
 * Shows: logo reveal → loading bar → pulsing dots → exit animation.
 * Fires onDone() once window 'load' event fires (or 2.2s fallback).
 */
export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('enter') // 'enter' | 'exit'

  useEffect(() => {
    let timer

    const complete = () => {
      clearTimeout(timer)
      // small delay so the bar reaches 100% visually
      setTimeout(() => {
        setPhase('exit')
        // after exit animation (500ms), notify parent
        setTimeout(onDone, 480)
      }, 300)
    }

    if (document.readyState === 'complete') {
      timer = setTimeout(complete, 600)
    } else {
      window.addEventListener('load', complete, { once: true })
      // hard fallback in case window.load never fires
      timer = setTimeout(complete, 3000)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', complete)
    }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1b1b1b] transition-none ${
        phase === 'exit' ? 'pointer-events-none' : ''
      }`}
      style={
        phase === 'exit'
          ? { animation: 'splash-exit 0.5s cubic-bezier(0.4,0,1,1) forwards' }
          : {}
      }
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Center content */}
      <div className="relative z-1 flex flex-col items-center gap-8">

        {/* Logo / name */}
        <div className="splash-logo-in flex flex-col items-center gap-3">
          {/* <Icon name="logo" className="h-12 w-auto invert opacity-90" /> */}
          <img src={SiteLogo} alt="Logo" className="h-[100px] lg:h-[140px] w-auto" />          
        </div>

        {/* Loading bar */}
        <div className="w-48 md:w-64 h-px bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#54814F] rounded-full splash-bar" />
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="splash-dot w-1.5 h-1.5 rounded-full bg-[#54814F]"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom tagline */}
      {/* <p
        className="absolute bottom-8 text-white/20 text-xs font-[Inter] tracking-widest splash-logo-in"
        style={{ animationDelay: '500ms' }}
      >
        Crafting interfaces with code &amp; creativity
      </p> */}
    </div>
  )
}
