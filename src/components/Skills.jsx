import react from "react";
// css
import "../css/Skills.css";
import "../css/Content.css";

function Skills() {
    return (
        <div className="skills content-section">
            <h1>Skills and Languages</h1>
            <hr />
            <div className="skills-grid">
                <ul grid-column="1">
                    <li>restful APIs and Git</li>
                    <li>Ansynchronous Programming</li>
                    <li>Application and Web Development</li>
                    <li>Networking</li>
                </ul>
                <ul grid-column="2">
                    <li>Java and C#</li>
                    <li>HTML, CSS, Javascript, and Typescipt</li>
                    <li>Practice with Python and SQL</li>
                    <li><b>English (Native) and Japanese (~N3)</b></li>
                </ul>
            </div>
            <p>
                <b>My GitHub:</b>
                <a href="https://github.com/KhenFalcon" target="_blank"
                    rel="noopener noreferrer">
                    https://github.com/KhenFalcon
                </a>
            </p>
        </div>
    )
}

export default Skills;