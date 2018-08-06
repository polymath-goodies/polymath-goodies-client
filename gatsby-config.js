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
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
    ],
};