import { describe, it, expect, vi } from "vitest";

// @anthropic-ai/sdk importeert process.env.ANTHROPIC_API_KEY bij module-load
// (voor de client-instantie bovenin route.ts). Dat hoeft voor deze pure-
// functie-tests niet echt gezet te zijn, maar voorkomt een onnodige SDK-
// waarschuwing in de testoutput.
vi.stubEnv("ANTHROPIC_API_KEY", "test-key");

const { bepaalAntwoord } = await import("./route");

function tekstBlok(text: string) {
  return { type: "text" as const, text, citations: null };
}

function toolUseBlok(name: string) {
  return {
    type: "tool_use" as const,
    id: "tool_1",
    name,
    input: {},
    caller: { type: "direct" as const },
  };
}

describe("bepaalAntwoord", () => {
  it("normale vraag: alleen tekst, geen escalatie", () => {
    const result = bepaalAntwoord([tekstBlok("Knippen dames kost €35.")]);
    expect(result.moetEscaleren).toBe(false);
    expect(result.text).toBe("Knippen dames kost €35.");
  });

  it("escalatie: tool-call + begeleidende tekst wordt gebruikt", () => {
    const result = bepaalAntwoord([
      tekstBlok("Daar heb ik geen info over, bel 0575 – 57 07 01."),
      toolUseBlok("meld_onbeantwoorde_vraag"),
    ]);
    expect(result.moetEscaleren).toBe(true);
    expect(result.text).toBe("Daar heb ik geen info over, bel 0575 – 57 07 01.");
  });

  it("escalatie zonder tekst: valt terug op de standaardtekst i.p.v. een lege bubbel", () => {
    const result = bepaalAntwoord([toolUseBlok("meld_onbeantwoorde_vraag")]);
    expect(result.moetEscaleren).toBe(true);
    expect(result.text.length).toBeGreaterThan(0);
    expect(result.text).toContain("0575");
  });

  it("negeert tool-calls naar een andere (onbekende) tool", () => {
    const result = bepaalAntwoord([
      tekstBlok("Gewoon antwoord."),
      toolUseBlok("een_andere_tool"),
    ]);
    expect(result.moetEscaleren).toBe(false);
    expect(result.text).toBe("Gewoon antwoord.");
  });

  it("meerdere tekstblokken worden samengevoegd", () => {
    const result = bepaalAntwoord([tekstBlok("Eerste zin."), tekstBlok("Tweede zin.")]);
    expect(result.text).toBe("Eerste zin.\nTweede zin.");
  });

  it("lege content: geen crash, lege tekst, geen escalatie", () => {
    const result = bepaalAntwoord([]);
    expect(result.moetEscaleren).toBe(false);
    expect(result.text).toBe("");
  });
});
