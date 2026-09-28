"use client";

import React from "react";
import "../css/Header.css";
import "../css/vr.css";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="vr" />
                <span onClick={() => scrollTo("about-me")}>
                    Joshua Mark
                </span>
                <div className="vr" />
                <span onClick={() => scrollTo("skills")}>
                    Skills
                </span>
                <div className="vr" />
                <span onClick={() => scrollTo("education")}>
                    Education
                </span>
                <div className="vr" />
                <span onClick={() => scrollTo("experience")}>
                    Experience
                </span>
                <div className="vr" />
                
                <span onClick={() => window.location.href = "projects"}>
                    Projects
                </span>
                <div className="vr" />
            </div>
        </>
    )
}

function scrollTo(sectionClassName: string) {
    const section = document.getElementsByClassName(sectionClassName)[0];
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}