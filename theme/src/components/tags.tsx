/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import { jsx, Box, Flex, Link as TLink, Heading, Divider, Text } from "theme-ui";
import kebabCase from "lodash.kebabcase";
import { Link } from "gatsby";
import Layout from "./layout";
import { useMinimalBlogConfig } from "../hooks";
import SEO from "./seo";
import replaceSlashes from "../utils/replaceSlashes";
import { SystemStyleObject } from "@styled-system/css";

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
      <Heading>Tags</Heading>

      <Divider variant="dividers.pageHeading" />

      <Box>
        <ul>
          {list.map((listItem) => (
            <li key={listItem.fieldValue}>
              <Flex>
                <TLink
                  as={Link}
                  // @ts-ignore
                  to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
                  sx={sxTagTitleLink}
                >
                  <Text sx={sxTagTitle}>{listItem.fieldValue}</Text>
                </TLink>
                <Text variant="mono" color="accent">
                  ({listItem.totalCount})
                </Text>
              </Flex>
            </li>
          ))}
        </ul>
      </Box>
    </Layout>
  );
};

export default Tags;

/**
 * Styles
 */
const sxTagListItem: SystemStyleObject = {
  display: "flex",
};

const sxTagTitleLink: SystemStyleObject = {
  color: "inherit",
  textDecoration: "none",
  [":hover"]: {
    textDecoration: "underline",
  },
};

const sxTagTitle: SystemStyleObject = {
  color: "inherit",
  lineHeight: "heading",
  fontWeight: "heading",
  fontSize: [1, null, null, 2, null, null, 3, null, 4], // Size up from SlideDescription fontSize
  marginRight: 1,
  marginBottom: 3,
};
