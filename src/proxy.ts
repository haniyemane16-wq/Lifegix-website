import { NextRequest, NextResponse } from "next/server";

// Subdomein-oefening: kapsalondavines.lifegix.nl wijst naar de demo-pagina's
// onder /demo/kapsalon, zonder dat de bezoeker dat pad in de URL ziet.
const SUBDOMAIN_ROUTES: Record<string, string> = {
  "kapsalondavines.lifegix.nl": "/demo/kapsalon",
};

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const basePath = SUBDOMAIN_ROUTES[host];

  if (!basePath) return NextResponse.next();

  const url = req.nextUrl.clone();

  // API-routes zijn altijd absoluut en horen nooit onder /demo/kapsalon te
  // vallen — zonder deze check zou bijv. /api/demo/kapsalon-chat op het
  // subdomein herschreven worden naar /demo/kapsalon/api/demo/kapsalon-chat
  // (bestaat niet, 404), waardoor de chatbot daar niet zou werken.
  if (url.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // De navbar-links wijzen zelf al naar /demo/kapsalon/... (dezelfde
  // component wordt ook gebruikt op lifegix.nl/demo/kapsalon zelf).
  // Zonder deze check zou een klik op zo'n link op het subdomein het pad
  // een tweede keer krijgen voorgeplakt: /demo/kapsalon/demo/kapsalon/... (404).
  if (url.pathname === basePath || url.pathname.startsWith(`${basePath}/`)) {
    return NextResponse.next();
  }

  const rest = url.pathname === "/" ? "" : url.pathname;
  url.pathname = `${basePath}${rest}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|favicon.svg).*)"],
};
