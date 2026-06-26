import react from "react";
// css
import "../css/Education.css";
import "../css/Content.css";
// images
import NOHS from "../assets/school-logos/NOHS logo.png";
import UNG from "../assets/school-logos/UNG logo.png";
import UGA from "../assets/school-logos/UGA logo.png";
import KYU from "../assets/school-logos/KYU logo.jpg";

function Education() {
    return (
        <div className="education content-section">
            <h1>Education</h1>
            <hr />
            <div className="education-grid">
                <div className="education-item" grid-column="1">
                    <img src={NOHS} alt="North Oconee Highschool Logo"
                        onClick={() => window.open('https://nohs.oconeeschools.org/', 
                            '_blank', 'noopener,noreferrer') } />
                    <h2>North Oconee Highschool</h2>
                    <p>Summa Cum Laude</p>
                    <p>GPA: 3.7</p>
                    <p>Graduated: May 2022</p>
                </div>
                <div className="education-item" grid-column="2">
                    <img src={UNG} alt="University of North Georgia Logo"
                        onClick={() => window.open('https://www.ung.edu/', 
                            '_blank', 'noopener,noreferrer') } />
                    <h2>University of North Georgia</h2>
                    <p>Undergraduate in Computer Science</p>
                    <p>GPA: 4.0</p>
                    <p>Transferred: 2022-2023</p>
                </div>
                <div className="education-item" grid-column="3">
                    <img src={UGA} alt="University of Georgia Logo"
                        onClick={() => window.open('https://www.uga.edu/', 
                            '_blank', 'noopener,noreferrer') } />
                    <h2>University of Georgia</h2>
                    <p>
                        Bachelors of Science in Computer Science & Certificate
                        in Applied Data Science
                    </p>
                    <p>GPA: 3.8</p>
                    <p>Graduated: 2023-2026</p>
                </div>
                <div className="education-item" grid-column="4">
                    <img src={KYU} alt="Kyushu University Logo"
                        onClick={() => window.open('https://www.kyushu-u.ac.jp/', 
                            '_blank', 'noopener,noreferrer') } />
                    <h2>Kyushu University</h2>
                    <p>JTW Foreign Exchange Student</p>
                    <p>GPA: 3.7</p>
                    <p>Completed: 2024-2025</p>
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

export default Education