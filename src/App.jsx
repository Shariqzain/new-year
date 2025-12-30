import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Goals2026 from './components/Goals2026'
import LittleJoys2026 from './components/LittleJoys2026'
import Apology from './components/Apology'
import PleaseStay from './components/PleaseStay'
import HappyNewYear from './components/HappyNewYear'

export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goals" element={<Goals2026 />} />
          <Route path="/little-joys" element={<LittleJoys2026 />} />
          <Route path="/apology" element={<Apology />} />
          <Route path="/please-stay" element={<PleaseStay />} />
          <Route path="/happy-new-year" element={<HappyNewYear />} />
        </Routes>
      </div>
    </Router>
  )
}
