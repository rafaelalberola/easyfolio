import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const HeaderContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-top: 2em;
        padding-bottom: 2em;
    }
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
    height: 35px;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        height: 30px;
    }
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2.5em;
    justify-content: flex-end;
    width: 100%;
    max-width: 200px;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 2.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 1.5em;
        padding-top: 4px;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: 0em;
        padding-top: 0.25em;
        display: block;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: transparent;
            bottom: -6px;
            right: 50%;
            margin-right: -1px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: ${colors.blue500};
                transition: 100ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: ${colors.blue500};
                transition: 100ms ease-in-out background;
            }
        }
    }
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <Link to="/">
                <Logo/>
            </Link>
            <HeaderLinks>
                <Link
                    activeClassName="Link--is-active"
                    to="/about">
                    About
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/trabajos">
                    Trabajos
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/blog">
                    Blog
                </Link>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;