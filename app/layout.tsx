import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/lib/progressContext";
import { ThemeProvider } from "@/lib/themeContext";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Базовий E-Commerce: Від ідеї до продажів",
  description: "Бізнес-логіка, вибір платформи, перший магазин без коду. Shopify, Хорошоп, KeyCRM — все що потрібно для першого продажу.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var r=s==='light'||((!s||s==='system')&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';document.documentElement.setAttribute('data-theme',r);})();`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ProgressProvider>
            {children}
            <ThemeToggle />
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
