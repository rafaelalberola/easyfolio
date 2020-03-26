import React from "react";
import Button from "components/_ui/Button";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";

const AboutContainer = styled("div")`
    padding-top: 1em;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    margin: auto;
    background: white;
    padding: 30px;
    border-radius: 3px;
    box-shadow: 0px 3px 30px #0000001c;
    border: solid 1px #dbe4f1;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr;
        padding-top: 0em;
        margin: 3em auto;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr;
        padding-top: 0em;
        margin: 4.5em auto;
        padding: 20px;
    }
`

const AboutLinkContainer = styled("div")`
    padding-top: .5em;
    padding-bottom: 1.5em;
    display: inline-block;
    flex-direction: column;
    grid-row: 3;
    text-align: center;
    
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-row: 3;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        font-size: 10pt;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-row: 3;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        font-size: 10pt;
    }
`

const AboutLink = styled("a")`
    margin-bottom: 1.5em;
    font-weight: 600;
    line-height: 1.9;
    text-decoration: none;
    color: currentColor;
    margin: 0px 15px 0px 15px;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        margin: 0px 15px 0px 15px;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        margin: 0px 10px 0px 10px;
    }

    &:hover {
        border-bottom: solid 1px black;
    }
`

const AboutBio = styled("div")`
    padding-bottom: 0em;
    max-width: 480px;
    grid-row: 2;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-row: 2;
        padding-bottom: 0em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-row: 2;
        padding-bottom: 0em;
    }

    .block-img {
        text-align: center;
        grid-row: 1;
        margin: 0px;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        .block-img {
            margin-bottom: 2em;
        }
    }

    img {
        width: 100px;
        border: solid 4px #d9dde2;
        border-radius: 50%;
        margin-top: -150px;
    }

    img:after {
        content: "Disponible";
        font-family: arial;

    }

    p {
        line-height: 1.5;
    }

`

const AboutActions = styled("div")`
    padding-top: 0em;
    padding-bottom: 0em;
    grid-row: 4;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding: 0;
        grid-column: 1 / -1;
        grid-row: 4;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding: 0;
        grid-column: 1 / -1;
        grid-row: 4;
    }
`


const About = ({ bio, socialLinks }) => (
    <AboutContainer>
        <AboutLinkContainer>
            {socialLinks.map((social, i) => (
                <AboutLink
                    key={i}
                    href={social.about_link[0].spans[0].data.url}
                    target="_blank" rel="noopener noreferrer">
                    {social.about_link[0].text}
                </AboutLink>
            ))}
        </AboutLinkContainer>
        <AboutBio>
            {RichText.render(bio)}
        </AboutBio>
        <AboutActions>
            <a href="mailto:helloimrafa@gmail.com?subject=Dime tu nombre, así podré saber cómo te llamas.&body=Cuéntame, ¿qué deseas?" target="_blank" rel="noopener noreferrer">
                <Button className="Button--secondary">
                    Escríbeme
                </Button>
            </a>    
        </AboutActions>
    </AboutContainer>
)

export default About;

About.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};  