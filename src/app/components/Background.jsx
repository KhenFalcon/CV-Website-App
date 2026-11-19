import Image from "next/image";
// css
import "../css/Background.css";
// images
import background from "../assets/Background Collage.optimized.jpg";

function Background() {
    return (
        <div className="background">
            <Image
                src={background}
                alt="Background"
                sizes="100vw"
                quality={75}
                priority
            />
        </div>
    )
}

export default Background