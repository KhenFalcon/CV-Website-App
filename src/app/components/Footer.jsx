import react from "react";
// css 
import "../css/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-grid">
                <p grid-column="1" grid-row="1">Phone Number:</p>
                <p grid-column="1" grid-row="2">Email:</p>
                <p grid-column="1" grid-row="3">GitHub:</p>

                <p grid-column="2" grid-row="1">(+1) (706) 254-6756</p>
                <a grid-column="2" grid-row="2"
                    href="mailto:chiquen415@gmail.com" target="_top">
                    chiquen415@gmail.com
                </a>
                <a grid-column="2" grid-row="3"
                    href="https://github.com/KhenFalcon" target="_blank"
                    rel="noopener noreferrer">
                    https://github.com/KhenFalcon
                </a>

                <p grid-column="3" grid-row="1"></p>
                <p grid-column="3" grid-row="2"></p>
                <p grid-column="3" grid-row="3">Mailing Address:</p>

                <p grid-column="4" grid-row="1"></p>
                <p grid-column="4" grid-row="2"></p>
                <p grid-column="4" grid-row="3">1090 Keeneland Drive, Bogart, GA 30622, USA</p>
            </div>
            <p>
                The above headshot and background images are owned by Joshua
                Mark, however the company and school logos are not. All usage
                of these logos are in done purpose clarifying the identity of
                their respective owners. Likewise, all Credit and Rights are
                reserved for said respective owners.
            </p>
            <p fontSize="18px">~ 2026 Joshua Mark ~</p>
        </div>
    )
}

export default Footer