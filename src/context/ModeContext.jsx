import React, { createContext, useContext, useState, useEffect } from 'react'

const ModeContext = createContext()
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    try { return localStorage.getItem('mode') || 'simple' } catch { return 'simple' }
  })

  useEffect(()=> {
    try { localStorage.setItem('mode', mode) } catch {}
  }, [mode])

  const toggleMode = () => setMode(m => m === 'simple' ? '3d' : 'simple')

  return <ModeContext.Provider value={{mode,toggleMode}}>{children}</ModeContext.Provider>
}
export const useMode = ()=> useContext(ModeContext)
