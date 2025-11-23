import Link from "next/link";

export default function Index() {
    return (
        <header>
            <div className="flex justify-between text-xs text-white py-2 bg-neutral-600 px-4 md:px-10">
                <div><a href="#">(35) 3222-2233</a> | 08:00 às 18:00 | <a href="#">W</a></div>
                <div>Social</div>
            </div>
            <nav>
                <div className="flex justify-between py-4 bg-white px-4 md:px-10">
                    <div className="debug">Logo</div>
                    <div className="flex gap-4">
                        <Link href="/" className="debug">Home</Link>
                        <Link href="/blog" className="debug">Blog/Notícias</Link>
                        <Link href="/pricing" className="debug">Pricing</Link>
                        <Link href="/about" className="debug">About</Link>
                        <Link href="/#contact" className="debug">Contact</Link>
                        <Link href="/register" className="debug">Register</Link>
                        <Link href="/sign-in" className="debug">Sign-In</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}