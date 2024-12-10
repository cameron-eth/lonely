'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Linkedin, Twitter } from 'lucide-react'

const founders = [
  {
    name: "Mika Adlin",
    role: "CEO",
    bio: "Mika Adlin is a seasoned Product Developer and UX expert. His innovative approach to user-centric design has been instrumental in shaping our product strategy and user experience.",
    linkedin: "https://www.linkedin.com/in/mika-adlin/",
    twitter: "https://x.com/lonelyheartscde"
  },
  {
    name: "Cameron Norfleet",
    role: "CTO",
    bio: "Cameron Norfleet is a Software Engineer, and product leader. He co-founded our company with a mission to optimize consumer technology industries.",
    linkedin: "https://www.linkedin.com/in/cameron-norfleet-b42885162/",
    twitter: "https://x.com/camfleety"
  }
]

export default function FoundersPage() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          href="/"
          className="inline-flex items-center text-sm tracking-wide text-white/60 hover:text-white mb-12 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          BACK
        </Link>

        <h1 className="text-4xl font-light tracking-tighter mb-12">FOUNDERS</h1>

        {founders.map((founder, index) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="mb-16 pb-16 border-b border-white/10 last:border-b-0"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-light tracking-tight">{founder.name}</h2>
              <p className="text-sm tracking-widest text-white/60 mt-1">{founder.role}</p>
            </div>
            <p className="text-white/80 mb-6">{founder.bio}</p>
            <div className="flex items-center space-x-4">
              <Link href={founder.linkedin} target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 text-zinc-500 hover:text-zinc-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>              </Link>
              <Link href={founder.twitter} target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 text-zinc-500 hover:text-zinc-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>              
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}



