import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/components/ui/fonts";
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
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
        <FooterPage />
      </body>
    </html>
  );
}
