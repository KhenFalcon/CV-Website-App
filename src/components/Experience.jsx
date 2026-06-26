import react from "react";
// css
import "../css/Experience.css";
import "../css/Content.css";
// images
import RMS from "../assets/work-logos/RMS logo.png";
import RedLobster from "../assets/work-logos/Red Lobster logo.png";
import Locos from "../assets/work-logos/Locos logo.jpg";

function Experience() {
    return (
        <div className="experience content-section">
            <h1>Experience</h1>
            <hr />
            <div className="experience-content">
                <img src={RMS} alt="Revenue Management Services Logo" />
                <div className="experience-text">
                    <h2>Revenue Management Services</h2>
                    <ul>
                        <li>
                            777 South Harbour Island Blvd. Suite 890 Tampa, FL
                            33602
                        </li>
                        <li><b>Software Engineer Trainee (Intern)</b></li>
                        <li>September 2022 - December 2022</li>
                    </ul>
                    <p>Developed and maintained software for revenue management systems.</p>
                </div>
            </div>
            <br />
            <div className="experience-content">
                <img src={RedLobster} alt="Red Lobster Logo" />
                <div className="experience-text">
                    <h2>Red Lobster</h2>
                    <ul>
                        <li>1956 W Broad St, Athens, GA 30606</li>
                        <li><b>Host</b></li>
                        <li>August 2023 - May 2024</li>
                    </ul>
                    <p>
                        Greeted customers, managed reservations, and facilitated early
                        communication with guests and their servers.
                    </p>
                </div>
            </div>
            <br />
            <div className="experience-content">
                <img src={Locos} alt="Locos Logo" />
                <div className="experience-text">
                    <h2>Locos</h2>
                    <ul>
                        <li>2020 Timothy Rd, Athens, GA 30606</li>
                        <li><b>Host</b></li>
                        <li>June 2024 - December 2025</li>
                    </ul>
                    <p>
                        Greeted customers, managed reservations, and facilitated early
                        communication with guests and their servers.
                    </p>
                </div>
            </div>
            <br />
            <p><i>
                -- I do not own any of these logos. Credit and Rights are
                reserved for their respective owners. --
            </i></p>
        </div>
    )
}

export default Experience