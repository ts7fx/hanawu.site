import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hana Wu | Brand Visual Designer & Founder",
  description:
    "Portfolio of Hana Wu (吴雪莹) — Brand Visual Designer with 9 years of experience in luxury, fashion, and FMCG brands. Founder of Huashengsheng Design Studio.",
  metadataBase: new URL("https://hanawu.site"),
  openGraph: {
    title: "Hana Wu | Brand Visual Designer & Founder",
    description:
      "Portfolio of Hana Wu (吴雪莹) — Brand Visual Designer with 9 years of experience. Serving Michael Kors, ba&sh, Budweiser, Van Cleef & Arpels, and 30+ brands.",
    url: "https://hanawu.site",
    siteName: "Hana Wu Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hana Wu | Brand Visual Designer & Founder",
    description:
      "Portfolio of Hana Wu (吴雪莹) — Brand Visual Designer with 9 years of experience. Serving Michael Kors, ba&sh, Budweiser, Van Cleef & Arpels, and 30+ brands.",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✦</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
