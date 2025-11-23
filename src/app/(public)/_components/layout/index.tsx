import React from "react";

export default function Index({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-dvw h-dvh bg-neutral-200">
            {children}
        </main>
    );
}
