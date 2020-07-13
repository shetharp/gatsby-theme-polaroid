module.exports = {
  pathPrefix: "/gatsby-theme-galleon",

  // TODO - Update site metadata to reflect your site's info
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Galleon`,
    // Default title of the page
    siteTitleAlt: `Galleon @shetharp/gatsby-theme-galleon`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Galleon Gatsby Theme by Arpit Sheth`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://arpitsheth.com`,
    // Used for SEO
    siteDescription: `Build a gorgeous developer blog with support for Typescript, MDX, syntax-highlighted code blocks, and tags. Galleon is a Gatsby theme built on top of @lekoarts/gatsby-theme-minimal-blog.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Twitter Handle
    author: `@shetharp`,
  },
  plugins: [
    {
      resolve: `@shetharp/gatsby-theme-galleon`,
      options: {
        // TODO - Add more options if needed
        // https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog#theme-options

        // TODO - Update navigation items for your site
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Readme`,
            slug: `/readme`,
          },
          {
            title: `Theme Preview`,
            slug: `/theme-preview`,
          },
          {
            title: `404`,
            slug: `/404`,
          },
        ],

        // TODO - Update external links for your site
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/shetharp`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/shetharp/`,
          },
        ],
        feed: true,
        feedTitle: "Galleon", // TODO - Update RSS feed title for your site
      },
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
        name: `Galleon @shetharp/gatsby-theme-galleon`,
        short_name: `galleon-theme`,
        description: `Galleon Gatsby Theme by Arpit Sheth`,
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
