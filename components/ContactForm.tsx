"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, AlertCircle } from "lucide-react"

interface FormData {
  projectType: string
  description: string
  budget: string
  deadline: string
  name: string
  email: string
  phone: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const projectType = watch("projectType")
  const budget = watch("budget")

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xgvpndge"
      
      if (!formspreeEndpoint) {
        throw new Error("Formspree endpoint niet geconfigureerd")
      }

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        reset()
      } else {
        throw new Error("Formulier verzending mislukt")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="aanvraag" className="py-20 sm:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start jouw project
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vul het formulier in en ontvang binnen 24 uur een eerste conceptvoorstel
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Projectaanvraag</CardTitle>
              <CardDescription>
                Vertel ons over jouw project en wij maken een op maat gemaakt voorstel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Type project *</Label>
                  <Select
                    value={projectType}
                    onValueChange={(value) => setValue("projectType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer type project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="app">App</SelectItem>
                      <SelectItem value="automatisering">Automatisering</SelectItem>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="anders">Anders</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.projectType && (
                    <p className="text-sm text-red-500">Dit veld is verplicht</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Korte beschrijving *</Label>
                  <Textarea
                    id="description"
                    {...register("description", { required: true })}
                    placeholder="Beschrijf jouw project en wensen..."
                    rows={5}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">Dit veld is verplicht</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budgetrange *</Label>
                    <Select
                      value={budget}
                      onValueChange={(value) => setValue("budget", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="onder-1000">Onder €1.000</SelectItem>
                        <SelectItem value="1000-5000">€1.000 - €5.000</SelectItem>
                        <SelectItem value="5000-plus">€5.000+</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.budget && (
                      <p className="text-sm text-red-500">Dit veld is verplicht</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input
                      id="deadline"
                      type="date"
                      {...register("deadline")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      {...register("name", { required: true })}
                      placeholder="Jouw naam"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">Dit veld is verplicht</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                      placeholder="jouw@email.nl"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.type === "pattern"
                          ? "Ongeldig e-mailadres"
                          : "Dit veld is verplicht"}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="06 12345678"
                  />
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    <p className="font-medium">
                      Bedankt! We sturen binnen 24 uur een eerste conceptvoorstel.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <p className="font-medium">
                      Er ging iets mis. Probeer het opnieuw of neem direct contact met ons op.
                    </p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 text-lg rounded-full"
                >
                  {isSubmitting ? "Verzenden..." : "Verstuur aanvraag"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

