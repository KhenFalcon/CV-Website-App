import react from "react";

import Gallery from "./Gallery"; 
import { GalleryItem } from "react-image-gallery";
// localizations
import { useLocalization } from "../../components/LocalizedContext";
import en_local from "../../../../localization/English/Projects.json";
import jp_local from "../../../../localization/Japanese/Projects.json";
// css
import "../../css/Content.css";

import image from "../../assets/project-images/cv-img-1.jpg";

const images: GalleryItem[] = [
    {original: image.src}
];

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
                    <Gallery images={getImages(project)} />
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

function getImages(project) {
    let images: HTMLImageElement[] = [];
    const pathToAssets = "../../"
    for (let i = 0; i < project.images.length; i++) {
        let img = new Image();
        img.src = pathToAssets + project.images[i]
        images[i] = img;
    }

    let galleryItems: GalleryItem[] = [];
    for (let i = 0; i < images.length; i++) {
        galleryItems[i] = { original: images[i].src };
    }

    return galleryItems;
}

export default Content