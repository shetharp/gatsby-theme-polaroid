/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Homepage from "../../../components/homepage";

type Props = {
  data: {
    allPost: any;
    [key: string]: string;
  };
};

export default function MinimalBlogCoreHomepage({ data }: Props) {
  const { allPost } = data;

  return <Homepage posts={allPost.nodes} />;
}
