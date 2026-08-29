"use client";
// localization
import { useLocalization } from "./LocalizedContext";
import en_local from "../../../localization/English/Education.json";
import jp_local from "../../../localization/Japanese/Education.json";
// css
import "../css/Education.css";
import "../css/Content.css";
// images
import NOHS from "../assets/school-logos/NOHS logo.png";
import UNG from "../assets/school-logos/UNG logo.png";
import UGA from "../assets/school-logos/UGA logo.png";
import KYU from "../assets/school-logos/KYU logo.jpg";

// Map logo filenames to imported images
const logoMap = {
    "NOHS logo.png": NOHS,
    "UNG logo.png": UNG,
    "UGA logo.png": UGA,
    "KYU logo.jpg": KYU,
};

const getLogoSrc = (logoPath: string) => {
    const filename = logoPath.split("/").pop(); // Extract filename from path
    return logoMap[filename]?.src || logoMap[filename] || logoPath;
};

function Education() {
    const { localization } = useLocalization();
    const loc = localization === 'English' ? en_local : jp_local;

    return (
        <div className="education content-section">
            <h1>{localization == 'English' ? "Education" : "学歴"}</h1>
            <hr />
            <div className="education-grid">
                {loc["Schools"].map((school) => (
                    <div className="education-item" key={school}>
                        <img src={getLogoSrc(school.Logo)} alt="school logo"
                            onClick={() => window.open(school.Link, 
                            '_blank', 'noopener,noreferrer') }/>
                        <h2>{school.Title}</h2>
                        <p>{school["Major / Degree"]}</p>
                        <p>{school.GPA}</p>
                        <p>{school["Graduation Date"]}</p>< br/>
                        <p>{school.Description}</p>
                    </div>
                ))}
            </div>
            <br />
            <p><i>
                -- I do not own any of these logos. Credit and Rights are
                reserved for their respective owners. --
            </i></p>
        </div>
    )
}

export default Education