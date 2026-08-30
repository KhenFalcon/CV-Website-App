"use client";
// localization
import { useLocalization } from "./LocalizedContext";
import en_local from "../../../localization/English/Experience.json";
import jp_local from "../../../localization/Japanese/Experience.json";
// css
import "../css/Experience.css";
import "../css/Content.css";
// images
import RMS from "../assets/work-logos/RMS logo.png";
import RedLobster from "../assets/work-logos/Red Lobster logo.png";
import Locos from "../assets/work-logos/Locos logo.jpg";

// Map logo filenames to imported images
const logoMap = {
    "RMS Logo.png": RMS,
    "Red Lobster logo.png": RedLobster,
    "Locos logo.jpg": Locos,
};

const getLogoSrc = (logoPath: string) => {
    const filename = logoPath.split("/").pop(); // Extract filename from path
    return logoMap[filename]?.src || logoMap[filename] || logoPath;
};

function Experience() {
    const { localization } = useLocalization();
    const loc = localization === 'English' ? en_local : jp_local;

    return (
        <div className="experience content-section">
            <h1>{localization == 'English' ? "Experience" : "仕事体験"}</h1>
            <hr />
            {loc["Experince"].map((job) => (
                <div key={job.Company} className="experience-content">
                    <img src={getLogoSrc(job.Logo)} alt={`${job.Company} Logo`} />
                    <div className="experience-text">
                        <h2>{job.Company}</h2>
                        <ul>
                            <li>{job.Address}</li>
                            <li><b>{job.Position}</b></li>
                            <li>{job.Duration}</li>
                        </ul>
                        <p>{job.Description}</p>
                    </div>
                </div>
            ))}
            <br />
            <p><i>
                {
                    localization == 'English'
                        ? "-- I do not own any of these logos. Credit and Rights are reserved for their respective owners. --"
                        : "-- 僕はこの写真を有しません。各自の持ち主は掛けと所有権の全部を有しています。--"
                }
            </i></p>
        </div>
    )
}

export default Experience