import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Footer} from "@/components/Footer";
import {NavBar} from "@/components/NavBar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Click2Eat | Tu Aliado en la Gestión de Comandas para Hostelería",
    description: "Mejora la experiencia de tus clientes y optimiza tu restaurante con Click2Eat. Menús digitales, pedidos en línea y atención al cliente optimizada. ¡Pruébalo ahora!",
    robots: {
        index: false,
        follow: false,
    }
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} flex flex-col justify-between h-screen`}>
            <NavBar/>
            {children}
            <Footer/>
        </body>
        </html>
    );
}
