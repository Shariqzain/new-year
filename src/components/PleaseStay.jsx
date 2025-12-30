import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Iridescence from './Iridescence'
import '../styles/PleaseStay.css'

export default function PleaseStay() {
  const navigate = useNavigate()
  const [heartCount, setHeartCount] = useState(0)

  function handleHeartClick() {
    setHeartCount(heartCount + 1)
  }

  function handleContinue() {
    navigate('/happy-new-year')
  }

  function handleBack() {
    navigate('/apology')
  }

  return (
    <main className="please-stay-root">
      <div className="bg-decor" />

      {/* background canvases (behind content) */}
      <div className="bg-canvas">
        <div className="bg-canvas-inner">
          <Iridescence color={[1.0, 0.64, 0.74]} speed={0.9} amplitude={0.06} mouseReact={false} />
        </div>
      </div>

      <div className="please-stay-container">
        <div className="please-stay-header">
          <h1 className="please-stay-title">Please Don't Leave Me 💔</h1>
          <p className="please-stay-subtitle">I want you to stay in my life</p>
        </div>

        <div className="please-stay-message">
          <p className="please-text">
            After all that we've been through, I don't want this to be the end. I know I've made mistakes, and I'm truly sorry. But I also know that what we have is too beautiful to lose.
          </p>

          <p className="please-text">
            I want to keep talking to you, keep laughing with you, keep growing with you. You are not just someone to me - you are everything. Every day with you is a gift, and I don't want to take that for granted anymore.
          </p>

          <p className="please-text">
            Please give us another chance. I promise you won't regret it. Let's write a beautiful story together, starting from today.
          </p>

          <p className="please-personal-message">
            I love you more than words can express. 🤍
          </p>
        </div>

        <div className="game-one-section">
          <p className="game-instruction">Click each heart to show how much I care...</p>
          <div className="hearts-container">
            {Array.from({ length: 10 }).map((_, index) => (
              <span
                key={index}
                className={`heart-icon ${index < heartCount ? 'filled' : ''}`}
                onClick={handleHeartClick}
              >
                ❤️
              </span>
            ))}
          </div>
          <p className="game-progress">{heartCount}/10 hearts filled</p>
        </div>

        <div className="please-stay-footer">
          <button className="btn please-back-btn" onClick={handleBack}>
            ← Back
          </button>
          <button className="btn please-next-btn" onClick={handleContinue}>
            Next →
          </button>
        </div>
      </div>
    </main>
  )
}
