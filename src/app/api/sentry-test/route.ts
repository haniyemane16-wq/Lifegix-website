// TIJDELIJK — alleen om te verifiëren dat Sentry foutmeldingen ontvangt
// na het instellen van SENTRY_DSN. Verwijderen zodra dat bevestigd is.
export async function GET() {
  throw new Error("Sentry test-foutmelding — dit is bedoeld en mag genegeerd worden.");
}
