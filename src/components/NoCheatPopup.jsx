import React from 'react'
import '../styles/NoCheatPopup.css'

export default function NoCheatPopup({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose} aria-label="Close popup">
          ✕
        </button>
        <h2 className="popup-title">You have to see it darling, no cheating!</h2>
      </div>
    </div>
  )
}
