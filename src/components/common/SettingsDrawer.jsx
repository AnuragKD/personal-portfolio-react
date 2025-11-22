import React from 'react'
import { useMode } from '../../context/ModeContext'
import { useTheme } from '../../context/ThemeContext'

export default function SettingsDrawer(){
  const { mode, toggleMode } = useMode()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="fixed right-6 bottom-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
      <div className="mb-2">Settings</div>
      <button className="block w-full mb-2 px-3 py-2 bg-gray-100 rounded" onClick={toggleTheme}>
        Theme: {theme}
      </button>
      <button className="block w-full px-3 py-2 bg-gray-100 rounded" onClick={toggleMode}>
        {mode === 'simple' ? 'Enable 3D Mode' : 'Disable 3D Mode'}
      </button>
    </div>
  )
}
