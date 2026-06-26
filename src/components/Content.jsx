import react from "react";
// components
import AboutMe from "./AboutMe.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
// css
import "../css/Content.css";

function Content() {
    return (
        <div className="content">
            <AboutMe />
            <Skills />
            <Education />
            <Experience />
        </div>
    )
}

export default Content