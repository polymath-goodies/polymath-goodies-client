import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Post from "../components/Post";
import HeaderLink from "../templates/HeaderLink";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubscriptionBox from "../templates/SubscriptionBox";

import {ROOT_URL} from "../utils/constants";

export default ({data}) => (
    <div>
        <Helmet
            title="Polymath Goodies"
            meta={[
                {
                    name: 'description',
                    content: 'Newsletter for folks curious about subjects such as Science, Art, Literature, History and other cool stuff.',
                },
                {
                    name: 'keywords',
                    content: 'polymath, polymath goodies, Abid Uzair, goodies, abiduzz420, science art, art history', 
                },
                {
                    name: 'og:title',
                    content: 'Polymath Goodies',
                }, {
                    name: 'og:description',
                    content: 'I send goodies to learn about art, science, history, literature.',
                }, {
                    name: 'og:url',
                    content: 'https://polymathgoodies.xyz',
                }, {
                    name: 'og:image',
                    content: 'https://i.imgur.com/GW0TyxN.jpg',
                },
            ]} 
        />
        <Header/>
        <Post>
            <SubscriptionBox />
                
                {
                    data.allMarkdownRemark.edges.map(({node}) => (
                        <div key={node.frontmatter.post}>
                            <a style={{ fontSize:"18px", color: "#527d9a"}} href={node.fields.slug}>
                                    {node.frontmatter.title}
                            </a>
                            <small color="#777"> — {node.frontmatter.date}</small>
                            <p>{node.excerpt}</p>
                        </div>
                    ))
                }
        </Post>
        <Footer title={data.site.siteMetadata.title} url={ROOT_URL} />
    </div>
);

export const query = graphql`
query IndexQuery {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(sort : {fields: [frontmatter___date], order: DESC}) {
        edges {
            node {
                fields {
                    slug
                },
                frontmatter {
                    title,
                    date(formatString: "DD MMMM, YYYY"),
                    tags,
                    post
                }
                html
                excerpt
                headings {
                    value
                    depth
                }
            }
        }
        totalCount
    }
}
`



