import react from "react";
// components
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
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