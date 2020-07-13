function GatsbyConfig(options) {
  return {
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ],
  };
}
module.exports = GatsbyConfig;
