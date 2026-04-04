import { useState, useCallback } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import { ModeProvider } from './context/ModeContext'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import SplashScreen from './components/common/SplashScreen'

export default function App(){
  const [splashDone, setSplashDone] = useState(false)
  const handleSplashDone = useCallback(() => setSplashDone(true), [])

  return (
    <ThemeProvider>
      <ModeProvider>
        <Router>
          {!splashDone && <SplashScreen onDone={handleSplashDone} />}
          <div
            className={`min-h-screen flex flex-col bg-main-bg transition-opacity duration-700 ${
              splashDone ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Header/>
            <main className="flex-1">
              <Home />
            </main>
            <Footer/>
          </div>
        </Router>
      </ModeProvider>
    </ThemeProvider>
  )
}
