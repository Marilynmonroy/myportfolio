import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Marilyn Monroy - Portfolio",
  description:
    "Transformo ideas en código y diseño, creando soluciones web únicas y funcionales. Llevemos tu proyecto al siguiente nivel. Explora mi portafolio.",
  metadataBase: new URL("https://marilynmonroy.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://marilynmonroy.vercel.app/",
    images: "/pagina.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
