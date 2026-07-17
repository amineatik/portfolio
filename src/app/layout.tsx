import type { Metadata } from "next";
import { personal } from "@/data/personal";
import "./globals.css";

export const metadata: Metadata = {
  title: `${personal.name} | ${personal.title}`,
  description: "Portfolio de Mohamed Amine Atik, cybersécurité, IA, réseaux et développement.",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
