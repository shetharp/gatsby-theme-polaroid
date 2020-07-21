/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Post } from "../types/posts";
import Layout from "./layout";
import Slides from "../data/slides";

export type HomepageProps = {
  posts: Post[];
};

export const Homepage: React.FC<HomepageProps> = (props) => {
  const { posts } = props;

  return (
    <Layout hasTransparentHeader hasFullWidthContainer hasFooter={false}>
      <Slides posts={posts} />
    </Layout>
  );
};
export default Homepage;
