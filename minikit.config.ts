const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header:
      "eyJmaWQiOjk5NDM1NSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGQ3Y0I1MEFkY0U5YTA5NUVFOEVkQ2M1RTIzNDVhYzM4MTFDQ2NFRWYifQ",
    payload:
      "eyJkb21haW4iOiJuZXctbWluaS1hcHAtcXVpY2tzdGFydC1iZWlnZS1uaW5lLnZlcmNlbC5hcHAifQ",
    signature:
      "3Cxh9P938EM56m3QcncYQ/oRd3A/SJ1GDuRMPx4AhmR+ccQUIGgKpzI446z2TeG4GSPXg0iZJegYQV3s5nP2Uhw=",
  },
  miniapp: {
    version: "1",
    name: "Beta",
    subtitle: "Your AI Ad Companion",
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;
