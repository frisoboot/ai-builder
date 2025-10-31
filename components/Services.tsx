"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Settings, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Modern, snel en geoptimaliseerd. Jouw website gebouwd met AI, klaar voor gebruik binnen 48 uur.",
    features: ["AI-gegenereerde content", "SEO-geoptimaliseerd", "Responsive design"],
  },
  {
    icon: Smartphone,
    title: "Apps",
    description:
      "iOS & Android apps powered by AI. Van concept tot werkende app in recordtijd.",
    features: ["Cross-platform", "Native performance", "AI-powered features"],
  },
  {
    icon: Settings,
    title: "Automatisering",
    description:
      "Koppelingen, dashboards en workflows. Laat AI het werk voor je doen.",
    features: ["API-integraties", "Dashboard oplossingen", "Workflow automatisering"],
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Logo, AI-teksten en complete huisstijl. Een sterke identiteit voor jouw merk.",
    features: ["Logo design", "AI copywriting", "Visuele identiteit"],
  },
]

interface ServicesProps {
  onScrollToForm?: () => void
}

export function Services({ onScrollToForm }: ServicesProps) {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Onze diensten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alles wat je nodig hebt om online te groeien, gebouwd met AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-2 hover:border-purple-200">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            onClick={onScrollToForm}
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
          >
            Start jouw project vandaag
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

