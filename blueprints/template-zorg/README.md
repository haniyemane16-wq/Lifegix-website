# Template Zorg — LifeGix Blueprint

Startpunt voor zorgprofessionals: fysiotherapeut, tandarts, personal trainer, psycholoog, diëtist, ergotherapeut, logopedist, etc.

## Snelstart

1. **Vul de config in** — open `src/config/client.config.ts` en pas alle velden aan voor de klant.
2. **Kleur aanpassen** — groen communiceert vertrouwen en gezondheid. Pas `kleur.primary` aan.
3. **Behandelingen instellen** — pas `behandelingen` aan met de echte diensten van de zorgprofessional.
4. **Team invullen** — voeg teamleden toe met naam, functie, specialisatie.
5. **BIG-nummer** — vul `bigRegistratie` in of verwijder het veld als niet van toepassing.
6. **Deploy** — `npm run build && npm run start` of koppel aan Vercel.

## Bestandsstructuur

```
src/
  config/
    client.config.ts     ← Hier vul je ALLES in
  app/
    page.tsx             ← Homepage (server component)
    globals.css          ← Stijlen + performance fixes
    _components/
      Navbar.tsx         ← Navigatie met telefoonknop
      ContactForm.tsx    ← Afspraakformulier (uncontrolled)
```

## Config velden specifiek voor zorg

| Veld | Uitleg |
|------|--------|
| `bigRegistratie` | BIG-registratienummer (optioneel, zet op `""` om te verbergen) |
| `behandelingen[]` | Behandelingen met naam, duur, vergoeding (boolean) |
| `behandelingen[].vergoeding` | `true` toont "Vergoed" badge op de kaart |
| `team[]` | Teamleden met naam, functie, specialisatie, ervaring |
| `team[].foto` | Pad naar teamfoto (bijv. `/team/sander.jpg`) |
| `werkwijze[]` | 3 stappen van intake naar herstel |
| `reviews[].klacht` | Type klacht voor review (bijv. "Rugklachten") |

## Secties op de pagina

1. **Hero** — Badge + heading + twee CTA's
2. **Stats** — Ervaring, Google score, patiënten, wachttijd
3. **Behandelingen** — Grid van behandelkaartjes met vergoedingsbadge
4. **Team** — Teamleden met initialen-avatar (vervang door foto)
5. **Werkwijze** — 3 stappen: intake, behandelplan, herstel
6. **Reviews** — 3 reviews met klachttype
7. **Contact** — Contactinfo + vergoedingsinfo + afspraakformulier

## Afspraakformulier

Het formulier heeft extra velden t.o.v. andere templates:
- Klacht / behandeling (dropdown vanuit config)
- Zorgverzekeraar (dropdown met Nederlandse verzekeraars)
- Klachtbeschrijving (vrij tekstveld met gerichte placeholder)

## Teamfoto's toevoegen

Zet foto's in `public/team/`. In de config:
```ts
foto: "/team/naam.jpg"
```

In `page.tsx` in de Team functie kun je het initialen-avatar vervangen door:
```tsx
<Image src={lid.foto} alt={lid.naam} width={64} height={64} className="rounded-full object-cover" />
```

## Mobile performance fixes (ingebakken)

- `touch-action: manipulation` op alle interactieve elementen
- Navbar met `transform: translateZ(0)` GPU compositing
- Geen `backdrop-blur` op mobiel
- Geen `content-visibility` (Safari 18 bug)
- Hover animaties uitgeschakeld op touch devices
- `gradient-border` alleen op `sm:` met `isolation: isolate`

## Privacyoverwegingen (zorg)

Zorgwebsites verwerken medische informatie. Zorg voor:
- Een actuele privacyverklaring op `/privacy`
- Expliciete toestemming als je cookies of analytics gebruikt
- Veilige e-mailverwerking via Resend (geen plain-text opslag)
- AVG-compliance bij contactformulier (geen opslag zonder toestemming)
