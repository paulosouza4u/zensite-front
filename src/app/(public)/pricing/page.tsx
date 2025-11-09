import type { Metadata } from "next";

// Metadata para a página Pricing
export const metadata: Metadata = {
    title: "Pricing - Page Next",
    description: "Página de teste. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    // Miniatura de compartilhamento
    openGraph: {
        title: "Pricing - Page Next",
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

export default function Pricing() {
    return (
        <main>
            <h1>Pricing</h1>
        </main>
    );
}
