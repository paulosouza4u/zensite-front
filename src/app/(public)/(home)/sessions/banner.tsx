import Image from "next/image";
import ImageBanner from "@images/banner.png";

export default function Banner() {
    return (
        <section>
            {/** TODO Botão Página AVISOS */}
            <Image src={ImageBanner} alt="Banner" width={1920} height={500}/>
        </section>
    );
}