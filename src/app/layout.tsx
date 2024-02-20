import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Portafolio de Marilyn Monroy",
  description:
    "Explora el portafolio de una programadora y diseñadora. Transformo ideas en código y diseño, creando soluciones web únicas y funcionales. Descubre cómo puedo llevar tu proyecto al siguiente nivel",
  metadataBase: new URL("https://marilynmonroy.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
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
