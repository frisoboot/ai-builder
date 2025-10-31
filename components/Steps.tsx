"use client"

import { motion } from "framer-motion"
import { FileText, Zap, Rocket, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Jij doet een aanvraag",
    description:
      "Vul het formulier in met jouw projectdetails en wensen. Binnen 24 uur ontvang je een eerste concept.",
  },
  {
    number: "2",
    icon: Zap,
    title: "Wij maken met AI een concept binnen 24 uur",
    description:
      "Ons AI-team werkt direct aan jouw project. Je krijgt binnen 24 uur een eerste concept te zien.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Binnen 48 uur krijg je een werkend MVP",
    description:
      "Nog 24 uur later heb je een volledig werkend prototype in handen. Klaar om te testen en te gebruiken.",
  },
  {
    number: "4",
    icon: CheckCircle2,
    title: "Tevreden? Dan pas betalen",
    description:
      "Alleen als je volledig tevreden bent met het resultaat, betaal je. Geen verborgen kosten, geen risico.",
  },
]

export function Steps() {
  return (
    <section className="py-32 sm:py-40 lg:py-48 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
            Hoe het werkt
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            In vier eenvoudige stappen naar jouw werkende MVP
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full p-8 rounded-3xl bg-white border border-gray-200/60 hover:border-gray-300 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative mb-6"
                    >
                      <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-semibold shadow-lg">
                        {step.number}
                      </div>
                    </motion.div>
                    <div className="mb-6 p-3 rounded-2xl bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <blockquote className="text-2xl sm:text-3xl font-light text-gray-800 max-w-3xl mx-auto leading-relaxed italic">
            &ldquo;We geloven niet in loze beloftes, alleen in resultaat.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
