const path = require(`path`);

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
          path: path.join(__dirname, `content`, `images`),
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`
    ],
  };
}
module.exports = GatsbyConfig;
