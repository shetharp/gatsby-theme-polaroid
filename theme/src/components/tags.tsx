/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import { jsx, Link as TLink, Heading } from "theme-ui";
import { Box, Flex } from "@theme-ui/components";
import kebabCase from "lodash.kebabcase";
import { Link } from "gatsby";
import Layout from "./layout";
import { useMinimalBlogConfig } from "../hooks";
import SEO from "./seo";
import replaceSlashes from "../utils/replaceSlashes";

export type PostsProps = {
  list: {
    fieldValue: string;
    totalCount: number;
  }[];
};

export const Tags = ({ list }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <Layout>
      <SEO title="Tags" />
      <Heading variant="styles.h2">Tags</Heading>
      <Box mt={[4, 5]}>
        {list.map((listItem) => (
          <Flex key={listItem.fieldValue} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
            <TLink
              as={Link}
              sx={{ variant: `links.listItem`, mr: 2 }}
              // @ts-ignore
              to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
            >
              {listItem.fieldValue} <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
            </TLink>
          </Flex>
        ))}
      </Box>
    </Layout>
  );
};

export default Tags;
