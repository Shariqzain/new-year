import React from 'react'
import { useNavigate } from 'react-router-dom'
import Iridescence from './Iridescence'
import '../styles/HappyNewYear.css'

export default function HappyNewYear() {
  const navigate = useNavigate()

  function handleBack() {
    navigate('/little-joys')
  }

  return (
    <main className="hny-root">
      <div className="bg-decor" />

      {/* background canvases (behind content) */}
      <div className="bg-canvas">
        <div className="bg-canvas-inner">
          <Iridescence color={[1.0, 0.64, 0.74]} speed={0.9} amplitude={0.06} mouseReact={false} />
        </div>
      </div>

      <div className="hny-container">
        <div className="hny-content">
          <p className="hny-personal-intro">I've always wanted you to be happy, and I truly believe that this year will bring you everything your heart deserves. 💝</p>
          
          <h1 className="hny-title">Happy New Year 🌼</h1>
          
          <div className="hny-message">
            <p className="hny-text">
              I hope 2026 brings you moments that make your heart feel light, days that remind you of your strength, and the gentle courage to be exactly who you are.
            </p>
            
            <p className="hny-text">
              You deserve kindness, laughter, and all the beautiful quiet moments in between. May this year be a celebration of you.
            </p>

            <p className="hny-text">
              But most importantly, I want you to know - you complete me. You're not just a part of my story, you ARE the story. Every moment with you is a gift that makes my life infinitely better.
            </p>

            <p className="hny-text">
              Here's to growing, healing, and finding joy in the simple things. 
            </p>

            <p className="hny-closing">
              Wishing you a year that feels right. 💫
            </p>
          </div>

          <div className="hny-decorative-elements">
            <span className="deco-item">✨</span>
            <span className="deco-item">🌸</span>
            <span className="deco-item">☀️</span>
            <span className="deco-item">🦋</span>
            <span className="deco-item">🌼</span>
          </div>

          <div className="hny-footer">
            <button className="btn hny-back-btn" onClick={handleBack}>
              ← Back
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
