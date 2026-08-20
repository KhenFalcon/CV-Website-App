'use client';
// localization
import { useLocalization } from "./LocalizedContext";
import en_local from "../../../localization/English/AboutMe.json";
import jp_local from "../../../localization/Japanese/AboutMe.json";
// css
import "../css/AboutMe.css";
import "../css/Content.css";
// images
import headshot from "../assets/headshot.jpg";

function AboutMe() {
    const { localization } = useLocalization();
    const loc = localization === 'English' ? en_local : jp_local;

    return (
        <div className="about-me content-section">
            <img id="headshot" src={headshot.src} alt="Headshot Image" />
            <div id="bio">
                <h1>{loc.name}</h1>
                {loc.bio.map((paragraph) => (
                    <p key={paragraph}>
                        {paragraph}
                        <br />
                    </p>
                ))}
            </div>
            <div id="contact">
                <p>
                    <b>{loc.contactIntro}</b>
                </p>
                {loc.contacts.map((contact) => (
                    <span key={contact.text}>
                        {contact.ave}: {contact.text} ░
                    </span>
                ))}
            </div>
        </div>
    );
}

export default AboutMe