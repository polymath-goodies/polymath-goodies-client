module.exports = {
    siteMetadata: {
        title: `Polymath Goodies`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/markdowns/`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-responsive-iframe`, `gatsby-remark-autolink-headers`, `gatsby-remark-emoji`],
            },
        },
        `gatsby-plugin-react-helmet`,
    ],
};