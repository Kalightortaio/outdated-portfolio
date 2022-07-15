import React from "react";
import "./SocialMedia.css";
import styled from "styled-components";

const IconWrapper = styled.span`
    i {
    background-color: ${(props) => props.backgroundColor};
    }
    &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
    }
`;

export default function socialMedia(props) {
    const socialMediaLinks = [
        {
            name: "Github",
            link: "https://github.com/Kalightortaio",
            fontAwesomeIcon: "fa-github",
            backgroundColor: "#181717", 
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/krishna-kokatay/",
            fontAwesomeIcon: "fa-linkedin-in", 
            backgroundColor: "#0077B5", 
        },
        {
            name: "Gmail",
            link: "mailto:kokataykrishna@gmail.com",
            fontAwesomeIcon: "fa-google",
            backgroundColor: "#D14836",
        },
        {
            name: "Discord",
            link: "https://discordapp.com/users/140347612376203264",
            fontAwesomeIcon: "fa-discord", 
            backgroundColor: "#7289d9",
        },
        {
            name: "YouTube",
            link: "https://www.youtube.com/channel/UCB-FuWOg37XdehNNSB19U0g",
            fontAwesomeIcon: "fa-youtube",
            backgroundColor: "#FF0000",
        },
    ];
    return (
    <div className="smd">
        {socialMediaLinks.map((media) => {
        return (
            <a
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
            >
            <IconWrapper {...media} {...props}>
                <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
            </a>
        );
        })}
    </div>
    );
}