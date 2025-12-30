import React from 'react'
import { useNavigate } from 'react-router-dom'
import Iridescence from './Iridescence'
import '../styles/LittleJoys2026.css'

export default function LittleJoys2026() {
  const navigate = useNavigate()

  const joys = [
    {
      emoji: '🌿',
      title: 'Peaceful mornings',
      color: 'joy-card-green'
    },
    {
      emoji: '😄',
      title: 'Laughing without overthinking',
      color: 'joy-card-yellow'
    },
    {
      emoji: '🏆',
      title: 'Feeling proud of yourself',
      color: 'joy-card-pink'
    },
    {
      emoji: '🌱',
      title: 'Growing at your own pace',
      color: 'joy-card-lavender'
    },
    {
      emoji: '☀️',
      title: 'Light, calm days',
      color: 'joy-card-cream'
    },
    {
      emoji: '🌼',
      title: 'Moments that feel warm',
      color: 'joy-card-peach'
    },
    {
      emoji: '☕',
      title: 'Enjoying simple pleasures',
      color: 'joy-card-beige'
    },
    {
      emoji: '🦋',
      title: 'Being gentle with yourself',
      color: 'joy-card-mint'
    }
  ]

  function handleNext() {
    navigate('/apology')
  }

  function handleBack() {
    navigate('/goals')
  }

  return (
    <main className="joys-root">
      <div className="bg-decor" />

      {/* background canvases (behind content) */}
      <div className="bg-canvas">
        <div className="bg-canvas-inner">
          <Iridescence color={[1.0, 0.64, 0.74]} speed={0.9} amplitude={0.06} mouseReact={false} />
        </div>
      </div>

      <div className="joys-container">
        <div className="joys-header">
          <h1 className="joys-title">Little Joys for 2026 🌱</h1>
          <p className="joys-subtitle">Things I hope make you smile this year</p>
          <p className="joys-personal-message">I've always wanted you to be happy in every moment. These small joys will fill your days with warmth. ✨</p>
        </div>

        <div className="joys-grid">
          {joys.map((joy, index) => (
            <div key={index} className={`joy-card ${joy.color}`}>
              <div className="joy-emoji">{joy.emoji}</div>
              <p className="joy-text">{joy.title}</p>
            </div>
          ))}
        </div>

        <div className="joys-message">
          You deserve a year that feels gentle.
        </div>

        <div className="joys-footer">
          <button className="btn joy-back-btn" onClick={handleBack}>
            ← Back
          </button>
          <button className="btn joy-next-btn" onClick={handleNext}>
            Happy New Year 🌼
          </button>
        </div>
      </div>
    </main>
  )
}
