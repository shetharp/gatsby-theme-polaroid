/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import React from "react";
import { jsx, Box } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "./layout";
import Title from "./title";
import Listing from "./listing";
import List from "./list";
import { useMinimalBlogConfig } from "../hooks";
import replaceSlashes from "../utils/replaceSlashes";
// @ts-ignore
import Hero from "../texts/hero";
// @ts-ignore
import Bottom from "../texts/bottom";
import Slide from "./slide";

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
};

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  const data = useStaticQuery(graphql`
    query MyQuery {
      imgIntro: file(relativePath: { eq: "kite-festival-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgWork: file(relativePath: { eq: "kite-festival-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout hasTransparentHeader hasFullWidthContainer hasFooter={false}>
      <Slide
        id="intro"
        title="Smile for the camera! And say hello to Polaroid."
        description={
          <React.Fragment>
            Polaroid is a photography-focused Gatsby theme for building websites that support for a portfolio, blog, and
            code notes right out the box.
          </React.Fragment>
        }
        fluid={data.imgIntro.childImageSharp.fluid}
        isBorderless
      />
      <Slide
        id="work"
        title="Savor the moment slowly, for it may slip away too soon."
        description={
          <React.Fragment>
            I went down yesterday to the <a href="#!">Piraeus with Glaucon</a> the son of Ariston, that I might offer up
            my prayers to the goddess (Bendis, the <Link to="#">Thracian Artemis.</Link>); and also because{" "}
            <em>I wanted to see</em> in what manner they would celebrate the festival, which was a new thing.
          </React.Fragment>
        }
        fluid={data.imgWork.childImageSharp.fluid}
        overlayColor="properBlue"
        highlightColor="#1481b8"
        isColorful
        isExpanded
        imagePosition="0% 0%"
        button={{ text: "Learn more", href: "https://arpitsheth.com/" }}
      />

      {/* TODO Restyle all of the blog related content below to fit the Slides concept */}

      {false && (
        <React.Fragment>
          <section sx={{ mb: [10, null, null, null, 11], p: { fontSize: [2, null, 3, null, 4], mt: 2 } }}>
            <Hero />
          </section>
          <Title text="Latest Posts">
            <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
          </Title>
          <Listing posts={posts} showTags={false} />
          <List>
            <Bottom />
          </List>
        </React.Fragment>
      )}
    </Layout>
  );
};

export default Homepage;
