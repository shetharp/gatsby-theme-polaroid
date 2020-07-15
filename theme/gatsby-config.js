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
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ],
  };
}
module.exports = GatsbyConfig;
