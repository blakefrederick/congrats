'use client'

import * as confetti from 'canvas-confetti'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Confetti({ todo }) {
  const router = useRouter()

  useEffect(() => {
    var confetArea = document.createElement('canvas')
    var target = document.getElementById('confetti-target')

    target.appendChild(confetArea)

    var yayConfetti = confetti.create(confetArea, {
      resize: true,
      useWorker: true,
    })
    yayConfetti({
      particleCount: 300,
      spread: 160,
    })
  }, [])

  return (
    <>
      <div id="confetti-target"></div>
    </>
  )
}
