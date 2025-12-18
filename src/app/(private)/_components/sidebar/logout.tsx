"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        await fetch("/api/auth/logout", { method: "POST" });
        router.refresh();
        router.push("/");
    }

    return (
        <button className="p-2 border rounded hover:bg-white my-4" onClick={handleLogout}>Logout</button>
    );
}
