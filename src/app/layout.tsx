import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/components/ui/fonts";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/component/navbar";
import { FooterPage } from "@/components/component/footer-page";

export const metadata: Metadata = {
  title: "Gonzalo Cordoba Developer",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <Navbar />
            <main>{children}</main>
          </div>
        </ThemeProvider>
        <FooterPage />
      </body>
    </html>
  );
}
