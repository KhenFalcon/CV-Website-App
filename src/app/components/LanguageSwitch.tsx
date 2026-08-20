'use client';

import React from "react";
import { useLocalization } from "./LocalizedContext";
// css
import "../css/LangaugeSwitch.css";

export default function LanguageSwitch() {
    const { localization: language, toggleLocalization } = useLocalization();
    const color = language === 'English' ? '#ff0000' : '#0000ff';

    return (
        <div
            id="language-switch"
            style={{ backgroundColor: color }}
            onClick={toggleLocalization}
        />
    );
}