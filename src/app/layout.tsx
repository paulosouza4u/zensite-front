import "./globals.css";
import React from "react";
import type { Metadata } from "next";

// Metadata geral para páginas que não tem
export const metadata: Metadata = {
    title: "zensite Next",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    // Miniatura de compartilhamento
    openGraph: {
        title: "zensite Next",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        images: ["https://placehold.co/200x200"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-br">
        <body cz-shortcut-listen="true">
        <h1>Header Geral - Raiz</h1>
        {children}
        </body>
        </html>
    );
}