"use client"

import { motion } from "framer-motion"
import { FileText, Zap, Rocket, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hoe het werkt
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In vier eenvoudige stappen naar jouw werkende MVP
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-2xl font-bold mb-4">
                      {step.number}
                    </div>
                    <div className="flex justify-center mb-4">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <blockquote className="text-xl sm:text-2xl font-medium text-gray-800 italic max-w-3xl mx-auto">
            "We geloven niet in loze beloftes, alleen in resultaat."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

