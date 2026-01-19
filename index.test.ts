import { footerRandomText } from "./src/index";
import quotes from "./src/quotes";
import fs from "fs";
import path from "path";

describe("footerRandomText()", () => {
  it("Returns a string", () => {
    const result = footerRandomText();
    expect(typeof result).toBe("string");
  });

  it("Returns a quote that exists in the quotes.ts file", () => {
    const result = footerRandomText();
    expect(quotes).toContain(result);
  });

  it("All quotes in quotes.ts library are unique and non-empty", () => {
    const uniqueQuotes = new Set(quotes);
    expect(uniqueQuotes.size).toBe(quotes.length);
    for (const quote of quotes) {
      expect(quote.length).toBeGreaterThan(0);
    }
  });

  it("Returns a non-empty string", () => {
    const result = footerRandomText();
    expect(result.length).toBeGreaterThan(0);
  });
});

describe("Quote format validation", () => {
  it("All quotes start with lowercase letter", () => {
    for (const quote of quotes) {
      expect(quote[0]).toMatch(/[a-z]/);
    }
  });

  it("All quotes use double quotes in source code", () => {
    // Read the quotes.ts file content to verify double quotes are used
    const quotesFilePath = path.join(process.cwd(), "src/quotes.ts");
    const quotesFileContent = fs.readFileSync(quotesFilePath, "utf-8");

    // Count double vs single quotes in string literals
    // The file should use double quotes for all string literals
    const doubleQuoteMatches = quotesFileContent.match(/"[^"]*"/g) || [];
    const singleQuoteMatches = quotesFileContent.match(/'[^']*'/g) || [];

    // Should have string literals with double quotes
    expect(doubleQuoteMatches.length).toBeGreaterThan(0);
    // Should not have string literals with single quotes
    expect(singleQuoteMatches.length).toBe(0);
  });
});
