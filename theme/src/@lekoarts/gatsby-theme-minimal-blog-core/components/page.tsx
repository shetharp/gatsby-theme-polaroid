/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Page from "../../../components/page";

type Props = {
  data: {
    page: any;
    [key: string]: any;
  };
};

export default function MinimalBlogCorePage({ data }: Props) {
  const { page } = data;

  return <Page data={{ ...data, page }} />;
}
