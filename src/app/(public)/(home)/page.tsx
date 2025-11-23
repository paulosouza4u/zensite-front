import Banner from "@public/(home)/sessions/banner";
import About from "@public/(home)/sessions/about";
import Contact from "@public/(home)/sessions/contact";

export default function Home() {
    return (
        <main className="debug">
            {/** Modal AVISOS cookie */}
            <Banner/>
            {/** Blog/Notícias section */}
            <About/>
            <Contact/>
        </main>
    );
}