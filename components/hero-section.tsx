"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import NeonGrid from "./neon-grid"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovering) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    if (isHovering) {
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovering])

  return (
    <section
      className="relative pt-16 sm:pt-23 pb-12 sm:pb-20 overflow-hidden cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 bg-black">
        <NeonGrid />
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Glowing cursor circle */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
          style={{
            left: mousePosition.x - 25,
            top: mousePosition.y - 25,
            width: '50px',
            height: '50px',
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-green-400/30 via-green-300/40 to-green-400/30 blur-sm animate-pulse"
               style={{
                 animationDuration: '1.5s',
                 animationTimingFunction: 'ease-in-out'
               }} />
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-green-300/20 to-green-400/20 blur-md animate-pulse"
               style={{
                 animationDuration: '1.5s',
                 animationTimingFunction: 'ease-in-out',
                 animationDelay: '0.2s'
               }} />
          <div className="absolute inset-4 rounded-full border-2 border-green-400/60 animate-pulse"
               style={{
                 animationDuration: '1.5s',
                 animationTimingFunction: 'ease-in-out',
                 animationDelay: '0.4s'
               }} />
        </div>
      )}

      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <Badge 
              variant="outline" 
              className="border-[#00E699]/30 text-[#00E699] px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm flex items-center gap-1 sm:gap-2 hover:border-[#00E699]/60 transition-colors group cursor-pointer"
            >
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="line-clamp-1">Now with 2x faster query performance</span>
              <motion.div
                className="ml-1"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </motion.div>
            </Badge>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[64px] leading-tight font-bold tracking-tight mb-4 sm:mb-6 relative">
            <span className="text-white">Serverless </span>
            <span className="text-neutral-500 relative inline-block bg-gradient-to-r from-green-400 via-green-300 to-green-400 bg-clip-text text-transparent animate-pulse"
                  style={{
                    textShadow: '0 0 10px rgba(3, 105, 71, 0.3), 0 0 20px rgba(2, 92, 62, 0.3), 0 0 30px rgba(250, 204, 21, 0.2)',
                    filter: 'drop-shadow(0 0 8px rgba(2, 86, 58, 0.3))'
                  }}>
              Postgres
            </span>
            <br />
            <span className="text-[#00E699] [text-shadow:0_0_20px_rgba(0,230,153,0.3)]">Made Easy</span>
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 px-1">
            Scale to infinity with Serverless Postgres. Experience autoscaling storage 
            and compute with a generous free tier.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-20">
            <Button 
              size="default" 
              className="w-full sm:w-auto bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Start for Free</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>
            <Button 
              size="default" 
              variant="outline" 
              className="w-full sm:w-auto border-white/20 text-black hover:bg-white/5 hover:text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-lg backdrop-blur-sm mt-2 sm:mt-0"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </section>
  )
}
