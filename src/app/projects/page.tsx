'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import DottedOverlay from '@/components/dottedOverlay'
import DottedBackground from '@/components/ui/dottedbackground'

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-950 text-white font-mono overflow-x-hidden">
      <DottedBackground />
      <DottedOverlay />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 border-b border-white/10 bg-zinc-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl tracking-tighter">
              LONELYHEARTS®
            </Link>
            <div className="flex items-center gap-8">
              {[
                ['HOME', '/'],
                ['TEAM', '/founders'],
                ['PROJECTS', '#projects'],
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
          className="relative z-20 flex flex-col items-start justify-center px-6 sm:px-12 lg:px-24 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-full space-y-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light tracking-tighter">
                PROJECTS
              </h1>
              <p className="text-xs sm:text-sm tracking-widest text-white/60">
                BROOKLYN, NY [002]
              </p>
            </div>

            <motion.section
              id="projects"
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Badge className="text-xl mb-4">Our Work</Badge>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-zinc-900/50 text-white border border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Betsync</CardTitle>
                    <CardDescription className="text-gray-400">Synchronize your bets across platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Betsync is sports betting research assistant. The platform is design to help you generate, track, and oprimize your betting strategy.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://betsync.us" passHref>
                      <Button className="bg-white text-black hover:bg-gray-200" rel="noopener noreferrer">Visit Betsync</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="bg-zinc-900/50 text-white border border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Banterbot</CardTitle>
                    <CardDescription className="text-gray-400">Your AI-powered chat companion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>BanterBot is an intelligent chatbot that engages in witty conversations, provides information, and assists with various tasks.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://banterbot.chat" passHref>
                      <Button className="bg-white text-black hover:bg-gray-200" rel="noopener noreferrer">Try Banterbot</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </motion.section>
          </motion.div>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <div className="fixed bottom-6 left-6 z-30">
        <div className="text-xs tracking-wider text-white/40">
          © 2024 LONELY — NY
        </div>
      </div>
    </div>
  )
}

