import Link from "next/link";
import Image from "next/image";
import Logotipo from "@images/logotipo_white.png";

export default function Index() {

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="text-white bg-neutral-900 py-22 px-4 md:px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border-s ps-3">
                        <Image src={Logotipo} alt="Logotipo" width={135} height={29}/>
                        <div className="pt-3">
                            ACME Corporation
                            1123 Fictional St,
                            San Francisco, CA 94103
                            P: (123) 456-7890
                            Full Name
                            first.last@example.com
                        </div>
                    </div>
                    <nav>
                        <div className="flex flex-col gap-2 border-s ps-3">
                            <Link href="/">Home</Link>
                            <Link href="/blog">Blog/Notícias</Link>
                            <Link href="/pricing">Pricing</Link>
                            <Link href="/about">About</Link>
                            <Link href="/#contact">Contact</Link>
                            <Link href="/register">Register</Link>
                            <Link href="/sign-in">Sign-In</Link>
                        </div>
                    </nav>
                    <div className="border-s ps-3">
                        <div>Newsletter</div>
                    </div>
                    <div className="border-s ps-3">
                        <div>Social</div>
                    </div>
                </div>
                <div className="text-center mt-20">
                    &copy; {year}
                </div>
            </div>
        </footer>
    );
}