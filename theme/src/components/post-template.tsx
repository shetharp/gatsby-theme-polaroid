/** @jsx jsx */
import { jsx, Heading, Divider, Text } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "./layout";
import ItemTags from "./item-tags";
import SEO from "./seo";

export type PostTemplateProps = {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      description?: string;
      body: string;
      excerpt: string;
      timeToRead?: number;
      banner?: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
    };
  };
};

export const PostTemplate: React.FC<PostTemplateProps> = ({ data: { post } }) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
    />
    <Heading>{post.title}</Heading>
    <p sx={{ color: "accent" }}>
      <Text variant="mono">
        <time>{post.date}</time>
      </Text>
      {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
      {post.timeToRead && (
        <React.Fragment>
          <br />
          <span>{post.timeToRead} min read</span>
        </React.Fragment>
      )}
    </p>

    <Divider variant="dividers.pageHeading" />

    <section>
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </Layout>
);

export default PostTemplate;
