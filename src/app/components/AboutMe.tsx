'use client';
import { ReactNode } from "react";
// localization
import { useLocalization } from "./LocalizedContext";
import en_local from "../../../localization/English/AboutMe.json";
import jp_local from "../../../localization/Japanese/AboutMe.json";
// css
import "../css/AboutMe.css";
import "../css/Content.css";
// images
import headshot from "../assets/headshot.jpg";

export default function AboutMe() {
    const { localization } = useLocalization();
    const loc = localization === 'English' ? en_local : jp_local;

    return (
        <div className="about-me content-section">
            <img id="headshot" src={headshot.src} alt="Headshot Image" />
            <div id="bio">
                <h1>{loc.name}</h1>
                {loc.bio.map((paragraph) => (
                    <p key={paragraph}>
                        {renderBioParagraph(paragraph, loc.inlineLinks)}
                        <br /><br />
                    </p>
                ))}
            </div>
            <div id="contact">
                <p>
                    <b>{loc.contactIntro}</b>
                </p>
                {loc.contacts.map((contact) => (
                    <span key={contact.text}>
                        {contact.ave}: {contact.text} ░
                    </span>
                ))}
            </div>
        </div>
    );
}

/**
 * Replaces configured text occurrences with inline hyperlinks while preserving
 * all unmatched text in its original order.
 * @param paragraph - The localized bio paragraph to process.
 * @param inlineLinks - Link text and URL pairs from the localized content file.
 * @returns React nodes containing text segments and hyperlink elements.
 */
function renderBioParagraph(paragraph: string, inlineLinks: readonly { text: string; link: string }[]): ReactNode[] {
    const content = []; // the returned ReactNode[]
    let cursor = 0; // the searching cursor for matching substrings

    // Find the first occurrence of each configured label before rendering them.
    const matches = inlineLinks
        .map((inlineLink) => ({
            inlineLink,
            index: paragraph.indexOf(inlineLink.text),
        }))
        .filter(({ inlineLink, index }) => inlineLink.text.length > 0 && index >= 0)
        // Prefer the earliest occurrence; for ties, prefer the longer label.
        .sort((first, second) => first.index - second.index || second.inlineLink.text.length - first.inlineLink.text.length);

    // Render each precomputed match from left to right.
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];

        // Skip matches that overlap text already rendered by an earlier match.
        if (match.index < cursor) {
            continue;
        }

        // Preserve the plain text between the cursor and the next link.
        if (match.index > cursor) {
            content.push(paragraph.slice(cursor, match.index));
        }

        // Render the matched label as a link, then continue searching after it.
        content.push(
            <a
                href={match.inlineLink.link}
                key={`${match.index}-${match.inlineLink.text}`}
                target="_blank"
                rel="noreferrer"
            >
                {match.inlineLink.text}
            </a>,
        );
        cursor = match.index + match.inlineLink.text.length;
    }

    // Preserve any plain text after the final link.
    if (cursor < paragraph.length) {
        content.push(paragraph.slice(cursor));
    }

    return content;
}