function GatsbyConfig(options) {
  const optionsWithDefaults = {
    formatString: "DD-MMM-YYYY",
    ...options,
  };

  return {
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options: optionsWithDefaults,
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `content/images`, // TODO make configurable with theme options
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  };
}
module.exports = GatsbyConfig;
