import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { isValidAdminKey, isValidKapsalonOwnerKey } from "./adminAuth";

describe("isValidAdminKey", () => {
  const origKey = process.env.ADMIN_KEY;

  afterEach(() => {
    if (origKey === undefined) delete process.env.ADMIN_KEY;
    else process.env.ADMIN_KEY = origKey;
  });

  it("weigert alles als de env var niet gezet is (fail-closed)", () => {
    delete process.env.ADMIN_KEY;
    expect(isValidAdminKey("wat-dan-ook")).toBe(false);
    expect(isValidAdminKey(null)).toBe(false);
    expect(isValidAdminKey(undefined)).toBe(false);
  });

  it("weigert een lege of ontbrekende sleutel, ook als de env var wel gezet is", () => {
    process.env.ADMIN_KEY = "correcte-sleutel-123";
    expect(isValidAdminKey("")).toBe(false);
    expect(isValidAdminKey(null)).toBe(false);
    expect(isValidAdminKey(undefined)).toBe(false);
  });

  it("weigert een foute sleutel", () => {
    process.env.ADMIN_KEY = "correcte-sleutel-123";
    expect(isValidAdminKey("foute-sleutel")).toBe(false);
  });

  it("accepteert de exact juiste sleutel", () => {
    process.env.ADMIN_KEY = "correcte-sleutel-123";
    expect(isValidAdminKey("correcte-sleutel-123")).toBe(true);
  });

  it("is hoofdlettergevoelig", () => {
    process.env.ADMIN_KEY = "Correcte-Sleutel-123";
    expect(isValidAdminKey("correcte-sleutel-123")).toBe(false);
  });
});

describe("isValidKapsalonOwnerKey", () => {
  const origKey = process.env.KAPSALON_OWNER_KEY;
  const origAdmin = process.env.ADMIN_KEY;

  beforeEach(() => {
    delete process.env.KAPSALON_OWNER_KEY;
    delete process.env.ADMIN_KEY;
  });

  afterEach(() => {
    if (origKey === undefined) delete process.env.KAPSALON_OWNER_KEY;
    else process.env.KAPSALON_OWNER_KEY = origKey;
    if (origAdmin === undefined) delete process.env.ADMIN_KEY;
    else process.env.ADMIN_KEY = origAdmin;
  });

  it("gebruikt een eigen env var, los van ADMIN_KEY", () => {
    process.env.ADMIN_KEY = "bedrijfs-sleutel";
    process.env.KAPSALON_OWNER_KEY = "klant-sleutel";
    // De bedrijfssleutel mag nooit toegang geven tot het klantportaal.
    expect(isValidKapsalonOwnerKey("bedrijfs-sleutel")).toBe(false);
    expect(isValidKapsalonOwnerKey("klant-sleutel")).toBe(true);
  });

  it("weigert alles als KAPSALON_OWNER_KEY niet gezet is, zelfs als ADMIN_KEY wel bestaat", () => {
    process.env.ADMIN_KEY = "bedrijfs-sleutel";
    expect(isValidKapsalonOwnerKey("bedrijfs-sleutel")).toBe(false);
  });
});
