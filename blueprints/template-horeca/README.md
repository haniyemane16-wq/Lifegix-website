# Template Horeca — LifeGix Blueprint

Startpunt voor horecabedrijven: restaurant, café, bistro, bakkerij, lunchroom, ijssalon, pizzeria, etc.

## Snelstart

1. **Vul de config in** — open `src/config/client.config.ts` en pas alle velden aan voor de klant.
2. **Kleur aanpassen** — horeca profiteert van warme kleuren (amber, rood, groen). Pas `kleur.primary` aan.
3. **Menu invullen** — pas `menuCategorieen` aan met de echte kaart van het restaurant.
4. **Highlights instellen** — vertel het verhaal van het restaurant via `highlights`.
5. **Reviews toevoegen** — echte Google/TripAdvisor reviews van de klant.
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
      ContactForm.tsx    ← Reserveringsformulier (uncontrolled)
```

## Config velden specifiek voor horeca

| Veld | Uitleg |
|------|--------|
| `menuCategorieen[]` | Menukaart opgedeeld in categorieën (voor-, hoofd-, desserts) |
| `menuCategorieen[].items[]` | Gerechten met naam, prijs, beschrijving |
| `highlights[]` | USP's van het restaurant (lokaal, seizoen, wijn, private dining) |
| `reserveren.*` | Teksten en gelegenheden voor het reserveringsformulier |
| `reviews[].gelegenheid` | Type bezoek (Diner, Lunch, etc.) |

## Secties op de pagina

1. **Hero** — Badge + heading + twee CTA's
2. **Stats** — Jaren open, Google score, stoelen, etc.
3. **Menu** — Menukaart in 3 kolommen (voor/hoofd/dessert)
4. **Sfeer** — 4 highlight kaartjes (lokaal, seizoen, wijn, private dining)
5. **Reviews** — 3 klantreviews met gelegenheidstype
6. **Reserveren** — Contactinfo + reserveringsformulier

## Reserveringsformulier

Het formulier heeft extra velden t.o.v. de diensten-template:
- Aantal personen (dropdown)
- Gewenste datum (date picker)
- Gelegenheid (diner, lunch, private dining, etc.)
- Bijzonderheden (vrij tekstveld)

## Mobile performance fixes (ingebakken)

- `touch-action: manipulation` op alle interactieve elementen
- Navbar met `transform: translateZ(0)` GPU compositing
- Geen `backdrop-blur` op mobiel
- Geen `content-visibility` (Safari 18 bug)
- Hover animaties uitgeschakeld op touch devices
- `gradient-border` alleen op `sm:` met `isolation: isolate`
