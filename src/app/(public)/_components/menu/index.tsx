import Link from "next/link";

export default function Index() {
    return (
        <nav>
            <div className="flex justify-between py-2 bg-neutral-400 px-4">
                <div>Contato</div>
                <div>Social</div>
            </div>
            <div className="flex justify-between py-4 bg-white px-4">
                <div className="debug">Logo</div>
                <div className="flex gap-4">
                    <Link href="/" className="debug">Home</Link>
                    <Link href="/blog" className="debug">Blog</Link>
                    <Link href="/pricing" className="debug">Pricing</Link>
                    <Link href="/about" className="debug">About</Link>
                    <Link href="/register" className="debug">Register</Link>
                    <Link href="/sign-in" className="debug">Sign-In</Link>
                </div>
            </div>
        </nav>
    );
}