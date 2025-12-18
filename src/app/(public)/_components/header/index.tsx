import Link from "next/link";
import Image from "next/image";
import { verifySession } from "@/src/lib/session";
import Logotipo from "@images/logotipo_black.png";

export default async function Index() {
    const session = await verifySession();

    return (
        <header>
            <div className="flex justify-between text-xs text-white py-2 bg-neutral-600 px-4 md:px-10">
                <div><a href="#">(35) 3222-2233</a> | 08:00 às 18:00 | <a href="#">W</a></div>
                <div>Social</div>
            </div>
            <nav>
                <div className="flex justify-between py-4 bg-white px-4 md:px-10">
                    <Image src={Logotipo} alt="Logotipo" width={135} height={29}/>
                    <div className="flex gap-4">
                        <Link href="/">Home</Link>
                        <Link href="/blog">Blog/Notícias</Link>
                        {/*<Link href="/pricing">Pricing</Link>*/}
                        {/*<Link href="/about">About</Link>*/}
                        <Link href="/#contact">Contact</Link>
                        {/*<Link href="/register">Register</Link>*/}
                        {session ? (
                            <Link href="/dashboard"><span className="p-1 border rounded hover:bg-neutral-200">
                                Dashboard
                            </span></Link>
                        ) : (
                            <Link href="/sign-in"><span className="p-1 border rounded hover:bg-neutral-200">
                                Sign-In
                            </span></Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
