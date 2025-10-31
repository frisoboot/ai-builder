"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Settings, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Modern, snel en geoptimaliseerd. Jouw website gebouwd met AI, klaar voor gebruik binnen 48 uur.",
    features: ["AI-gegenereerde content", "SEO-geoptimaliseerd", "Responsive design"],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Apps",
    description:
      "iOS & Android apps powered by AI. Van concept tot werkende app in recordtijd.",
    features: ["Cross-platform", "Native performance", "AI-powered features"],
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Settings,
    title: "Automatisering",
    description:
      "Koppelingen, dashboards en workflows. Laat AI het werk voor je doen.",
    features: ["API-integraties", "Dashboard oplossingen", "Workflow automatisering"],
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Logo, AI-teksten en complete huisstijl. Een sterke identiteit voor jouw merk.",
    features: ["Logo design", "AI copywriting", "Visuele identiteit"],
    gradient: "from-pink-500 to-pink-600",
  },
]

interface ServicesProps {
  onScrollToForm?: () => void
}

export function Services({ onScrollToForm }: ServicesProps) {
  return (
    <section className="py-32 sm:py-40 lg:py-48 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
            Onze diensten
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            Alles wat je nodig hebt om online te groeien, gebouwd met AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
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
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
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
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={onScrollToForm}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Start jouw project vandaag
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
