"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Modern webshop met AI-powered productaanbevelingen en geautomatiseerde bestelverwerking.",
    result: "300% toename in conversie binnen 2 maanden",
    category: "Website",
    image: "🏪",
  },
  {
    title: "Fitness App",
    description:
      "iOS & Android app met gepersonaliseerde trainingsschema's gegenereerd door AI.",
    result: "50.000+ downloads in eerste maand",
    category: "App",
    image: "💪",
  },
  {
    title: "B2B Dashboard",
    description:
      "Analytics dashboard met real-time data en AI-driven insights voor sales teams.",
    result: "40% efficiëntieverbetering in rapportage",
    category: "Automatisering",
    image: "📊",
  },
  {
    title: "Restaurant Website",
    description:
      "Complete website met online reservering, menu's en AI-chatbot voor klantenservice.",
    result: "200% meer online reserveringen",
    category: "Website",
    image: "🍽️",
  },
  {
    title: "HR Management App",
    description:
      "HR-platform met AI-matching voor vacatures en kandidaten, volledig geautomatiseerd.",
    result: "60% snellere werving",
    category: "App",
    image: "👥",
  },
  {
    title: "Brand Identity Package",
    description:
      "Complete rebranding met logo, huisstijl en AI-gegenereerde marketingcontent.",
    result: "Sterk merkbeeld en consistente uitstraling",
    category: "Branding",
    image: "🎨",
  },
]

export function Portfolio() {
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
            Onze projecten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bekijk wat we hebben gebouwd voor onze klanten - allemaal binnen 48 uur
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-2 hover:border-purple-200 overflow-hidden">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 h-48 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>48 uur</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-purple-600">
                      Resultaat: {project.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

