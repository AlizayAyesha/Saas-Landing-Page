"use client"

import { motion } from "framer-motion"
import { CardHoverEffect } from "./card-hover-effect"
import { Quote } from "lucide-react"
import Image from "next/image"
import TrustedCompaniesSection from "./trusted-companies-section"

// Testimonial data structure
interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  imageSrc?: string
}

export default function TestimonialsSection() {
  // Sample testimonials - replace with real data
  const testimonials: Testimonial[] = [
    {
      quote: "Switching to Serverless Postgres was the best decision we made this year. Our query performance increased by 3x while costs went down by 40%.",
      name: "Kenneth Owusu",
      title: "CEO & Founder",
      company: "Optimedix AI",
      imageSrc: "/download.jpeg"
    },
    {
      quote: "The autoscaling capabilities are incredible. We no longer worry about database performance during traffic spikes and can focus on building features.",
      name: "Michael Chen",
      title: "Engineering Lead",
      company: "Datalytics",
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Jay_Chen_headshot.jpg/1200px-Jay_Chen_headshot.jpg"
    },
    {
      quote: "The global distribution feature has been a game-changer for our international user base. Data replication is seamless and our users experience consistent performance worldwide.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "GlobalTech Solutions",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDOjO3IDHE4awtPEtn6qq62Bv47eX0-qrrw&s"
    },
    {
      quote: "Enterprise-grade security with point-in-time recovery gave us the confidence to migrate our mission-critical applications. The compliance features are top-notch.",
      name: "David Rodriguez",
      title: "VP of Engineering",
      company: "SecureFinance Corp",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5utpXZkMztnTehNBXTFU3h6T_a7Z0b0MqGA&s"
    },
    {
      quote: "Real-time analytics on our database has transformed how we make business decisions. The performance is outstanding and the setup was incredibly easy.",
      name: "Emma Thompson",
      title: "Data Scientist",
      company: "Insight Analytics",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSbCO70i30gIhVV_MOo0WFJkJxaHP0rYebQ&s"
    },
    {
      quote: "The dedicated support team helped us optimize our database architecture perfectly. Their expertise in PostgreSQL is unmatched.",
      name: "James Wilson",
      title: "DevOps Manager",
      company: "CloudFirst Inc",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRZS2FURvy9JkRsjaso50YNZ8jh71pomDXA&s"
    }
  ];



  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        
        {/* Animated glow orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-40 top-20 w-80 h-80 bg-[#00E699]/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -left-40 bottom-20 w-80 h-80 bg-[#00E699]/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white mt-4">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-neutral-400 md:text-xl/relaxed mt-4">
              See what teams are saying about our serverless PostgreSQL solution.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CardHoverEffect className="h-full">
                <div className="flex flex-col h-full p-8 bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl transition-all duration-300">
                  <Quote className="h-8 w-8 text-[#00E699]/40 mb-4" />
                  
                  <p className="text-white/90 mb-6 flex-grow">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center mt-auto">
                    {testimonial.imageSrc && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border border-[#00E699]/20">
                        <Image 
                          src={testimonial.imageSrc} 
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-neutral-400 text-sm">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>

        <TrustedCompaniesSection />
      </div>
    </section>
  )
}
