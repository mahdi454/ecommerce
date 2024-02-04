import type { Metadata } from "next";
import {
  Inter,
  Space_Mono,
  Oswald,
  IBM_Plex_Mono,
  Playfair_Display,
  Cormorant_Garamond,
  Raleway,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Provider from "@/components/Provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const spaceMono = Playfair_Display({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-space_mono",
});

export const metadata: Metadata = {
  title: "City Hunter",
  description: "Platform you can find best perfume in world!",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/fav/dark.png",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/fav/light.svg",
      media: "(prefers-color-scheme: light)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex flex-col min-h-screen">
            <Provider>
              <Navbar />
              <div className="flex-grow flex-1">{children}</div>
            </Provider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
