import Link from "next/link";
import LogoutButton from "@private/_components/sidebar/logout";

export default function Sidebar() {
    return (
        <div className="w-60 flex-none p-3 border-e-3 border-e-white">
            <h1 className="font-bold">Sidebar</h1>
            <Link href="/posts-client">
                <div className="p-2 border rounded hover:bg-white my-4">Post Client Render</div>
            </Link>
            <LogoutButton/>
        </div>
    );
}