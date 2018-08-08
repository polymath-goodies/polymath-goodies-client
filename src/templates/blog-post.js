import React from "react";
import Helmet from "react-helmet";

import Post from "../components/Post";
import SubscriptionBox from "../templates/SubscriptionBox";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {ROOT_URL} from "../utils/constants";
import {generateUrl} from "../utils/helpers";

export default ({ data }) => {
  const post = data.markdownRemark;
  const slug = generateUrl(post.frontmatter.title);
  return (
    <div>
        <Helmet title={post.frontmatter.title} />
        <Header />
        <Post>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <SubscriptionBox />
        </Post>
        <Footer title={post.frontmatter.title} url={`${ROOT_URL}${slug}`} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;