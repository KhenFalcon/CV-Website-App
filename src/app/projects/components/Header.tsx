"use client";

import React from "react";
// localization
import { useLocalization } from "../../components/LocalizedContext";
import en_local from "../../../../localization/English/Projects.json";
import jp_local from "../../../../localization/Japanese/Projects.json";
// css
import "../../css/Header.css";
import "../../css/vr.css";

export default function Header() {
    const { localization } = useLocalization();
    const loc = localization === 'English' ? en_local : jp_local;

    return (
        <div className="header">
            <div className="vr" />
            <span onClick={() => window.location.href = "/"}>
                Joshua Mark
            </span>
            {loc["projects"].map((project, index) => (
                <>
                    <div className="vr" />
                    <span onClick={() => scrollTo(project.name)}>
                        {project.name}
                    </span>
                </>
            ))}
            <div className="vr" />
        </div>
    )
}

function scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}