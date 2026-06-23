import react from "react";
//css
import "../css/AboutMe.css";
import "../css/Content.css";
//images
import headshot from "../assets/headshot.jpg";

function AboutMe() {
    return (
        <div className="about-me content-section">
            <img id="headshot" src={headshot} alt="Headshot" />
            <div id="bio">
                <h1>Joshua Mark</h1>
                <p>
                    I am a graduating student from the
                    <a href="https://www.uga.edu/" target="_blank" rel="noopener noreferrer">
                        <i>University of Georgia</i>
                    </a>
                    in Fall 2026 with a Bachelor's Degree of Computer Science
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