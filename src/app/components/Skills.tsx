'use client';
// localization
import { useLocalization } from "./LocalizedContext";
import en_local from "../../../localization/English/Skills.json";
import jp_local from "../../../localization/Japanese/Skills.json";
// css
import "../css/Skills.css";
import "../css/Content.css";

function Skills() {
    const { localization } = useLocalization();
    const loc = localization === 'English' ? en_local : jp_local;

    return (
        <div className="skills content-section">
            <h1>Skills and Languages</h1>
            <hr />
            <div className="skills-grid">
                <h3>Programming / Computer Skills</h3>
                {loc["Programming / Computer Skills"].map((skill) => (
                    <p key={skill}>
                        {skill}
                    </p>
                ))}
                <h3>Social / Personality Skills</h3>
                {loc["Social / Personality"].map((skill) => (
                    <p key={skill}>
                        {skill}
                    </p>
                ))}
                <h3>Application / Services</h3>
                {loc["Applications / Services"].map((skill) => (
                    <p key={skill}>
                        {skill}
                    </p>
                ))}
            </div>
            <p>
                <b>{localization === 'English' ? "My Github: " : "僕のGithub: "}</b>
                <a href="https://github.com/KhenFalcon" target="_blank"
                    rel="noopener noreferrer">
                    https://github.com/KhenFalcon
                </a>
            </p>
        </div>
    )
}

export default Skills;