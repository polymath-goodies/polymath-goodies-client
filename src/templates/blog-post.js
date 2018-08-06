import React from "react";
import Helmet from "react-helmet";

import Post from "../components/Post";
import Header from "../components/Header";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
        <Helmet title={post.frontmatter.title} />
        <Header />
        <Post>
        <h3>{post.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Post>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;