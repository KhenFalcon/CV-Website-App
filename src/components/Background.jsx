import react from "react";
// css
import "../css/Background.css";
// images
import shipImage from "../background-images/ships.jpg";

function Background() {
    return (
        <div className="background">
            <img src={shipImage} alt="Background" width="100%" height="100%"    />
        </div>
    )
}

export default Background