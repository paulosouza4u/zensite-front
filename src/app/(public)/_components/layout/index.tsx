import React from "react";

export default function Index({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-dvw bg-neutral-200">
            {children}
        </div>
    );
}