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
  const rest = url.pathname === "/" ? "" : url.pathname;
  url.pathname = `${basePath}${rest}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|favicon.svg).*)"],
};
