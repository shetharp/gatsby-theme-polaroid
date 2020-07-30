# gatsby-theme-polaroid-workspace

![Polaroid Banner](./demo/static/banner.png)

Polaroid is a _photography-focused_ Gatsby theme for building portfolio websites. It supports an MDX blog with tags/categories, syntax-highlighting on code blocks, Theme UI for dark mode, and Typescript.

Designed & developed by [Arpit Sheth](https://arpitsheth.com/).

### [📸 View Demo Site →](https://shetharp.github.io/gatsby-theme-polaroid/)

# Install the Polaroid Theme

1. Add the theme as a dependency to your Gatsby site.

```shell
npm i --save @shetharp/gatsby-theme-polaroid
# or
yarn add @shetharp/gatsby-theme-polaroid
```

2. Add the theme to your `gatsby-config.js` file

```js:title=gatsby-config.js
module.exports = {
  plugins: ["@shetharp/gatsby-theme-polaroid"],
};
```

3. Modify the [theme options](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog) and site metadata in your `gatsby-config.js` file.

4. Create `.mdx` files for your site's pages or posts. By default this should be in your site's `content/posts` and `content/pages` directories. You should create these directories if they don't already exist.

5. Shadow, override, and customize the theme to fit your needs. See the list of features below for more info.

# Start with the Polaroid Workspace

1. start developing your own theme using this repo as a starting point:

```shell
gatsby new gatsby-theme-custom https://github.com/shetharp/gatsby-theme-polaroid
cd gatsby-theme-custom
yarn
yarn workspace demo develop
```

_Replace `gatsby-theme-custom` with whatever you wish to name your theme._

2. The `theme` workspace directory contains the components, styles, and theme configurations.

   - You should update the `package.json` to match the details for your theme (such as name, author, repository, etc.)
   - This workspace can be used to publish your theme as its own npm package

3. The `demo` workspace directory contains the content, components, and styles for an example site that consumes the theme.

   - You should update the `package.json` to include your theme as a dependency. Make sure the name of the dependency matches the name in your theme's `package.json` file!
   - You should then update the `gatsby-config.js` to include your theme as a plugin
   - This workspace can be used to deploy a demo site for your theme

---

# Features

Under the hood, Polaroid is built on top of the functionality provided by [@lekoarts/gatsby-theme-minimal-blog-core](https://www.gatsbyjs.org/packages/@lekoarts/gatsby-theme-minimal-blog-core/). Polaroid provides additional features, especially those that enhance the user experience for a photography-focused portfolio website and blog.

Polaroid lets you quickly build a production-ready website that supports the following out of the box:

- **Photo-rich portfolio**

  - A gorgeous homepage that puts your photos or work on fullscreen display
  - Responsive optimized images
  - Automatically darkens images in dark mode
  - Customizable props for colorful gradient overlays
  - Customizable props for titles, descriptions, links, and call to action buttons
  - Beautiful typography with plenty of responsive styling for all screen sizes

- **MDX Blog Posts and Site Pages**

  - MDX support for pages and posts
  - A blog with tags/categories for posts
  - Syntax-highlighted code blocks if you want to set up a developer blog
    - Allows adding line numbers, line highlighting, language tabs, and file titles
    - Provided by [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) and [react-live](https://github.com/FormidableLabs/react-live)
  - Typography driven with minimal styles
  - Great reading experience with light and dark mode options

- **Built with Theme UI**

  - A custom theme with beautiful colors
  - Typography driven with minimal styles
  - Plenty of responsive styling for a great looking website on all screen sizes
  - Support for light mode / dark mode

- **Easy to Customize with Typescript**
  - Customizable `data` for the header, toggle header menu, and footer
  - Easy to import, shadow, and customize components with plenty of Typescript types defined for you

# Add Content

## Set up

By default, the theme will look for pages, posts, and images in the `/content` directory of your site. When you installed the theme, you should have created the following directories (or configured a different content path in your `gatsby-config.js` theme options).

- `/content/images` — Images that can be queried throughout your site or referenced in MDX files.
- `/content/pages` — Additional MDX pages for your site (e.g. "About", "Contact", etc). You should manually link to these pages within your site, such as in the Header Menu.
- `/content/posts` — MDX posts for your site's blog. The three most recent posts will appear on the homepage. All blog posts will be listed in your site's Blog page.

To customize or override the default slides on the homepage, you'll need to shadow the slides data by creating this file in your site:
`/src/@shetharp/gatsby-theme-polaroid/data/slides.tsx`

- You can copy/referece the contents from the Polaroid Demo site's [`slides.tsx`](https://github.com/shetharp/gatsby-theme-polaroid/blob/master/demo/src/%40shetharp/gatsby-theme-polaroid/data/slides.tsx) file to get started
- Typically, you will want to make use of the **Slide** component. You can pass it props for title, description, button, overlay color, etc.
- You should include the **SlideBlog** component if you'd like to include a list of recent blog posts in your homepage

## Add a new slide to the homepage

1. Add a **Slide** component to your theme's `/src/@shetharp/gatsby-theme-polaroid/data/slides.tsx` file.
   - You can also split individual slides into their own file and import them here.
2. Give this slide a unique `id` prop. Edit any other props as needed.
3. Add a new background image inside `/content/images`
   - If you have lots of images in your site, you could consider creating a directory specifically for slide images such as `/content/images/slides`
4. Query for the image using the `slideImageFragment` by specifying the path from inside `/content/images`
5. Pass the responsive image data using the `fluid` prop

```tsx
const Slides: React.FC<SlidesProps> = (props) => {
  const slideImages = useStaticQuery(graphql`
    query {
      imgIntro: file(relativePath: { eq: "polaroid-bg-textured.jpg" }) {
        ...slideImageFragment
      }
    }
  `);

  return (
    <Slide
      id="intro"
      title="Smile for the camera! And say hello to Polaroid."
      description={
        <React.Fragment>
          Polaroid is a <em>photography-focused</em> Gatsby theme.
        </React.Fragment>
      }
      fluid={slideImages.imgIntro.childImageSharp.fluid}
    />
  );
};
export default Slides;
```

## Add a new blog post

1. Create a new folder inside `/content/posts`
2. Create a new `index.mdx` file
3. Add images to the post's folder that you want to reference in your blog post
4. Add the frontmatter to your post's file.
   - Provide a `title` and `date`. The date must be in the format `YYYY-MM-DD`.
   - (Optional) Provide a very short `description` for your post. If no description is provided, an excerpt of the blog post will be used.
   - (Optional) List any `tags` that apply to your post
   - (Optional) Reference an image as your post's `banner` in the frontmatter. This banner image is used as your blog post's social image. If no banner is provided, the default siteImage (from siteMetadata) is used.
   - (Optional) Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"`
5. Write your content below the frontmatter

```mdx
---
title: Introduction to "Defence against the Dark Arts"
date: 2019-11-07
description: Defence Against the Dark Arts (abbreviated as DADA) is a subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry.
tags:
  - Tutorial
  - Dark Arts
banner: ./defence-against-the-dark-arts.jpg
---

Blog post content goes here...
```

## Add a new page

1. Create a new folder inside `/content/pages`
2. Create a new `index.mdx` file
3. Add the frontmatter to your page's file.
   - Provide a `title` and `slug`
4. Optionally add files/images to the folder you want to reference from the page
5. Write your content below the frontmatter

```mdx
---
title: About
slug: "/about"
---

Page content goes here...
```

# Customizing and Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme!
In general, you will want to place your files in `/src/@shetharp/gatsby-theme-polaroid/` to shadow or override files.

#### 🚨 Advanced Customizations

You'll find instructions below on how to perform common customizations.

If you need to do more advanced customizations, you may need to shadow the component itself. Creating a directory `/src/@shetharp/gatsby-theme-polaroid/components` if it doesn't exist and shadowing the respective component.

If you are making significant customizations, you may want to consider forking off of this theme. You can do this by following the instructions under the [Start with the Polaroid Workspace](#start-with-the-polaroid-workspace) section.

## Theme Options

Polaroid supports most of the theme options provided by [@lekoarts/gatsby-theme-minimal-blog-core](https://www.gatsbyjs.org/packages/@lekoarts/gatsby-theme-minimal-blog-core/), however there are some differences.

| Key            | Default Value   | Description                                                                                               |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`     | `/`             | Root url for the theme                                                                                    |
| `blogPath`     | `/blog`         | url for the blog post overview page                                                                       |
| `tagsPath`     | `/tags`         | url for the tags overview page and prefix for tags (e.g. `/tags/my-tag`)                                  |
| `postsPath`    | `content/posts` | Location of posts                                                                                         |
| `pagesPath`    | `content/pages` | Location of additional pages. (Using pages is entirely optional)                                          |
| `mdx`          | `true`          | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |
| `formatString` | `DD-MMM-YYYY`   | Configure the date format for Date fields                                                                 |

#### 🚨 Note: `externalLinks` and `navigation` theme options are unsupported

Polaroid ignores these theme options. See the customization options below for modifying the header links.

## Customize the Logo

Because Polaroid supports both light mode and dark mode, we recommend providing two versions of your logo that are suitable for light and dark mode.

1. Create a directory to shadow the theme assets: `/src/@shetharp/gatsby-theme-polaroid/assets/`
2. Add your customized files for the following files:
   - `logo-dark.svg` — Dark version of logo, suitable for light backgrounds. Used in the header by default.
   - `logo-light.svg` — Light version of logo, suitable for Dark backgrounds. Used in the header by default.
   - `logo-icon-dark.svg` — Dark version of logo icon, suitable for light backgrounds. Used in the footer by default.
   - `logo-icon-light.svg` — Light version of logo icon, suitable for dark backgrounds. Used in the footer by default.

## Customize the Header Links

The header has links in two main components:

1. **HeaderNav** — The top header bar that should contain just the most important links
2. **HeaderMenu** — The toggle header menu that can contain as many links as you like!

#### Customize the Header Nav Items

1. Create a directory to shadow the theme data if it doesn't exist yet `/src/@shetharp/gatsby-theme-polaroid/data/`
2. Create a file for `header-nav-items.ts`
3. Provide a list of `headerNavItems`
   - You can configure links to be internal (with a `slug` property) or external (with a `href` property)
   - You can also specify if a link should be visible on mobile, tablet, or laptop
   - I recommend keeping this list short (no more than 5 links)

#### Customize the toggle Header Menu Items

1. Create a directory to shadow the theme data if it doesn't exist yet `/src/@shetharp/gatsby-theme-polaroid/data/`
2. Create a file for `header-menu-items.ts`
3. Provide a list of `headerMenuItems`
   - You can configure links to be internal (with a `slug` property) or external (with a `href` property)
   - You can also specify if a link should be visible on mobile, tablet, or laptop. If a link is already visible in the **HeaderNavItems**, I like to hide it in the **HeaderMenuItems**.

## Customize the Footer

#### Customize the Footer Logo Link

1. Create a directory to shadow the theme data if it doesn't exist yet `/src/@shetharp/gatsby-theme-polaroid/data/`
2. Create a file for `footer-logo-link.ts`
3. Export a default `string` constant that is the `slug` for the page you want the footer logo to link to

#### Customize the Footer Body

1. Create a directory to shadow the theme data if it doesn't exist yet `/src/@shetharp/gatsby-theme-polaroid/data/`
2. Create a file for `footer-body.tsx`
3. Export a default component that contains the content you want in your footer

## Customize Theme UI

---

<!--
 -->

<!--
 -->

# Code Highlighting

If you want to change certain code styles or add additional language tabs, you need to shadow the file `src/@shetharp/gatsby-theme-polaroid/styles/code.ts`.

#### Language tabs:

When you add a language (such as e.g. js or javascript) to the code block, a little tab will appear at the top left corner.

````
```js
// code goes here
```
````

#### Code titles:

You can display a title (e.g. the file path) above the code block.

````
```jsx:title=your-title
// code goes here
```
````

Or without a specific language:

````
```:title=your-title
// code goes here
```
````

#### Line highlighting:

You can highlight single or multiple (or both) lines in a code block. You need to add a language.

````
```js {2,4-5}
const test = 3;
const foo = "bar";
const harry = "potter";
const hermione = "granger";
const ron = "weasley";
```
````

#### Hide line numbers:

If you want to hide line numbers you can either globally disable them (see Theme options) or on a block-by-block basis. You can also combine that with the other attributes.

````
```noLineNumbers
// code goes here
```
````
