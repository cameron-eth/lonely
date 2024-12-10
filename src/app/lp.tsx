'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Landing() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-950 text-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl tracking-tighter">
              LONELYHEARTS®
            </Link>
            <div className="flex items-center gap-8">
              {[
                ['HOME', '/'],
                ['TEAM', '/founders'],
              ].map(([label, href]) => (
                <Link 
                  key={label}
                  href={href}
                  className="text-sm tracking-wide hover:text-white/70 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <AnimatePresence>
        <motion.main 
          className="relative z-20 flex flex-col items-start justify-center min-h-screen px-12 lg:px-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-2">
              <h1 className="text-7xl lg:text-8xl font-light tracking-tighter">
                LONELY
              </h1>
              <p className="text-sm tracking-widest text-white/60">
                BROOKLYN, NY [001]
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                ['TEAM', '/founders'],
                ['CONNECT', 'https://calendly.com/mika-banterbot'],
              ].map(([label, href], i) => (
                <Link 
                  key={label}
                  href={href}
                  className="group flex items-center gap-2 text-sm tracking-widest text-white/60 hover:text-white transition-colors"
                >
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span>{label}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <div className="fixed bottom-6 left-6">
        <div className="text-xs tracking-wider text-white/40">
          © 2024 LONELY — NY
        </div>
      </div>
    </div>
  )
}

