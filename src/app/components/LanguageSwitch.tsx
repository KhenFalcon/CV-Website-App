'use client';
import React from "react";
// localization
import { useLocalization } from "./LocalizedContext";
// css
import "../css/LangaugeSwitch.css";

export default function LanguageSwitch() {
    const { localization: language, toggleLocalization } = useLocalization();
    const leftOffset = language === 'English' ? "17px" : "90px";

    return (
        <div
            id="language-switch"
            onClick={toggleLocalization}
        >
            <p>English | 日本語</p>
            <div id="background-circle" style={{left: leftOffset}}/>
        </div>
    );
}