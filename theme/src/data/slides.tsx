/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Post } from "../types/posts";
import { useStaticQuery, graphql, Link } from "gatsby";
import Slide from "../components/slide";
import { SlideBlog } from "../components/slide-blog";
import { SlideTitle } from "../components/slide-title";
import { SlideDescription } from "../components/slide-description";

export type SlidesProps = {
  posts: Post[];
};

/**
 * Shadow this file to add your own Slides to the homepage.
 * You can also split individual slides into their own file and import them here.
 * @param props
 */
const Slides: React.FC<SlidesProps> = (props) => {
  const { posts } = props;
  const data = useStaticQuery(graphql`
    query {
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
    <React.Fragment>
      {/**
       * INTRO
       */}
      <Slide
        id="intro"
        title="Smile for the camera! And say hello to Polaroid."
        description={
          <React.Fragment>
            Polaroid is a photography-focused Gatsby theme for building portfolio websites. It supports an MDX blog with
            tags/categories, syntax-highlighting on code blocks, Theme UI for dark mode, and Typescript.
          </React.Fragment>
        }
        fluid={data.imgIntro.childImageSharp.fluid}
        isBorderless
        hasScrollIndicator
      />

      {/**
       * WORK
       */}
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

      {/**
       * PROJECT
       */}
      <Slide
        id="project"
        title="What if you replaced the noise of becoming with the silence of being?"
        description={
          <React.Fragment>
            Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite
            some of the best <em>blessings of existence</em>; and had lived nearly{" "}
            <a href="https://www.gutenberg.org/files/158/158-h/158-h.htm#link2HCH0001">twenty-one years</a> in the world
            with very little to distress or vex her.
          </React.Fragment>
        }
        fluid={data.imgWork.childImageSharp.fluid}
        overlayColor="equitableBlue"
        highlightColor="directRed"
        isColorful
        isExpanded
        hasDistinctBorder
      />

      {/**
       * BLOG
       */}
      <SlideBlog id="blog" posts={posts}>
        <SlideTitle>More</SlideTitle>
        <SlideDescription>
          <p>
            Yet so vain is man, and so <em>blinded by his vanity</em>, that no writer, up to the very end of the
            nineteenth century, expressed any idea that <a href="#">intelligent life</a> might have developed there far,
            or indeed at all, beyond its earthly level. Nor was it generally understood that since Mars is older than
            our earth, with scarcely a quarter of the superficial area and remoter from the sun, it necessarily follows
            that it is not only more distant from time’s beginning but nearer its end.
          </p>
          <p>
            From <a href="https://www.gutenberg.org/files/36/36-h/36-h.htm">the War of Worlds</a> by H.G. Wells
          </p>
        </SlideDescription>
      </SlideBlog>
    </React.Fragment>
  );
};

export default Slides;
