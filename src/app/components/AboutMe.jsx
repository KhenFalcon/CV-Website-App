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
    let loc = useLocalization().localization == 'English' ? en_local : jp_local;
    let [name] = [loc.name];

    return (
        <div className="about-me content-section">
            <img id="headshot" src={headshot?.src || headshot} alt="Headshot" />
            <div id="bio">
                <h1>{ name }</h1>
                <p>
                    I am a student from
                    <a href="https://www.uga.edu/" target="_blank" rel="noopener noreferrer">
                        <i>The University of Georgia</i>
                    </a>
                    Graduating this December with a Bachelor's Degree of Computer Science
                    and a Certificate of Applied Data Science.
                </p>
                <br />
                <p>
                    I studied abroad in Japan at
                    <a href="https://www.kyushu-u.ac.jp/" target="_blank" rel="noopener noreferrer">
                        <i>Kyushu University</i>
                    </a>
                    (2024-2025),
                    and I have gained basic language proficiency in Japanese
                    (N3), as well as a passion for Japanese culture.
                </p>
            </div>
            <div id="contact">
                <p>
                    <b>Ways to Contact Me:</b> ░ (+1) (706) 254-6756 ░
                    <a href="mailto:chiquen415@gmail.com" target="_top">
                        <i>chiquen415@gmail.com</i>
                    </a>
                     ░
                </p>
            </div>
        </div>
    )
}

export default AboutMe