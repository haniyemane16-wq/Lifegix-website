# Template Diensten — LifeGix Blueprint

Startpunt voor lokale dienstverleners: kapper, garage, installateur, loodgieter, schilder, etc.

## Snelstart

1. **Vul de config in** — open `src/config/client.config.ts` en pas alle velden aan voor de klant.
2. **Kleur aanpassen** — verander `kleur.primary` en `kleur.primaryHover` naar de huisstijlkleur.
3. **Diensten instellen** — voeg de juiste diensten, prijzen en beschrijvingen toe.
4. **Reviews toevoegen** — echte reviews van de klant invullen.
5. **Deploy** — `npm run build && npm run start` of koppel aan Vercel.

## Bestandsstructuur

```
src/
  config/
    client.config.ts     ← Hier vul je ALLES in
  app/
    page.tsx             ← Homepage (server component)
    globals.css          ← Stijlen + performance fixes
    _components/
      Navbar.tsx         ← Navigatie met mobile menu
      ContactForm.tsx    ← Contactformulier (uncontrolled)
```

## Config velden

| Veld | Uitleg |
|------|--------|
| `naam` | Bedrijfsnaam |
| `slogan` | Korte tagline |
| `stad` | Vestigingsplaats |
| `adres` | Volledig adres |
| `telefoon` | Telefoonnummer |
| `email` | E-mailadres voor contactformulier |
| `kvk` | KvK-nummer (footer) |
| `openingstijden` | Tekst, bijv. "Ma–Vr 09:00–17:00" |
| `kleur.primary` | Hoofdkleur in hex |
| `kleur.primaryHover` | Hover kleur in hex |
| `kleur.primaryMuted` | Achtergrond accent (rgba) |
| `hero.*` | Teksten in de hero sectie |
| `stats[]` | Statistieken (4 stuks) |
| `diensten[]` | Diensten met naam, prijs, duur |
| `werkwijze[]` | 3 stappen hoe het werkt |
| `reviews[]` | Klantbeoordelingen |
| `contact.*` | Contact sectie teksten + diensten dropdown |
| `features.*` | Aan/uit voor chatbot, betalen, etc. |
| `seo.*` | Title, description, keywords |

## Features aanzetten

In `features` kun je de volgende modules aan- of uitzetten:

- **`emails: true`** — Verbind `/api/contact` met Resend voor e-mailnotificaties
- **`chatbot: true`** — Voeg `<ChatWidget />` toe aan `page.tsx`
- **`betalen: true`** — Mollie iDEAL koppeling voor online betaling
- **`afspraken: true`** — Afspraakinvoeging systeem
- **`moneybird: true`** — Automatisch facturen aanmaken

## Mobile performance fixes (ingebakken)

- `touch-action: manipulation` op alle interactieve elementen (geen 300ms delay iOS)
- Navbar gebruikt `transform: translateZ(0)` voor GPU compositing layer
- Geen `backdrop-blur` op mobiel (zit alleen op `sm:` breakpoint)
- Geen `content-visibility` (Safari 18 rendering bug)
- Hover animaties uitgeschakeld op touch-devices (`@media (hover: none)`)
- `gradient-border::before` alleen op `sm:` met `isolation: isolate`

## API route vereist

Zorg dat `/api/contact` bestaat en e-mails verstuurt naar `clientConfig.email`.
Zie de LifeGix hoofdwebsite voor de implementatie.
