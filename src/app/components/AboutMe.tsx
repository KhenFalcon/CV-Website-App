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
export function renderBioParagraph(paragraph: string, inlineLinks: readonly { text: string; link: string }[]): ReactNode[] {
    const content = []; // the returned ReactNode[]
    let cursor = 0; // the searching cursor for matching substrings

    // Process one link occurrence at a time so multiple links can be rendered in one paragraph.
    while (cursor < paragraph.length) {

        // the first occurance of a link substring and its index in paragraph (temp assign: undefined)
        let match: { inlineLink: { text: string; link: string }; index: number } | undefined;
        // Scan the links once and find the first occurrence found in paragraph.
        for (const inlineLink of inlineLinks) {
            // skip "" texts (safety net)
            if (inlineLink.text.length === 0) { continue; }

            const index = paragraph.indexOf(inlineLink.text, cursor);
            if (
                index >= cursor && // if (index, cursor) makes a valid substring and:
                (!match || // match is undefined (i.e. this is the first occurance), or...
                    index < match.index || // this match was already found earlier in the loop, or:
                    (index === match.index && // this index matches the prior substring's index, but...
                        inlineLink.text.length > match.inlineLink.text.length)) // this substring is longer (i.e. takes precedence)
            ) {
                // then this link substring becomes the next segment to add to content[]
                match = { inlineLink, index };
            }
        }

        // i.e. did not find another text substring to turn into a hyperlink (i.e. push remaining normal text and break the loop)
        if (!match) {
            content.push(paragraph.slice(cursor));
            break;
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

    return content;
}