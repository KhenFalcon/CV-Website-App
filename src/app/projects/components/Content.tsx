import react from "react";
import { useLocalization } from "../../components/LocalizedContext";
import en_local from "../../../../localization/English/Projects.json";
import jp_local from "../../../../localization/Japanese/Projects.json";
// css
import "../../css/Content.css";

function Content() {
    const { localization } = useLocalization();
    const loc = localization === 'English' ? en_local : jp_local;
    return (
        <div className="content">
            {loc["projects"].map((project, index) => (
                <div className="content-section" id={project.name}>
                    <img alt="project-splash" />
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <br />
                    <p>
                        <b>Repository on GitHub:</b> 
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            {project.github}
                        </a>
                    </p>
                    
                </div>
            ))}
        </div>
    )
}

export default Content