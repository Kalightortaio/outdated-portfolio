import React from "react";
import "./Splash.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import SplashSVG from "./SplashSVG";

export default function splash(props) {
    const theme = props.theme;
    return (
    <Fade bottom duration={2000} distance="40px">
        <div className="splash-main" id="splash">
        <div className="splash-main">
            <div className="splash-text-div">
            <div>
                <h1 className="splash-text" style={{ color: theme.text }}>
                Krishna Kokatay
                </h1>
                <h2 className="splash-nickname" style={{ color: theme.text }}>
                ( Kalightortaio )
                </h2>
                <p
                className="splash-text-p subTitle"
                style={{ color: theme.secondaryText }}
                >
                A passionate individual who is constantly seeking to learn and amass more experience, while committing to dedicate their time into productivity and creativity.
                </p>
                <SocialMedia theme={theme} />
                <div className="portfolio-repo-btn-div">
                <Button
                    text="Follow me on GitHub"
                    newTab={true}
                    href="https://github.com/Kalightortaio"
                    theme={theme}
                    className="portfolio-repo-btn"
                />
                </div>
            </div>
            </div>
            <div className="splash-image-div">
            <SplashSVG theme={theme} />
            </div>
        </div>
        </div>
    </Fade>
    );
}