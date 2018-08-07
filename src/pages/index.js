import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Post from "../components/Post";
import HeaderLink from "../templates/HeaderLink";
import Header from "../components/Header";
import SubscriptionBox from "../templates/SubscriptionBox";

export default ({data}) => (
    <div>
        <Helmet title="Polymath Goodies" />
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



