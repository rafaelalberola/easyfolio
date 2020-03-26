import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import About from "components/About";
import Layout from "components/Layout";
import BookshelfContainer from "components/Bookshelf/BookshelfContainer";
import ArrowDown from "components/_ui/ArrowDown";

const Section = styled("div")`
    margin-bottom: 5em;
    display: flex;
    flex-direction: column;

    .arrowdown {
        margin: auto;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 4em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }

    &:last-of-type h3 {
        text-align: center;
        margin-bottom: .5em;
    }
`


const RenderBody = ({ home, meta }) => (
    <>
        <Helmet
            title={`About » Hello, I'm Rafa. || Diseñador y Desarrollador Front-end`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: meta.title,
                },
                {
                    property: `og:description`,
                    content: meta.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: meta.description,
                },
            ].concat(meta)}
        />

        <Section>
            <About
                title={home.about_title}
                bio={home.about_bio}
                socialLinks={home.about_links}
            />
        </Section>

        <Section>
            <ArrowDown />
        </Section>
        
        <BookshelfContainer />
    </>
);

export default ({ data }) => {
    //Required check for no data being returned
    const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
    const projects = data.prismic.allProjects.edges;
    const meta = data.site.siteMetadata;

    if (!doc || !projects) return null;

    return (
        <Layout>
            <RenderBody home={doc.node} projects={projects} meta={meta}/>
        </Layout>
    )
}

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
};

export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        hero_title
                        hero_button_text
                        hero_button_link {
                            ... on PRISMIC__ExternalLink {
                                _linkType
                                url
                            }
                        }
                        content
                        about_title
                        about_bio
                        about_links {
                            about_link
                        }
                    }
                }
            }
            allProjects {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        _meta {
                            uid
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`