import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import { ModeProvider } from './context/ModeContext'
import { ThemeProvider } from './context/ThemeContext'
import SettingsDrawer from './components/common/SettingsDrawer'

export default function App(){
  return (
    <ThemeProvider>
      <ModeProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <header className="w-full border-b">
              <nav className="container mx-auto p-4 flex justify-between items-center">
                <Link to="/" className="font-bold">Anurag K D</Link>
                <div className="space-x-4">
                  <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </nav>
            </header>

            <main className="flex-1">
              <Suspense fallback={<div className="p-8">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </main>

            <footer className="border-t p-4 text-center">© {new Date().getFullYear()} Anurag</footer>

            <SettingsDrawer />
          </div>
        </Router>
      </ModeProvider>
    </ThemeProvider>
  )
}
