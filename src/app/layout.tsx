import type { Metadata } from "next";
import { Montserrat, Vidaloka } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Psicanalista Carlos Aberto",
  description: "Psicanalise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
          <link rel="shortcut icon" href="/image/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png"/>
      </head>
      <body className={`${montserrat.className } ` }>{children}</body>
    </html>
  );
}
