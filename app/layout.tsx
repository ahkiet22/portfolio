import type { Metadata } from "next";
import { IBM_Plex_Mono, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

// const pixelFont = Press_Start_2P({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-pixel",
// });

const vtFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt",
});

export const metadata: Metadata = {
  title: "Ahkiet | Full-Stack Developer Portfolio",
  description:
    "Personal portfolio of Ahkiet – Full-Stack Developer. Showcasing projects, skills, experience, and notable products.",
  keywords: [
    "Ahkiet",
    "Full-Stack Developer",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "React",
    "Node.js",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Ahkiet" }],
  openGraph: {
    title: "Ahkiet | Full-Stack Developer Portfolio",
    description:
      "Explore Ahkiet's portfolio – Full-Stack Developer with a focus on web, UI/UX, and backend projects.",
    url: "https://ahkiet.vercel.app",
    siteName: "Ahkiet Portfolio",
    images: [
      {
        url: "/avatar-nft.png", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Ahkiet Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahkiet | Full-Stack Developer Portfolio",
    description:
      "Ahkiet's personal portfolio – showcasing web development projects, skills, and experience.",
    images: ["/avatar-nft.png"],
    creator: "@kiet1822",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  metadataBase: new URL("https://ahkiet.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${vtFont.variable} antialiased`}
      >
        <div className="black-background"></div>
        <div className="water-glow"></div>
        <div className="retro-background"></div>
        {children}
      </body>
    </html>
  );
}
