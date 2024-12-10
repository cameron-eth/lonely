'use client'

import React, { useRef, useEffect } from 'react'

const DottedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const drawDots = (timestamp: number) => {
      if (!canvas || !ctx) return
      
      timeRef.current += 0.5
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const spacing = 20
      const rows = Math.ceil(canvas.height / spacing)
      const cols = Math.ceil(canvas.width / spacing)

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * spacing
          const y = i * spacing

          const distanceFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + 
            Math.pow(y - canvas.height / 2, 2)
          )

          const hue = (distanceFromCenter * 0.1 + timeRef.current) % 360
          const saturation = 70
          const lightness = 50

          const wave = Math.sin(distanceFromCenter * 0.02 - timeRef.current * 0.02)
          const opacity = (wave + 1) * 0.15

          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameRef.current = requestAnimationFrame(drawDots)
    }

    animationFrameRef.current = requestAnimationFrame(drawDots)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0" 
      style={{ width: '100%', height: '100%' }}
    />
  )
}

const DottedOverlay = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
    </div>
  )
}

interface DottedBackgroundWrapperProps {
  children: React.ReactNode
}

export const DottedBackgroundWrapper: React.FC<DottedBackgroundWrapperProps> = ({ children }) => {
  return (
    <div className="relative">
      <DottedBackground />
      <DottedOverlay />
      {children}
    </div>
  )
}

