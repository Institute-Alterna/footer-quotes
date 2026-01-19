import quotes from "./quotes";

/**
 * Returns a random quote for use in application footers.
 */
export function footerRandomText(): string {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
