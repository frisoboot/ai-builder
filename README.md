# AI Builders Website

Professionele website voor AI Builders - een bedrijf dat websites en apps bouwt met kunstmatige intelligentie. Binnen 48 uur een MVP, met een "No Cure, No Pay" garantie.

## 🚀 Features

- **Modern Design**: Clean, futuristisch design met paars-blauw gradient thema
- **Responsive**: Volledig responsive, mobile-first design
- **Animaties**: Subtiele Framer Motion animaties voor betere UX
- **Formulier**: Contactformulier geïntegreerd met Formspree
- **SEO-geoptimaliseerd**: Complete metadata, Open Graph tags en structured data
- **Component Library**: Gebouwd met shadcn/ui voor consistente UI componenten

## 🛠️ Tech Stack

- **Next.js 14+** met App Router
- **TypeScript** voor type safety
- **Tailwind CSS** voor styling
- **Framer Motion** voor animaties
- **shadcn/ui** voor UI componenten
- **react-hook-form** voor formulier validatie
- **Formspree** voor formulier handling

## 📦 Installatie

1. **Clone de repository** (of download de bestanden)

2. **Installeer dependencies**:
```bash
npm install
```

3. **Configureer Formspree**:
   - Maak een account op [Formspree](https://formspree.io)
   - Maak een nieuw formulier aan en kopieer het endpoint
   - Maak een `.env.local` bestand in de root directory:
```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint_here
```

4. **Start de development server**:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in je browser

## 🔧 Configuratie

### Formspree Setup

1. Ga naar [formspree.io](https://formspree.io) en maak een gratis account
2. Klik op "New Form" en geef het formulier een naam (bijvoorbeeld "AI Builders Contact")
3. Kopieer het formulier endpoint (bijvoorbeeld: `https://formspree.io/f/YOUR_FORM_ID`)
4. Voeg het toe aan je `.env.local` bestand:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Het formulier accepteert de volgende velden:
- `projectType`: Type project (website, app, automatisering, branding, anders)
- `description`: Projectbeschrijving
- `budget`: Budgetrange
- `deadline`: Optionele deadline
- `name`: Naam van de aanvrager
- `email`: E-mailadres
- `phone`: Optioneel telefoonnummer

### WhatsApp Nummer

Update het WhatsApp nummer in `components/Footer.tsx` (regel met `wa.me/31612345678`) naar jouw eigen nummer.

### Social Media Links

Update de social media links in `components/Footer.tsx` naar jouw eigen profielen.

## 📁 Project Structuur

```
/
├── app/
│   ├── layout.tsx          # Root layout met metadata
│   ├── page.tsx            # Home pagina
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui componenten
│   ├── Hero.tsx            # Hero sectie
│   ├── Steps.tsx           # "Hoe het werkt" sectie
│   ├── Services.tsx        # Diensten sectie
│   ├── Portfolio.tsx       # Portfolio sectie
│   ├── ContactForm.tsx     # Contactformulier
│   ├── FAQ.tsx             # FAQ sectie
│   └── Footer.tsx          # Footer
├── lib/
│   └── utils.ts            # Utility functies
└── public/                 # Static assets
```

## 🚀 Deployment naar Vercel

### Option 1: Via Vercel Dashboard

1. Push je code naar GitHub
2. Ga naar [vercel.com](https://vercel.com) en log in
3. Klik op "New Project"
4. Importeer je GitHub repository
5. Voeg environment variable toe:
   - Name: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Value: Je Formspree endpoint
6. Klik op "Deploy"

### Option 2: Via Vercel CLI

1. Installeer Vercel CLI:
```bash
npm i -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Voeg environment variable toe:
```bash
vercel env add NEXT_PUBLIC_FORMSPREE_ENDPOINT
```

## 🎨 Aanpassingen

### Kleuren Aanpassen

De kleuren worden beheerd in `app/globals.css`. Pas de CSS variabelen aan voor custom kleuren.

### Content Aanpassen

- Hero tekst: `components/Hero.tsx`
- Diensten: `components/Services.tsx`
- Portfolio projecten: `components/Portfolio.tsx`
- FAQ vragen: `components/FAQ.tsx`
- Footer informatie: `components/Footer.tsx`

### Styling Aanpassen

Gebruik Tailwind CSS classes direct in de componenten, of pas de `tailwind.config.ts` aan voor custom styling.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm start` - Start productie server
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Formulier werkt niet
- Controleer of `NEXT_PUBLIC_FORMSPREE_ENDPOINT` correct is geconfigureerd
- Check de browser console voor errors
- Verifieer dat je Formspree account actief is

### Styling ziet er niet goed uit
- Zorg dat Tailwind CSS correct is geïnstalleerd: `npm install`
- Check of `globals.css` correct wordt geïmporteerd in `layout.tsx`

### Build errors
- Run `npm install` opnieuw
- Delete `.next` folder en rebuild
- Check TypeScript errors: `npm run build`

## 📄 Licentie

Dit project is gemaakt voor AI Builders.

## 🤝 Support

Voor vragen of ondersteuning, neem contact op via:
- Email: info@aibuilders.nl
- Website: [aibuilders.nl](https://aibuilders.nl)

---

Gemaakt met ❤️ door AI Builders

