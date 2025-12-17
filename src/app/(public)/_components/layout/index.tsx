import React from "react";

export default function Index({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full bg-neutral-200">
            {children}
        </div>
    );
}