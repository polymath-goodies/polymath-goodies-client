const path = require(`path`);


exports.onCreateNode = ({node, boundActionCreators}) => {
    if(node.internal.type === `MarkdownRemark`) {
        const { createNodeField } = boundActionCreators
        const slug = "/".concat(node.frontmatter.title.toLowerCase().replace(":","").replace(",","").split(" ").join("-"));
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: {
                        slug: node.fields.slug
                    }
                })
            })
            resolve()
        })
    })
};