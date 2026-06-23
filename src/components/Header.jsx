import React from "react";
import "../css/Header.css";
import "../css/vr.css";

function Header() {
    return (
        <>
            <div className="header">
                <div className="vr" />
                <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Joshua Mark
                </span>
                <div className="vr" />
                <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    About Me
                </span>
                <div className="vr" />
                <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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

export default Header