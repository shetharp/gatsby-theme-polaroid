/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { Link } from "gatsby";
import Layout from "./layout";
import { useMinimalBlogConfig } from "../hooks";
import BlogList from "./blog-list";
import replaceSlashes from "../utils/replaceSlashes";
import SEO from "./seo";

export type TagProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags: {
      name: string;
      slug: string;
    }[];
  }[];
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
    slug: string;
    name: string;
    [key: string]: any;
  };
};

export const Tag = ({ posts, pageContext }: TagProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.name}`} />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading variant="styles.h2">{pageContext.name}</Heading>
        {/* @ts-ignore */}
        <TLink as={Link} sx={{ variant: `links.secondary` }} to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
          View all tags
        </TLink>
      </Flex>
      <BlogList posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  );
};

export default Tag;
