import Link from "next/link";

export default function Index() {
    return (
        <footer>
            <div className="text-white bg-neutral-900 py-22 px-4 md:px-10 debug">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border-s">
                        <div className="debug">Logo</div>
                        ACME Corporation
                        1123 Fictional St,
                        San Francisco, CA 94103
                        P: (123) 456-7890
                        Full Name
                        first.last@example.com
                    </div>
                    <nav>
                        <div className="flex flex-col gap-2 border-s">
                            <Link href="/">Home</Link>
                            <Link href="/blog">Blog/Notícias</Link>
                            <Link href="/pricing">Pricing</Link>
                            <Link href="/about">About</Link>
                            <Link href="/#contact">Contact</Link>
                            <Link href="/register">Register</Link>
                            <Link href="/sign-in">Sign-In</Link>
                        </div>
                    </nav>
                    <div className="border-s">
                        <div>Newsletter</div>
                    </div>
                    <div className="border-s">
                        <div>Social</div>
                    </div>
                </div>
                <div className="text-center mt-20 debug">
                    2025
                </div>
            </div>
        </footer>
    );
}