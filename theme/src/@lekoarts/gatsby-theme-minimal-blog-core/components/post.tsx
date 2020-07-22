/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PostTemplate from "../../../components/post-template";

type Props = {
  data: {
    post: any;
    [key: string]: any;
  };
};

export default function MinimalBlogCorePost({ data }: Props) {
  const { post } = data;

  return <PostTemplate data={{ ...data, post }} />;
}
