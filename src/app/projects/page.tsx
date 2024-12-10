'use client'

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"
import DottedOverlay from '@/components/dottedOverlay'
import DottedBackground from '@/components/ui/dottedbackground'
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <DottedBackground />
        <DottedOverlay />
        <Badge className="text-xl">Projects</Badge>
        <h2 className="text-3xl text-white font-bold mb-6"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black text-white border border-gray-800">
            <CardHeader>
              <CardTitle>Betsync</CardTitle>
              <CardDescription className="text-gray-400">Synchronize your bets across platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <p>BetSync helps you manage and track your bets across multiple betting platforms, providing a unified view of your betting activity.</p>
            </CardContent>
            <CardFooter>
              <Link href="https://betsync.us" passHref>
                <Button className="bg-white text-black hover:bg-gray-200" rel="noopener noreferrer">Visit Betsync</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-black text-white border border-gray-800">
            <CardHeader>
              <CardTitle>Banterot</CardTitle>
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
      </div>
    </div>
  )
}

