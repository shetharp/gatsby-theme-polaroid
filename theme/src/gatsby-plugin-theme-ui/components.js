/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint react/prop-types: 0 */
import React from "react";
import { preToCodeBlock } from "mdx-utils";
import Code from "../components/code";

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
  wrapper: ({ children }) => <>{children}</>,
};

export default components;
