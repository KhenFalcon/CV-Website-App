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
            <img src={shipImage} alt="Background" width="100%" />
            <img src={pondImage} alt="Background" width="100%" />
            <img src={shrineImage} alt="Background" width="100%" />
            <img src={castleImage} alt="Background" width="100%" />
        </div>
    )
}

export default Background