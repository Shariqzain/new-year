import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Iridescence from './Iridescence'
import '../styles/Apology.css'

export default function Apology() {
  const navigate = useNavigate()
  const [isHit, setIsHit] = useState(false)
  const [showOuchMessage, setShowOuchMessage] = useState(false)
  const [showRetryQuestion, setShowRetryQuestion] = useState(false)
  const [angerCooled, setAngerCooled] = useState(false)

  function handleHit() {
    setIsHit(true)
    setTimeout(() => {
      setIsHit(false)
      setShowOuchMessage(true)
      setTimeout(() => {
        setShowRetryQuestion(true)
      }, 2000)
    }, 600)
  }

  function handleRetryYes() {
    setShowOuchMessage(false)
    setShowRetryQuestion(false)
    setTimeout(() => {
      handleHit()
    }, 300)
  }

  function handleRetryNo() {
    setShowOuchMessage(false)
    setShowRetryQuestion(false)
    setAngerCooled(true)
  }

  function handleContinue() {
    navigate('/please-stay')
  }

  function handleBack() {
    navigate('/little-joys')
  }

  return (
    <main className="apology-root">
      <div className="bg-decor" />

      {/* background canvases (behind content) */}
      <div className="bg-canvas">
        <div className="bg-canvas-inner">
          <Iridescence color={[1.0, 0.64, 0.74]} speed={0.9} amplitude={0.06} mouseReact={false} />
        </div>
      </div>

      <div className="apology-container">
        <div className="apology-header">
          <h1 className="apology-title">I'm Sorry 💔</h1>
          <p className="apology-subtitle">I need to tell you something important</p>
        </div>

        {!angerCooled && (
          <>
            <div className="apology-message">
              <p className="apology-text">
                I'm truly sorry for all the bad I've done to you. You didn't deserve any of it. I know words might not be enough to make up for my mistakes, but I want you to know that I deeply regret every moment that caused you pain.
              </p>

              <p className="apology-text">
                You mean the world to me, and I will always love you with all my heart. No matter what, that will never change. You are incredible, and you deserve nothing but the best. I promise to be better for you, always.
              </p>

              <p className="apology-personal-message">
                I've always loved you, and I always will. 🤍
              </p>
            </div>

            {!showOuchMessage && (
              <div className="hit-game-section">
                <p className="hit-instruction">If you're still upset, you can let it out here:</p>
                
                <div className="hit-container">
                  <p className="hit-text">Hit me if you want</p>
                  <div 
                    className={`hit-character ${isHit ? 'hit' : ''}`}
                    onClick={handleHit}
                  >
                    🧑
                  </div>
                </div>
              </div>
            )}

            {showOuchMessage && !showRetryQuestion && (
              <div className="ouch-message">
                <p className="ouch-text">Ouch! That hurt 😢</p>
              </div>
            )}

            {showRetryQuestion && !angerCooled && (
              <div className="retry-question-section">
                <p className="retry-question">Still Angry? Wanna hit again?</p>
                <div className="retry-buttons">
                  <button className="btn retry-yes-btn" onClick={handleRetryYes}>
                    Yes
                  </button>
                  <button className="btn retry-no-btn" onClick={handleRetryNo}>
                    No
                  </button>
                </div>
              </div>
            )}

            {angerCooled && (
              <div className="healing-message">
                <p className="healing-text">
                  I'm glad that you're happy now. Let's move forward together. You deserve all the happiness in the world. 💝
                </p>
              </div>
            )}
          </>
        )}

        {angerCooled && (
          <div className="apology-footer">
            <button className="btn apology-back-btn" onClick={handleBack}>
              ← Back
            </button>
            <button className="btn apology-next-btn" onClick={handleContinue}>
              Continue →
            </button>
          </div>
        )}

        {!angerCooled && (
          <div className="apology-footer">
            <button className="btn apology-back-btn" onClick={handleBack}>
              ← Back
            </button>
            <button className="btn apology-next-btn" onClick={handleContinue}>
              Continue →
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
