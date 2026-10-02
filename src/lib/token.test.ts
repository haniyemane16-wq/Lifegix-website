import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

// SECRET wordt eenmalig bij module-import berekend, dus voor elk scenario
// (secret wel/niet gezet, wel/niet productie) moet de module met een schone
// cache opnieuw geïmporteerd worden.
async function freshTokenModule() {
  vi.resetModules();
  return import("./token");
}

describe("createLeadToken / verifyLeadToken", () => {
  beforeEach(() => {
    vi.stubEnv("INTAKE_TOKEN_SECRET", "test-secret-minstens-32-tekens-lang");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("een gemaakt token is meteen geldig en geeft dezelfde data terug", async () => {
    const { createLeadToken, verifyLeadToken } = await freshTokenModule();
    const token = createLeadToken({ name: "Jan", email: "jan@test.nl" });
    const payload = verifyLeadToken(token);
    expect(payload).not.toBeNull();
    expect(payload?.name).toBe("Jan");
    expect(payload?.email).toBe("jan@test.nl");
  });

  it("verwerpt een token met een geknoeide handtekening", async () => {
    const { createLeadToken, verifyLeadToken } = await freshTokenModule();
    const token = createLeadToken({ name: "Jan", email: "jan@test.nl" });
    const geknoeid = token.slice(0, -1) + (token.endsWith("a") ? "b" : "a");
    expect(verifyLeadToken(geknoeid)).toBeNull();
  });

  it("verwerpt een token dat met een ander secret is ondertekend", async () => {
    const { createLeadToken } = await freshTokenModule();
    const token = createLeadToken({ name: "Jan", email: "jan@test.nl" });

    vi.stubEnv("INTAKE_TOKEN_SECRET", "een-heel-ander-secret-32-tekens!!");
    const { verifyLeadToken: verifyMetAnderSecret } = await freshTokenModule();
    expect(verifyMetAnderSecret(token)).toBeNull();
  });

  it("verwerpt een verlopen token", async () => {
    const { createLeadToken, verifyLeadToken } = await freshTokenModule();
    const token = createLeadToken({ name: "Jan", email: "jan@test.nl" });

    const nu = Date.now();
    vi.spyOn(Date, "now").mockReturnValue(nu + 8 * 24 * 3600 * 1000); // 8 dagen later
    expect(verifyLeadToken(token)).toBeNull();
    vi.restoreAllMocks();
  });

  it("verwerpt willekeurige onzin zonder te crashen", async () => {
    const { verifyLeadToken } = await freshTokenModule();
    expect(verifyLeadToken("")).toBeNull();
    expect(verifyLeadToken("geen-geldig-token")).toBeNull();
    expect(verifyLeadToken("a.b.c")).toBeNull();
  });

  it("weigert te laden in productie zonder INTAKE_TOKEN_SECRET (fail-closed)", async () => {
    delete process.env.INTAKE_TOKEN_SECRET;
    vi.stubEnv("NODE_ENV", "production");
    await expect(freshTokenModule()).rejects.toThrow(
      "INTAKE_TOKEN_SECRET ontbreekt in productie"
    );
  });

  it("gebruikt een dev-fallback buiten productie zonder te crashen", async () => {
    delete process.env.INTAKE_TOKEN_SECRET;
    vi.stubEnv("NODE_ENV", "development");
    const { createLeadToken, verifyLeadToken } = await freshTokenModule();
    const token = createLeadToken({ name: "Jan", email: "jan@test.nl" });
    expect(verifyLeadToken(token)?.name).toBe("Jan");
  });
});
