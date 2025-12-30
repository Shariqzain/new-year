import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Iridescence from './Iridescence'
import '../styles/Goals2026.css'

export default function Goals2026() {
  const navigate = useNavigate()
  const [checkedItems, setCheckedItems] = useState({})

  const goals = [
    'Travel to a new destination',
    'PLEASE DONT LEAVE Hajeraa',
    'Learn a new skill',
    'Read 12 books',
    'Exercise regularly',
    'Spend quality time with loved ones',
    'Achieve a personal goal',
    'Try a new hobby',
    'Save money for something special',
    'Improve my mental health',
    'Take more photos and create memories',
    'BEGIN 2026 WITH ME',
    'Be more organized',
    'Help others more'
  ]

  function handleCheckChange(index) {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  function handleBack() {
    navigate('/')
  }

  return (
    <main className="goals-root">
      <div className="bg-decor" />

      {/* background canvases (behind content) */}
      <div className="bg-canvas">
        <div className="bg-canvas-inner">
          <Iridescence color={[1.0, 0.64, 0.74]} speed={0.9} amplitude={0.06} mouseReact={false} />
        </div>
      </div>

      <div className="goals-container">
        <div className="goals-header">
          <h1 className="goals-title">What do you wanna do in 2026?</h1>
          <p className="goals-subtitle">Check off the goals that excite you!</p>
          <p className="goals-personal-message">I've always wanted you to achieve all your dreams. Pick what makes your heart happy. 💫</p>
        </div>

        <div className="goals-list">
          {goals.map((goal, index) => (
            <label key={index} className="goal-item">
              <input
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => handleCheckChange(index)}
                className="goal-checkbox"
              />
              <span className="goal-text">{goal}</span>
            </label>
          ))}
        </div>

        <div className="goals-footer">
          <button className="btn back-btn" onClick={handleBack}>
            ← Back
          </button>
          <button className="btn next-btn" onClick={() => navigate('/little-joys')}>
            Next →
          </button>
        </div>
      </div>
    </main>
  )
}
