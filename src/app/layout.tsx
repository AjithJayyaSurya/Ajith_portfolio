import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ajithjayya.vercel.app"),
  title: "Ajith Jayya Surya E | AI Engineer & Sports Analytics Enthusiast",
  description:
    "Portfolio of Ajith Jayya Surya E — AI Engineer, Machine Learning Engineer, Data Analyst & Sports Analytics Enthusiast. B.Tech CSE (AI & Data Analytics) at SRIHER. Specializing in F1 Analytics, Cricket Analytics, and ML Systems.",
  keywords: [
    "Ajith Jayya Surya",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Analyst",
    "Sports Analytics",
    "Cricket Analytics",
    "Formula 1 Analytics",
    "Data Science",
    "SRIHER",
    "Portfolio",
    "Python",
    "TensorFlow",
    "FastAPI",
    "React",
  ],
  authors: [{ name: "Ajith Jayya Surya E" }],
  creator: "Ajith Jayya Surya E",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajithjayya.vercel.app",
    siteName: "Ajith Jayya Surya E | Portfolio",
    title: "Ajith Jayya Surya E | AI Engineer & Sports Analytics Enthusiast",
    description:
      "AI Engineer & Machine Learning Engineer specializing in Sports Analytics, F1 Telemetry, and Cricket Analytics. CGPA 8.5, SRIHER.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajith Jayya Surya E Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajith Jayya Surya E | AI Engineer",
    description:
      "AI Engineer & Sports Analytics Enthusiast | F1 & Cricket Analytics | ML Engineer",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://ajithjayya.vercel.app" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ajith Jayya Surya E",
              url: "https://ajithjayya.vercel.app",
              jobTitle: "AI Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Sri Ramachandra Institute of Higher Education and Research",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Sports Analytics",
                "Formula 1 Analytics",
                "Cricket Analytics",
                "Data Science",
              ],
              sameAs: [
                "https://github.com/AjithJayyaSurya",
                "https://www.linkedin.com/in/ajith-jayya-surya-e-446b52301/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
