import react from "react";
// css
import "../css/Background.css";
// images
import shipImage from "../assets/background-images/ships.jpg";
import pondImage from "../assets/background-images/pond.jpg";
import shrineImage from "../assets/background-images/shrine.jpg";
import castleImage from "../assets/background-images/castle.jpg";

function Background() {
    return (
        <div className="background">
            <img src={shipImage?.src || shipImage} alt="Background" />
            <img src={pondImage?.src || pondImage} alt="Background" />
            <img src={shrineImage?.src || shrineImage} alt="Background" />
            <img src={castleImage?.src || castleImage} alt="Background" />
        </div>
    )
}

export default Background