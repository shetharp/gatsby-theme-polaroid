import React from "react";
import { Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import { useMinimalBlogConfig } from "../hooks";
import replaceSlashes from "../utils/replaceSlashes";

export type ItemTagsProps = {
  tags: {
    name: string;
    slug: string;
  }[];
};

export const ItemTags: React.FC<ItemTagsProps> = ({ tags }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && `, `}
          {/* @ts-ignore */}
          <TLink as={Link} to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}>
            {tag.name}
          </TLink>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
export default ItemTags;
