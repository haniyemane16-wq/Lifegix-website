# LifeGix — huisstijl

Vaste merkelementen, zodat kleuren en logo overal consistent blijven (website, Google Bedrijfsprofiel, social media, offertes, e-mailhandtekening).

## Kleurenpalet

| Naam | Hex | Gebruik |
|---|---|---|
| Achtergrond (donker) | `#0a0a0f` | Hoofdachtergrond site, logo-achtergrond |
| Tekst (licht) | `#ededed` | Hoofdtekst op donkere achtergrond |
| Violet 400 (accent) | `#a78bfa` | "gix" in het logo, links, accenten |
| Violet 500 | `#8b5cf6` | Glow/schaduw-effecten, borders |
| Violet 600 | `#7c3aed` | Knoppen ("Gratis gesprek", CTA's) |

## Extra kleuren (uit Canva "Merkmateriaal")

Naast de paarse kernkleuren hierboven staan er in het Canva-merkmateriaal van LifeGix ook een groen en oranje accent, gebruikt voor social-media-ontwerpen. Exacte hex-waarden hieronder zijn een benadering op basis van het scherm — klik in Canva op de kleurswatch zelf voor de exacte hex als je die 1-op-1 moet overnemen.

| Naam | Indicatieve hex | Gebruik |
|---|---|---|
| Lavendel (licht paars) | `#e0d4ff` (indicatief) | Lichte achtergrondvlakken, subtiele accenten |
| Slate (blauwgrijs) | `#64748b` (indicatief) | Neutrale accenten naast paars |
| Groen | `#10b981` (indicatief) | Prijs/actie-highlights, positieve accenten (bv. kortingsprijs) |
| Oranje | `#f97316` (indicatief) | CTA-accenten op social media |

## Logo

Tekst-logo: **Life** (wit) + **gix** (violet), vetgedrukt, geen apart beeldmerk — zie `/src/app/_components/Navbar.tsx`.
Favicon: "LG"-monogram in violet op donkere achtergrond — zie `/public/favicon.svg`.

### Bestanden in deze map

- `logo-icon-dark.png` (512×512) — vierkant, donkere achtergrond. Gebruik: profielfoto's op donkere/transparante achtergronden, social media avatar.
- `logo-icon-light.png` (512×512) — vierkant, witte achtergrond. Gebruik: **Google Bedrijfsprofiel, documenten, plekken met witte achtergrond.**
- `logo-wordmark-dark.png` (1200×360) — volledige "Lifegix"-naam, donkere achtergrond. Gebruik: headers, presentaties.
- `logo-wordmark-transparent.png` (1200×360) — volledige naam, transparante achtergrond. Gebruik: overlay op foto's, e-mailhandtekening, documenten.

Gegenereerd met DejaVu Sans Bold (vergelijkbaar met de Geist-font die de site gebruikt). Voor een pixel-perfecte match met de site kan dit later vervangen worden door een export met het echte Geist-lettertype.

## Lettertype

Website: **Geist Sans** (`--font-geist-sans`, via `next/font`).
