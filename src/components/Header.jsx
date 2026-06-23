import React from "react";
import "../css/Header.css";
import "../css/vr.css";

function Header() {
    return (
        <>
            <div className="header">
                <div className="vr" />
                <span onClick={scrollToBio}>
                    Joshua Mark
                </span>
                <div className="vr" />
                <span onClick={scrollToBio}>
                    About Me
                </span>
                <div className="vr" />
                <span onClick={scrollToEducation}>
                    Education
                </span>
                <div className="vr" />
                <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Experience
                </span>
                <div className="vr" />
                <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Contact Me
                </span>
                <div className="vr" />
            </div>
        </>
    )
}

function scrollToBio() {
    const bioSection = document.getElementsByClassName("about-me")[0];
    if (bioSection) {
        bioSection.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToEducation() {
    const educationSection = document.getElementsByClassName("education")[0];
    if (educationSection) {
        educationSection.scrollIntoView({ behavior: "smooth" });
    }
}

export default Header