import "@/styles/globals.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Inter, Birthstone, Open_Sans, Poppins } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Mevlana",
  description: "Experience the perfect fusion of fine Turkish cuisine, premium steaks. Indulge in a refined ambiance with exceptional hospitality.",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
  keywords: "Mevlana, Turkish restaurant Bushey, shisha lounge, steakhouse, fine dining, premium shisha, Mediterranean cuisine"
};

const stone = Birthstone({
  subsets: ["latin"],
  variable: "--font-stone",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const opens = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open",
  weight: ["400"],
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom font-inter flex min-h-screen text-[#FBEAD2] antialiased",
          stone.variable,
          inter.variable,
          opens.variable,
          poppins.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html >
  );
}
