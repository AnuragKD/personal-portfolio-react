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
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default function App(){
  return (
    <ThemeProvider>
      <ModeProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-main-bg">
            <Header/>
            
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

            <Footer/>

            {/* <SettingsDrawer /> */}
          </div>
        </Router>
      </ModeProvider>
    </ThemeProvider>
  )
}
