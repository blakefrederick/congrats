'use client'

import { useEffect } from 'react'
import * as confetti from 'canvas-confetti'

export default function Confetti() {
  const goConfetti = () => {
    var confetArea = document.getElementById('confetti-target')
    var yayConfetti = confetti.create(confetArea, {
      resize: true,
      useWorker: true,
    })
    yayConfetti({
      particleCount: 400,
      spread: 160,
    })
  }
  useEffect(() => {
    goConfetti()
  }, [])

  return (
    <>
      <canvas
        id="confetti-target"
        onClick={() => {
          goConfetti()
        }}
      ></canvas>
    </>
  )
}
