import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Iridescence from './Iridescence'
import NoCheatPopup from './NoCheatPopup'
import kittyImg from '../images/kitty.png'

export default function Home() {
  const navigate = useNavigate()
  const [showNoPopup, setShowNoPopup] = useState(false)
  const noRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // detect mobile viewport (targeting narrow viewports like phones)
    function onResize() {
      const w = window.innerWidth
      setIsMobile(w <= 480)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    // small floating hearts animation trigger
    const id = setInterval(() => {
      const hearts = document.querySelectorAll('.floating-heart')
      hearts.forEach((h, i) => {
        h.style.setProperty('--x', `${(i + 1) * 8}px`)
      })
    }, 3500)
    return () => clearInterval(id)
  }, [])

  function handleYes() {
    navigate('/goals')
  }

  function handleNo() {
    setShowNoPopup(true)
  }

  return (
    <main className="home-root">
      <div className="bg-decor" />

      {/* background canvases (behind content) */}
      <div className="bg-canvas">
        <div className="bg-canvas-inner">
          <Iridescence color={[1.0, 0.64, 0.74]} speed={0.9} amplitude={0.06} mouseReact={false} />
        </div>
      </div>

      <div className="home-container">
        <img src={kittyImg} alt="kitty" className="kitty-img" />
        <div className="header">
          <h1 className="title">Captured your Smile!</h1>
          <h2 className="title1">Keep Smiling Hajera, you look good when you smile :)</h2>
          <p className="subtitle">Wishing you a sparkling New Year, I've always wanted you to be with me in the beginning and end of every year. You're literally my everything 🤌. I've always loved you to the fullest, No one can literally replace you, It's either you or no one. I've always wished for you happiness in all aspects ✨✨. And will always pray to Allah for your well being.
            A happy new year to youu, my Love! May this year bring you a lots of joy and happiness. 
            I Love you always 🤍.
          </p>
        </div>

      

      </div>

      <div className="home-container1">
        <div className="inner">
          <h1 className="title1">Wanna see what I made ?</h1>
          <div className="cta">
            <button className="btn yes" aria-label="Yes - extra" onClick={handleYes}>Yes</button>

            <button
              ref={noRef}
              className="btn no"
              onClick={handleNo}
              aria-label="No - extra"
            >
              No
            </button>
          </div>
        </div>
      </div>

      {/* Popup for No button */}
      <NoCheatPopup isOpen={showNoPopup} onClose={() => setShowNoPopup(false)} />
    </main>
  )
}
