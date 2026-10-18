import { describe, it, expect } from "vitest";
import {
  bepaalSubverwerkers,
  ALTIJD_SUBVERWERKERS,
  AI_SUBVERWERKERS,
} from "./dpaSubverwerkers";

describe("bepaalSubverwerkers", () => {
  it('"Website Starter" — alleen de vaste 4 sub-verwerkers, geen AI-rijen', () => {
    const result = bepaalSubverwerkers("Website Starter");
    expect(result).toEqual(ALTIJD_SUBVERWERKERS);
    expect(result).toHaveLength(4);
  });

  it('"AI FAQ" — inclusief de AI-sub-verwerkers', () => {
    const result = bepaalSubverwerkers("AI FAQ");
    expect(result).toHaveLength(6);
    for (const sub of AI_SUBVERWERKERS) expect(result).toContainEqual(sub);
    for (const sub of ALTIJD_SUBVERWERKERS) expect(result).toContainEqual(sub);
  });

  it('"Bundel Starter" — inclusief de AI-sub-verwerkers', () => {
    const result = bepaalSubverwerkers("Bundel Starter");
    expect(result).toHaveLength(6);
    for (const sub of AI_SUBVERWERKERS) expect(result).toContainEqual(sub);
  });

  it("onbekend/leeg pakket — alle 6 sub-verwerkers (liever te veel dan te weinig)", () => {
    expect(bepaalSubverwerkers("")).toHaveLength(6);
    expect(bepaalSubverwerkers(null)).toHaveLength(6);
    expect(bepaalSubverwerkers(undefined)).toHaveLength(6);
    expect(bepaalSubverwerkers("iets-onherkenbaars-123")).toHaveLength(6);
  });

  it("is case-insensitive voor 'ai' en 'bundel'", () => {
    expect(bepaalSubverwerkers("ai volledig")).toHaveLength(6);
    expect(bepaalSubverwerkers("BUNDEL BUSINESS")).toHaveLength(6);
  });

  it('"Website Business" en "Website Visitekaartje" — ook alleen de vaste 4', () => {
    expect(bepaalSubverwerkers("Website Business")).toEqual(ALTIJD_SUBVERWERKERS);
    expect(bepaalSubverwerkers("Website Visitekaartje")).toEqual(ALTIJD_SUBVERWERKERS);
  });
});
