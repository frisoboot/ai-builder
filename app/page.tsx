"use client"

import { useRef } from "react"
import { Hero } from "@/components/Hero"
import { Steps } from "@/components/Steps"
import { Services } from "@/components/Services"
import { ContactForm } from "@/components/ContactForm"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      <Hero onScrollToForm={scrollToForm} />
      <Steps />
      <Services onScrollToForm={scrollToForm} />
      <div ref={formRef}>
        <ContactForm />
      </div>
      <FAQ />
      <Footer />
    </main>
  )
}

