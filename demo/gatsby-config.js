module.exports = {
  pathPrefix: "/gatsby-theme-polaroid",

  // TODO - Update site metadata to reflect your site's info
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Polaroid`,
    // Default title of the page
    siteTitleAlt: `Polaroid @shetharp/gatsby-theme-polaroid`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Polaroid Gatsby Theme by Arpit Sheth`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://shetharp.github.io/gatsby-theme-polaroid/`,
    // Used for SEO
    siteDescription: `Polaroid is a photography-focused Gatsby theme for building portfolio websites. It supports an MDX blog with tags/categories, syntax-highlighted code blocks, Theme UI for dark mode, and Typescript. Designed & developed by Arpit Sheth.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Twitter Handle
    author: `@shetharp`,
  },
  plugins: [
    {
      resolve: `@shetharp/gatsby-theme-polaroid`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID, // TODO - Configure Google Analytics for your site
      },
    },
    `gatsby-plugin-sitemap`,
    {
      // TODO - Update manifest options for your site
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Polaroid @shetharp/gatsby-theme-polaroid`,
        short_name: `polaroid-theme`,
        description: `Polaroid Gatsby Theme by Arpit Sheth`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      // TODO - Update webfonts for your site.
      // Alternatively, you can install Google Fonts as npm packages with the Typefaces Project
      // Learn more: https://github.com/KyleAMathews/typefaces
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["DM+Mono:ital,wght@0,300;0,500;1,300;1,500"],
        },
      },
    },
  ],
};
