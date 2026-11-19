import react from "react";

import Gallery from "./Gallery"; 
import { GalleryItem } from "react-image-gallery";
// localizations
import { useLocalization } from "../../components/LocalizedContext";
import en_local from "../../../../localization/English/Projects.json";
import jp_local from "../../../../localization/Japanese/Projects.json";
// css
import "../../css/Content.css";
// images
import cv_1 from "../../assets/project-images/cv-img-1.jpg";
import cv_2 from "../../assets/project-images/cv-img-2.jpg";
import cv_3 from "../../assets/project-images/cv-img-3.jpg";
import cv_4 from "../../assets/project-images/cv-img-4.jpg";

const cv_images: GalleryItem[] = [
    {original: cv_1.src}, 
    {original: cv_2.src}, 
    {original: cv_3.src}, 
    {original: cv_4.src}
];

function Content() {
    const { localization } = useLocalization();
    const loc = localization === 'English' ? en_local : jp_local;
    return (
        <div className="content">
            {loc["projects"].map((project, index) => (
                <div className="content-section" id={project.name} key={project.name}>
                    <img alt="project-splash" />
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <br />
                    <Gallery images={cv_images} />
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