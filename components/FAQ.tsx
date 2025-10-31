"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Wat betekent No Cure No Pay?",
    answer:
      "No Cure No Pay betekent dat je alleen betaalt als je tevreden bent met het eindresultaat. Wij leveren eerst het werk, jij beoordeelt het, en alleen als je volledig tevreden bent, betaal je. Geen verborgen kosten, geen risico voor jou. Zo kunnen we bewijzen dat we vertrouwen hebben in de kwaliteit van ons werk.",
  },
  {
    question: "Wat is een MVP?",
    answer:
      "MVP staat voor 'Minimum Viable Product' - een werkend prototype dat alle essentiële functies bevat om te kunnen functioneren. Het is een eerste versie van jouw website of app die je direct kunt gebruiken en testen. Je kunt er later altijd functies aan toevoegen. Door te starten met een MVP krijg je snel resultaat en kunnen we samen itereren op basis van feedback.",
  },
  {
    question: "Hoe werkt het proces precies?",
    answer:
      "Het proces is eenvoudig: 1) Je doet een aanvraag via het formulier. 2) Binnen 24 uur ontvang je een eerste conceptvoorstel. 3) We werken het concept uit tot een volledig werkend MVP, dat je binnen 48 uur na je aanvraag ontvangt. 4) Je test het MVP en geeft feedback. 5) Als je tevreden bent, betaal je pas. Zo simpel is het.",
  },
  {
    question: "Wat als ik niet tevreden ben?",
    answer:
      "Als je niet tevreden bent met het resultaat, hoef je niet te betalen. We zullen dan samen kijken wat er moet worden aangepast en werken dit kosteloos bij totdat je wel tevreden bent. Ons doel is om een product te leveren waar jij blij mee bent, dus we gaan net zolang door totdat we dat bereiken.",
  },
  {
    question: "Wat gebeurt er na het MVP?",
    answer:
      "Na het MVP kun je direct aan de slag met jouw website of app. Wil je extra functies toevoegen of aanpassingen maken? Geen probleem! We bieden ondersteuning en kunnen jouw product blijven doorontwikkelen. Het MVP is het begin, niet het einde.",
  },
  {
    question: "Is het echt mogelijk om in 48 uur een werkend MVP te hebben?",
    answer:
      "Ja, absoluut! Door gebruik te maken van geavanceerde AI-tools en onze ervaring kunnen we snel werkende prototypes bouwen. De 48 uur is exclusief de tijd die jij nodig hebt om feedback te geven. Vanaf het moment dat we je conceptvoorstel goedkeuren, heb je binnen 48 uur een werkend MVP in handen.",
  },
]

export function FAQ() {
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
            Veelgestelde vragen
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            Alles wat je wilt weten over ons proces en de voorwaarden
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200/60 rounded-2xl px-6 bg-white hover:border-gray-300 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-[15px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

